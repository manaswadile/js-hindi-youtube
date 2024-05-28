const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);   // not perfect result
// console.log(marvel_heros[3][1]); // not perfecr result

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]  /// this is spread ; 2 or more arrays can merge in single array

// prefer spread to combine two or more arrays
// spread is easy and much better way to combine two array in new array

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // it forms a new single array with all sub arrays

// console.log(real_another_array);



console.log(Array.isArray("Manas")) // it asks que is it array
console.log(Array.from("Manas")) // string converts into array
console.log(Array.from({name: "manas"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); 