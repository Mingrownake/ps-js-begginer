const addressLat = 3;
const addressLong = 5;
const positionLat = 1.5;
const positionLong = 0;

const result = ((positionLat - addressLat) ** 2 + (positionLong - addressLong) ** 2) ** 0.5;
console.log(`Result: ${result}`);