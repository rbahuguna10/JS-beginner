// for of loop :-
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);       // Prints all values of 'arr'
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}


// Maps
const map = new Map()
map.set('IND', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IND', "India")                    // No duplicates , map contains only unique values
// console.log(map);
for (const [key, value] of map) {          // Using [] is the syntax to iterate the map
    // console.log(key, '->', value);
}


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
for (const [key, value] of myObject) {     // TypeError: we can't iterate an object with this syntax
    console.log(key, ':-', value);
    
}
