const hasLicence = true;
const age = 22;
const isDrink = false;
let result = hasLicence && age >= 18 && !isDrink ? "может" : "не может";
console.log(`Водитель ${result} сесть за руль`);