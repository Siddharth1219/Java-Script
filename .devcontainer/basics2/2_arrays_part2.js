const marvel = ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Hawkeye'];
const dc = ['Batman', 'Superman', 'Wonder Woman', 'Flash', 'Green Lantern', 'Aquaman'];

// Combine the two arrays into a single array called 'heroes'
const heroes = marvel.concat(dc);

// Log the combined array to the console
console.log(heroes);

//*****concat() method: it is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.



//*****spread operator: it is used to spread the elements of an array into a new array or function call.

const allHeroes = [...marvel, ...dc];

// Log the combined array using the spread operator to the console
console.log(allHeroes);




const anotherArray = [1, 2, 3, 4, 5,[6,7,8,9,[10,11,12,[13,14,15]]]];
const usable_array = anotherArray.flat(3); // it will flatten the array up to 3 levels deep.
console.log(usable_array); // it will return the flattened array.


console.log(Array.isArray("Siddhartha")); // it will return false.
console.log(Array.from("Siddhartha")); // it will return an array with each character of the string as an element of the array.


//Interesting part of the Array.from() method is that it can also be used to convert an object into an array. The object must have a length property and indexed elements.
console.log(Array.from({name : "Siddhartha", age: 25})); // it will return an array with the values of the object as elements of the array.


let score1= 100
let score2= 200
let score3= 300

console.log(Array.of(score1, score2, score3)); // it will return an array with the values of the variables as elements of the array.