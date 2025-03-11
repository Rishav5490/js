/* const arr=[1,2,3,4,5,6,7,8,9,10]
const res=arr.filter(val=>{
    return (val%2===0);
})
console.log(res) */


/*
const arr=[1,2,3,4,5]
const res=arr.reduce((acc,val,i,array)=>{
    acc=acc+val**2;
    return acc;
})

console.log(res)
*/

/*Array.isArray()
const a=[]
const b="Rishav"
const c={}

console.log(Array.isArray(a))
console.log(Array.isArray(b))
console.log(Array.isArray(c)) */


/* Array.from(string)
const name="Rishav"
const arr=Array.from(name)
console.log(arr) */




/* flat(1)
const num=[1,[2,3],4,[5,[6,7],8,9],10]
const singleArr=num.flat(2)
console.log(singleArr) */


// concat()
const arr1=[10,20]
const arr2=[30,40]

const res=arr1.concat(arr2)
console.log(res)
