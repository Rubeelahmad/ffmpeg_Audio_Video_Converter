const dotenv = require('dotenv');
console.log("dotenv:::" )
dotenv.config();
console.log(" after dotenv:::" )
//mysql://b3eb6fa0e12de5:4017e7fe@us-cdbr-east-04.cleardb.com/heroku_ea278d82c03352f?
module.exports = {
  development: {
    username: 'b3eb6fa0e12de5',
    password:  '4017e7fe',
    database: 'heroku_ea278d82c03352f',
    host: 'us-cdbr-east-04.cleardb.com', 
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      supportBigNumbers: true,
    },
  },
  test: {
    username: 'b3eb6fa0e12de5',
    password:  '4017e7fe',
    database: 'heroku_ea278d82c03352f',
    host: 'us-cdbr-east-04.cleardb.com', 
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      supportBigNumbers: true,
    },
  },
  production: {
    username: 'b3eb6fa0e12de5',
    password:  '4017e7fe',
    database: 'heroku_ea278d82c03352f',
    host: 'us-cdbr-east-04.cleardb.com', 
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      supportBigNumbers: true,
    },
 },
};
