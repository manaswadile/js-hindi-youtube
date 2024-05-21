const accountId = 123456
let accountEmail = "manas@google.com"
var accountPassword ="142006"
accountCity = "Mumbai"
let accountState;


// accountId = 2 // not allowed

accountEmail = "abv@.com"
accountPassword = "001010"
accountCity = "Pune"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail,accountPassword ,accountCity ,accountState])