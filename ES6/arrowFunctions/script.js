// ES5
// function add(x, y ) {
//   return x + y;
// }
// ES6
let add = (x, y) => x + y;

// ES5
// let square = function (x) {
//   return x * x;
// }
// ES6
let square = x => x * x;
// ES5
// let giveMeAnswer = function () {
//   return 42;
// }
// ES6
let giveMeAnswer =  () => 42;


console.log(add(2, 5));
console.log(square(3));
console.log(giveMeAnswer());
