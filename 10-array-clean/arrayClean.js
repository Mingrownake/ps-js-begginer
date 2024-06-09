function filter(arr, funcFilter) {
    for (let i = 0; i < arr.length; i++) {
        while (funcFilter(arr[i])) {
            arr.splice(i, 1);
            if(arr.length === 0) {
                break;
            }
        }
    }
    return arr;
}
const arrOver = [1, 2, 3, 5, 10, 0, -10, 40];
const arrLess = [1, 2, 3, 5, 10, 0, -10, 40];
const arrEquals = [1, 2, 3, 5, 10, 0, -10, 40];
const filterNumber = 4;

filter(arrOver, (num) => num > filterNumber);
console.log(`Filter over: ${arrOver}`);

filter(arrLess, (num) => num < filterNumber);
console.log(`Filter less: ${arrLess}`);

filter(arrEquals, (num) => num !== filterNumber);
console.log(`Filter equals: ${arrEquals}`);