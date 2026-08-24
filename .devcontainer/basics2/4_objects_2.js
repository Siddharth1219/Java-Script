//const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Siddharth";
tinderUser.isLoggedIn = false;






//console.log(tinderUser);

const regularUser = {
    email : "Siddharth@gmail.com",
    fullname: {
        userFullName : {
            firstName : "Siddharth",
            lastName : "Yadav"
        }
    }
}
console.log(regularUser.fullname.userFullName.firstName); //Siddharth
console.log(regularUser.fullname.userFullName.lastName); //Yadav




const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

//const obj3 = Object.assign({}, obj1, obj2); //assign is used to merge two objects into one object. The first parameter is the target object, and the rest are source objects. In this case, we are creating a new empty object {} as the target and merging obj1 and obj2 into it.
//console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


const obj3= {...obj1, ...obj2}; //spread operator is used to merge two objects into one object. The spread operator takes all the properties of the source objects and adds them to the target object. In this case, we are creating a new empty object {} as the target and merging obj1 and obj2 into it.
console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users = [
    {
        id: "01",
        email: "siddharth@gmail.com",
        name: "Siddharth",
        address: "India"
    },
    {
        id: "02",
        email: ""
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //['id', 'name', 'isLoggedIn'] //Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
console.log(Object.values(tinderUser)); //['123abc', 'Siddharth', false] //Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.
console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Siddharth' ], [ 'isLoggedIn', false ] ] //Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop.
