const express = require('express');

const clientsRouter = require('../clients/clients-router.js');

const server = express();

server.use(express.json());
server.use('/api/clients', clientsRouter);

module.exports = server;
