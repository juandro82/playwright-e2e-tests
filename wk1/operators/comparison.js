// Use case 1: == vs ===

let a = 1
let b = 1

console.log(a == b); // Output: true
console.log(a === b); // Output: true

let c = "1"
let d = 1

console.log(c == d); // Output: true
console.log(c === d); // Output: false

let e = "One"
let f = 1

console.log(e == f); // Output: false
console.log(e === f); // Output: false
console.log(+"One"); // Output: NaN

// Not equal


console.log(1 !== 2); // Output: true   