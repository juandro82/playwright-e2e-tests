
// 1. Function that returns a value

function addTwoNum (num1, num2) {
    let sum = num1 + num2
    return sum
}

// 2. Function that does an action (No return action)
function click(ele) {
    console.log(`Clicking on ${ele}`);
    //ele.click() // This is a pseudo code to represent clicking on an element
}

// 3.Calling function

let total = addTwoNum(5, 5) // This will return 10 but we are not storing it anywhere
console.log(`The value of total is: ${total}`); // Output: The value of total is: 10

// 4. Any type of data can be provided and no type checking is done
let total = addTwoNum("five", "five") // This will return "55" but we are not storing it anywhere
console.log(`The value of total is: ${total}`); // Output: The value of total is: 55

// 5. More or less args can be provided

let total = addTwoNum(5)
console.log(`The value of total is: ${total}`); // Output: The value of total is: NaN

let total = addTwoNum(5,5,5)
console.log(`The value of total is: ${total}`); // Output: The value of total is: 10