const arr = [[100, 150], [120, 100], [200, 350]];
const rslArray = arr.filter(elArr => elArr[1] > elArr[0])
                                .map(elArr => elArr[1] - elArr[0]);
console.log(rslArray)