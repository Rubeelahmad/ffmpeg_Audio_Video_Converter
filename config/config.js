const dotenv = require('dotenv');

dotenv.config();

//mysql://b65dabf015757c:1d446d83@us-cdbr-east-04.cleardb.com/heroku_23a93e504397c91?reconnect=true

module.exports = {
  development: {
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
  production: {
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
};
