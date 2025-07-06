// Stack (primitive) , Heap (non-primitive)

let myYoutubename = "rishabhbahugunadotcom"
let anothername = myYoutubename                 // A copy of actual data is shared
anothername = "rizzz_hubbb"                     // Copy is updated not the original data
console.log(myYoutubename)
console.log(anothername)


let userOne = {
    email: "user@google.com",
    upi: "user@xyz"
}

let userTwo = userOne                          // Reference of actual data is shared
userTwo.email = "rishabh@google.com"           // Hence, changes are made in the actual data
console.log(userOne.email)
console.log(userTwo.email)                     // O/p -> "rishabh@google.com" for both