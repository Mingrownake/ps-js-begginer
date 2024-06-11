function filter(arr, funcFilter) {
    const tempArray = arr.slice();
    for (let i = 0; i < tempArray.length; i++) {
        while (funcFilter(tempArray[i])) {
            tempArray.splice(i, 1);
            if(tempArray.length === 0) {
                break;
            }
        }
    }
    return tempArray;
}
const arrOver = [1, 2, 3, 5, 10, 0, -10, 40];
const arrLess = [1, 2, 3, 5, 10, 0, -10, 40];
const arrEquals = [1, 2, 3, 5, 10, 0, -10, 40];
const filterNumber = 4;

console.log(`Filter over: ${filter(arrOver, (num) => num > filterNumber)}`);
console.log(`Filter less: ${filter(arrLess, (num) => num < filterNumber)}`);
console.log(`Filter equals: ${filter(arrEquals, (num) => num !== filterNumber)}`);