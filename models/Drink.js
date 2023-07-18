const { Model, DataTypes } = require('sequelize');
const db = require('../config/connection');

class Drink extends Model {}

Drink.init(
  {
    cocktailName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ingredients: {
      type: DataTypes.STRING,
      allowNull: false
    },
    recipe: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    sequelize: db,
    modelName: 'Drink',
  }
);

module.exports = Drink;