const { Sequelize } = require('sequelize');
const isProduction = process.env.PORT;
let connection;

if (isProduction) {
  connection = new Sequelize(process.env.JAWSDB_URL, {
    dialect: 'mysql'
  })
} else {
  connection = new Sequelize('cocktail_creator_db', 'root', process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
  });
}

module.exports = connection;