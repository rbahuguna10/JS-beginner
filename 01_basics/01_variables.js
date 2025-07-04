const accountId = 14453                   // Can't be changed
let accountEmail = "rishabh@gmail.com"    // Can be changed 
var accountPassword = "12345"             // Can be changed (Not preferred because of issues in block scope & functional scope)
accountCity = "Jaipur"                    // Can be changed (Not preferred)
let accountState                          // Default value = 'undefined'

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Bengaluru"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity]);