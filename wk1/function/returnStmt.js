"use strict";

/**
 * Return statement
 *
 * @scenario
 * 1. Return a single primitive value
 * 2. Returns an expression [that evaluates to a value]
 * 3. Return an object type
 * 4. Return a function itself
 * 5. Return statement in conditional statement
 */

//Returning a function
//function addTwoNum(num1, num2) {
//   return num1 + num2; // Tambien puede ser return num1 + num2; sin la variable sum
// let sum = num1 + num2 
// return { total: sum }; //


// //Returning a function
// function addTwoNum(num1, num2) {
// return function () { //anonymous function
//     return num1 + num2;

// };
// }
function addTwoNum (num1, num2) {

    if (!num1){
        return
    }
    let sum = num1 + num2
    return sum
}

//Calling the function
let total = addTwoNum(5, 5);
console.log(total); // Output: The value of total is: 10
