let name=prompt("Enter your name");
console.log(name)
try {
    
    if(name==="" || name===null)
    {
        throw new Error("Name is not passed by the user!")
    }
} catch (error) {
    console.log("Error: "+error.message)
}
finally{
    console.log("All task Executed..!!")
}