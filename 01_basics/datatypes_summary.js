// Primitive Data Types
// 7 Types : String , Number , Boolean , null , undefined , Symbol , BigInt (CALL BY VALUE)
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 2464648554649645n;
console.log(typeof(bigNumber));

// Reference(Non-Primitive DataTypes)   (CALL BY REFERENCE)
// Arrays, Objects , Function


// Stack (Primitive)  
let c = 23
let d = c
console.log(d);
d = 2
console.log(d)
console.log(c)

// Heap(Non-Primitive)
let userOne = {
    name : "Tamal",
    email : "sahatamal@gmail.com"
}
let userTwo = userOne;
console.log(userTwo.name);
userTwo.name = "Rohan";

console.log(userOne.name);
console.log(userTwo.name);


