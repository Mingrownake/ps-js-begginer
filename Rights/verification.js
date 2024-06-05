let balance = 1000;
let bonus = 50;
let isBanned = false;
let isExist = false;
let isSelling = true;
let result;
if ((balance >= 1000 || bonus >= 100) && !isBanned && !isExist && isSelling) {
    result = "Игра приобретена";
} else {
    result = "Увы"
}
console.log(result)