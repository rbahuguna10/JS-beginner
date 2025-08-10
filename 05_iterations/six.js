// How we can return values using loops:-
const coding = ["js", "ruby", "java", "python", "cpp"]
const values = coding.forEach( (item) => {
    // console.log(item)         // array items will be printed 
    return item               // undefined: because for each loop doesn't allow to return anything
} )
// console.log(values);


// Returning using filter() function :-
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter( (num) => num > 4 )          // filter() function allows us to return values
//                 OR
// const newNums = myNums.filter( (num) => {               
//     return num > 4                                      // we have to write 'return' once we have defined scope{}
// } )
console.log(newNums)


// Returning using for each loop :-
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )
// console.log(newNums)



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ]

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => {                         // now these changes will override the previous values 
    return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks);