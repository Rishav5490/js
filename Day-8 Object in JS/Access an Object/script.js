/* const obj={
    "full name":"Rishav Kumar",
    age:22,
    city:HP",
    isWorking:false
}*/

/*
console.log(obj.fname)
console.log(obj.lname)
console.log(obj.age)
console.log(obj.city) */

/* console.log(obj["fname"]+" "+obj["lname"])
console.log(obj.fname+" "+obj.lname)  
console.log(obj["full name"])*/

/* To check key value pair is present or not
console.log("state" in obj)
console.log("city" in obj)  */


/* Insert a key and value pair

const student={
    name:"Ravi",
    age:11,
}

student.class="5-C"
student.city="Phurphuri Nagar"
student.line=function(){console.log("Gaddari Karbe..!!")}
console.log(student) */

/* Update a value
const user={
    name:"Chombu",
    sal:15000,
    city:"Noida"
}
user.sal=150000

user.city="Dholakpur"
console.log(user) */

/* Delete a key value pair
const user={
    name:"Tarun",
    age:15,
    mstatus:"Mingle"
}

delete user.mstatus
console.log(user) */

/*
const actor={
    name:"Akshay Kumar",
    age:51,
    "php dialog":function()
            {
                console.log("50 rupay kato overacting ka")
                return `Aurat ka Chakkar Babu Bhaiya..!!` 
            },
    "welcome dialog":function()
            {
                console.log("Miracle Miracle..")   
                return `Control Majnu Control`
            }
}

const res1=actor["php dialog"]()
const res2=actor["welcome dialog"]()
console.log(res1)
console.log(res2)


// const res=actor.dialog()
// console.log(res)  */


/* Shallow Copy
const jack={
    cake:"Chocolate"
}
const oggy=jack;
delete oggy.cake;
console.log(jack.cake) */

/* Deep Copy */
const jack={
    cake:"Chocolate"
}
const oggy={

}

for(element in jack)
{
    oggy[element]=jack[element]
}
oggy["cold drink"]="Mazza"
console.log(jack)
console.log(oggy)



