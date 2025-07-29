// Syntax :-
// switch (key) {
//     case value: 
//         break;

//     default:
//         break;
// }


const month = "march"
switch (month) {                     // Variable that we need to check & compare is mentioned here
    case "jan":
        console.log("January")
        break
    case "feb":
        console.log("Feb")
        break
    case "march":
        console.log("March")
        break
    case "april":
        console.log("April")
        break

    default:
        console.log("default case match")
        break
}