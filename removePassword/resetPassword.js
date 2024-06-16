'use strict'

function resetPassword(reset) {
    if (reset) {
        this.password = undefined;
    } else {
        this.password = '1';
    }
}

const user = {
    name: 'Nikita',
    password: 'mypassword'
}

const resetUserPassword = resetPassword.bind(user);
console.log(user);
resetUserPassword(true);
console.log(user);