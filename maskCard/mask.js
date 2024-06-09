const card = '434523231210814';

function maskCard(card) {
    return card.split('')
                .map((el, i) => {
                    if (i < card.length - 4) {
                        return '*'
                    } else {
                        return el;
                    }
                }).join('')
}

console.log(maskCard(card));