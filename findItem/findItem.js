const arr = [1, 4, 4, 20, 7];

function containsValue(value, arr) {
    return  arr.find((num) => num === value) ? true : false;
}

console.log(containsValue(5, arr));