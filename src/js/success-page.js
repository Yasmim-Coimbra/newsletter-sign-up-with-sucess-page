import { storeEmail } from "./main-page.js";
const email = storeEmail();

const emailSpan = document.querySelector('#email');
emailSpan.textContent = email;

const button = document.querySelector('button');
button.addEventListener('click', () => {
    sessionStorage.removeItem('email');
    window.location.replace('./index.html');
});