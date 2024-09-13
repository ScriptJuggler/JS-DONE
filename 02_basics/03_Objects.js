//Object.create
//Singleton

//Object Literals

const mySym = Symbol("key1");
const JsUser = {
    name : "Tamal",
    [mySym] : "mykey1", //symbol
    age : 18,
    "fullname" : "hello"
};

console.log(JsUser.fullname);
console.log(JsUser["name"]);
console.log(JsUser[mySym]);  //special case for symbol

JsUser.age = 19
// Object.freeze(JsUser); // no further values of the kry can be changed
JsUser.age = 50
console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello JS user, ${this.name}`); //String InterPolation
}
console.log(JsUser.greeting());