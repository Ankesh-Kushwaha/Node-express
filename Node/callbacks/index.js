const fs = require('fs');

function person(name, callbackFn) {
  console.log(`Hello ${name}`);
  callbackFn();
}

function address() {
  console.log('I am from India');
}

person('Ankesh Kushwaha', address);

fs.readFile('index.txt', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
})