let arr = [1, , 3, 4, 5];
console.log(arr.length);

// comma is used to create empty slots in the array. The length of the array is determined by the highest index plus one, regardless of whether the slots are filled or empty. In this case, the highest index is 4, so the length of the array is 5.
// last comma does not create an empty slot, it is just a syntax error. The length of the array is determined by the highest index plus one, regardless of whether the slots are filled or empty. In this case, the highest index is 4, so the length of the array is 5.    



// OBJECTS IN JAVASCRIPT

const sales = "Toyota";

function carTypes(name) {
  
    if (name === "Honda") {
        return name;
    } else {
    return "WE DONT HAVE RIGHT NOW " +  name ;
    }
}

const car = { myCar: "Saturn", getCar: carTypes("BWM"), special: sales };

console.log(car.myCar); // Saturn
console.log(car.getCar); // Honda
console.log(car.special); // Toyota


// {
//     KEY: "Vivain";
//     console.log(KEY); // Vivain
//   }

  // this label not a variable, it is just a label for the block of code. The console.log statement will not execute because it is not inside a function or a loop. The output will be undefined.



  function getUser() {
  return {
    name: "Vivain"
  };
}

console.log(getUser()); // Vivain