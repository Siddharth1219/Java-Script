// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack(primitive) and heap(non-primitive) memory allocation

//stack memory allocation is used for static memory allocation, which means that the memory is allocated at compile time. It is used for storing primitive data types like numbers, strings, and booleans. The stack has a limited size and is managed by the operating system. When a function is called, its local variables are pushed onto the stack, and when the function returns, the memory is popped off the stack.

//heap memory allocation is used for dynamic memory allocation, which means that the memory is allocated at runtime. It is used for storing non-primitive data types like objects and arrays. The heap has a larger size than the stack and is managed by the programmer. When an object or array is created, it is allocated on the heap, and when it is no longer needed, it must be manually deallocated to free up memory.



// **********For Example**********



let name = "Siddhartha"; // stored in stack memory

let anothername = "SiddharthYadav"; // stored in heap memory
anothername ="Chaiaurcode"; // stored in heap memory

console.log(anothername); // Output: Chaiaurcode
console.log(name); // Output: Siddhartha





// ******************For Example******************





let user = {
    name: "Siddhartha", // stored in heap memory
    age: 20, // stored in heap memory
    city: "New York" // stored in heap memory
};

console.log(user.name); // Output: Siddhartha
console.log(user.age); // Output: 20
console.log(user.city); // Output: New York