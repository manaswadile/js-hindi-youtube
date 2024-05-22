//  primitive datatypes (7 types)

// String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.8

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('414')
const anotherId = Symbol('414') 

console.log(id == anotherId);

// const bigNumber = 45889646454111346554n


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

console.log(typeof heros);
