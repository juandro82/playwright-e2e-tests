// for (let i = 0; i <= 10; i++) {
//     console.log(i); // Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// }

// Advanced use case with an array

let arr = ["Apple", 10, "Orange", 20, "Banana", 30 ]
//console.log (arr.length);

let sum = 0
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    let arrElem = arr[i] // This how to Declare inside the loop
    if (typeof arrElem === "number") {
        //sum = sum + arrElem // Suma los valores numero
        sum += arrElem 
        // Esta es la forma mas simple de la expresion anterior

    }
}
console.log(`>>> The value of sum is: ${sum}`);