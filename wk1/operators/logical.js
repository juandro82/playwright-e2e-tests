
//Use case 1 And operator
let val = "Monday";
if (typeof val === "string" && val.length > 1) {
    console.log(`Given value : ${val} is valid string`);
} else {
    console.log(`Given value : ${val} is not a valid string`);
}