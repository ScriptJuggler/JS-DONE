const arr = [1,2,3,4,5,6,7,8,9,10];
const newArr = arr.filter( (num) => (num>4) );
console.log(newArr);

const newArrr = [];
arr.forEach( (item) => {
    if(item > 4){
        newArrr.push(item);
    }
} )

console.log(newArrr);

const newA = arr.map( (num) => num+10 );
console.log(newA);