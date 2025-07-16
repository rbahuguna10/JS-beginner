const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);              // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]);        // flash

// To solve the above problem we have concat()
// const allHeros = marvel_heros.concat(dc_heros)   // Combines two or more arrays & returns a new array
// console.log(allHeros);                           // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// Alternative of concat() -> spread operator (more preferred)
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);                // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)  // returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array)

console.log(Array.isArray("Rishabh"))           // false
console.log(Array.from("Rishabh"))              // [ 'R', 'i', 's', 'h', 'a', 'b' , 'h' ] , converts the given value to an array
console.log(Array.from({name: "rishabh"}))      // [] , because we haven't mentioned which one to be converted 'key' or 'value' 

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))  // [ 100, 200, 300 ]