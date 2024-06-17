function query(obj) {
    if (!obj) {
        return undefined;
    }
    return Object.keys(obj).map(e => {
        return e.concat('=').concat(obj[e]);
    }).join('&')
}

const user = {
    search: 'Nikita',
    take: 10
};

console.log(query(user))
