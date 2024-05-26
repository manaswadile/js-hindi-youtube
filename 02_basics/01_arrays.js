// arrays => index starts from 0

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "nagraj"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[1]);

// Methods of Array

// myArr.push(9)
// myArr.push(7)
// myArr.pop() // pop removes last value from array

// myArr.unshift(9) // last value at first 
// myArr.shift() // first value removes

// console.log(myArr.includes(7));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

//=================================
// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,4)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1,4)
console.log("C ", myArr);
console.log(myn2);
