let score = "33"
// console.log(typeof score)

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
/*
When converting to number : done with help of Number(...) function
"33" -> 33
"33xyz" -> NaN (Not a Number)
true -> 1; false -> 0
Similarly when converting to string : done with help of String(...) function
*/
let isLoggedIn = 1
let booleanValue = Boolean(isLoggedIn)
// console.log(booleanValue)
/*
When converting to boolean : done with help of Boolean(...) function
1 -> true; 0 -> false
"xyz" -> true; "" -> false
*/


// <-------------------------Operation-------------------------------->

let value = 3
let negValue = -value
// console.log(negValue)

let str1 = "Hello"
let str2 = " Rishabh"
let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2)        // O/p -> 12
// console.log(1 + "2")        // O/p -> 12
// console.log("1" + 2 + 2)    // O/p -> 122
// console.log(1 + 2 + "2")    // O/p -> 32
// console.log(+true)          // O/p -> 1
// console.log(+"")            // O/p -> 0 

/*
Read about "type conversion" from ecma script 
*/