// user has many reviews, review belongs to user
// drink has many reviews, review belongs to drink

const User = require('./User')
const Shop = require('./Shop')
const Review = require('./Review')
const NewShop = require('./NewShop')

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

User.hasMany(NewShop, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

NewShop.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = { User, Shop, Review }