"use strict"; //treat all JS code as newer version

// alert("Hello World!"); //pop up an alert on the screen , we are using nodejs, not browser, so this will not work.

console.log(3+3); //print to console.

//always use another console.log() to another  line make a good practice to keep code readable

// not used this type of  like console.log(3+3);console.log(4+4);console.log(5+5); //not a good practice

// use the documentation in mnd like alert etc. to know more about the methods and functions available in JS


//Data types in JS

//1. String
let name = "Siddharth"; // String datatype

//2. Number
let age = 25; // Number datatype

//3. Boolean
let isStudent = true; // Boolean datatype

//4. Undefined
let address; // Undefined datatype

//5. Null
let city = null; // Null datatype

//6. Object
let person = {
    firstName: "Siddharth",
    lastName: "Obr",
    age: 25
}; // Object datatype

//7. Array
let hobbies = ["reading", "traveling", "coding"]; // Array datatype

console.log(typeof name); // String
console.log(typeof age); // Number
console.log(typeof isStudent); // Boolean
console.log(typeof address); // Undefined
console.log(typeof city); // Object (null is considered an object in JS)
console.log(typeof person); // Object
console.log(typeof hobbies); // Object (arrays are also considered objects in JS)

//8. bigint
let bigNumber = 1234567890123456789012345678901234567890n; // BigInt datatype
console.log(typeof bigNumber); // BigInt

//9. Symbol
let uniqueId = Symbol("id"); // Symbol datatype
console.log(typeof uniqueId); // Symbol

//10. Function
function greet() {
    return "Hello, World!";
} // Function datatype
console.log(typeof greet); // Function

