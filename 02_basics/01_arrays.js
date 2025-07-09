// arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods

// myArr.push(6)                     // adds new elements to the array
// myArr.push(7)
// myArr.pop()                       // removes the last element from array & returns i
console.log(myArr);

myArr.unshift(9)                     // adds the desired element to index 0
myArr.shift()                        // removes the element from index 0
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()           // converts the 'myArr' into type string from type array
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);           // string