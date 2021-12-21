const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    // username: process.env.DB_USERNAME,
    username: 'root',
    password: '12345',
    database: 'converter',
    host: 'localhost', // This might be wrong!!!!
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      supportBigNumbers: true,
    },
  },
  test: {
    // username: process.env.DB_USERNAME,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_NAME,
    // host: process.env.HOST,
    // port: process.env.DB_PORT,
    // dialect: 'mysql',
    // dialectOptions: {
    //   supportBigNumbers: true,
    // },
    username: 'root',
    password: '12345',
    database: 'converter',
    host: 'localhost', // This might be wrong!!!!
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      supportBigNumbers: true,
    },
  },
  // production: {
  //   username: process.env.DB_USERNAME,
  //   password: process.env.DB_PASSWORD,
  //   database: process.env.DB_NAME,
  //   host: process.env.HOST,
  //   port: process.env.DB_PORT,
  //   dialect: 'mysql',
  //   dialectOptions: {
  //     supportBigNumbers: true,
  //   },
  // },
  username: 'root',
  password: '12345',
  database: 'converter',
  host: 'localhost', // This might be wrong!!!!
  port: 3306,
  dialect: 'mysql',
  dialectOptions: {
    supportBigNumbers: true,
  },
};
