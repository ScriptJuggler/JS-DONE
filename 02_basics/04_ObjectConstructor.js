const obj1 = new Object();  //by constructor singleton object
// const obj2 = {} non-singleton object
obj1.name = "1245";
obj1.age = 18;
console.log(obj1);

//Concept of Source and Target
const obj4 = {1 : "a" , 2 : "b"};
const obj5 = {3 : "d" , 4 : "e"};
const obj6 = {5 : "f" , 6 : "g"};
//Merging objects
//{} -> Target
// obj4 , obj5 , obj6 are source
const obj7 = Object.assign({} , obj4 , obj5 , obj6);
console.log(obj7);

//SPREAD OPERATOR
const obj8 = {...obj4 , ...obj5};
console.log(obj8);

console.log(Object.keys(obj7));
console.log(Object.values(obj7));
console.log(Object.entries(obj7)); //returns in array

console.log(obj7.hasOwnProperty('1')); //checking the presece of keys

//OBJECT DESTRUCTURE
const course = {
    name : "Tamal",
    price : 100,
    time : 6
};
const {time : t} = course;
console.log(t);