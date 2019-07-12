const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', () => {
    console.log('Listener Called...');
})

// Signally that an event has happened.
emitter.emit('messageLogged');

// Note: Order is Important.