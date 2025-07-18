// singleton object -> using constructor

// object literals
const mySym = Symbol("key1")
const JsUser = {
    name: "Rishabh",
    "full name": "Rishabh Bahuguna",          // internally all keys are stored as string (default)
    [mySym]: "mykey1",                        // Any 'Symbol' defined as key must be inside []
    age: 18,
    location: "Jaipur",
    email: "rishabh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)                     // Mostly used
// console.log(JsUser["email"])                  // Better way , as in next example we can't use dot(.)
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])                    // only way to access symbol key

JsUser.email = "rishabh@chatgpt.com"
// Object.freeze(JsUser)                         // after freezing the object , we cannot make any new changes in it
JsUser.email = "rishabh@microsoft.com"         // but this won't give any error
// console.log(JsUser);

// Adding a function in object :-
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  // to refer any key we use backticks followed by ${...} 
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());