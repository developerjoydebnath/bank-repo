
function inputValue(inputId) {
    const valueOfAmmount = document.getElementById(inputId).value;
    const parseAmmount = parseFloat(valueOfAmmount);
    document.getElementById(inputId).value = '';
    return parseAmmount;
}

function totalValue(totalId, ammount) {
    const total = document.getElementById(totalId);
    const parseTotal = parseFloat(total.innerText);
    total.innerText = parseTotal + ammount;
}

function updateTotalBalance(ammount, isAdd) {
    const updateBalance = document.getElementById('balance-total');
    const parseUpdateTotal = parseFloat(updateBalance.innerText);
    if (isAdd == true) {
        updateBalance.innerText = parseUpdateTotal + ammount;
    }
    else {
        updateBalance.innerText = parseUpdateTotal - ammount;
    }
}

function currentTotalBalance() {
    const updateBalance = document.getElementById('balance-total');
    const parseUpdateTotal = parseFloat(updateBalance.innerText);
    return parseUpdateTotal;
}



document.getElementById('deposite-btn').addEventListener('click', function () {
    const depositeAmmount = inputValue('deposite-ammount');
    if (depositeAmmount > 0) {
        totalValue('deposit-total', depositeAmmount);
        updateTotalBalance(depositeAmmount, true);
    }
})


document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawAmmount = inputValue('withdraw-ammount');
    if (withdrawAmmount > 0 && withdrawAmmount <= currentTotalBalance()) {
        totalValue('withdraw-total', withdrawAmmount);
        updateTotalBalance(withdrawAmmount, false);
    }

})