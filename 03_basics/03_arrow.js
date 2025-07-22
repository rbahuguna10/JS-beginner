// let we want to register a user into our website
const user = {
    username: "rishabh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }

}
// user.welcomeMessage()             // O/p -> rishabh , welcome to website
// user.username = "sam"
// user.welcomeMessage()             // O/p -> sam , welcome to website

console.log(this);                // O/p -> {}


// function chai(){
//     let username = "rishabh"
//     console.log(this.username);      // O/p -> undefined, because 'this' can be used only inside objects not functions
// }
// chai()

// const chai = function () {
//     let username = "rishabh"
//     console.log(this.username);         // O/p -> undefined, here also we are unable to use 'this'
// }
// chai()

const chai = () => {                       // here we have declared an "arrow function"
    let username = "rishabh"
    console.log(this.username);            // O/p -> undefined
    console.log(this);                     // O/p -> {}
}
chai()


const addTwo = (num1, num2) => {           // declaring an "arrow function" with parameters
    return num1 + num2                     // with the curly braces{} we have to write the 'return' keyword
}

// "implicit return" -> another way of declaring an "arrow function" with parameters, where we do not have to write the 'return' keyword
// const addTwo = (num1, num2) =>  num1 + num2
//                     OR
// const addTwo = (num1, num2) => ( num1 + num2 )     // with the parentheses() we do not need to write the 'return' keyword

// const addTwo = (num1, num2) => ({username: "rishabh"})  // we need parantheses() to return the object

console.log(addTwo(3, 4))