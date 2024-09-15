//FOR OF
let arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

const greetings = "helloworld"
for (const greet of greetings) {
    console.log(greet);
}


//MAP -> IT IS A KEY-VALUE PAIR ,MAINTAINS THE ORDER, UNIQUENESS
const map = new Map();
map.set('IN',"India");
map.set('FR',"France");
map.set('USA',"United States of America")
console.log(map);
for (const [key , value] of map) {  //Destructure map
    console.log(key, ':-',value);
}