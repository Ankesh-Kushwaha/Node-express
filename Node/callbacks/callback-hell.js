const fs = require('fs');

fs.readFile('index.txt', (err,data) => {
  if (err) {
    console.log("Error during reading file:", err);
    return;
  }
  
  const fileData = data.toString().toUpperCase();
  const modifieData = fs.writeFile('output.txt', fileData, (err) => {
    if (err) {
      console.log("error during writing file:", err);
      return;
    }
    console.log("file written suceesfully");

    fs.readFile('output.txt','utf8', (err, data) => {
      if (err) {
        console.log("error during reading output file:", err);
        return;
      }
      console.log(data);
    })
  })
})