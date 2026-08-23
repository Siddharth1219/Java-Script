const name = "siddharth"
const repoCount = 50

//console.log(name + repoCount + " Value");   ***normaly we can use this but it is not a good practice to use this because it is not readable and also it is not easy to maintain. so we can use template literals to make it more readable and maintainable.

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);



const gameName = new String('Call of Duty')// it will create a string object.
console.log(gameName);// it will return the string object.
console.log(gameName[0]);// it will return the first character of the string.



console.log(gameName.length);// it will return the length of the string.
console.log(gameName.toUpperCase());// it will return the string in uppercase.



console.log(gameName.charAt(2));   // it will return the character at index 2 of the string.
console.log(gameName.indexOf('t'));// it will return the index of the first occurrence of the character 't' in the string.



const newString = gameName.substring(0, 4);
console.log(newString); // it will return the string from index 0 to index 4 but not including index 4.


const newString2 = gameName.slice(-12, 2);
console.log(newString2); // it will return the string from index -12 to index 2 but not including index 2.



const newString3 = "    Siddharth    "
console.log(newString3); // it will return the string with leading and trailing spaces.
console.log(newString3.trim()); // it will return the string with leading and trailing spaces removed.



const url = "https://www.google.com/search?q=javascript+string+methods"
const newUrl = url.replace("https://www.google.com", "https://www.bing.com");
console.log(newUrl); // it will return the new url with the replaced string.


console.log(url.includes("javascript")); // it will return true if the string includes the specified string otherwise it will return false.
console.log(url.split("?"));