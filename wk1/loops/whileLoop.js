//Do something while a condition is true
let count = 1;  
let isDataReturned = false;

// while (true) {
//     console.log(count);
//     if (count === 10) break;// break the loop when count is 10
    
//     count++;
// }

while (isDataReturned === false && count <= 10) {
    console.log(count);
    // if (count == 5) {
    //     // we got an api response
    //     isDataReturned = true;// break the loop when count is 5
    // }
    count++;

}