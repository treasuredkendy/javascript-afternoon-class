// in js data can be categorised in two groups - 

// 1. simple/primitive data types - number, string, boolean, undefined, null

// 2. complex/composite data types -  objects, arrays, functions -- JSON - JAVASCRIPT oBJECT NOTATION -- combination of nested arrays and objects

// we can use the typeof operator to check data types

let age = 90
let PI = 3.142
let Pi = 3.142
let ageTwo = 'yhfshbsj6323272@64'
let isOld = false
let total = null  // intentionally making a space in memory empty
let email    // undefined

console.log( typeof age ); // number
console.log( typeof PI ); // numbers
console.log( typeof pic ); // js is case sensitive PI pi
console.log( typeof isOld );  // boolean 
console.log( typeof ageTwo); // string
console.log(typeof email);

// composite/complex data types -- 
//object  - named group of related data
let car = {
    type: "Subaru",
    model: "Forester",
    year: 2013,
    colors: ["blue","grey","black"],
    japanese: true,
}
// array --zero indexed group of related data
let colorsList = ["red", "blue", "yellow","black"]
let carInfo = ["subaru", "forester", 2013, true, ["blue","maroon"], false,{locallyUsed: false}]
//function - reusable bloc of code
function closeApp(){
    console.log("Closing Application!!!");
}
// to use the function, we call/invoke it
closeApp()
closeApp()