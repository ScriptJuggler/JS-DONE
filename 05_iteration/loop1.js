const myObj = {
    name : "Tamal",
    age : 24
};

//FOR IN
for (const key in myObj) {
    console.log(`For key ${key} value is ${myObj[key]}`);
        
    
}

const arr = [1,2,3,4,5];
for (const key in arr) {
    console.log(arr[key]);
        
    
}


//for of gives value for in gives key 
//for of is used in arrays and in case of object it returns error
//fot in is used in object and in case of arrays it gives the indicies of that array