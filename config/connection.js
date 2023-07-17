const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('cocktail_creator_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;