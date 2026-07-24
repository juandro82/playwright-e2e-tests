"use strict";

// Extract only yy-mm-dd from the date string 0 index
// Extract year 4 digits - 0 index
// Extract month - 5 index
// Extract date - 8 index

let dt = "2022-02-26"

// Extract only yy-mm-dd
let yymmdd = dt.slice(2)
console.log(yymmdd); // Output: 22-02-26

// Extract year 4 digits 
let year = dt.slice(0, 4) //( No incluye el ultimo index)
console.log(year); // Output: 2022 

// Extract month
let month = dt.slice(5, 7)
console.log(month); // Output: 02

// Extract date
//let date = dt.slice(8, 10)
//let date = dt.slice(8)
let date = dt.slice(-2) // Extrae los ultimos 2 caracteres

console.log(date); // Output: 26