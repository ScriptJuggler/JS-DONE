const descriptor = Object.getOwnPropertyDescriptor(Math , "PI");
console.log(descriptor);

const myObj = {
    name : "Tamal",
    Age : 25,
    orderChai: function(){
        console.log("chai nhi bni");
    }
}


Object.defineProperty(myObj , 'name' , {
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(myObj , 'name'));

myObj.name = "Saha"
console.log(myObj.name)

for (const [key , value] of Object.entries(myObj)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
}


