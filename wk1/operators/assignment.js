// Use case 1_ Basic
let a=1

// // Use case 2 : Chaining
let x= y = 1
console.log(x);
console.log(y);


// Use case 3: +=
let start = 5
for (let i=1; i<5; i++) {
    start = start + i;
    start += i; // same as start = start + i
    console.log(i);
}