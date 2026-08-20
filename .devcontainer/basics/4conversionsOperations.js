let score= 33

console.log(typeof score); //number
console.log(typeof(score)); //number

// both console use the typeof operator to check the type of the variable score. The output will be "number" in both cases, indicating that score is a number data type.




let scoreString = "33"

console.log(typeof scoreString); //string
console.log(typeof(scoreString)); //string

// both console use the typeof operator to check the type of the variable scoreString. The output will be "string" in both cases, indicating that scoreString is a string data type.





let valueInNumber= Number(scoreString)
console.log(typeof valueInNumber); //number
console.log(valueInNumber);

// The console uses the Number() function to convert the string scoreString to a number. The output will be "number", indicating that valueInNumber is now a number data type.




let scores= null
console.log(typeof scores); //object
console.log(scores); //null

// The console uses the typeof operator to check the type of the variable scores. The output will be "object", indicating that scores is an object data type. However, the value of scores is null, which represents the absence of any value or object.





let scorees= undefined
console.log(typeof scorees); //undefined
console.log(scorees); //undefined

// The console uses the typeof operator to check the type of the variable scorees. The output will be "undefined", indicating that scorees is an undefined data type. The value of scorees is also undefined, which means it has not been assigned a value yet.







// "33" => 33
let scoreString1 = "33"
let valueInNumber1= Number(scoreString1)
console.log(typeof valueInNumber1); //number
console.log(valueInNumber1); //33

// The console uses the Number() function to convert the string scoreString1 to a number. The output will be "number", indicating that valueInNumber1 is now a number data type. The value of valueInNumber1 will be 33, which is the numeric representation of the string "33".







//"33abc" => NaN
let scoreString2 = "33abc"
let valueInNumber2= Number(scoreString2)
console.log(typeof valueInNumber2); //number
console.log(valueInNumber2); //NaN

// The console uses the Number() function to convert the string scoreString2 to a number. The output will be "number", indicating that valueInNumber2 is a number data type. However, since the string contains non-numeric characters, the conversion results in NaN (Not-a-Number), which is a special numeric value representing an invalid number.





//true => 1; false => 0
let booleanValue1 = true
let booleanValue2 = false

let numberFromBoolean1 = Number(booleanValue1)
let numberFromBoolean2 = Number(booleanValue2)

console.log(typeof numberFromBoolean1); //number
console.log(numberFromBoolean1); //1

console.log(typeof numberFromBoolean2); //number
console.log(numberFromBoolean2); //0

// The console uses the Number() function to convert the boolean values true and false to numbers. The output will be "number" for both conversions, indicating that numberFromBoolean1 and numberFromBoolean2 are now number data types. The value of numberFromBoolean1 will be 1 (the numeric representation of true), and the value of numberFromBoolean2 will be 0 (the numeric representation of false). 





