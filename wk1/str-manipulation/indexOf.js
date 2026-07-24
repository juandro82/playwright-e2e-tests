"use strict";

let str = "App # {12345} submitted"
let start = str.indexOf("{")
console.log(start) // Output: 6

let end = str.indexOf("}")
console.log(end) // Output: 12
let appNum = str.slice(start + 1, end)
console.log(appNum) // Output: 12345
