const hourlyRate = 80;
const availableDays = 11 - 2;
const needDays = 40 / 5;
if (availableDays >= needDays) {
    let payment = hourlyRate * 40;
    console.log(`True: ${payment}`)
} else {
    console.log(`False`)
}