//Dates

let myDate = new Date();

console.log(myDate); // it will return the current date and time.

console.log(myDate.toString());//  Mon Oct 02 2023 12:00:00 GMT+0530 (India Standard Time)

console.log(myDate.toDateString());// Mon Oct 02 2023

console.log(myDate.toTimeString());// 12:00:00 GMT+0530 (India Standard Time)

console.log(myDate.toLocaleString());// 2/10/2023, 12:00:00 PM



console.log(typeof myDate); // object




let myCreatedDate = new Date(2026, 4, 23);
console.log(myCreatedDate.toDateString()); // it will return the date and time of the created date.




let datetime = new Date(2026, 4, 23, 10, 33, 30);
console.log(datetime.toString()); // it will return the date and time of the created date and time.





let datetime1 = new Date("2023-01-30");
console.log(datetime1.toString()); // it will return the date and time of the created date and time.





let mytimestamp = new Date()
console.log(datetime1.getTime()); // it will return the current date and time.
console.log(mytimestamp.getTime()); // it will return the timestamp of the current date and time.




newDate.toLocaleString('default',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZoneName: 'short',

})