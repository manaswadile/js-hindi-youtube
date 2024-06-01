// # if & else
// # comparision => <, >, <=, >=, ==, !=, ===. !==
// # (===) here value & typeof should be same


// const isUserloggedIn = true
// const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// }else{  
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");



// const score = 200 

// if (score > 250) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

//======================================================================

// if (balance > 500) console.log("test");
// ## We can write code for single not for multiple ##

// if (balance > 500) console.log("test"),console.log("test");
// ## don't write like this code ## //

// $$ But remember code readablility should be good $$ //

//======================================================================


// const balance = 700


// if(balance < 500){
//     console.log("less than 500");
// }else if (balance < 750){
//     console.log("less than 750");
// }else if (balance < 900){
//     console.log("less than 900");
// }else {
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    // console.log("Allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail ){
    // console.log("User logged in");
}
