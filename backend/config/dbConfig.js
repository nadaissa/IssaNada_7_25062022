//dotenv import
const dotenv = require('dotenv');
const path = require('path');

//resolving the dbConfig path to .env file to access variables
dotenv.config({
    path: path.resolve(__dirname, "../.env")
});

//exporting moduleso to access variables in .env file
module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME_DEV,
    "host": process.env.DB_HOST,
    "dialect": "mysql",
    "pool": {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  "test": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME_TEST,
    "host": process.env.DB_HOST,
    "dialect": "mysql",
    "pool": {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME_PROD,
    "host": process.env.DB_HOST,
    "dialect": "mysql",
    "pool": {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
};
