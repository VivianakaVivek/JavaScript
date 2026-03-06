var phoneNumber = "12345"; // global variable


// var x = window.phoneNumber       // "12345"
var y = globalThis.phoneNumber   // "12345"

// console.log(x);
console.log(y);