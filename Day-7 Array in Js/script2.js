/* foreach()

const prime=[]
const arr=[11,10,9,8,7,6]

arr.forEach(val=>{
    findPrime(val)
})

console.log(prime)

function findPrime(n)
{
    let count=0
    for(let i=2;i<=Math.floor(n/2);i++)
    {
        if(n%i===0)
        {
            count++;
        }
    }
    if(count===0)
    {
        prime.push(n)
    }
} */

/*
const arr1=[11,12,13,14,15]
const res=[]


arr1.forEach(val=>{
    res.push(reverse(val))
})

function reverse(n)
{
    let rev=0;
    while(n!=0)
    {
        let rem=n%10;
        rev=rev*10+rem;
        n=Math.floor(n/10)
    }
    return rev;
}
console.log(res)
*/

function abc(){
    a=7;
    console.log(a)
}
abc()
let a;