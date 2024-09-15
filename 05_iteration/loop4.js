const arr = [1,2,3,4,5,6,7,8,9,10];
//chaining
const newArr = arr
                .map( (num) => num*10 )
                .map( (num) => num+1 )
                .filter( (num) => num>40 );

console.log(newArr);            


//REDUCE
const newA = arr.reduce( (acc,item) => acc+item,0 );
console.log(newA);

                