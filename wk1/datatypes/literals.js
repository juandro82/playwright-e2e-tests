//string
let str = 'Hello'
let str1 = "Hello"
let str3 = `$(str), World!` //template literal
console.log(str3);

//number
let num = 5
let num2 = 5.5

//boolean
let bool = true

//object
let obj = {}

//array
let arr = []

//Regexp
let re = /abc/

// undefined, null
let var1 = undefined
//let var1 solo tiene el mismo efecto
let tempObj = null

console.log(`The type of str is: ${typeof str}`); //string
console.log(`The type of number is: ${typeof num}`); //number
console.log(`The type of bool is: ${typeof bool}`); //boolean
console.log(`The type of obj is: ${typeof obj}`); //object
console.log(`The type of arr is: ${typeof arr}`); //object
console.log(`The type of re is: ${typeof re}`); //object
console.log(`The type of undefined is: ${typeof var1}`); //undefined
console.log(`The type of null is: ${typeof tempObj}`); //object