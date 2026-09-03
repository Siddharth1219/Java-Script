const user = {
    username: "Siddharth",
    price: 100,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to websitee`);    //this is used to access the object properties
    }
}

//current context is the user object, so this.username refers to the username property of the user object

user.welcomeMessage(); // Output: Siddharth, welcome to websitee



user.username = "John"; // changing the username property of the user object

user.welcomeMessage(); // Output: John, welcome to websitee



console.log(this); // Output: {} (in strict mode) or the global object (in non-strict mode)







/*function chai() {
    console.log(this); // Output: undefined (in strict mode) or the global object (in non-strict mode)
}

chai(); */




const chai = () => {
    let username = "Siddharth";
    console.log(this.username); // Output: undefined (in strict mode) or the global object (in non-strict mode)
}

chai(); // Output: undefined (in strict mode) or the global object (in non-strict mode)










//**********************Arrow functions do not have their own 'this' context. Instead, they inherit 'this' from the surrounding lexical scope. In this case, the surrounding scope is the global context, so 'this.username' is undefined because there is no 'username' property in the global object.**/

() =>{} //Arrow function with no parameters and no body


const arrowFunction = (num1, num2) => {
    return num1 + num2;
}

console.log(arrowFunction(5, 10)); // Output: 15


//implicit return in arrow function

const arrowFunction2 = (num1, num2) => num1 + num2;

console.log(arrowFunction2(50, 10)); // Output: 15