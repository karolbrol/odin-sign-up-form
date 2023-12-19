const pswrd1 = document.querySelector('#password1');
const pswrd2 = document.querySelector('#password2');
const form = document.querySelector('#sign-up-form');
const errorMsg = document.querySelector('#error-msg')

form.addEventListener('submit', (e) => checkPswrdEquality(e));

function checkPswrdEquality(event) {
    if(pswrd1.value !== pswrd2.value) {
        event.preventDefault();
        errorMsg.textContent = '* Passwords do not match';
        errorMsg.className = 'error'

        if (!pswrd1.classList.contains('error')) {
            pswrd1.classList.add('error');
        };
        if (!pswrd2.classList.contains('error')) {
            pswrd2.classList.add('error');
        };
    }
    else {
        errorMsg.textContent = '';
        errorMsg.className = 'error hidden'

        if (pswrd1.classList.contains('error')) {
            pswrd1.classList.remove('error');
        };
        if (pswrd2.classList.contains('error')) {
            pswrd2.classList.remove('error');
        };
    }

}