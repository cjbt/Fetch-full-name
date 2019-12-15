const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const firstnameRouter = require('./resources/firstname/firstnameRouter');

const server = express();

// *** MIDDLEWARES

server.use(express.json());
server.use(morgan('dev'));
server.use(cors());
server.use(helmet());

server.use('/firstname', firstnameRouter);

// *** TEST ENDPOINT

server.get('/', (req, res) => {
  res.send('<h1>Success!</h1>');
});

module.exports = server;
