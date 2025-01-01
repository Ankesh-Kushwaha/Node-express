const fs = require('fs');
const path = require('path');

//creating a file folder synchronously if it does not exist;

const dataFolder = path.join(__dirname, 'data'); //use for joining path;

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log('data folder created');
}

const filepath = path.join(dataFolder, 'example.txt');
//sync way to create a file;
fs.writeFileSync(filepath, 'hello from node js');
console.log('file created sussceesfully');

//reading content from a file;
const readContentFromFile = fs.readFileSync(filepath, 'utf8');
console.log('file content:', readContentFromFile);

//appending an existing file with new content
fs.appendFileSync(filepath, 'this is the new line addded to this file by ankesh kushwaha');
console.log('file updated successfully');




//async way to create a file;
const asyncFilePath = path.join(dataFolder, 'asyncExample.txt');
fs.writeFile(asyncFilePath, 'hello from node js this file is created asyncronously', (err) => {
  if (err) {
    throw err;
  }
  console.log('file created asyncronously');
  
  //reading content from a file;
  fs.readFile(asyncFilePath, 'utf8', (err, data) => {
    if (err) throw err;
    console.log('file content:', data);
  })

  fs.appendFile(asyncFilePath, 'this is another line added to this file asyncronously', (err) => {
    if (err) throw err;
    console.log('file updated susscessfully');

    fs.readFile(asyncFilePath, 'utf8', (err, data) => {
      if (err) throw err;
      console.log('updated file content:', data);
    })
  })
});

