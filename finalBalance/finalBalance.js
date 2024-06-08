const operations = [1000, -700, 300, -1500, 10700];
let startBudget = 100;

function calculateFinalBalance(startBudget) {
    for (let operation of operations) {
        startBudget += operation;
    }
    return startBudget;
}

function checkNegativeBalance(startBudget) {
    for (let operation of operations) {
        startBudget += operation;
        if (startBudget <= 0) {
            console.log(`Баланс отрицательный: ${startBudget}`);
            return false;
        }
    }
}

function calculatesAverage() {
    let sumPositive = 0;
    let countPositive = 0;
    let sumNegative = 0;
    let countNegative = 0;
    for (let operation of operations) {
        if (operation > 0) {
            sumPositive += operation;
            countPositive++;
        } else if (operation < 0) {
            sumNegative += operation;
            countNegative++;
        }
    }
    console.log(`Среднее положительных операций: ${sumPositive / countPositive}`);
    console.log(`Среднее отрицательных операций: ${sumNegative / countNegative}`);
}

calculatesAverage();