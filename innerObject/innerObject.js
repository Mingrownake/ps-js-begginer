/*
    дополнить объект методоми для получения:
    - Названия компании
    - Имена сотрудников
    - Имя руководителя
 */



const company = {
    name: 'ООО Агро',
    employee: [
        {
            name: 'Света'
        },
        {
            name: 'Никита'
        }
    ],
    ceo: {
        name: 'Вася'
    },
    getCompanyName: function () {
        return `Название компании: "${company.name}"`;
    },
    getEmployerName: function () {
        return `Имя руководителя: ${this.ceo.name}`;
    },
    getNamesEmployee: function () {
        return this.employee.map(el => `Имя сотрудника: ${el.name}`).join('\n');
    }
}

console.log(company.getCompanyName());
console.log(company.getEmployerName());
console.log(company.getNamesEmployee());