const monthPercent = 7 / 12;
const startDeposit = 12000;
const result = startDeposit * (1 + monthPercent / 100) ** 24;
if (result >= 13500) {
    console.log(`Отлично! Дом - куплен!`);
    console.log(`Остаток денежных средств: ${result - 13500} $`);
} else {
    console.log(`Увы! Нехватает ${13500 - result} $`);
}