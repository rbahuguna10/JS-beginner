const score = 400
// console.log(score);          // 400

const balance = new Number(100)
// console.log(balance);        // [Number: 100]    

// console.log(balance.toString().length);      // O/p -> 100 , but this is a string now hence we can perform string operations
// console.log(balance.toFixed(1));             // O/p -> 100.0
// console.log(balance.toFixed(2));             // O/p -> 100.00

const otherNumber1 = 23.8966
// console.log(otherNumber1.toPrecision(3));     // O/p -> 23.9 , upto 3 digits
const otherNumber2 = 123.8966
// console.log(otherNumber2.toPrecision(3));     // O/p -> 124 , upto 3 digits

const hundreds = 1000000000
// console.log(hundreds.toLocaleString('en-IN'));    // converts to Indian number system

// <------------------------------------ Maths------------------------------------------->

// console.log(Math);                     // Object [Math] {} 
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random());                        // Always gives a random value between 0 & 1
// console.log((Math.random()*10) + 1);               // For random values greater than 1
// console.log(Math.floor(Math.random()*10) + 1);     // For single digit random values

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)