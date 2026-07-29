let val1 = "5"
let val2 = "5.5"

console.log(`The type of val1: ${typeof val1}`); // string
console.log(`The type of val2: ${typeof val2}`); // string

//Convert a string to a number

// let numVal1 = parseInt(val1); // 5
// let numVal2 = parseFloat(val2); // 5.5

//Unary plus
numVal1 = +val1; // 5
numVal2 = +val2; // 5.5

console.log(`The type of numVal1: ${typeof numVal1}, and the value: ${numVal1}`); // number
console.log(`The type of numVal2: ${typeof numVal2}, and the value: ${numVal2}`); // number

// Convert to a string

let strVal = numVal1.toString(); // "5"

console.log(`The type of strVal: ${typeof strVal}, and the value: ${strVal}`); // string
