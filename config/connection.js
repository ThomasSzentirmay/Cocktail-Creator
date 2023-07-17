const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('cocktail_creator_db', 'root', 'Airpr0963!', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;