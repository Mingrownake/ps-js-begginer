const arr = ['!', 'JS', 'love', 'I'];
let reverseArray = [];
for (let i = arr.length - 1; i >= 0; i--) {
    reverseArray.push(arr[i]);
}
console.log(reverseArray.join(" "))