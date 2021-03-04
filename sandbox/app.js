
const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

// register a listener
logger.on('messagelogged', (arg) => {
    console.log('app.js heard:', arg);
});

logger.log("Logger is working");