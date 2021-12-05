const dotenv = require('dotenv');
console.log("dotenv:::" )
dotenv.config();
console.log(" after dotenv:::" )

module.exports = {
  development: {
    username: 'b587cc9ba77c33',
    password:  'c69d9493',
    database: 'heroku_ab4c024320eb535',
    host: 'us-cdbr-east-04.cleardb.com', 
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      supportBigNumbers: true,
    },
  },
  test: {
    username: 'b587cc9ba77c33',
    password:  'c69d9493',
    database: 'heroku_ab4c024320eb535',
    host: 'us-cdbr-east-04.cleardb.com', 
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      supportBigNumbers: true,
    },
  },
  production: {
    username: 'b587cc9ba77c33',
    password:  'c69d9493',
    database: 'heroku_ab4c024320eb535',
    host: 'us-cdbr-east-04.cleardb.com', 
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      supportBigNumbers: true,
    },
 },
};
