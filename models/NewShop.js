const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class NewShop extends Model {
}

NewShop.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        newShopName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        newShopNeighborhood: {
            type: DataTypes.STRING,
            allowNull: true
        },
        newShopCity: {
            type: DataTypes.STRING,
            allowNull: false
        },
        newShopDescription: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'newshop'
    }
)

module.exports = NewShop