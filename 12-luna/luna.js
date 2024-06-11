function isCorrectCard(card) {
    const formattedCard = card.replaceAll('-', '').split("");
    if (formattedCard.length !== 16) {
        return false;
    }
    for (const value of formattedCard) {
        if (isNaN(Number(value))) {
            return false;
        }
    }
    for (let i = 0; i < formattedCard.length; i++) {
        if (i % 2 === 0) {
            formattedCard[i] *= 2;
            if (formattedCard[i] > 9) {
                formattedCard[i] -= 9;
            }
        }
    }
    const sum = formattedCard.reduce((a,b) => Number(a) + Number(b), 0);
    return sum % 10 === 0;
}

const incorrectCard = '4561-1213-4367-2612';
console.log(`Номер карты: ${isCorrectCard(incorrectCard) ? 'корректный': 'не корректный'}`);
const correctCard = '4561-2612-1234-5467';
console.log(`Номер карты: ${isCorrectCard(correctCard) ? 'корректный': 'не корректный'}`);