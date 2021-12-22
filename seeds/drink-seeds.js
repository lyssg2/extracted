const { Drink } = require('../models');

const drinkData = [{
        drinkName: 'Vanilla Latte',
    },
    {
        drinkName: 'Cafe Mocha',
    },
    {
        drinkName: 'Machiatto',
    },
    {
        drinkName: 'Caramel Brulee Latte',
    }
];

const seedDrinks = () => Drink.bulkCreate(drinkData);

module.exports = seedDrinks;