const path = require('path');

console.log("Directory name:", path.dirname(__filename)); //use for accesing directory name
console.log("File name:", path.basename(__filename)); //use for accessing the file name;
console.log('file extension:', path.extname(__filename));//use for accessing file extension;

const joinPath = path.join('/user', 'documents', 'downloads', 'index.html');
console.log('join path:', joinPath)  //use for joining path;

const resolvePath = path.resolve('path_module', joinPath);
console.log('resolve path :', resolvePath)

const normalise = path.normalize('path_module//index.js');
console.log('normalise path:', normalise);