// Dates

let myDate = new Date()                    
// console.log(myDate.toString());                     // Different formats to print date
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());      
// console.log(typeof myDate);                         // Date is an "object" in JS

let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());                 // O/p -> Mon Jan 23 2023
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString());               // O/p -> 1/23/2023, 5:03:00 AM
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());               // O/p -> 1/14/2023, 12:00:00 AM

// <-------------------------------- Time --------------------------------->

let myTimeStamp = Date.now()
// console.log(myTimeStamp);                                // O/p is in milisec
// console.log(myCreatedDate.getTime());                    // get time from date object , O/p is in milisec
console.log(Math.floor(Date.now()/1000));                   // to get time in seconds


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);              // numbering of months start from 0
console.log(newDate.getDay());

// This way we can customize the funcion toLocaleString() :-
newDate.toLocaleString('default', {
    weekday: "long",
})
console.log(newDate.toLocaleString());