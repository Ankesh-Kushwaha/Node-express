function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function divide(a, b) {
  if (b == 0) {
    return new Error('division by zero is not allowed 0');
  }
  return a / b;
}

module.exports = {
  add,sub,divide
}