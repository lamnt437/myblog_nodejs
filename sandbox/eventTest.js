
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('crazyEvent', (arg) => {
    console.log("Get crazy! ", arg);
});

emitter.emit('crazyEvent', {
    id: "1",
    message: "Hello, let's get crazy!"
});

// logger
// Raise: logging (data: message)
// Handle:

emitter.on('logging', (arg) => {
    console.log("Logging", arg);
})

emitter.emit('logging', { data: 123, message: 'invalid data'});