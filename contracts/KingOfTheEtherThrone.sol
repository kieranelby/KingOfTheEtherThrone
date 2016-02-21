// A chain-game contract that maintains a 'throne' which agents may pay to rule.
// See www.kingoftheether.com & https://github.com/kieranelby/KingOfTheEtherThrone .
// (c) Kieran Elby 2016. All rights reserved.
// v0.5.0.
// Inspired by ethereumpyramid.com and the (now-gone?) "magnificent bitcoin gem".

// This contract lives on the blockchain at TODO
// and was compiled (without optimization) with:
// TODO

// For future versions it would be nice to ...
// TODO - enforce time-limit on reign (can contracts do that without external action)?
// TODO - add a random reset?
// TODO - add bitcoin bridge so agents can pay in bitcoin?
// TODO - use e.g. byte32 instead of string to avoid long strings causing trouble.

contract KingOfTheEtherThrone {

    enum PaymentStatus { NoneDue, Good, Failed }

    struct Monarch {
        // Address to which their compensation payment will be sent.
        address compensationAddress;
        // Keep a record of the tx.origin from which they claimed the
        // throne - makes finding transactions easier.
        address originAddress;
        // A name by which they wish to be known.
        // NB: Unfortunately "string" seems to expose some bugs in web3.
        string name;
        // How much did they pay to become monarch?
        uint claimPrice;
        // When did their rule start (based on block.timestamp)?
        uint coronationTimestamp;
        // Did they receive their compensation payment?
        PaymentStatus compensationStatus;
        // How much compensation were they paid?
        // (Or should have been paid in the case of a failed payment).
        uint compensationPaid;
    }

    // The wizard is the hidden power behind the throne; they
    // occupy the throne during gaps in succession and collect fees.
    address wizardAddress;

    // Used to ensure only the wizard can do some things.
    modifier onlywizard { if (msg.sender == wizardAddress) _ }

    // How much must the first monarch pay?
    uint constant startingClaimPrice = 100 finney;

    // The next claimPrice is calculated from the previous claimFee
    // by multiplying by claimFeeAdjustNum and dividing by claimFeeAdjustDen -
    // for example, num=3 and den=2 would cause a 50% increase.
    uint constant claimPriceAdjustNum = 3;
    uint constant claimPriceAdjustDen = 2;

    // How much of each claimFee goes to the wizard (expressed as a fraction)?
    // e.g. num=1 and den=100 would deduct 1% for the wizard, leaving 99% as
    // the compensation fee for the usurped monarch.
    uint constant wizardCommissionFractionNum = 1;
    uint constant wizardCommissionFractionDen = 100;

    // How much must an agent pay now to become the monarch?
    uint public currentClaimPrice;

    // The King (or Queen) of the Ether.
    Monarch public currentMonarch;

    // Earliest-first list of previous throne holders.
    Monarch[] public pastMonarchs;

    // Keep track of the value of any failed payments - this will
    // allow us to ring-fence them in case the wizard turns evil.
    uint totalFailedPaymentsValue;

    // Create a new throne, with the creator as wizard and first ruler.
    // Sets up some hopefully sensible defaults.
    function KingOfTheEtherThrone() {
        wizardAddress = msg.sender;
        currentClaimPrice = startingClaimPrice;
        currentMonarch = Monarch(
            wizardAddress,
            wizardAddress,
            "[Vacant]",
            0,
            block.timestamp,
            PaymentStatus.NoneDue,
            0
        );
    }

    function numberOfMonarchs() constant returns (uint n) {
        return pastMonarchs.length;
    }

    // Fired when the throne is claimed.
    // In theory can be used to help build a front-end.
    event ThroneClaimed(
        address usurperOriginAddress,
        string usurperName,
        uint newClaimPrice
    );

    // Fallback function - simple transactions trigger this.
    // Assume the message data is their desired name.
    function() {
        claimThrone(string(msg.data));
    }

    // Claim the throne in the given name.
    // The caller will need to include payment of currentClaimFee with the transaction.
    // This function assumes that any compensation payment later due should be sent
    // to the account that called this contract.
    function claimThrone(string name) {
        claimThroneFor(name, msg.sender);
    }

    // Claim the throne in the given name, specifying an address to which any
    // compensation payment should later be sent. Don't get it wrong - can't change.
    // The caller will need to include payment of currentClaimFee with the transaction.
    function claimThroneFor(string name, address compensationAddress) {

        uint valuePaid = msg.value;

        // If they paid too little, blow up - this should refund them.
        if (valuePaid < currentClaimPrice) {
            throw;
        }

        // If they paid too much, blow up - this should refund them.
        // (Earlier contract versions tried to send the excess back, but
        //  that got too fiddly with the possibility of failure).
        if (valuePaid > currentClaimPrice) {
            throw;
        }

        // The claim price payment goes to the current monarch as compensation
        // (with a commission held back for the wizard). We let the wizard's
        // payments accumulate to avoid wasting gas sending small fees.

        uint wizardCommission = (valuePaid * wizardCommissionFractionNum) / wizardCommissionFractionDen;
        uint compensation = valuePaid - wizardCommission;

        if (currentMonarch.compensationAddress == wizardAddress) {
            // When the throne is vacant (that is, the wizard reigns), the
            // claim fee accumulates for the wizard to sweep as commission.
            currentMonarch.compensationStatus = PaymentStatus.NoneDue;
            currentMonarch.compensationPaid = 0;
        } else {
            // Sending ether to a contract address can fail if the destination
            // contract runs out of gas receiving it (or otherwise mis-behaves).
            // We include some extra gas (paid for by the current caller) to help
            // avoid failure. It might be that the current caller hasn't included
            // enough gas to even start the call - but that's OK, the next line
            // will just blow up and they will be refunded and everything undone.
            // However, if sending the payment fails, we don't throw an exception
            // since we don't want the throne to get stuck because of one badly
            // behaved contract. Instead, we record the failure and move on -
            // they can get their money back later using resendFailedPayment().
            // Experiments suggest 10000 + 2300 gas should be enough for wallets.
            uint compensationExtraGas = 10000;
            bool ok = sendWithGas(currentMonarch.compensationAddress, compensation, compensationExtraGas);
            if (ok) {
                currentMonarch.compensationStatus = PaymentStatus.Good;
            } else {
                currentMonarch.compensationStatus = PaymentStatus.Failed;
                totalFailedPaymentsValue += compensation;
            }
            currentMonarch.compensationPaid = compensation;
        }

        // Usurp the current monarch, replacing them with the new one.
        pastMonarchs.push(currentMonarch);
        currentMonarch = Monarch(
            compensationAddress,
            tx.origin,
            name,
            valuePaid,
            block.timestamp,
            PaymentStatus.NoneDue,
            0
        );

        // Increase the claim fee for next time.
        // Stop number of trailing decimals getting silly - we round it a bit.
        uint rawNewClaimPrice = currentClaimPrice * claimPriceAdjustNum / claimPriceAdjustDen;
        if (rawNewClaimPrice < 10 finney) {
            currentClaimPrice = rawNewClaimPrice;
        } else if (rawNewClaimPrice < 100 finney) {
            currentClaimPrice = 100 szabo * (rawNewClaimPrice / 100 szabo);
        } else if (rawNewClaimPrice < 1 ether) {
            currentClaimPrice = 1 finney * (rawNewClaimPrice / 1 finney);
        } else if (rawNewClaimPrice < 10 ether) {
            currentClaimPrice = 10 finney * (rawNewClaimPrice / 10 finney);
        } else if (rawNewClaimPrice < 100 ether) {
            currentClaimPrice = 100 finney * (rawNewClaimPrice / 100 finney);
        } else if (rawNewClaimPrice < 1000 ether) {
            currentClaimPrice = 1 ether * (rawNewClaimPrice / 1 ether);
        } else if (rawNewClaimPrice < 10000 ether) {
            currentClaimPrice = 10 ether * (rawNewClaimPrice / 10 ether);
        } else {
            currentClaimPrice = rawNewClaimPrice;
        }

        // Hail the new monarch!
        ThroneClaimed(currentMonarch.originAddress, currentMonarch.name, currentClaimPrice);
    }

    // Unfortunately destination.send() only includes a stipend of 2300 gas, which
    // isn't enough to send ether to some wallet contracts - use this to add more.
    function sendWithGas(address destination, uint256 value, uint256 extraGasAmt) internal returns (bool) {
      return destination.call.value(value).gas(extraGasAmt)();
    }

    // Re-send a compensation payment that previously failed, in the hope that
    // either adding more gas or sending to the origin instead will make it work.
    // Can be called by the monarch involved or the wizard - but payments can
    // never go to a different address.
    function resendFailedPayment(uint monarchNumber, bool sendToOriginalOrigin) {
        // Only failed payments can be re-sent!
        if (pastMonarchs[monarchNumber].compensationStatus != PaymentStatus.Failed) {
            throw;
        }
        // Only the wizard or the monarch involved can do this:
        bool isAuthorised = false;
        if (msg.sender == wizardAddress) {
            isAuthorised = true;
        } else if (msg.sender == pastMonarchs[monarchNumber].compensationAddress) {
            isAuthorised = true;
        } else if (tx.origin == pastMonarchs[monarchNumber].originAddress) {
            isAuthorised = true;
        }
        if (!isAuthorised) {
            throw;
        }
        address destination;
        uint compensation = pastMonarchs[monarchNumber].compensationPaid;
        uint extraGas;
        if (sendToOriginalOrigin) {
            destination = pastMonarchs[monarchNumber].originAddress;
            // origin isn't a contract so no need for extra gas
            extraGas = 0;
        } else {
            destination = pastMonarchs[monarchNumber].compensationAddress;
            // Try to give the called contract all our gas apart from this:
            uint reserveGas = 25000;
            uint gasAvail = msg.gas;
            if (gasAvail < reserveGas) {
                throw;
            }
            extraGas = gasAvail - reserveGas;
        }
        bool ok = sendWithGas(destination, compensation, extraGas);
        if (!ok) {
            throw;
        }
        pastMonarchs[monarchNumber].compensationStatus = PaymentStatus.Good;
        totalFailedPaymentsValue -= compensation;
    }

    // Used only by the wizard to collect his commission.
    function sweepCommission(uint amount) onlywizard {
        // Don't let him take failed payments though.
        if (amount + totalFailedPaymentsValue > this.balance) {
            throw;
        }
        wizardAddress.send(amount);
    }

    // Used only by the wizard to transfer the contract to his successor.
    // It is probably unwise for the newOwner to be a contract.
    function transferOwnership(address newOwner) onlywizard {
        wizardAddress = newOwner;
    }

}
