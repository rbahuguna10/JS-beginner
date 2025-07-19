function sayMyName(){
    console.log("R")
    console.log("I")
    console.log("S")
    console.log("H")
    console.log("A")
    console.log("B")
    console.log("H")
}
sayMyName()


// function addTwoNumbers(number1, number2){        // function with its parameters
//     console.log(number1 + number2)               // doesn't return anything
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2                        // return statement must be the last statement inside a function 
}

const result = addTwoNumbers(3, 5)                  // function with its arguments 
// console.log("Result: ", result)

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("rishabh"))

function calculateCartPrice(val1, val2, ...num1){       // here (...) is acting as 'rest' operator, it packs all the present & further values into an array 
    console.log(val1 + val2)
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000))


// Passing objects in a function:-
const user = {
    username: "Rishabh",
    prices: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// 2 ways of passing:-
// handleObject(user)           // passing an already created object 
handleObject({               // creating a new object while passing
    username: "Sam",
    price: 399
})


// Passing arrays in a function:-
const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray))                 // passing an already created array
console.log(returnSecondValue([200, 400, 500, 1000]))      // creating a new array while passing 