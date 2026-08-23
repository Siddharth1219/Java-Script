//******************Arrays******************* */


//array is a collection of data items of the same type. It is a data structure that can hold more than one value at a time. Each item in an array is called an element, and each element has a numeric position known as its index. The first element in an array is at index 0, the second element is at index 1, and so on.
//it is used to store multiple values in a single variable.
//its index starts from 0.

//deep copy is a copy of an object or array that is completely independent of the original object or array. It creates a new object or array with the same values as the original, but any changes made to the new object or array do not affect the original.



const myArr = [16, 82, 43, 74, 15];

console.log(myArr); // it will return the array.
console.log(myArr[0]); // it will return the first element of the array.
console.log(myArr[4]); // it will return the fifth element of the array.




const myheroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"];

console.log(myheroes); // it will return the array.
console.log(myheroes[1]); // it will return the second element of the array.
console.log(myheroes[3]); // it will return the fourth element of the array.




//****************************************Array Methods******************************



//1. push() method: it is used to add one or more elements to the end of an array and returns the new length of the array.
const fruits = ["Apple", "Banana", "Mango"];
fruits.push("Orange");
console.log(fruits); // it will return the array with the new element added at the end.




//2. pop() method: it is used to remove the last element from an array and returns that element.
const vegetables = ["Carrot", "Potato", "Tomato"];
const removedElement = vegetables.pop();
console.log(vegetables); // it will return the array with the last element removed.
console.log(removedElement); // it will return the removed element.



console.log("this is the array:", myArr); // it will return the array.

myArr.unshift(99); // it will add the element 99 at the beginning of the array.
console.log(myArr); // it will return the array with the new element added at the beginning.

myArr.shift(); // it will remove the first element of the array.
console.log(myArr); // it will return the array with the first element removed.



console.log(myArr.includes(8)); // it will return true if the element is present in the array, otherwise false.
console.log(myArr.includes(82)); // it will return false if the element is not present in the array.


const newArr = myArr.join()

console.log(myArr);
console.log(newArr); // it will return a string with all the elements of the array joined together, separated by commas.




//slice() method: it is used to return a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.
const animals = ["Dog", "Cat", "Elephant", "Lion", "Tiger"];
const newAnimals = animals.slice(1, 4); // it will return a new array with elements from index 1 to index 3.
console.log(newAnimals); // it will return the new array.
console.log(animals); // it will return the original array.



//*****splice() method: it is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place. It modifies the original array and returns an array containing the deleted elements.
const colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
const removedColors = colors.splice(2, 2, "Orange", "Pink"); // it will remove 2 elements from index 2 and add 2 new elements at index 2.
console.log(colors); // it will return the modified array.
console.log(removedColors); // it will return the removed elements.