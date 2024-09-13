//DATES

const date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(typeof(date));

let anotherdate = new Date(2023 , 0 , 28);
console.log(anotherdate.toDateString());
let anotherdate1 = new Date(2023 , 0 , 28 , 5 , 3);
console.log(anotherdate1.toLocaleString());
let anotherdate2 = new Date("2023-01-28");
console.log(anotherdate2.toLocaleString());
let anotherdate3 = new Date("01-28-2023");
console.log(anotherdate3.toLocaleString());
console.log(anotherdate3.getTime()); // returns value in milliseconds from 1 Jan , 1970

//TimeStamp
const t = Date.now();
console.log(t);
console.log(Math.floor(Date.now()/1000)); // in seconds

let newDate = new Date();
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
    weekday : 'long'
}))

