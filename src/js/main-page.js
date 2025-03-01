const emailInput = document.querySelector('input[type="email"]');
const errorMsg = document.querySelector('.error-msg');
const formBtn = document.querySelector('button');

let emailValido = false;

formBtn.addEventListener('click', (event) => {
    event.preventDefault();

    validateEmail();
    
    if (emailValido) {
        window.location.replace('./success-page.html');
    } else {
        addErrorState();
    }
});

function validateEmail() {
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailRegex.test(email)) {
        emailValido = true;
    }
}

function addErrorState() {
    errorMsg.classList.add('ativo');
    emailInput.classList.add('invalid');
}