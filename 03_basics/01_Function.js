function add(number1 , number2){
    console.log(number1+number2);
}
add(4,5);

function add1(number1 , number2){
    let r = number1 + number2;
    return r;
}
const re = add1(3,4);
console.log(re);

function print(username){
    if(!username){
        console.log("Username not given");
    }
    else{
        return `logged in ${username}`
    }
}
const rep = print("Tamal");
console.log(rep);    //SPECIAL CASE IF NO ARGUMENT IS PASSED THEN THE FUNCTION WILL AUTOMATICALLY RETURN UNDEFINED

//REST OPERATOR
function addcartPrice(val1,val2,...num){
    return num;
}
const rec = addcartPrice(200,245,241,845,2147);
console.log(rec);

const obj1 = {
    name : "Tamal",
    price : 200
}
function callobj(anyobject){
    console.log(`The username is ${anyobject.name} and price is ${anyobject.price}`);
}
callobj(obj1);
