function calculateCartPrice(...num1) {       //...num1 rest operator is used to collect all the arguments passed to the function into an array called num1. This allows the function to accept any number of arguments and treat them as an array.
    return num1

}


console.log(calculateCartPrice(100,290,456)) // [100, 290, 456]



const user={
    userName:"John",
    price: 100
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.userName}and price is ${anyobject.price}`  ) // John
}

handleobject(user) // Username is John and price is 100