const { Model, DataTypes } = require('sequelize');
const db = require('../config/connection');
const User = require('./User')

class Favorite extends Model {}

Favorite.init(
  {
    cocktailName: {
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
    image: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  },
  {
    sequelize: db,
    modelName: 'Favorite'
  }
);

module.exports = Favorite;