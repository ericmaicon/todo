require('dotenv').config();

const {
  DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWORD,
} = process.env;

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: DB_HOST,
      database: DB_NAME,
      user: DB_USERNAME,
      password: DB_PASSWORD,
    },
  },
  staging: {
    client: 'mysql2',
    connection: {
      host: DB_HOST,
      database: DB_NAME,
      user: DB_USERNAME,
      password: DB_PASSWORD,
    },
  },
  production: {
    client: 'mysql2',
    connection: {
      host: DB_HOST,
      database: DB_NAME,
      user: DB_USERNAME,
      password: DB_PASSWORD,
    },
  },
};
