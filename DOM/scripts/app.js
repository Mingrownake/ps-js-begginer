'use strict'

function submitForm() {
    const textValue = document.querySelector('.input').value;
    if (!textValue) {
        return false;
    }
    document.querySelector('.panel').innerText = textValue;
    document.querySelector('.input').value = '';
    const value = JSON.parse(JSON.stringify({text: textValue}));
    localStorage.setItem("text", value.text);
}

function changeInput(e) {
    if (e.code === 'Enter') {
        submitForm()
    }
}
