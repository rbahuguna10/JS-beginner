//  Primitive datatypes
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100           // Identifies by default
const scoreValue = 100.3    // Identifies by default

const isLoggedIn = false    // Identifies by default
const outsideTemp = null    // null is identified as "Object" type
let userEmail;              // "unidentified" by default

// Defining a Symbol :-
const id = Symbol('123')           // Identified as "Symbol" type
const anotherId = Symbol('123')
console.log(id === anotherId);     // O/p -> false (although values are same)

// const bigNumber = 3456543576654356754n



// Reference (Non primitive) datatypes
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];       // Identified as "object" type
let myObj = {                                         // Identified as "object" type
    name: "hitesh",
    age: 22,
}

const myFunction = function(){                        // Identified as "function" type
    console.log("Hello world");
}

console.log(typeof heros);