/*const sum=(a,b)=>{
    const total=a+b;
    console.log(`Sum is: ${total}`)
    return total;
}

const res=sum(2,2)
console.log(res) */


// Implicit Type arrow function

// const pow=(a,b)=>a**b;

// const task=(pow(13,2)-pow(12,2))/5
// console.log(task)
/*
const findSquare=n=>n**2
const sqroot=m=>m**0.5
const task=(a,b)=>{
        const res=findSquare(a)-findSquare(b)
        return sqroot(res);
}


const output=task(5,3)
console.log(output)
*/

function factorial(a)
{
    let fact=1
    for(let i=1;i<=a;i++)
    {
        fact=fact*i;
    }
    return fact;
}

const task=Math.floor((factorial(5)-factorial(3))/factorial(2))
console.log(task)

//1. write a function to find prime number?
//2. write a function to count the number of digit?
//3. write a function to find reverse of the digit?
//4. write a function to find the sum of the digits?
//5. write a function to find palindrome number?
