// && -AND operator -Both sides need to be true..
// || -OR operator -One side need to be true..


let isVerified = true
let isLoggedIn = true
let hasPayment = true
let isGuest = true

 if (isVerified && isLoggedIn && hasPayment) {
   console.log('Greeting message to user..');
   console.log('you are allowed..');

 }
 else if (isVerified || isGuest) {
   console.log('allowed for previews..');

 }
 else {
   console.log('please contact admin..');
 }
