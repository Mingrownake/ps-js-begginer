let arrAsc =  [1, 40, -5, 10, 0];
let arrDesc =  [1, 40, -5, 10, 0];

function orderTemplate(firstNumber, secondNumber, desc) {
    if (!desc) {
        return firstNumber > secondNumber;
    }
    return firstNumber < secondNumber;
}

function sort(array, desc = false) {
    const newArray = array.slice();
    for (let i = 0; i < newArray.length; i++) {
        for (let j = i + 1; j < newArray.length; j++) {
            const isExchange = orderTemplate(newArray[i], newArray[j], desc);
            if (isExchange) {
                [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
            }
        }
    }
    return newArray;
}

const sortingArrayAsc = sort(arrAsc);
const sortingArrayDesc = sort(arrDesc, true);

console.log(arrAsc);
console.log(sortingArrayAsc);

console.log(arrDesc)
console.log(sortingArrayDesc)