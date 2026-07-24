
let windows = ["Google", "Amazon", "Youtube"]

// () => Callback function
// windows.forEach((val) => {
//     console.log(val); // Output: Google, Amazon, Youtube
// })

   windows.forEach((val, index, arr) => {
   console.log(val); // Output: Google, Amazon, Youtube
   console.log(index); // Output: 0, 1, 2
   console.log(arr); // Output: ["Google", "Amazon", "Youtube"]
});