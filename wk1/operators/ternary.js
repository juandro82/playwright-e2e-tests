// USe case Set log level for different run environment

// Basic use
// let runner = "local"
// let loglevel = runner === "local" ? "Info" : "Error"
// console.log(loglevel); // Output: The log level is: Info

// let runner2 = "remote"
// let loglevel2 = runner2 === "local" ? "Info" : "Error"
// console.log(loglevel2); // Output: The log level is: Error

// Advanced use

let runner = "remote"
let loglevel = runner === "local" ? "Info" : runner === "cloud" ? "Silent" : "Error"
console.log(loglevel); // Output: The log level is: Error

let runner2 = "local"
let loglevel2 = runner2 === "local" ? "Info" : runner2 === "cloud" ? "Silent" : "Error"
console.log(loglevel2); // Output: The log level is: Info