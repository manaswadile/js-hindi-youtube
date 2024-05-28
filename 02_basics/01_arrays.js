// arrays => index starts from 0

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "nagraj"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[1]);

// Methods of Array

// myArr.push(9)
// myArr.push(7) // push adds value at the last 
// myArr.pop() // pop removes last value from array

// myArr.unshift(8) // adds value at first 
// myArr.shift() // first value removes



// console.log(myArr.includes(7));  // it ans this que as  T/F
// console.log(myArr.indexOf(9));  // if the value is not present in array then expected result is -1


// const newArr = myArr.join()  // all elements of array change into string

// console.log(myArr);
// console.log(newArr);

//=================================
// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,4)  // it doesn't includes end value from given limit

console.log("B ", myArr);
console.log(myn1);

const myn2 = myArr.splice(1,4) // it removes the values of that given limit from the array and returns the remaining value

console.log("C ", myArr);
console.log(myn2);