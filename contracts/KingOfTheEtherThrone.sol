// A chain-game contract that maintains a 'throne' which agents may pay to rule.
// See www.kingoftheether.com & https://github.com/kieranelby/KingOfTheEtherThrone .
// (c) Kieran Elby 2016. All rights reserved.
// v0.9.0.
// Inspired by ethereumpyramid.com and the (now-gone?) "magnificent bitcoin gem".


// We don't actually create this contract - it just has some shared functions
// for carefully sending ether to addresses.
contract CarefulSender {

    // Unfortunately destination.send() only includes a stipend of 2300 gas, which
    // isn't enough to send ether to some wallet contracts - use this to add more.
    // Caller MUST check the return value - true on success, false on failure.
    function sendWithExtraGas(address destination, uint256 value, uint256 extraGasAmt) internal returns (bool) {
      return destination.call.value(value).gas(extraGasAmt)();
    }

    // Unfortunately destination.send() only includes a stipend of 2300 gas, which
    // isn't enough to send ether to some wallet contracts - use this to add all the
    // gas we have available, minus a reserve amount we keep back for ourselves.
    // Caller MUST check the return value - true on success, false on failure.
    function sendWithAllOurGasExcept(address destination, uint256 value, uint256 reserveGasAmt) internal returns (bool) {
        uint gasAvail = msg.gas;
        if (gasAvail < reserveGasAmt) {
            return false;
        }
        uint extraGas = gasAvail - reserveGasAmt;
        return sendWithExtraGas(destination, value, extraGas);
    }

}


// We don't actually create this contract - it just has some shared functions
// for rounding monetary amounts.
contract MoneyRounder {

    // Truncates amounts in range 10 finney - 10000 ether to have 3 sig figs.
    // e.g. 12.345678 ETH -> 12.3 ETH
    // Leaves negative amounts and amounts outside the range alone.
    function roundMoneyDown3SF(uint256 rawWeiAmount) internal returns (uint256 nicerWeiAmount) {
          if (rawWeiAmount < 10 finney) {
              // leave tiny amounts alone
              return rawWeiAmount;
          } else if (rawWeiAmount < 100 finney) {
              return 100 szabo * (rawWeiAmount / 100 szabo);
          } else if (rawWeiAmount < 1 ether) {
              return 1 finney * (rawWeiAmount / 1 finney);
          } else if (rawWeiAmount < 10 ether) {
              return 10 finney * (rawWeiAmount / 10 finney);
          } else if (rawWeiAmount < 100 ether) {
              return 100 finney * (rawWeiAmount / 100 finney);
          } else if (rawWeiAmount < 1000 ether) {
              return 1 ether * (rawWeiAmount / 1 ether);
          } else if (rawWeiAmount < 10000 ether) {
              return 10 ether * (rawWeiAmount / 10 ether);
          } else {
              // leave enormous amounts alone
              return rawWeiAmount;
          }
    }

}

// We don't actually create this contract - it just has some shared functions
// for checking names are "safe" to use (need to be a bit careful when data
// supplied by end-users is visible to other end-users).
contract NameValidator {

    function isSafePunctuation(byte b) returns (bool safe) {
        // ASCII codes for - _ . ' ! ( )
        // (Yes, single-quote is a little dangerous but that's why we escape stuff)
        if (b == 45 || b == 95 || b == 46 || b == 39 || b == 33 || b == 40 || b == 41) {
            return true;
        }
        return false;
    }

    // Return false if the given name is not considered "safe" to use, true if it's ok.
    // Rules are: must be no more than 30 bytes, must be pure 7-bit ASCII, must use only
    // characters A-Z, a-z, 0-9, space, or - _ . ' ! ( )
    function validateName(bytes name) constant internal returns (bool good) {
        uint256 len = name.length;
        // Not really much of a name if it is blank.
        if (len == 0) {
            return false;
        }
        // Either web3 or the solidity ABI has problems with bytes/strings above ~32 bytes.
        // See https://github.com/ethereum/web3.js/issues/357.
        if (len > 30) {
            return false;
        }
        // ASCII space, "safe" punctuation, 0-9, A-Z, a-z
        for (uint256 i = 0; i < len; i++) {
            byte b = name[i];
            if (!(b == 32 || isSafePunctuation(b) || (b >= 48 && b <= 57) || (b >= 65 && b <= 90) || (b >= 97 && b <= 122))) {
                return false;
            }
        }
        return true;
    }
}


