/* Arrays :-
   -> JavaScript arrays are resizable and can contain a mix of different data types.
   -> JavaScript array-copy operations create shallow copies. (All standard built-in
   copy operations with any JavaScript objects create "shallow copies", rather than "deep copies").
   a.> Shallow Copies = A shallow copy of an object is a copy whose properties share the same 
    references as those of the source object
   b.> Deep Copies = A deep copy of an object is a copy whose properties do not share the same 
    references as those of the source object
*/

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods

// myArr.push(6)                     // adds new elements to the array
// myArr.push(7)
// myArr.pop()                       // removes the last element from array & returns it
console.log(myArr);

myArr.unshift(9)                     // adds the desired element to index 0
myArr.shift()                        // removes the element from index 0
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()           // converts the 'myArr' into type string from type array
console.log(myArr);                   // [ 0, 1, 2, 3, 4, 5 ] , since changes are made in copy of myArr
console.log(newArr);                  // 0, 1, 2, 3, 4, 5
console.log(typeof newArr);           // string


// slice, splice

console.log("A ", myArr)              // A  [ 0, 1, 2, 3, 4, 5 ] , original array
const myn1 = myArr.slice(1, 3)
console.log(myn1)                     // [ 1, 2 ] , slice operation doesn't include ending index
console.log("B ", myArr)              // B  [ 0, 1, 2, 3, 4, 5 ] , no changes in original array after slice

const myn2 = myArr.splice(1, 3)
console.log(myn2)                     // [ 1, 2, 3 ] , splice operation gets us the original values (including ending index)
console.log("C ", myArr)              // C  [ 0, 4, 5 ] , original array changed after splice
