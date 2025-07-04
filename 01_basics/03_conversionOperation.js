let score = "33"
console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
/*
When converting to number : done with help of Number(...) function
"33" -> 33
"33xyz" -> NaN (Not a Number)
true -> 1; false -> 0
Similarly when converting to string : done with help of String(...) function
*/
let isLoggedIn = 1
let booleanValue = Boolean(isLoggedIn)
console.log(booleanValue)
/*
When converting to boolean : done with help of Boolean(...) function
1 -> true; 0 -> false
"xyz" -> true; "" -> false
*/