// We don't actually create this contract - it just has some shared functions
// for checking if names are the same.
contract NameHasher is NameValidator {

    // Hash the name down to a number, case-folding and ignoring spaces and dashes.
    // This isn't a good hash - but it doesn't matter since the input is always smaller
    // than the hash! Assumes pure 7-bit ASCII.
    // Important: assumes that the name has passed the NameValidator.validateName check!
    function computeNameHash(bytes name) constant internal returns (uint256 nameHash) {
        uint256 h = 0;
        uint256 len = name.length;
        if (len > 30) {
          throw;
        }
        for (uint256 idx = 0; idx < len; idx++) {
            byte b = name[idx];
            // ignore spaces and punctuation
            if (b == 32 || isSafePunctuation(b)) {
              continue;
            }
            // lower -> upper
            if (b >= 97 && b <= 122) {
              b = byte(uint256(b) - 32);
            }
            h += uint256(b);
            h *= 256;
        }
        return h;
    }

}


// A throne. This is the main contract.
// TODO - can we break some more bits out for easier testing (e.g. commission balances? rounding?)
contract KingOfTheEtherThrone is CarefulSender, MoneyRounder, NameValidator {

    // Represents whether we managed to send a payment or not.
    enum PaymentStatus { NotApplicable, Good, Failed, Void }

    // Represents a one-time ruler of the throne.
    struct Monarch {

        // Address to which their compensation payment will be sent.
        address compensationAddress;

        // Keep a record of the tx.origin from which they claimed the
        // throne - makes finding transactions easier. We don't use
        // this for anything important though since tx.origin may be
        // deprecated.
        address originAddress;

        // A name by which they wish to be known.
        // NB: Unfortunately "string" seems to expose some bugs in web3 (and also
        // opens us up poisoning with very long strings), so use bytes for now.
        // We limit the length of the name to 30 bytes when setting it.
        bytes name;

        // How much did they pay to become monarch?
        uint256 claimPrice;

        // When did their rule start?
        uint256 coronationTimestamp;

        // Did they receive their compensation payment?
        PaymentStatus compensationStatus;

        // When did we first try to pay their compensation (0 if n/a)?
        uint256 compensationTimestamp;

        // How much compensation were they paid (0 if n/a)?
        // (Or should have been paid in the case of a failed payment).
        uint256 compensationPaid;

    }

    // Represents how this throne is configured to operate.
    struct ThroneConfig {

        // The wizard is the hidden power behind the throne; they are considered
        // to occupy the throne during gaps in succession and collect fees thru:
        // - receiving claim payments that end a gap in succession;
        // - receiving a small commission fee from each claim fee payment;
        // - receiving failed payments if not claimed after a reasonable time period.
        // However, these fees are shared with the deity - see below.
        address wizardAddress;

        // However, even the wizard is sub-ordinate to the deity; as the
        // creator of the original contract the deity is the source of all
        // earthly power and receives a 50% share of the wizard's fees.
        // They also have the (hopefully never needed) power to withdraw any
        // unexpected balance that appears.
        address deityAddress;

        // How much must the first monarch pay as a claim price?
        // This also applies following the death of a monarch.
        uint256 startingClaimPrice;

        // The next claimPrice is calculated from the previous claimPrice
        // by multiplying by (1000 + claimPriceAdjustPerMille) then dividing by 1000.
        // For example, claimPriceAdjustPerMille=500 would cause a 50% increase.
        // And claimPriceAdjustPerMille=2000 would cause the new claim price to be
        // three times the previous claim price (i.e. a 200% increase).
        uint256 claimPriceAdjustPerMille;

        // How much of each claimPrice goes to the wizard and deity.
        // Expressed in 'parts per thousand' - e.g. commissionPerMille of 20 would
        // deduct 2% for the wizard + deity, leaving 98% for the previous monarch.
        uint256 commissionPerMille;

        // After what length of reign will the curse strike down the monarch?
        // Expressed in seconds.
        uint256 curseIncubationDuration;

        // How long do we keep failed payments ring-fenced before voiding them?
        uint256 failedPaymentRingfenceDuration;

        // Where is the contract that we use to make more thrones like this one?
        ThroneMaker throneMaker;
    }

    // How the throne is set-up (owners, percentages, durations).
    ThroneConfig public config;

    // Used to ensure only the wizard can do some things.
    modifier onlywizard { if (msg.sender == config.wizardAddress) _ }

    // Used to ensure only the deity can do some things.
    modifier onlydeity { if (msg.sender == config.deityAddress) _ }

    // Generated when the throne is claimed successfully.
    event ThroneClaimed(uint256 newMonarchIndex, uint256 valuePaid);

    // Generated when a compensation payment is successfully sent first time.
    event CompensationPaymentSent(uint256 compensatedMonarchIndex, uint256 paymentValue);
    
    // Generated if a compensation payment could not be sent.
    event CompensationPaymentFailed(uint256 notCompensatedMonarchIndex, uint256 paymentValue);

    // Generated if a failed payment is re-sent successfully.
    event FailedCompensationPaymentResent(uint256 compensatedMonarchIndex, uint256 paymentValue);

    // Generated if a failed payment is voided.
    event FailedCompensationPaymentVoided(uint256 notCompensatedMonarchIndex, uint256 paymentValue);

    // Generated when the wizard collects fees.
    event WizardCommissionSwept(address toWizardAddress, uint256 amount);

    // Generated when the wizard transfers ownership rights to another.
    event WizardSwitched(address newWizardAddress);

    // Generated when the deity collects fees.
    event DeityCommissionSwept(address toDeityAddress, uint256 amount);

    // Generated when the deity transfers ownership rights to another.
    event DeitySwitched(address newDeityAddress);

    // Earliest-first list of throne holders.
    Monarch[] public monarchs;

    // Keep track of the value of any failed payments - this will allow
    // us to ring-fence them in case the wizard or deity turn evil.
    uint256 public ringfencedFailedPaymentsBalance;

    // Keep track of the value of fees that the wizard has accumulated
    // but not withdrawn (to save gas, they're not sent until 'swept').
    uint256 public wizardBalance;

    // Create a new empty throne according to the caller's wishes.
    function KingOfTheEtherThrone(
        address wizardAddress,
        address deityAddress,
        uint256 startingClaimPrice,
        uint256 claimPriceAdjustPerMille,
        uint256 commissionPerMille,
        uint256 curseIncubationDuration,
        uint256 failedPaymentRingfenceDuration,
        ThroneMaker throneMaker
    ) {
        // We don't bother with validation since we assume the
        // majority of thrones will be created via the ThroneMaker.
        config = ThroneConfig(
            wizardAddress,
            deityAddress,
            startingClaimPrice,
            claimPriceAdjustPerMille,
            commissionPerMille,
            curseIncubationDuration,
            failedPaymentRingfenceDuration,
            throneMaker
        );
    }

    // How many monarchs have there been (including the current one, live or dead)?
    function numberOfMonarchs() constant returns (uint numberOfMonarchs) {
        return monarchs.length;
    }

    // What was the most recent price paid to successfully claim the throne?
    function lastClaimPrice() constant returns (uint256 price) {
        return monarchs[monarchs.length - 1].claimPrice;
    }

    // How much do you need to pay right now to become the King or Queen of the Ether?
    function currentClaimPrice() constant returns (uint256 price) {
        if (!isLivingMonarch()) {
            return config.startingClaimPrice;
        } else {
            // Work out the claim fee from the last one.
            uint256 rawNewClaimPrice = lastClaimPrice() * (1000 + config.claimPriceAdjustPerMille) / 1000;
            // To stop the number of trailing decimals getting silly we round it a bit.
            return roundMoneyDown3SF(rawNewClaimPrice);
        }
    }

    // Is the throne currently ruled by a living monarch?
    function isLivingMonarch() constant returns (bool alive) {
        if (numberOfMonarchs() == 0) {
            return false;
        }
        // TODO - how safe is it to put considerable trust in these block timestamps?
        uint256 reignStarted = monarchs[monarchs.length - 1].coronationTimestamp;
        uint256 reignDuration = now - reignStarted;
        if (reignDuration > config.curseIncubationDuration) {
            // The monarch has been struck down by the curse.
            return false;
        } else {
            return true;
        }
    }

    // Fallback function to claim the throne - simple transactions trigger this.
    // Assumes the message data is their desired name in ASCII (nameless if none).
    // The caller will need to include payment of currentClaimPrice with the transaction.
    // They will also need to include plenty of gas - 400,000 recommended.
    function() {
        claimThrone(msg.data);
    }

    // Claim the throne in the given name.
    // The caller will need to include payment of currentClaimPrice with the transaction.
    // This function assumes that any compensation payment later due should be sent
    // to the account that called this contract (which might itself be a contract).
    // They will also need to include plenty of gas - 400,000 recommended.
    function claimThrone(bytes name) {
        claimThroneFor(name, msg.sender);
    }

    // Claim the throne in the given name, specifying an address to which any
    // compensation payment should later be sent. Don't get it wrong - can't change it!
    // The caller will need to include payment of currentClaimPrice with the transaction.
    // They will also need to include plenty of gas - 400,000 recommended.
    function claimThroneFor(bytes name, address compensationAddress) {

        if (name.length == 0) {
            name = "Anonymous";
        }
        if (!validateName(name)) {
            throw;
        }

        uint256 valuePaid = msg.value;

        uint256 correctPrice = currentClaimPrice();

        // If they paid too little, blow up - this should refund them (tho they lose all gas).
        if (valuePaid < correctPrice) {
            throw;
        }

        // If they paid too much, blow up - this should refund them (tho they lose all gas).
        // (Earlier contract versions tried to send the excess back, but
        //  that got too fiddly with the possibility of failure).
        if (valuePaid > correctPrice) {
            throw;
        }
        
        if (!isLivingMonarch()) {

            // When the throne is vacant, the claim price payment accumulates
            // for the wizard and deity as extra commission.
            recordCommission(correctPrice);

        } else {

            // The claim price payment goes to the current monarch as compensation,
            // with a commission held back for the wizard and deity.

            uint256 commission = (correctPrice * config.commissionPerMille) / 1000;
            uint256 compensation = correctPrice - commission;
            recordCommission(commission);

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
            // Experiments suggest 20000 + 2300 gas should be enough for wallets.

            uint256 compensationExtraGas = 20000;
            bool ok = sendWithExtraGas(monarchs[monarchs.length-1].compensationAddress,
                                       compensation, compensationExtraGas);
            if (ok) {
                monarchs[monarchs.length-1].compensationStatus = PaymentStatus.Good;
                CompensationPaymentSent(monarchs.length-1, compensation);
            } else {
                monarchs[monarchs.length-1].compensationStatus = PaymentStatus.Failed;
                ringfencedFailedPaymentsBalance += compensation;
                CompensationPaymentFailed(monarchs.length-1, compensation);
            }
            monarchs[monarchs.length-1].compensationTimestamp = block.timestamp;
            monarchs[monarchs.length-1].compensationPaid = compensation;
        }

        monarchs.push(Monarch(
            compensationAddress,
            tx.origin,
            name,
            valuePaid,
            block.timestamp,
            PaymentStatus.NotApplicable,
            0,
            0
        ));

        uint256 newMonarchIndex = monarchs.length - 1;
        ThroneClaimed(newMonarchIndex, valuePaid);
    }

    // The wizard and deity split comission 50:50. To keep them honest,
    // we must track how much the wizard has received less amount swept.
    // (We could do the same for the deity, but it would be redundant).
    function recordCommission(uint256 commission) internal {
      wizardBalance += commission / 2;
    }

    // Re-send a compensation payment that previously failed, in the hope that
    // adding more gas will make it work. Anyone can call it - but payments can
    // only ever go to the original compensation address.
    function resendFailedPayment(uint monarchNumber) {
        // Only failed payments can be re-sent.
        if (monarchs[monarchNumber].compensationStatus != PaymentStatus.Failed) {
            throw;
        }
        address destination = monarchs[monarchNumber].compensationAddress;
        uint256 compensation = monarchs[monarchNumber].compensationPaid;
        // Include plenty of gas with the send (but leave some for us).
        uint reserveGas = 25000;
        bool ok = sendWithAllOurGasExcept(destination, compensation, reserveGas);
        if (!ok) {
            throw;
        }
        // No longer need to ring-fence it.
        monarchs[monarchNumber].compensationStatus = PaymentStatus.Good;
        ringfencedFailedPaymentsBalance -= compensation;
        FailedCompensationPaymentResent(monarchNumber, compensation);
    }

    // Void a failed compensation payment and award the ether to the wizard and the deity.
    // Only the wizard or the deity can call it - and even they can only call it after
    // the failedPaymentRingfenceDuration has elapsed.
    function voidFailedPayment(uint monarchNumber) {
        // Wizard or deity only please.
        if (msg.sender != config.wizardAddress && msg.sender != config.deityAddress) {
            throw;
        }
        // Only failed payments can be voided.
        if (monarchs[monarchNumber].compensationStatus != PaymentStatus.Failed) {
            throw;
        }
        // Only old payments can be voided (gives people a chance to resend).
        uint256 failedPaymentAge = now - monarchs[monarchNumber].compensationTimestamp;
        if (failedPaymentAge < config.failedPaymentRingfenceDuration) {
            throw;
        }
        // Treat as compensation and un-ringfence.
        uint256 compensation = monarchs[monarchNumber].compensationPaid;
        ringfencedFailedPaymentsBalance -= compensation;
        recordCommission(compensation);
        // Don't let it be resent/voided again!
        monarchs[monarchNumber].compensationStatus = PaymentStatus.Void;
        FailedCompensationPaymentVoided(monarchNumber, compensation);
    }

    // Used only by the wizard to collect his commission.
    function sweepWizardCommission(uint256 amount) onlywizard {
        if (amount > wizardBalance) {
            throw;
        }
        // Include plenty of gas with the send (but leave some for us).
        uint reserveGas = 25000;
        bool ok = sendWithAllOurGasExcept(config.wizardAddress, amount, reserveGas);
        if (!ok) {
            throw;
        }
        wizardBalance -= amount;
        WizardCommissionSwept(config.wizardAddress, amount);
    }

    // How much can the deity withdraw from the contract?
    function deityBalance() constant returns (uint256 balance) {
        return this.balance - (wizardBalance + ringfencedFailedPaymentsBalance);
    }

    // Used only by the deity to collect their commission.
    function sweepDeityCommission(uint256 amount) onlydeity {
        // Even the deity cannot take the wizard's funds, nor the ring-fenced failed payments.
        if (amount > deityBalance()) {
            throw;
        }
        // Include plenty of gas with the send (but leave some for us).
        uint reserveGas = 25000;
        bool ok = sendWithAllOurGasExcept(config.deityAddress, amount, reserveGas);
        if (!ok) {
            throw;
        }
        DeityCommissionSwept(config.deityAddress, amount);
    }

    // Used only by the wizard to transfer all rights to a successor.
    // It is probably unwise for the newWizard to be a contract unless
    // it is able to call sweepWizardComission, switchWizard, voidFailedPayment
    // and it has a suitably cheap fallback function.
    function switchWizard(address newWizard) onlywizard {
        config.wizardAddress = newWizard;
        WizardSwitched(newWizard);
    }

    // Used only by the deity to transfer all rights to a successor.
    // It is probably unwise for the newDeity to be a contract unless
    // it is able to call sweepDeityComission, switchDeity, voidFailedPayment
    // and it has a suitably cheap fallback function.
    function switchDeity(address newDeity) onlydeity {
        config.deityAddress = newDeity;
        DeitySwitched(newDeity);
    }

}

