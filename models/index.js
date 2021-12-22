// user has many reviews, review belongs to user
// drink has many reviews, review belongs to drink

const User = require('./User')
const Drink = require('./Drink')
const Shop = require('./Shop')
const Review = require('./Review')

User.hasMany(Review, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Review.belongsTo(User, {
    foreignKey: 'user_id'
})

Shop.hasMany(Review, {
    foreignKey: 'shop_id',
    onDelete: 'CASCADE'
})

Review.belongsTo(Shop, {
    foreignKey: 'shop_id'
})

module.exports = { User, Drink, Shop, Review }