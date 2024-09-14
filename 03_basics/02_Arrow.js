const user = {
    name : "Tamal",
    price : 999,
    welcomemessage : function() {
        console.log(`${this.name} , welcome to website`)  //this refers to the current context
        console.log(this);
    }
}
user.welcomemessage();
user.name = "Rohan"
user.welcomemessage();

console.log(this); //in browser it gives window object

function hello(){
    console.log(this); // here this is giving its properties
}
hello();

const hi = () => {
    console.log(this);  // in arrow function this is giving empty
}
hi();

//IMPLICIT RETURN
const addTwo = (num1,num2) => (num1+num2)
console.log(addTwo(3,4));

const add = () => ({username : "Tamal"})
console.log(add())