// falsy values (values that are considered to be false):-
// false, 0, -0, BigInt 0n, "", null, undefined, NaN
// -> every value except these are 'truthy' values

// Some surprizing truthy values (values that are considered to be true):-
// "0", 'false', " ", [], {}, function(){}


const userEmail = []
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


if (userEmail.length === 0) {
    console.log("Array is empty");
}


const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {           // Object.keys(emptyObj) -> returns an array
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): effective with null & undefined
let val1;
// val1 = 5 ?? 10                     // 5 is assigned (first value is assigned, except null & undefined)
// val1 = null ?? 10                  // 10 is assigned
// val1 = undefined ?? 15             // 15 is assigned
val1 = null ?? 20 ?? 30               // 20 is assigned (first value is assigned, except null & undefined)
console.log(val1);


// Ternary Operator -> condition ? true : false
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("greater than 80") : console.log("less than 80")