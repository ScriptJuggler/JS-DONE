//Immediately Invoked Function Expressions(IIFE)
// to immediately invoke function and to avoid global scope pollution

(function chai(){
    console.log(`DB CONNECTED`)
})();

((name) => {
    console.log(`DB CONNECTED ${name}`)
})('Tamal');
