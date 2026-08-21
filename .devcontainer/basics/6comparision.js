console.log(2 > 4); //false
// 1  The console uses the greater than operator (>) to compare the values 2 and 4. The output will be false, indicating that 2 is not greater than 4.

console.log(2 < 4); //true
// 2  The console uses the less than operator (<) to compare the values 2 and 4. The output will be true, indicating that 2 is less than 4.

console.log(2 >= 4); //false
// 3  The console uses the greater than or equal to operator (>=) to compare the values 2 and 4. The output will be false, indicating that 2 is not greater than or equal to 4.

console.log(2 <= 4); //true
// 4  The console uses the less than or equal to operator (<=) to compare the values 2 and 4. The output will be true, indicating that 2 is less than or equal to 4.

console.log(2 == 4); //false
// 5  The console uses the equality operator (==) to compare the values 2 and 4. The output will be false, indicating that 2 is not equal to 4.

console.log(2 != 4); //true
// 6  The console uses the inequality operator (!=) to compare the values 2 and 4. The output will be true, indicating that 2 is not equal to 4.

console.log("2" > 1); //true
console.log("02" > 1); //true
// 7  The console uses the greater than operator (>) to compare the string "2" and the number 1. The output will be true, indicating that "2" is greater than 1 when compared as a number.

console.log("2" < 1); //false
// 8  The console uses the less than operator (<) to compare the string "2" and the number 1. The output will be false, indicating that "2" is not less than 1 when compared as a number.

//always use same data type for comparison to avoid unexpected results.**********************



// ****** we not used the comparision of null and undefined with number because it will give unexpected results.**********


console.log(null > 0); //false
console.log(null < 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
// 9  The console uses the greater than operator (>), less than operator (<), and equality operator (==) to compare the value null with the number 0. The output will be false for all three comparisons, indicating that null is not greater than, less than, or equal to 0.


console.log(undefined > 0); //false
console.log(undefined < 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false
// 10  The console uses the greater than operator (>), less than operator (<), and equality operator (==) to compare the value undefined with the number 0. The output will be false for all three comparisons, indicating that undefined is not greater than, less than, or equal to 0.


// ===
console.log(2 === 2); //true
// 11  The console uses the strict equality operator (===) to compare the values 2 and 2. The output will be true, indicating that both values are equal and of the same type.

console.log(2 === "2"); //false
// 12  The console uses the strict equality operator (===) to compare the number 2 and the string "2". The output will be false, indicating that the values are not equal because they are of different types.

console.log(2 !== "2"); //true
// 13  The console uses the strict inequality operator (!==) to compare the number 2 and the string "2". The output will be true, indicating that the values are not equal because they are of different types.

