
function inputValue(inputId){
    const valueOfAmmount = document.getElementById(inputId).value;
    const parseAmmount = parseFloat(valueOfAmmount);
    document.getElementById(inputId).value = '';
    return parseAmmount;
}

function totalValue(totalId, ammount){
    const total = document.getElementById(totalId);
    const parseTotal = parseFloat(total.innerText);
    total.innerText = parseTotal + ammount;
    // return parseTotal;
}



document.getElementById('deposite-btn').addEventListener('click', function () {
    const depositeAmmount = inputValue('deposite-ammount');
    totalValue('deposit-total', depositeAmmount)
    totalValue('balance-total', depositeAmmount)
})


document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawAmmount = inputValue('withdraw-ammount');
    totalValue('withdraw-total', withdrawAmmount)
    const balanceTotal = document.getElementById('balance-total');
    const parseBlTotal = parseFloat(balanceTotal.innerText);
    balanceTotal.innerText = parseBlTotal - withdrawAmmount;
})