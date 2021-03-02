
const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message) {
        console.log(`Logging: ${message}`);
        this.emit('messagelogged', {message: "Hello, this message is logged"});
    }
}



module.exports = Logger;