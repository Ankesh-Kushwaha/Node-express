console.log('Node module wrapper demo');

console.log('__filename in wrapper-explorer', __filename);
console.log('__dirname in wrapper-explorer', __dirname);


module.exports.greet = function (name) {
  console.log(`hello happy new year Ankesh Kushwaha :${name}`);
}
