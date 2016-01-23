// A chain-game contract that maintains a 'throne' which agents may pay to rule.
// (c) Kieran Elby. All rights reserved.
// v0.3.0.
// Inspired by ethereumpyramid.com and the (now-gone?) "magnificent bitcoin gem".
// TODO - round amounts to e.g. 3 sig fig, start with higher amount.
// TODO - allow ownership transfer / creating new thrones?
// TODO - enforce time-limit on reign (can contracts do that without external action)?
// TODO - add bitcoin bridge so agents can pay in bitcoin?

contract KingOfTheEtherThrone {

    struct Monarch {
        // Address from which they paid their claimFee
        // and to which their compensation will be sent.
        address etherAddress;
        // A name by which they wish to be known.
        // TODO - should I use string? bytes? bytes32?
        string name;
        // How much did they pay to become monarch?
        uint claimPrice;
        // When did their rule start (based on block.timestamp)?
        uint coronationTimestamp;
    }

    // The wizard is the hidden power behind the throne; they
    // occupy the throne during gaps in succession and collect fees.
    address wizardAddress;

    // We let the wizard payments build up rather than consume
    // too much gas.
    uint accumulatedWizardPayments = 0;

    // Used to ensure only the wizard can do some things.
    modifier onlywizard { if (msg.sender == wizardAddress) _ }

    // How much must the first monarch pay?
    uint constant startingClaimPrice = 10 finney;

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

    // How much ether must an agent pay now to become the monarch?
    uint public currentClaimPrice;

    // The King (or Queen) of the Ether.
    Monarch public currentMonarch;

    // Earliest-first list of previous throne holders.
    Monarch[] public pastMonarchs;

    // Create a new throne, with the creator as wizard and first ruler.
    // Sets up some hopefully sensible defaults.
    function KingOfTheEtherThrone() {
        wizardAddress = msg.sender;
        currentClaimPrice = startingClaimPrice;
        currentMonarch = Monarch(
            wizardAddress,
            "[Vacant]",
            0,
            block.timestamp
        );
    }

    function numberOfMonarchs() constant returns (uint n) {
        return pastMonarchs.length;
    }

    // Fired when the throne is claimed. Can be used to help build a front-end.
    event ThroneClaimed(
        address usurperEtherAddress,
        string usurperName,
        uint newClaimPrice
    );

    // Fallback function - simple transactions trigger this.
    // Assume the message data is their desired name.
    function() {
        claimThrone(string(msg.data));
    }

    // Claim the throne for the given name by paying the currentClaimFee.
    function claimThrone(string name) {

        uint valuePaid = msg.value;

        // If they paid too little, reject claim and refund their money.
        if (valuePaid < currentClaimPrice) {
            msg.sender.send(valuePaid);
            return;
        }

        // If they paid too much, continue with claim but refund the excess.
        if (valuePaid > currentClaimPrice) {
            uint excessPaid = valuePaid - currentClaimPrice;
            msg.sender.send(excessPaid);
            valuePaid = valuePaid - excessPaid;
        }

        // The claim price payment goes to the current monarch as compensation
        // (with a commission held back for the wizard). We let the wizard's
        // payments accumulate to avoid wasting gas sending small fees.

        uint wizardCommission = (valuePaid * wizardCommissionFractionNum) / wizardCommissionFractionDen;
        accumulatedWizardPayments += wizardCommission;

        uint compensation = valuePaid - wizardCommission;

        if (currentMonarch.etherAddress != wizardAddress) {
            currentMonarch.etherAddress.send(compensation);
        } else {
            // When the throne is vacant, the wizard is paid the fee.
            accumulatedWizardPayments += compensation;
        }

        // Usurp the current monarch, replacing them with the new one.
        pastMonarchs.push(currentMonarch);
        currentMonarch = Monarch(
            msg.sender,
            name,
            valuePaid,
            block.timestamp
        );

        // Increase the claim fee for next time.
        currentClaimPrice = currentClaimPrice * claimPriceAdjustNum / claimPriceAdjustDen;

        // Hail the new monarch!
        ThroneClaimed(currentMonarch.etherAddress, currentMonarch.name, currentClaimPrice);
    }

    // Used only by the wizard to collect his commission.
    function sweepCommission() onlywizard {
        if (accumulatedWizardPayments == 0) {
            return;
        }
        wizardAddress.send(accumulatedWizardPayments);
        accumulatedWizardPayments = 0;
    }

}
