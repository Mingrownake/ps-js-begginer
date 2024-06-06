let languages = prompt("Пожалуйста выберите язык").toLowerCase();
let results;
switch (languages) {
    case "ru":
        results = "Привет";
        break;
    case "en":
        results = "Hello";
        break;
    case "de":
        results = "Guten Tag"
        break;
    default:
        results = "Мне неизвестен данный язык!"
}
console.log(results);
