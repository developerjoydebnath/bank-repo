document.getElementById('submit-btn').addEventListener('click', function(){
    const emailInput = document.getElementById('input-email').value;
    const passwordInput = document.getElementById('input-password').value;
    if(emailInput == 'joy@gmail.com' && passwordInput == 'joy'){
        window.location.href = 'bank-home.html';
    }
})