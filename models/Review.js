// id, review name, review

const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Review extends Model {
}

Review.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        reviewName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        review: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id',
            },
        },
        drink_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Drink',
                key: 'id',
            },
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Review'
    }
)

module.exports = Review