/* Spread Operator in Object
const user={
    name:"Rishav",
    age:23,
    city:"Noida"
}

const comp={
    desg:"SDE",
    salary:"5LPA",
    ...user
}
console.log(comp) */

/* Spread Operator in Array 


const comedy=["PHP","Welcome","Dhamaal"]

const movies=["Race3","Dabaang",...comedy]

console.log(movies)*/


/* Spread Operator in Function*/

const items=["Maggie","Pasta","Coke","Ice Cream"]

function total(i1,i2,...item)
{
    console.log(i1)
    console.log(i2)
    console.log(item)
}

total(...items)