const express = require('express');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const env = process.env.NODE_ENV || 'dev'; // 'dev' or 'production'
const config = require('./config')[env];

if (env !== 'production') {
  // eslint-disable-next-line no-console
  console.log(config);
}

// eslint-disable-next-line no-console
console.log(`Current environment is ${env}`);

const app = express();

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(config.app.port);
app.set('port', port);

if (env === 'production') {
  app.use(logger('combined'));
} else {
  app.use(logger('dev'));
}

app.use(express.json());
app.use(express.urlencoded({
  extended: false,
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const portNum = parseInt(val, 10);

  // eslint-disable-next-line no-restricted-globals
  if (isNaN(portNum)) {
    // named pipe
    return val;
  }

  if (portNum >= 0) {
    // port number
    return portNum;
  }

  return false;
}

module.exports = app;
