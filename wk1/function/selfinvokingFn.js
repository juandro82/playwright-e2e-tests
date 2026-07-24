"use strict";

//Self invoking function

(function addTwoNum (num1, num2) {
    let sum = num1 + num2
    console.log(sum); // Output: 10
    return sum
})(5, 5)

(function greet(name, greeting = "Hello") { // Default parameter value for greeting is "Hello"
    console.log(`${greeting} , ${name}!`); // Output: Hello , Alice!
    
})( "Alice");