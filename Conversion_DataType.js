let x =  "23";
// This is a string, not a number. If we want to convert it to a number, we can use the Number() function.

console.log(Number(x));

let y = 45;
// This is also a string, but it can be converted to a number using the Number() function.

console.log(String(y));

let z = "Hello";
// This cannot be converted to a number, so it will return NaN (Not a Number).  
console.log(Number(z));

let a = 0;
// This is a string, but it can be converted to a boolean using the Boolean() function.             

console.log(Boolean(a));// This will return true because the string "true" is truthy.

let b = "";
// This is an empty string, which is falsy. So it will return false when converted to a boolean.

console.log(Boolean(b)); // This will return false because an empty string is falsy.            

