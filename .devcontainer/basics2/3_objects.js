//singleton is a design pattern that restricts the instantiation of a class to one "single" instance. This is useful when exactly one object is needed to coordinate actions across the system.

//************object literals**********

//object literals are a way to define objects in JavaScript using a simple syntax. They allow you to create objects with properties and methods without the need for a constructor function or class.



const mySym = Symbol("key1") //symbol is a unique and immutable primitive value that can be used as a key for object properties. Symbols are often used to create private or hidden properties in objects, as they are not enumerable and cannot be accessed using standard property access methods.

const JsUser= {
name: "Siddharth",
"full name" : "Siddharth O'brien",
[mySym] : "Value of my Symbol",        //used as symbol key
age : 25,
location: "India",
email :"siddharth.obr@gmail.com",
isloggedIn : false,
lastLoginDays : ["Monday", "Tuesday", "Wednesday"]
}

console.log(JsUser.name)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(typeof JsUser[mySym])
console.log(JsUser[mySym])

JsUser.email = "sidd@chatgpt.com"
//Object.freeze(JsUser) //freeze the object so that it cannot be modified
JsUser.email = "newemail@chatgpt.com"
console.log(JsUser.email) //email will not change because the object is frozen

console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello git hub Baby");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}
//console.log(JsUser.greeting);  // undefined because the function is not called//
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());  // Hello JS user, Siddharth