//**********************Operations in java script*************************


let value = 4
let negvalue = -value
console.log(negvalue); //-4
// The console uses the negation operator (-) to negate the value of the variable value. The output will be -4, which is the negated value of 4.



console.log(4 + 5); //9
// 1  The console uses the addition operator (+) to add the values 4 and 5. The output will be 9, which is the sum of 4 and 5.


console.log(4 - 5); //-1
// 2  The console uses the subtraction operator (-) to subtract the value 5 from 4. The output will be -1, which is the result of the subtraction.



console.log(4 * 5); //20
// 3  The console uses the multiplication operator (*) to multiply the values 4 and 5. The output will be 20, which is the product of 4 and 5.



console.log(4 / 5); //0.8
// 4  The console uses the division operator (/) to divide the value 4 by 5. The output will be 0.8, which is the result of the division.




console.log(4 % 5); //4
// 5  The console uses the modulus operator (%) to find the remainder of the division of 4 by 5. The output will be 4, which is the remainder of the division. 




console.log(4 ** 5); //1024
// 6  The console uses the exponentiation operator (**) to raise the value 4 to the power of 5. The output will be 1024, which is the result of the exponentiation.


console.log(4 == 5); //false
// 7  The console uses the equality operator (==) to compare the values 4 and 5. The output will be false, indicating that 4 is not equal to 5.



console.log(4 != 5); //true
// 8  The console uses the inequality operator (!=) to compare the values 4 and 5. The output will be true, indicating that 4 is not equal to 5.


console.log(4 > 5); //false
// 9  The console uses the greater than operator (>) to compare the values 4 and 5. The output will be false, indicating that 4 is not greater than 5.


console.log(4 < 5); //true
// 10  The console uses the less than operator (<) to compare the values 4 and 5. The output will be true, indicating that 4 is less than 5.






let str1 = "Siddharth"
let str2 = " Yadav"

let str3 = str1 + str2
console.log(str3); //Siddharth Yadav
// 11  The console uses the concatenation operator (+) to combine the strings str1 and str2. The output will be "Siddharth Yadav", which is the result of concatenating the two strings.


console.log("1" + 2); //12
// 12  The console uses the concatenation operator (+) to combine the string "1" and the number 2. The output will be "12", which is the result of concatenating the string and the number. The number 2 is implicitly converted to a string before concatenation.


console.log(1 + "2"); //12
// 13  The console uses the concatenation operator (+) to combine the number 1 and the string "2". The output will be "12", which is the result of concatenating the number and the string. The number 1 is implicitly converted to a string before concatenation.



console.log(1 + 2 + "3"); //33
// 14  The console uses the addition operator (+) to add the numbers 1 and 2, resulting in 3. Then, it uses the concatenation operator (+) to combine the result (3) with the string "3". The output will be "33", which is the result of concatenating the number 3 and the string "3".



console.log("3" + 1 + 2); //312
// 15  The console uses the concatenation operator (+) to combine the string "3" with the number 1, resulting in "31". Then, it uses the concatenation operator (+) to combine the result ("31") with the number 2. The output will be "312", which is the result of concatenating the string "31" and the number 2. The numbers are implicitly converted to strings before concatenation.



console.log(3 + 4 * 5 % 6 / 7); //3.857142857142857
// 16  The console evaluates the expression using the order of operations (PEMDAS/BODMAS). First, it calculates the multiplication (4 * 5 = 20), then the modulus (20 % 6 = 2), followed by the division (2 / 7 ≈ 0.2857142857142857). Finally, it adds the result to 3 (3 + 0.2857142857142857 ≈ 3.857142857142857). The output will be approximately 3.857142857142857.
//it is not a proper way to write these operations because it can lead to confusion and errors. It is better to use parentheses to clearly indicate the intended order of operations. For example, you could write the expression as 3 + ((4 * 5) % 6) / 7 to make it clear that the multiplication and modulus operations should be performed before the addition.




console.log(true); //true
// 17  The console simply outputs the boolean value true. The output will be true, indicating that the value is a boolean data type representing truthiness.


console.log(+true); //1
// 18  The console uses the unary plus operator (+) to convert the boolean value true to a number. The output will be 1, indicating that the boolean value true is equivalent to the number 1.


console.log(+""); //0
// 19  The console uses the unary plus operator (+) to convert the empty string "" to a number. The output will be 0, indicating that the empty string is equivalent to the number 0.






let gameCounter = 100
gameCounter++
console.log(gameCounter); //101
// 20  The console uses the increment operator (++) to increase the value of the variable gameCounter by 1. The output will be 101, indicating that the value of gameCounter has been incremented from 100 to 101.


let gameCounter2 = 100
++gameCounter2
console.log(gameCounter2); //101
// 21  The console uses the pre-increment operator (++) to increase the value of the variable gameCounter2 by 1. The output will be 101, indicating that the value of gameCounter2 has been incremented from 100 to 101.

//prefix code is used when you want to increment the value before using it in an expression, while the postfix code is used when you want to use the current value in an expression before incrementing it.



let value4 = 100;

console.log(++value); // 101: increment, then use
console.log(value++); // 101: use, then increment
console.log(value);   // 102

