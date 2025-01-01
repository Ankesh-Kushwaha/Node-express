const EventEmitter = require('events');

class mycustomEmitter extends EventEmitter{
  constructer() {
   // super();
    this.gretting = 'Hello';
  }

  greet(name) {
    this.emit('greeting', `${this.greeting} ${name}`);
  }
}



mycustomEmitter.on('greeting', (data) => {
  console.log('greeting event', data);
})

mycustomEmitter.greet('Ankesh Kushwaha');