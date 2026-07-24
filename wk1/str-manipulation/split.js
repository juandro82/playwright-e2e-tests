let tstamp = "2022-02-26T10:51:52.2072";
let str = "Hello World";
let filename = "invoice _123.pdf";

// Get only the date part of the timestamp
let dtArr = tstamp.split("T")
console.log(dtArr[0])// Output: 2022-02-26

// Split by space/first or last char
let arr = str.split("d")
console.log(arr)// Output: "Hello Worl"

// Get only the filename
let fileArr = filename.split(".")
console.log(fileArr[0])// Output: invoice _123