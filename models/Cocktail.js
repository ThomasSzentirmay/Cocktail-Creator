const { Model, DataTypes } = require('sequelize');
const db = require('../db/connection');

class Cocktail extends Model { }

Cocktail.init({
  text: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      min: 3
    }
  }
}, {
  sequelize: db,
  modelName: 'cocktail'
});

module.exports = Cocktail;