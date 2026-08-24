//object destructuring is a way to extract properties from an object and assign them to variables


const course = {
    coursname: "JavaScript",
    price: 1000,
    duration: "3 months",
    instructor: "Siddharth"
}

//course.instructor

const{instructor:inst} = course

console.log(inst);





//api concept is a way to communicate between two applications or systems. It allows one application to access the functionality or data of another application through a set of defined rules and protocols. APIs can be used for various purposes, such as retrieving data from a server, sending data to a server, or integrating different applications together.

