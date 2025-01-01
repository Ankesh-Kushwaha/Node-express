
function delayFn(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

console.log('promise lacture starts:');
delayFn(2000).then(() => console.log('after 2 sec promise resolve'));
console.log('end');

function divideFn(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject('cannot divide by zero');
    }
    else {
      resolve(num1 / num2);
    }
    })
}

divideFn(10, 0).then((result) => (console.log(result))).catch((err) => (console.log(err)));