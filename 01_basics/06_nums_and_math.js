const score = 140
// console.log(score);

const balance = new Number(290)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 124.968

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

//=====================================//
//*************  MATHS    *************//

// console.log(Math);
// console.log(Math.abs(-4));  **// only -ve change into +ve
// console.log(Math.round(56.55));
// console.log(Math.ceil(56.15));
// console.log(Math.floor(56.95));
// console.log(Math.min(1, 3, 8, 0 ,5));
// console.log(Math.max(1, 3, 8, 0 ,5));

console.log(Math.random()); // value b/w 0 & 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)