// 1. Default Parameters
function greetUser(name, greeting = "Hello") { // Default parameter value for greeting is "Hello"
    console.log(`${greeting} , ${name}`);
    
}

greetUser("John", "Hello"); // Output: Hello , John
greetUser("Jane"); // Output: Hello , Jane

// 2. Passing undefined/any falsy values if not known

function printFullname(fname, mname, lname) {
    console.log(`The full name is: ${fname} ${mname} ${lname}`);
    if (mname) {
        console.log(`The full name is: ${fname} ${mname} ${lname}`);
    }else {
        console.log(`The full name is: ${fname} ${lname}`);
    }
}

printFullname("John", "", "Doe"); // Output: The full name is: John  Doe

// 3. Passing primitives, object types as arg

function printFullname (personObj) {
    console.log(`${personObj.fname} ${personObj.mname} ${personObj.lname}`);
}

printFullname ({
    firstName: "John",
    middleName: "M",
    lastName: "Doe"
});