const { Model, DataTypes } = require('sequelize');
const db = require('../config/connection');

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

Favorite.belongsTo(User, {
    foreignKey: 'userId'
  });

module.exports = Favorite;