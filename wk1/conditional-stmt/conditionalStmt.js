// USe case 1: Just If statement
// let popupExist = true
// if (popupExist === true) console.log(`>>> Perform click action...`);

// // USe case 2: Just If (NOT) - Checking for falsy values
// //Undefined falsy value
// let data
// if (!data) throw Error (">>> No valid data provided")

// Aqui nmo sale nada porque no se cumple la condicion, ya que data2 tiene un valor asignado
// let data2 = "PASS"
// if (!data2) throw Error (">>> No valid data provided")

// Use case 3: else if file exist read the file, else create the file
// let fileExist = "Y"

// if (fileExist === "Y") {
//     console.log(`>>> Read the file...`);
// }else {
//     console.log(`>>> Create the file...`);
// }

// Use case 4: if else if ... Nested Conditions ... Act based on list conditions

// let err = "DataValidation"

// if (err === "Error") {
//     console.log (`>>> Retry...`);
// } else if (err === "AssertionError") {
//     console.log (`>>> Fail the test...`);

// } else if (err === "DataValidation") {
//     console.log (`>>> Read the test data file...`);
// } else {
//     console.log (`>>> Print Error message ...`);
// }


// Use case 5: if else (Inner Conditions): Quering a database for test data

// let isSuccess = true

// if (isSuccess === true) {
//     console.log(`>>> Staring the db values...`);
// } else {
//     console.log(`No data received from the db...`);
//     let errorCode = "ACCEPT"
//     if (errorCode === "ACCEPT") {
//         console.log(`>>> Continue the execution...`);
//     }else {
//         console.log(`>>> Fail the test...`);
//     }
// }

// Use case 6: if in loops

for (let i = 1; i <=10; i++) {
    if (i===6) break
    console.log(i); // Output: 1, 2, 3, 4, 5
}
console.log(`>>> After the for loop...`);