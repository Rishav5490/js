let a=1;
let b=2;
let c=3;

try {
    console.log("Try Block start")
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    console.log("Try Block End")
} catch (error) {
    console.log("Catch Block start")
    console.log(error.name)
    console.log(error.message)
    console.log("Catch Block End")
}
finally{
    console.log("Finally Block start")
    console.log("All task completed!!")
}