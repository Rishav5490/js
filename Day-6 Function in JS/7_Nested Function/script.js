/* */
function outer()
{
        console.log("Inside Outer Function");

        function inner()
        {
            console.log("Inside Inner function")
        } 
       return inner    
}
const res=outer()
res()  //Inner Function is calling 


// Lexical Scope or Scope Chaining

let fname="Tathagat"
let lname="Rai"

function getFullname() 
{
    console.log(fname+" "+lname)
}

getFullname()

