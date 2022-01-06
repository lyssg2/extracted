// id, shop name, shop location, photo menu?

const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Shop extends Model {
}

Shop.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        shopName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        shopPhoto: {
            type: DataTypes.STRING,
            allowNull: false
        },
        shopLocation: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'shop'
    }
)

module.exports = Shop