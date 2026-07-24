// Logical OR operator (||) returns true if either of the operands is true. If both are false, it returns false.    

let day = ""
if (day === "Saturday" || day === "Sunday") {
    console.log(`Given day : ${day} is a weekend`);
} else {
    console.log(`Given day : ${day} is a weekday`);
}

//En este ejemplo es weekday porque day es un string vacío, que es falsy. Por lo tanto, la condición del if es false y se ejecuta el else.

let day1 = "Monday"
if (day1 === "Saturday" || day1 === "Sunday") {
    console.log(`Given day : ${day1} is a weekend`);
} else {
    console.log(`Given day : ${day} is a weekday`);
}
