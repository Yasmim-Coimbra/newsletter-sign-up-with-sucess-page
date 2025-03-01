const emailInput = document.querySelector('input [type="email"]');
const error = document.querySelector('.error-msg');
const formBtn = document.querySelector('button');

let emailValido = false;

formBtn.addEventListener('submit', (event) => {
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
    if (!emailRegex.test(email)) {
        emailValido = false;
    } else {
        emailValido = true;
    }
}

function addErrorState() {
    if (!emailValido) {
        error.classList.add('ativo');
        input.classList.add('invalid');
    }
}