console.log(2 > 1)
console.log(2 < 1)
console.log(2 >= 1)
console.log(2 <= 1)
console.log(2 == 1)
console.log(2 != 1)

console.log("2" > 1)      // O/p -> true
console.log("02" > 1)     // O/p -> true

// We should avoid the following types of conversions (even if we use: null <-> undefined) :-
console.log(null > 0)      // O/p -> false  
console.log(null == 0)     // O/p -> false
console.log(null >= 0)     // O/p -> true
/*
The reason is that an equality check ("==") and comparison (">", "<" , ">=" , "<=") works differently :
Comparison converts null to a number (treating it as 0) that's why (null >= 0 , was true)
*/

console.log("2" === 2)    // O/p -> false (because datatype not same)
// "===" called as strict check 
