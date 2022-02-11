document.getElementById('deposite-btn').addEventListener('click', function () {
    let depositeAmmount = document.getElementById('deposite-ammount').value;
    let depositeTotal = document.getElementById('deposit-total');
    let balanceTotal = document.getElementById('balance-total');
    let parseDpTotal = parseFloat(depositeTotal.innerText);
    let parseBlTotal = parseFloat(balanceTotal.innerText);
    let parseDpAmmount = parseFloat(depositeAmmount);
    depositeTotal.innerText = parseDpTotal + parseDpAmmount;
    balanceTotal.innerText = parseBlTotal + parseDpAmmount;
    document.getElementById('deposite-ammount').value = '';

})

document.getElementById('withdraw-btn').addEventListener('click', function () {
    let withdrawAmmount = document.getElementById('withdraw-ammount').value;
    let withdrawTotal = document.getElementById('withdraw-total');
    let balanceTotal = document.getElementById('balance-total');
    let parseBlTotal = parseFloat(balanceTotal.innerText);
    let parseWdTotal = parseFloat(withdrawTotal.innerText);
    let parseWdAmmount = parseFloat(withdrawAmmount);
    withdrawTotal.innerText = parseWdTotal + parseWdAmmount;
    balanceTotal.innerText = parseBlTotal - parseWdAmmount;
    document.getElementById('withdraw-ammount').value = '';

})