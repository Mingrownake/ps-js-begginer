function converter(amount, from, to) {
    const USD = 90;
    const EUR = 100;

    let currency = from.toUpperCase();
    let targetCurrency = to.toUpperCase();

    switch (currency) {
        case 'USD':
            switch (targetCurrency) {
                case 'RUB':
                    return amount * USD;
                case 'EUR':
                    return (amount * USD) / EUR;
                default:
                    return null;
            }
        case 'EUR':
            switch (targetCurrency) {
                case 'RUB':
                    return amount * EUR;
                case 'USD':
                    return (amount * EUR) / USD;
                default:
                    return null;
            }
        case 'RUB':
            switch (targetCurrency) {
                case 'USD':
                    return amount / USD;
                case 'EUR':
                    return amount / EUR;
                default:
                    return null;
            }
        default:
            return null;
    }
}

console.log(converter(100, 'RUB', 'usd'));