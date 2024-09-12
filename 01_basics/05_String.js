const h = "repo"
const n = 7
//String Interpolation
console.log(`The count of ${h} is ${n}`);

const gameName = new String('hitech');
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-5,-2);
console.log(anotherString);

const h1 = " tamal "
console.log(h1.trim());

console.log(h1.replace('a','b'));
console.log(h1.includes('m'));

const s = "Hello my world";
console.log(s.split(" "));



