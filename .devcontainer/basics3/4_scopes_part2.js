function one() {
    const username = "Siddharth"

    function two() {
        const website = "Siddharth.com"
        console.log(username);

        console.log(website);
    }
    console.log(website); // ReferenceError: website is not defined
    two()
}
//one()



if (true) {
    const username = "Siddharth"
    if(username === "Siddharth") {
        const website = "Siddharth.com"
        console.log(username + website);
    }
    console.log(username);
}









// **************************Interesting Example**************************
function addone(num) {
    return num + 1
}
addone(5) // 6



const addtwo = function(num) {
    return num + 2
}

addtwo(5) // 7