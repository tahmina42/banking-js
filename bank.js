// document.getElementById("btn-submit").addEventListener("click", function () {
//     const uemail = document.getElementById("user-email");
//     const useremail = uemail.value;
//     const upass = document.getElementById("user-pass");
//     const userpass = upass.value;
//     if (useremail == "t@gmail.com" && userpass == "secret") {
//         window.location.href = 'banking.html';
//         //console.log("success");
//     }
// });

function getInputValue(inputValue) {
    const inputField = document.getElementById(inputValue);
    const new_input_Amount = parseFloat(inputField.value);
    inputField.value = "";
    return new_input_Amount;
}
function updateWithdrawDepositTotal(totalFieldId, function_called_amount_parameter) {
    const totalField = document.getElementById(totalFieldId);

    const previous_field_amount = parseFloat(totalField.innerText);

    const updated_total = (previous_field_amount + function_called_amount_parameter);
    totalField.innerText = updated_total;
}
function currentBalance() {
    const total_balance = document.getElementById("balance-total");
    const total_balance_amount = parseFloat(total_balance.innerText);
    return total_balance_amount;
}

function updateTotalBalance(function_called_amount, isAdd) {
    const total_balance = document.getElementById("balance-total");
    // const total_balance_amount = parseFloat(total_balance.innerText);
    const total_balance_amount = currentBalance();
    if (isAdd == true) {
        const final_balance_amount = (total_balance_amount + function_called_amount);
        total_balance.innerText = final_balance_amount;
    }
    else {
        const final_balance_amount = (total_balance_amount - function_called_amount);
        total_balance.innerText = final_balance_amount;
    }


}

document.getElementById("deposit-btn").addEventListener("click", function () {
    /*const depositInput = document.getElementById("deposit-input");
    const new_deposit_Amount = parseFloat(depositInput.value);
    const deposit_amount = document.getElementById("deposit-amount");*/

    // deposit_amount.innerText = newdepositAmount;
    const function_called_amount = getInputValue("deposit-input");
    //update deposit total

    /* const deposit_amount = document.getElementById("deposit-amount");
     const previous_deposit_amount = parseFloat(deposit_amount.innerText);
     const deposit_total = (previous_deposit_amount + function_called_amount);
     deposit_amount.innerText = deposit_total;*/
    if (function_called_amount > 0) {

        updateWithdrawDepositTotal("deposit-amount", function_called_amount);

        //update balance
        updateTotalBalance(function_called_amount, true);
    }
    /*const total_balance = document.getElementById("balance-total");
    const total_balance_amount = parseFloat(total_balance.innerText);
    const final_balance_amount = (total_balance_amount + function_called_amount);
    total_balance.innerText = final_balance_amount;*/
    // console.log(deposit_amount.innerText);

});
document.getElementById("withdraw-btn").addEventListener("click", function () {
    /*const withdrawtInput = document.getElementById("withdraw-input");
    const new_withdraw_Amount = parseFloat(withdrawtInput.value);
   */
    // deposit_amount.innerText = newdepositAmount;

    //update with drawal
    const function_called_amount = getInputValue("withdraw-input");
    const current_balance = currentBalance();
    /*const withdraw_amount_text = document.getElementById("withdraw-amount");
    const previous_withdraw_amount = parseFloat(withdraw_amount_text.innerText);
    const withdraw_total = (previous_withdraw_amount + function_called_amount);
    withdraw_amount_text.innerText = withdraw_total;*/
    if (function_called_amount > 0 && current_balance > function_called_amount) {
        updateWithdrawDepositTotal("withdraw-amount", function_called_amount);

        // console.log(deposit_amount.innerText);


        //update balance
        updateTotalBalance(function_called_amount, false);
    }
    else {
        console.log("You have less balance");
    }


    // const total_balance = document.getElementById("balance-total");
    // const total_balance_amount = parseFloat(total_balance.innerText);
    // const final_balance_amount = (total_balance_amount - function_called_amount);
    // total_balance.innerText = final_balance_amount;

});