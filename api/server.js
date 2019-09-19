const express = require('express');

const clientsRouter = require('../clients/clients-router.js');
const authRouter = require('../auth/auth-router.js');

const server = express();

server.use(express.json());
server.use('/api/clients', clientsRouter);
server.use('/auth', authRouter);

module.exports = server;
