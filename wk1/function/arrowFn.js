

// function addTwoNum (num1, num2) {
//     let sum = num1 + num2
//     return sum
// }

// Case 1 Convert a normal function to an arrow function

let sum = (num1, num2) => {
     let sum = num1 + num2
     return sum
 };

 let total = sum (2,2)
 console.log(total); // Output: 4

// Case 2 no parameters

let arrowFn =() => 10 > 5
let res = arrowFn() // Output: true
console.log(res); // Output: true

// Case 3 single parameter

let greet = (name) => console.log(`Hello, ${name}!`);
greet("Alice"); // Output: Hello, Alice!

// Case 4 More than one parameter (single and more then one statement)

let sum = (num1, num2) => num1 + num2;
let total = sum(5, 5);
console.log(total); // Output: The value of total is: 10
