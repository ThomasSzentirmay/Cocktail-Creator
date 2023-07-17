const { Model, DataTypes } = require('sequelize');
const db = require('../config/connection');

class Cocktail extends Model {}

Cocktail.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    uploadedBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'Cocktail',
  }
);

module.exports = Cocktail;
