const name = "Rishabh"
const repoCount = 50

// console.log(name + repoCount + " Value")                                     // Old syntax
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)       // New syntax

const gameName = new String('rishabh-rb-com')      // Not considered as array of characters but rather as key-value pairs

// console.log(gameName[0])                        // 0 is 'key' not index
// console.log(gameName.__proto__)                 // for portotype


// console.log(gameName.length)
// console.log(gameName.toUpperCase())                // changes are made in the copy not the original data
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('b'))                 // gives the first appearance 

// const newString = gameName.substring(0, 4)
// console.log(newString);

// const anotherString = gameName.slice(-12, 4)
// console.log(anotherString);

// const newStringOne = "   rishabh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());                  // trims the whitespaces & newline characters

const url = "https://rishabh.com/rishabh%20bahuguna"

console.log(url.replace('%20', '-'))

console.log(url.includes('rishabh'))

console.log(gameName.split('-'));