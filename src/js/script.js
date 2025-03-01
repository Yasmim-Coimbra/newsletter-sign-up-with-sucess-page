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
    
    if (emailRegex.test(email)) {
        emailValido = true;
    } else {
        emailValido = false;
    }
}

function addErrorState() {
    error.classList.add('ativo');
    input.classList.add('invalid');
}
