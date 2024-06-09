let arrAsc =  [1, 40, -5, 10, 0];
let arrDesc =  [1, 40, -5, 10, 0];

function sort(array, sortingMode) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (sortingMode.toLowerCase() === 'asc') {
                if (array[j] > array[j + 1]) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            } else if (sortingMode.toLowerCase() === 'desc') {
                    if (array[j + 1] > array[j]) {
                        let temp = array[j + 1];
                        array[j + 1] = array[j];
                        array[j] = temp;
                    }
                }
            }
        }
    return array;
}

const sortingArrayAsc = sort(arrAsc, 'asc');
const sortingArrayDesc = sort(arrDesc, 'desc');

console.log(arrAsc);
console.log(sortingArrayAsc);

console.log(arrDesc)
console.log(sortingArrayDesc)