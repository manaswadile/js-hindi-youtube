// return types of primitive datatypes

// Number => number
// String => string 
// Boolean => boolean
// Null  => object
// BigInt => bidint
// Undefined => undefined
// Symbol => symbol

//  primitive datatypes (7 types)

// String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.8

// const isLoggedIn = false 
// const outsideTemp = null
// let userEmail;

// const id = Symbol('414')
// const anotherId = Symbol('414') 

// console.log(id == anotherId);

// const bigNumber = 45889646454111346554n

//========================================================//

// return types of non pirmitive datatypes

// Array => object
// Function => function
// Object => object


// Reference (Non primitive)

// Array, Object, Functions


const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "manas",
    age: 18,
}

const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof id);



// +++++++++++++++++++++++++++++++++ //

// Types of memory : 

// Stack (used in Primitive) => changes are done in copy of orignal value
// Heap (used in Non-Primitive) => changes are done in orignal value

let myYoutubename = "manaswadile"

let anothername = myYoutubename
anothername = "paniaurcode"

// console.log(myYoutubename);
// console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ptm"
}

let userTwo = userOne

// userTwo.email = "manas@google.com"

// console.log(userOne.email);
// console.log(userTwo.email);
