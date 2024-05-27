// singleton
// literals => no singleton
// construtor => singleton

//=======================================
// Object literals
//Object.create   // this is construtor mthd

const mySym = Symbol("key1")

const JsUser = {
    name: "Manas",
    "full name": "Manas Wadile",
    [mySym]: "mykey1",  // this how symbol is been declared 
    age: 18,
    location: "Shirpur",
    email: "manas@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "manas@gmail.com"
// Object.freeze(JsUser) // no changes occur after freeze
JsUser.email = "manas@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());