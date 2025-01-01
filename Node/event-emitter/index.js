const EventEmitter = require('events');

const myfirstEmitter = new EventEmitter();

//register a listener
myfirstEmitter.on('greet', (name) => {
  console.log('Hello', name);
})

//emit an event
myfirstEmitter.emit('greet', 'Ankesh Kushwaha'); 

