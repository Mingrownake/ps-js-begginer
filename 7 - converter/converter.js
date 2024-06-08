function converter(amount, from, to) {
    let result = null;
    if ((from.toLowerCase() === 'rub' || from.toLowerCase() === 'usd' || from.toLowerCase() === 'eur')
    && (to.toLowerCase() === 'rub' || to.toLowerCase() === 'usd' || to.toLowerCase() === 'eur')) {
        return amount * getExchangeRate(from, to);
    }
    console.log('Некорректные входные данные.')
    return result;
}

function getExchangeRate(from, to) {
    const RUB_TO_USD = 0.011;
    const RUB_TO_EUR = 0.0103;
    const USD_TO_RUB = 88.76;
    const USD_TO_EUR = 0.9257;
    const EUR_TO_RUB = 96.69;
    const EUR_TO_USD = 1.08;
    if (from.toLowerCase() === to.toLowerCase()) {
        return 1;
    } else if (from.toLowerCase() === 'rub') {
        return to.toLowerCase() === 'usd' ? RUB_TO_USD : RUB_TO_EUR;
    } else if (from.toLowerCase() === 'usd') {
        return to.toLowerCase() === 'rub' ? USD_TO_RUB : USD_TO_EUR;
    } else {
        return to.toLowerCase() === 'rub' ? EUR_TO_RUB : EUR_TO_USD;
    }
}

console.log(converter(1, 'eur', 'rub'));