// 2 Ways to declare object:-
// const tinderUser = new Object()      // Singleton object
const tinderUser = {}                   // not a singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "rishabh",
            lastname: "bahuguna"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);  // accessing the above nested object

// Combining 2 or more objects:-
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }                      // O/p -> { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3 = Object.assign(obj1, obj2, obj4)     // here all the values are being copied to obj1 
// const obj3 = Object.assign({}, obj1, obj2, obj4) // Hence using an empty {} is a good practise , will be efficient in case of multiple object

// Alternative of Object.assign() -> spread operator (more preferred):-
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3)                               // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// Array of Objects (used to fetch values from DB):-
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// users[1].email                                          // old way to fetch values

// console.log(tinderUser)                                 // { id: '123abc', name: 'Sammy', isLoggedIn: false }
// console.log(Object.keys(tinderUser))                    // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser))                  // [ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser))                 // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))    // to check if the object has an specific property or not


// Object destructuring & JSON APIs
const course = {
    coursename: "JS in hindi",
    price: "999",
    courseInstructor: "rishabh"
}

// 2 ways to extract values:-
// course.courseInstructor     // 1st way

// 2nd way:
const {courseInstructor: instructor} = course   // destructuring (done using {}) -> renaming the 'courseInstructor' property to 'instructor' 
// console.log(courseInstructor)
console.log(instructor)

// The following unnamed object is the structure of JSON:-
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// Another way of representing JSON:
// [
//     {},
//     {},
//     {}
// ]