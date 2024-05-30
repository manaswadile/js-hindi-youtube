const user = {
    username: "manas", 
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "manas"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "manas"
//     console.log(this.username);
// }
const chai = () => {
    let username = "manas"
    console.log(this);
}

// chai()



// () => {} //// this arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2   
// }

// const addTwo = (num1, num2) => num1 + num2 

// const addTwo = (num1, num2) => (num1 + num2  )

const addTwo = (num1, num2) => ({username: "manas"})

console.log(addTwo(3, 4));


// const myArray = [2, 3, 5, 6, 8]

// myArray.forEach()