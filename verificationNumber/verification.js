const num1 = '89226685932';
const num2 = '+79226685932';
const num3 = '+7(922)6685932';
const num4 = '+7(922) 668-59-32';
const num5 = '+7(922) 668-59-32    ';

const invalidNum1 = '892121';
const invalidNum2 = '+7d92121-22';
const invalidNum3 = '9+79226685932';
const invalidNum4 = '+79226g85932';


function validPhone(phone) {
    phone = phone.trim()
                .replaceAll('+', '')
                .replaceAll('-','')
                .replaceAll('(', '')
                .replaceAll(')', '')
                .replaceAll(' ', '')
    console.log(phone)
    return (phone.length === 11 && (phone.startsWith('8') || phone.startsWith('7')) && !isNaN(phone));

}

console.log('Correct')
console.log(validPhone(num1));
console.log(validPhone(num2));
console.log(validPhone(num3));
console.log(validPhone(num4));
console.log(validPhone(num5));
console.log('Incorrect')
console.log(validPhone(invalidNum1));
console.log(validPhone(invalidNum2));
console.log(validPhone(invalidNum3));
console.log(validPhone(invalidNum4));