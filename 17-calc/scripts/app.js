function Sum() {
    const values = getValue();
    if (!values) {
        return false;
    }
    document.querySelector('#result').innerText = Number(values.firstValue) + Number(values.secondValue);
}

function Sub() {
    const values = getValue();
    if (!values) {
        return false;
    }
    document.querySelector('#result').innerText = Number(values.firstValue) - Number(values.secondValue);
}

function getValue() {
    const firstValue = document.querySelector('#input-form-first').value;
    const secondValue = document.querySelector('#input-form-second').value;
    document.querySelector('#input-form-first').value = '';
    document.querySelector('#input-form-second').value = '';
    document.querySelector('#input-form-first').placeholder = 0;
    document.querySelector('#input-form-second').placeholder = 0;
    if (!firstValue || !secondValue) {
        return false;
    }
    return {
        firstValue,
        secondValue
    }
}