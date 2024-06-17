const array = ['29-02-2023', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];
const months31Days = ['01', '03', '05', '07', '08', '10', '12'];
const months30Days = ['02', '04', '06', '09', '11'];

function validateDateFirst(date) {
    return date.filter(el => el.length === 10)
                .map(el => {
                    if (el.indexOf('-') > -1) {
                        const[day, month, year] = el.split('-');
                        return [day, month, year];
                    } else if (el.indexOf('/') > -1) {
                        const[month, day, year] = el.split('/');
                        return [day, month, year];
                    }
                })
                .filter(innerElement => {
                    if (innerElement[1] === '02') {
                        if (Number(innerElement[0] > 28)) {
                            if (isLeapYear(innerElement[2]) && Number(innerElement[0]) === 29) {
                                return true;
                            }
                            return false
                        }
                    }
                    if(Number(innerElement[2]) < 1970 || Number(innerElement[2]) > 2100) {
                        return false;
                    } else if (Number(innerElement[1]) < 1 || Number(innerElement[1]) > 12) {
                        return false;
                    } else if (Number(innerElement[0]) < 1) {
                        return false;
                    } else if (months31Days.includes(innerElement[1]) && innerElement[0] > 31) {
                        return false;
                    } else if (months30Days.includes(innerElement[1]) && innerElement[0] > 30) {
                        return false;
                    }
                    return true;
                })
                .map(el => el.join('-'));
}

function isLeapYear(year) {
    if (Number(year) % 4 === 0) {
        return !(Number(year) % 100 === 0 && Number(year) % 400 !== 0);
    }
    return false;
}

console.log(validateDateFirst(array))