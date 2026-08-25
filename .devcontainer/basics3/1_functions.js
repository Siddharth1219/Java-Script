/*console.log("S");
console.log("I");
console.log("D");
console.log("D");
console.log("H");
console.log("A");
console.log("R");
console.log("T");
console.log("H");
*/

//***********FUNCTIONS**********************/

function sayMyName() {    //this is function to use to print the name
console.log("S");
console.log("I");
console.log("D");
console.log("D");
console.log("H");
console.log("A");
console.log("R");
console.log("T");
console.log("H");
}

sayMyName();  //executing the function to print the name again







function addTwoNumbers(num1, num2) {  //this is function to add two numbers   (num1 and num2 are parameters)
    console.log(num1 + num2);
}

addTwoNumbers(5, 10);  //executing the function to add two numbers (when we call the function we pass the values 5 and 10 which are called arguments)







function addNumbers(num1, num2, num3) {  //this is function to add three numbers   (num1, num2 and num3 are parameters)
    let result = num1 + num2 + num3;
    return result;  //returning the result of addition
}
const result = addNumbers(5, 10, 15);  //executing the function to add three numbers (when we call the function we pass the values 5, 10 and 15 which are called arguments)
console.log("Result:" ,result);  //printing the result of addition





function loginuser(username){
    return `${username} just logged in`;
}

//loginuser("Siddharth");  //executing the function to login user (when we call the function we pass the value "Siddharth" which is called argument)

console.log(loginuser("Siddharth"));  //printing the result of the loginuser function