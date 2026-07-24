
let obj = {
    a : 10,
    b : 20,
    c : 30
}

let windows = ["Google", "Amazon", "Youtube"]

// for...in loop
for (let key in obj) {
    console.log(key); // gets all keys of the object
    console.log(obj[key]); // gets all values of the object
    console.log(key, obj[key]);// gets all keys and values of the object
}

// for...of loop
for (let value of windows) {
    console.log(value);// gets all values of the array
}