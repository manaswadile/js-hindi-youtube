// the values in the (block) scope should not appears outside (global scope)
// but the values of global scope can present in block scope


let a = 300

if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "manas"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()

}

// one()

if (true) {
    const username = "manas"
    if (username === "manas") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


//+++++++++++ interesting ++++++++++++
 
console.log(addone(5))

function addone(num){
    return num + 1
}


addTwo(5)

const addTwo = function(num){
    return num + 2
}
