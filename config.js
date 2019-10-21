/* eslint-disable radix */
// config.js


const dev = {

  app: {
    port: parseInt(process.env.DEV_APP_PORT) || 3000,
  },
  db: {
    host: process.env.DEV_DB_HOST || 'localhost',
    port: parseInt(process.env.DEV_DB_PORT) || 27017,
    name: process.env.DEV_DB_NAME || 'dev',
  },
};
const production = {

  app: {
    port: parseInt(process.env.PROD_APP_PORT) || 3000,
  },
  db: {
    host: process.env.PROD_DB_HOST || 'localhost',
    port: parseInt(process.env.PROD_DB_PORT) || 27017,
    name: process.env.PROD_DB_NAME || 'prod',
  },
};

const config = {
  dev,
  production,
};

module.exports = config;
