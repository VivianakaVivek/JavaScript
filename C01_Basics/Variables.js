const name = "Vivian";
// It does not change, it is a constant. It is a variable that cannot be reassigned.
// name = "John"; // This will cause an error because we cannot reassign a constant variable.

console.log(name); // This will print "Vivian" to the console.

let age = 30;
// It can change, it is a variable that can be reassigned.
age = 31; // This is allowed because we declared age with let.

console.log(age); // This will print "31" to the console.

var city = "New York";
// It can change, it is a variable that can be reassigned.
// However, var has function scope and can lead to unexpected behavior, so it's generally recommended to use let or const instead.
city = "Los Angeles"; // This is allowed because we declared city with var.

console.log(city); // This will print "Los Angeles" to the console.         

year=2024;
// This will create a global variable called year, which is not recommended. It is better to declare variables with let or const to avoid unintended consequences.

console.log(year); // This will print "2024" to the console.    