// for in loop :-
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
// for in loop (useful for iterating objects)
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`)
}


const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    // console.log(key)                     // O/p -> 0 1 2 3 4 
    // console.log(programming[key])        // O/p -> js rb py java cpp
}


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
for (const key in map) {                    // We can't use for in loop to iterate the map
    console.log(key);
}