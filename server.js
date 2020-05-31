const express = require('express');

const projectRouter = require('./routers/projectRouter.js');
// const actionRouter = require('./routers/actionRouter.js');

const server = express();

server.use(express.json());

server.use('/api/projects', logger, projectRouter);

server.use(logger);

server.get('/', (req, res) => {
    res.send(`<h1> Welcome! </h1> <h3> I have so much to show you today! </h3>`);
});

function logger(req, res, next) {
    console.log(`[${new Date().toISOString()}] : ${req.method} request to ${req.originalUrl}`);
    next();
};

module.exports = server;