//Nullish Coalescing Operator (??): null undefined
let val1;
val1 = 5 ?? 10
console.log(val1);
let val2;
val2 = null ?? 10;
console.log(val2);
let val3;
val3 = undefined ?? 10;
console.log(val3);

//Ternary Operator
const price = 80
price <=100 ? console.log("ok") : console.log("not ok");


//EMPTY CHECK FOR OBJECT
const emp = {}
if(Object.keys(emp).length === 0){
    console.log("empty")
}


//FALSY VALUES  -> false, 0 , -0 , 0n , "" , null , undefined , NaN
//TRUTHY VALUES  -> true , "0" , 'false' , " " , [] , {} , function(){}