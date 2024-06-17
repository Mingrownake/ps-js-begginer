'use strict'

const userInfo = {
    balance: 0,
    operations: 0,
    increment(sum) {
        this.balance += sum;
        this.operations++;
    },
    create() {
        return {
            balance: 0,
            operations: 0,
            increment: this.increment,
        }
    }
}
console.log('First user')
console.log(userInfo.balance);
userInfo.increment(50);
console.log(userInfo.balance);
console.log('New user');
const newUser = userInfo.create();
console.log(newUser.balance);
newUser.increment(25);
console.log(newUser.balance);
console.log('First user')
console.log(userInfo.balance);
