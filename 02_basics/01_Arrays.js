// SHALLOW COPIES AND DEEP COPIES
//Arrays
const myArr = [0,1,2,3,4,5];
const myArr2 = new Array(1,2,3,4,5);
console.log(myArr2[1]);

// Array methods
myArr.push(6);
console.log(myArr);
myArr.pop();
myArr.unshift(9); // adding value at the front
myArr.shift(); // left shift
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(0));  // finding the position

const newArr = myArr.join();
console.log(newArr);
console.log(typeof newArr);  //gets converted to String


console.log("A",myArr);
//SLICE
const sl = myArr.slice(1,3); // excludes last range
console.log(sl);
console.log("B",myArr); // no change in array
//SPLICE
const sp = myArr.splice(1,3); // includes last range
console.log(sp);
console.log("C",myArr); // original array changes


