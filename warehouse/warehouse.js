const warehouse = {
    goods: [],
    findGoodById: function (id) {
        return this.goods.find(item => item.id === id);
    },
    addGood: function (good) {
        if (this.findGoodById(good.id)) {
            console.log(`Товар с данным id: ${good.id} уже добавлен`);
            return false;
        }
        this.goods.push(good);
        return true;
    },
    getWeightKg: function () {
        if (this.goods.length === 0) {
            console.log('Список товаров пуст.')
            return undefined;
        }
        return this.goods.reduce((a, b) => {
            return a += b.weight?.kg ? b.weight.kg : 0
        }, 0);
    }
};

const car = {
    id: 1,
    weight : {
        kg: 1000
    },
    brand: 'Ford'
};

const chair = {
    id: 2,
    weight: {
        kg: 2
    }
};

const paper = {
    id: 3,
    color: 'red'
};

console.log(warehouse.addGood(car));
console.log(warehouse.addGood(chair));
console.log(warehouse.getWeightKg());


