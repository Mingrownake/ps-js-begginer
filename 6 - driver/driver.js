const hasLicence = true;
const age = 22;
const isDrink = false;
let result = hasLicence && age >= 18 && !isDrink ? "Может" : "Не может";
console.log(`Результат: ${result}`)