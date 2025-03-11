// ! variable Declaration
var a = 10;    // Function-scoped
let b = 20;    // Block-scoped
const c = 30;  // Immutable
console.log(a, b, c);

// ! Swap Two Variable Without a third Variable

let x = 5, y= 10;
x= x+y;
y=x-y;
x=x-y;
console.log(x,y);

// ! Check if a Number is Odd or Even

function isEven(num){
    return num%2 ===0 ? "Even":"Odd";

}
console.log(isEven(4

));

function Outer () {

}