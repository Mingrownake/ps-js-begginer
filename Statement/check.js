let answer = prompt("Сколько будет 7 + или - 15?")
let result;
if (answer === "Я не робот") {
    result = "Успех";
} else {
    if (Number(answer) === -8 || Number(answer) === 22) {
        result = "Успех"
    } else {
        result = "Вы робот!"
    }
}
alert(result)