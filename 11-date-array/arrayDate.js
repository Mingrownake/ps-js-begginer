const array = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];

function validateDateFirst(date) {
    return date.filter(el => el.length === 10)
                .map(el => el.split(/[-/]/))
                .filter(innerElement => {
                    if (innerElement[1] === Number('02') && Number(innerElement[0]) > 28 ) {
                        return false;
                    }
                    if(Number(innerElement[2]) < 0) {
                        return false;
                    } else if (Number(innerElement[1]) < 1 || Number(innerElement[1]) > 12) {
                        return false;
                    } else if (Number(innerElement[0]) < 1 || Number(innerElement[0]) > 31) {
                        return false;
                    }
                    return true;
                })
                .map(el => el.join('-'));
}

console.log(validateDateFirst(array))