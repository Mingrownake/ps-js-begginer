const wallet = {
    balance: 0,
    operations: [],
    addOperation: function (titleOperation, amount) {
        if (this.balance + (amount) < 0) {
            console.log('Недостаточно средств');
            return false;
        }
        this.balance += amount;
        this.operations.push({
            reason: titleOperation,
            sum: amount
        })
        return true;
    },
    countOperations: function (){ this.operations.length; }
}

wallet.addOperation('Зарплата', 500);
wallet.addOperation('ЖКХ', -250);
console.log(wallet.operations);
wallet.addOperation('Обучение', -300);
console.log(wallet.operations);
console.log(wallet.balance);