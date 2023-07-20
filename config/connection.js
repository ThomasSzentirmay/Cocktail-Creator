// require('dotenv').config();
// const Sequelize = require('sequelize');
// const sequelize = process.env.JAWSDB_URL
//   ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//       host: 'localhost',
//       dialect: 'mysql',
//       dialectOptions: {
//         decimalNumbers: true,
//       },
//     });
// module.exports = sequelize;

require('dotenv').config();
const Sequelize = require('sequelize');

const dbConfig = {
  host: 'grp6m5lz95d9exiz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  username: 'x1ig6tv311fm29t7',
  password: 'otg0czj2n9jhisjv',
  port: 3306,
  database: 'heig1uuto8qdo5vt',
};

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
  }
);

module.exports = sequelize;
