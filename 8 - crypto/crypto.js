function crypto(password) {
    const arr = password.split('');
    const middleIndex = Math.floor(arr.length / 2);
    const firstHalf = arr.slice(0, middleIndex).reverse();
    const secondHalf = arr.slice(middleIndex).reverse();
    const encryptedPassword = firstHalf.concat(secondHalf);
    return encryptedPassword.join('');
}

function check(originalPassword, cryptoPassword) {
    if (!cryptoPassword || !originalPassword) {
        return false;
    }
    return originalPassword === crypto(cryptoPassword);
}


const password = 'password';
const cryptoPassword = crypto(password);
console.log(cryptoPassword)
const decryptPassword = crypto(cryptoPassword);
console.log(decryptPassword)
console.log(`Пароли: ${check(password, cryptoPassword) ? 'идентичны!' : 'не совпадают!'}`);
