/* rest operator in object

const obj1={
    name:"Tinku",
    age:24,
    city:"Noida",
    gender:"Male",
    pin:201301,
    isWorking:true
}

// const {name,age,city}=obj1
const {name,age,...props}=obj1
console.log("User Name:",name)
console.log("Age:",age)
console.log(props) */

/* Rest Operator in Array
const yt=["BB","Carry","TG","Ashish","Purav","R2H","Dhruv","Elvish","Puneet"]

const [y1,y2,...ys]=yt
console.log(y1)
console.log(y2)
console.log(ys) */

//Rest Operator in Function 
const i1="Maggie";
const i2="Pasta";
const i3="Grilled Sandwich";
const i4="Coke"

function cart(i1,i2,...items)
{
    console.log(i1)
    console.log(i2)
    console.log(items)
}

cart(i1,i2,i3,i4)
