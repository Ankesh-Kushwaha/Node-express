//module.exports ->exporst the file from a module;
//require is use to import the file from a module;
//module.exports = {key:value} -> exports the object from a module;
//require('module') -> imports the object from a module;

//module wrapper function ;
// (function (exports, require, module, __filename, __dirname)

// (
//   function (exports, require, module, __filename, __dirname) {
//       //your module codes goes here;
//   }
// )

const firstmodule = require('./firstmodule');
console.log(firstmodule.add(2, 3));
console.log(firstmodule.sub(5, 9));

try { 
  console.log('trying to divide by 0');
  let result = firstmodule.divide(10, 0);
  console.log(result);
} catch (error) 
{ 

  console.log(error.message);
 };

// console.log(firstmodule.divide(10, 0));