const form = document.getElementById('form');
const nme = document.getElementById('name');
const eml = document.getElementById('eml');
const msg = document.getElementById('msg');

function validateForm() {
    const nameRegex = /^[a-zA-Z]+\s[a-zA-Z]+$/;
    const emlRegex = /^[a-zA-z1-9.+]+[@][a-z]+[.][a-z]{3}$/;
    const msgRegex = /^[\w]+$/;

    if (nme.value.match(nameRegex)) {
        console.log('chillin');
    } else {
        document.getElementById('nameSpan').innerText = "Not a valid Name";
    }

    if (eml.value.match(emlRegex)) {
        console.log('chillin');
    } else {
        document.getElementById('emlSpan').innerText = "Not a valid Email";
    }

    if (msg.value.match(msgRegex)) {
        console.log('chillin');
    } else {
        document.getElementById('msgSpan').innerText = "Not a valid Message";
    }

}

form.onsubmit = (e) => {
    e.preventDefault();
    validateForm();
};

