const NewShop = require('../models/NewShop')

const newShopData = [
    {
        newShopName: 'Test Shop Name',
        newShopNeighborhood: 'Test Shop Neighborhood',
        newShopCity: 'Test Shop City',
        newShopDescription: 'Test Shop Description'
    }
]

const seedNewShops = () => NewShop.bulkCreate(newShopData)

module.exports = seedNewShops