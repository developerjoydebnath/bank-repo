
function inputValue(inputId){
    const valueOfAmmount = document.getElementById(inputId).value;
    const parseAmmount = parseFloat(valueOfAmmount);
    document.getElementById(inputId).value = '';
    return parseAmmount;
}

function totalValue(totalId){
    const total = document.getElementById(totalId);
    const parseTotal = parseFloat(total.innerText);
    return parseTotal;
}



document.getElementById('deposite-btn').addEventListener('click', function () {
    const depositeAmmount = inputValue('deposite-ammount');
    const depositeTotal = document.getElementById('deposit-total');
    const parseDpTotal = totalValue('deposit-total');
    const balanceTotal = document.getElementById('balance-total');
    const parseBlTotal = totalValue('balance-total');
    
    depositeTotal.innerText = parseDpTotal + depositeAmmount;
    balanceTotal.innerText = parseBlTotal + depositeAmmount;

})

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawAmmount = inputValue('withdraw-ammount');
    const withdrawTotal = document.getElementById('withdraw-total');
    const parseWdTotal = totalValue('withdraw-total');
    const balanceTotal = document.getElementById('balance-total');
    const parseBlTotal = totalValue('balance-total');

    withdrawTotal.innerText = parseWdTotal + withdrawAmmount;
    balanceTotal.innerText = parseBlTotal - withdrawAmmount;

})