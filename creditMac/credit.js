const age = 24;
let currentMoney = 1600;
const isWorking = false;

function calculateCredit()  {
    return age >= 24 ? isWorking ? 500 : 100 : 0;
}

function buyItem() {
    if (currentMoney >= 2000) {
        currentMoney -= 2000;
        console.log(`Вы приобрели MacBook. \nОстаток на счету ${currentMoney}`)
    } else {
        console.log('У вас недостаточно денег');
    }
}

function tryByuItem() {
    if (currentMoney >= 2000) {
        buyItem()
    } else {
        const credit = calculateCredit();
        currentMoney += credit;
        console.log(`Вам был одобрен кредит в размере: ${credit}\nС учётом кредитных средств у вас: ${currentMoney}`);
        buyItem();
    }
}

tryByuItem();