const name = "manas"
const repoCount = 50

// console.log(name + repoCount + " Value")     // no recomendation 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('showdown-2-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt('6'));
console.log(gameName.indexOf('d'));

const newString = gameName.substring(2, 6)
console.log(newString);

const anotherString = gameName.slice(-5,6)
console.log(anotherString);

const newStringOne = "    manas    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://manas.com/manas%20wadile"

console.log(url.replace('%20', '-'));

console.log(url.includes('human'));

console.log(gameName.split('-'));
