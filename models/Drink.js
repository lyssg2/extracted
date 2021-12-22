// id, drink name

const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Drink extends Model {
}

Drink.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    drinkName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Drink'
  }
)

module.exports = Drink