let arr=[1, 2, 3, 4, 5];

console.log(arr);

setTimeout(() => {
  console.log('this message is delayed by 2 seconds');
}, 2000)

console.log('this message is not delayed');
