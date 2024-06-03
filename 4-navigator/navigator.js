const addressLat = 3;
const addressLong = 5;
const positionLat = 1.5;
const positionLong = 0;

const result = Math.sqrt(
    Math.pow(positionLat - addressLat, 2) + Math.pow(positionLong - addressLong, 2));
console.log(`Result: ${result}`);