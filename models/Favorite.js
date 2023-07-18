const { Model, DataTypes } = require('sequelize');
const db = require('../config/connection');

class Favorite extends Model {}

Favorite.init(
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
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    image_url: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize: db,
    modelName: 'Favorite'
  }
);

module.exports = Favorite;