// Immediately Invoked Function Expressions (IIFE)
/*
Need of IIFE:-
-> Preventing Global Scope Pollution
-> Data Privacy and Encapsulation
-> Executing Code Immediately
-> Creating Closures for Private State
*/

(function chai(){                  // named IIFE 
    console.log(`DB CONNECTED`)    // O/p -> DB CONNECTED
})();                    // here semicolon is important in order to end the context of IIFE                        

 
( (name) => {                                    // an arrow function can also be made IIFE
    console.log(`DB CONNECTED TWO ${name}`)      // O/p -> DB CONNECTED TWO rishabh
} )('rishabh')

/*
first () -> is for function definition
second () -> is for execution call
*/