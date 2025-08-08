// for each loop :-
const coding = ["js", "ruby", "java", "python", "cpp"]
coding.forEach( function (val){     // normal function defined inside for each
    // console.log(val);
} )
//         OR
coding.forEach( (item) => {         // using arrow function
    // console.log(item);
} )
// Another way of using for each loop (when function is defined outside)
function printMe(item){
    // console.log(item);
}
coding.forEach(printMe) // here we just need to give the reference, we must not execute the function as printMe()

coding.forEach( (item, index, arr)=> {
    // console.log(item, index, arr)    // O/p -> something like -> js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]... so on
} )

// iterating an array of objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {                                           // item is pointing to the objects in array
    console.log(item.languageName + ' -> ' + item.languageFileName)     // hence using . to access inndividual property
} )