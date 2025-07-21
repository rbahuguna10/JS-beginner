let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);         // O/p -> INNER:  10
    var c = 300
    
}
// console.log(a);                        // O/p -> 300
// console.log(b);                        // O/p -> error
// console.log(c);                        // O/p -> 300 , this was the problem with var


function one(){
    const username = "rishabh"
    function two(){
        const website = "youtube"
        console.log(username);            // O/p -> rishabh
    }
    // console.log(website);                 // O/p -> error
     two()

}
one()

if (true) {
    const username = "rishabh"
    if (username === "rishabh") {
        const website = " youtube"
        console.log(username + website);          // O/p -> rishabh youtube
    }
    // console.log(website);                         // O/p -> error
}
// console.log(username);                            // O/p -> error


// <--------------------- interesting ---------------------->

console.log(addone(5))                 // no error if we write this before or after the function
function addone(num){
    return num + 1
}


addTwo(5)                             // shows error if we write this line before the function, because addTwo is declared as a variable below
const addTwo = function(num){
    return num + 2
}