let a = 10
const b = 20
var c = 30

if (true) {
    let a =4000
    const b = 3942
    console.log("Inner block scope:", a);
}

console.log(a, b, c) // 10 20 30

console.log(a)
console.log(b)
console.log(c)

// scope is a region of the code where a variable is defined and can be accessed. In JavaScript, there are three types of scope: global scope, function scope, and block scope.
// Global scope: Variables defined outside of any function or block have global scope and can be accessed from anywhere in the code.
// Function scope: Variables defined inside a function have function scope and can only be accessed within that function.
// Block scope: Variables defined inside a block (e.g., inside an if statement or a loop) have block scope and can only be accessed within that block.
// In this example, a is defined in the global scope, b is defined in the block scope, and c is defined in the function scope. Therefore, a can be accessed from anywhere in the code, b can only be accessed within the block where it is defined, and c can only be accessed within the function where it is defined.

