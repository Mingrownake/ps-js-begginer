function encoder(text) {
    const arr = text.split('');
    const firstPart = arr.splice(0, 3)
    return arr.concat(firstPart).join('');
}

function decoder(cryptoText, expect) {
    const arr = cryptoText.split('');
    const findPart = arr.splice(arr.length - 3).join('');
    const decryptedText = findPart.concat(arr.join(''));
    return decryptedText === expect;
}

const password = 'mypassword';
const cryptoPassword = encoder(password);
const passwordRsl = decoder(cryptoPassword, password);
console.log(`Пароли: ${passwordRsl ? 'идентичны!' : 'не совпадают!'}`);