// Work around the "contracts can't clone themselves" problem with this helper contract -
// which also records all the official thrones so we can generate web-pages for them.
// TODO - can we break more bits out to separate contracts for testing (e.g. validation)?
contract ThroneMaker is CarefulSender, NameHasher {

    // Each official throne has one of these entries.
    struct GazetteerEntry {
        // The name of the throne is the title of the holder.
        // e.g. 'King of the Ether', 'Queen of Goats'.
        bytes throneName;
        // The address of the KingOfTheEther contract for this throne.
        address throneContractAddress;
        // How much was paid to create this throne (in wei)?
        uint256 creationPricePaid;
        // When was this throne created (block timestamp)?
        uint256 creationTimestamp;
    }

    // The deity is the source of power; he delegates some to the wizard who in turn delegates some to the king.
    address deityAddress;

    // Used to ensure only the deity can do some things.
    modifier onlydeity { if (msg.sender == deityAddress) _ }

    // How much must someone currently pay to create their own throne?
    uint256 public throneCreationPrice;

    // Directory of all officially-recognised thrones.
    GazetteerEntry[] public gazetteer;

    // Mapping from nameHash to (throneIndex+1)
    // (we add the one so that we can recognise the default storage value of zero as bogus)
    mapping (uint256 => uint256) throneNumberByNameHash;

    // Generated when a throne is created.
    event ThroneCreated(uint256 throneIndex);

    // Generated when the throne creation price is set.
    event ThroneCreationPriceSet(uint256 newThroneCreationPrice);

    // Generated when the deity collects fees.
    event DeityCommissionSwept(address toDeityAddress, uint256 amount);

    // Generated when the deity transfers ownership rights to another.
    event DeitySwitched(address newDeityAddress);

    // And so it begins.
    function ThroneMaker(uint256 throneCreationPrice_) {
        deityAddress = msg.sender;
        setThroneCreationPrice(throneCreationPrice_);
    }
    
    // How many monarchs have there been (including the current one, live or dead)?
    function numberOfThrones() constant returns (uint256 numberOfThrones) {
        return gazetteer.length;
    }

    // Don't think a fallback makes sense really for this contract.
    function () {
      throw;
    }

    // Create a new throne.
    // The caller will need to include payment equal to the current throneCreationPrice,
    // as well as a very large amount of gas - about 2,000,000.
    // optionalWizardAddress can be zero to indicate the caller should be the wizard
    // behind the throne, or non-zero for a different wiazrd address.
    // The other parameters here are documented in KingOfTheEtherThrone.ThroneConfig.
    // NB: like all non-constant functions, the return value isn't actually returned
    // outside the VM - use findThroneCalled(throneName) to get the throne you created.
    // NB2: Yes, i suppose someone else could create one with the same name just before
    // you - double-check the config of the throne contract created.
    // TODO - zero address bit yucky
    // TODO - extract validation to separate function
    function createThrone(
        bytes   throneName,
        address optionalWizardAddress,
        uint256 startingClaimPrice,
        uint256 claimPriceAdjustPerMille,
        uint256 commissionPerMille,
        uint256 curseIncubationDuration
    ) returns (uint256 throneIndex) {

        // Technically zero is a valid address, but we use to indicate that the
        // caller should be made the wizard. Careful if calling from a contract!
        address wizardAddress = optionalWizardAddress;
        if (wizardAddress == 0) {
          wizardAddress = msg.sender;
        }

        uint256 valuePaid = msg.value;
        
        // If they paid too little, blow up - this should refund them (tho they lose all gas).
        if (valuePaid < throneCreationPrice) {
            throw;
        }

        // If they paid too much, blow up - this should refund them (tho they lose all gas).
        if (valuePaid > throneCreationPrice) {
            throw;
        }

        // Check the name is "safe" and doesn't already exist.
        
        if (!validateName(throneName)) {
            throw;
        }
        uint256 nameHash = computeNameHash(throneName);
        if (findThroneByNameHash(nameHash) != uint256(-1)) {
          throw;
        }
        
        // Check the configuration looks vaguely plausible.

        if (startingClaimPrice < 1 szabo) {
            throw;
        }
        if (startingClaimPrice > 1000000 ether) {
            throw;
        }
        if (claimPriceAdjustPerMille < 10) {
            throw;
        }
        if (claimPriceAdjustPerMille > 9000) {
            throw;
        }
        if (commissionPerMille < 10) {
            throw;
        }
        if (commissionPerMille > 100) {
            throw;
        }
        if (curseIncubationDuration < 5 minutes) {
            throw;
        }
        if (curseIncubationDuration > 999 years) {
            throw;
        }

        uint256 failedPaymentRingfenceDuration = 30 days;

        KingOfTheEtherThrone throneContract = new KingOfTheEtherThrone(
            wizardAddress,
            deityAddress,
            startingClaimPrice,
            claimPriceAdjustPerMille,
            commissionPerMille,
            curseIncubationDuration,
            failedPaymentRingfenceDuration,
            this
        );

        return registerThrone(throneName, nameHash, throneContract, valuePaid, block.timestamp);
    }

    // Return the index in the gazetteer of the throne with the given name.
    // Maxint (that is, uint(-1)) means not found
    // NB: validates name as a side-effect
    function findThroneCalled(bytes throneName) constant returns (uint256 throneIndex) {
        if (!validateName(throneName)) {
            throw;
        }
        return findThroneByNameHash(computeNameHash(throneName));
    }

    // Return the index in the gazetteer of the throne with the given name hash according to computeNameHash.
    // Maxint (that is, uint(-1)) means not found
    function findThroneByNameHash(uint256 nameHash) constant internal returns (uint256 throneIndex) {
        uint256 throneNumber = throneNumberByNameHash[nameHash];
        return throneNumber - 1;
    }

    // Used only by the deity to register thrones created by some other means.
    function registerExistingThrone(bytes throneName, address throneContractAddress, uint256 creationPricePaid, uint256 creationTimestamp) onlydeity returns (uint256 throneIndex) {
        if (!validateName(throneName)) {
            throw;
        }
        uint256 nameHash = computeNameHash(throneName);
        if (findThroneByNameHash(nameHash) != uint256(-1)) {
          throw;
        }
        return registerThrone(throneName, nameHash, throneContractAddress, creationPricePaid, creationTimestamp);
    }

    // This is our "value-add" above just creating the contract; we add it to the offical list of thrones.
    function registerThrone(bytes throneName, uint256 nameHash, address throneContractAddress, uint256 creationPricePaid, uint256 creationTimestamp) internal returns (uint256 throneIndex) {
        gazetteer.push(GazetteerEntry(
            throneName,
            throneContractAddress,
            creationPricePaid,
            creationTimestamp
        ));
        uint256 newThroneIndex = gazetteer.length - 1;
        uint256 throneNumber = newThroneIndex + 1;
        throneNumberByNameHash[nameHash] = throneNumber;
        ThroneCreated(newThroneIndex);
        return newThroneIndex;
    }

    // Used only by the deity to change the throne creation price.
    function setThroneCreationPrice(uint256 newThroneCreationPrice) onlydeity {
        throneCreationPrice = newThroneCreationPrice;
        ThroneCreationPriceSet(throneCreationPrice);
    }
   
    // Used only by the deity to collect their throne creation fees.
    function sweepDeityCommission(uint256 amount) onlydeity {
        // Include plenty of gas with the send (but leave some for us).
        uint reserveGas = 10000;
        bool ok = sendWithAllOurGasExcept(deityAddress, amount, reserveGas);
        if (!ok) {
            throw;
        }
        DeityCommissionSwept(deityAddress, amount);
    }

    // Used only by the deity to transfer the throne making rights to a successor.
    // It is probably unwise for the newDeity to be a contract unless it is able to
    // call sweepDeityComission and switchDeity and it has a suitably cheap fallback function.
    function switchDeity(address newDeity) onlydeity {
        deityAddress = newDeity;
        DeitySwitched(newDeity);
    }

}


// Expose normally internal functions for testing in isolation.
// (arguably a poor testing practice, but contracts are a bit unusual -
//  e.g. we don't really want to have to purely black-box-test name hashing by
//  creating loads of thrones with similar names 'cos they're expensive ...)
contract ThroneInternalsForTesting is CarefulSender, MoneyRounder, NameValidator, NameHasher {

    function sendWithExtraGasExt(address destination, uint256 value, uint256 extraGasAmt) returns (bool) {
      return sendWithExtraGas(destination, value, extraGasAmt);
    }

    function sendWithAllOurGasExceptExt(address destination, uint256 value, uint256 reserveGasAmt) returns (bool) {
      return sendWithAllOurGasExcept(destination, value, reserveGasAmt);
    }

    function roundMoneyDown3SFExt(uint256 rawWeiAmount) constant returns (uint256 nicerWeiAmount) {
      return roundMoneyDown3SF(rawWeiAmount);
    }

    function validateNameExt(bytes name) constant returns (bool good) {
      return validateName(name);
    }

    function computeNameHashExt(bytes name) constant returns (uint256 nameHash) {
      return computeNameHash(name);
    }

}
