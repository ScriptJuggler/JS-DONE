const marvel = ["thor","Ironman","spiderman"];
const dc = ["superman","flash","batman"];

// console.log(marvel.push(dc)); //RETURNS LENGTH
// marvel.push(dc);
// console.log(marvel);

const all = marvel.concat(dc);
console.log(all);

const ne = [...marvel,...dc];  //SPREAD OPERATOR
console.log(ne);

const another = [1,2,3,[4,5,6],7,[8,[9,10,11]]];
console.log(another.flat(Infinity));    // returns a single array

console.log(Array.isArray("HITESH")); //check is array
console.log(Array.from("hitsh"));  //converts into array
console.log(Array.from({name : "Tamal"}));  // cannot convert object

let s1 = 200;
let s2 = 300;
let s3 = 400;
console.log(Array.of(s1,s2,s3)); //merges all subelemnts into one array