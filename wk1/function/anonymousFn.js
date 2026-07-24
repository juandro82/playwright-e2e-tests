// Anonymous function (Function Expression)

"use strict";

// 1. Function without a name is assigned to a variable

let addTwoNum = function(num1, num2) { //No name is provided for the function, it is an anonymous function
    let sum = num1 + num2
    return sum
}
console.log(typeof addTwoNum) // Output: function

// another way to write an anonymous function is using arrow function

let val = addTwoNum(5, 5) // This will return 10 but we are not storing it anywhere
console.log(val) // Output: 10

//Another valid way to write an anonymous function is using named function expression, the function has a name but it is not accessible outside of the function

let sumFn = function addTwoNum(num1, num2) { //This is a named function expression, the function has a name but it is not accessible outside of the function
    let sum = num1 + num2
    return sum
}

let val = sumFn(5, 5) // This will return 10 but we are not storing it anywhere
console.log(val) // Output: 10
