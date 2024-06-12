const users = [
    {
        name: 'Вася',
        surname: 'Пупкин',
        age: 30,
        skills: ['Разработка', 'DevOps']
    },
    {
        name: 'Катя',
        surname: 'Белова',
        age: 18,
        skills: ['Дизайн']
    }
];

function transformObjects(array) {
    return array.map(item => {
        return {
            fullName: item.name.concat(` ${item.surname}`),
            skillNum: item.skills.length
        };
    })
}

console.log(transformObjects(users))