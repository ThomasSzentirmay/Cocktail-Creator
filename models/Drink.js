const { Model, DataTypes } = require('sequelize');
const db = require('../config/connection');

class Drink extends Model {}

Drink.init(
  {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'Drink',
  }
);

module.exports = Drink;