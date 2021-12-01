const dotenv = require('dotenv');

dotenv.config();

//mysql://b65dabf015757c:1d446d83@us-cdbr-east-04.cleardb.com/heroku_23a93e504397c91?reconnect=true

module.exports = {
  development: {
    // username: process.env.DB_USERNAME,
    username: 'b65dabf015757c',
    password:  '1d446d83',
    database: 'heroku_23a93e504397c91',
    host: 'us-cdbr-east-04.cleardb.com', 
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      supportBigNumbers: true,
    },
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    dialectOptions: {
      supportBigNumbers: true,
    },
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    dialectOptions: {
      supportBigNumbers: true,
    },
  },
};
