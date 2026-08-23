// ******************************************************************NUMBERS************************************************************************



const score = 400
console.log(score);// 400


const balance = new Number(1000) // it will create a number object.
console.log(balance);// it will return the number object.
console.log(balance.valueOf());// it will return the primitive value of the number object.


console.log(balance.toString().length);// it will return the number as a string.
console.log(balance.toFixed(2));// it will return the number as a string with 2 decimal places.


const otherBalance = 1000.123456789
console.log(otherBalance.toPrecision(7));// it will return the number as a string with 7 significant digits.


const hundred = 1000000
console.log(hundred.toLocaleString('en-IN'));// it will return the number as a string with currency format.




//******************************************************MATHS******************************************************/



console.log(Math);

console.log(Math.abs(-13.54));// it will return the absolute value of the number.it change the negative number to positive number.

console.log(Math.round(4.7));// it will return the rounded value of the number.

console.log(Math.floor(4.7));// it will return the rounded down value of the number.

console.log(Math.ceil(4.7));// it will return the rounded up value of the number. if .4 it will return 5. beacause it will round up the number.



// Math.random() will return a random number between 0 and 1. it will return a decimal number.
console.log(Math.random());

const randomNumber = Math.floor(Math.random() * 10) + 1; // it will return a random number between 1 and 10.
console.log(randomNumber);



const min = 19;
const max = 57;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // it will return a random number between 19 and 57.



// it will return a random number between min and max. it will return a whole number.
// Math.floor() will round down the number. it will return a whole number.
// Math.random() will return a random number between 0 and 1. it will return a decimal number.
// Math.random() * (max - min + 1) will return a random number between 0 and (max - min + 1). it will return a decimal number.
// Math.floor(Math.random() * (max - min + 1)) will return a random number between 0 and (max - min + 1). it will return a whole number.
// Math.floor(Math.random() * (max - min + 1)) + min will return a random number between min and max. it will return a whole number.
//