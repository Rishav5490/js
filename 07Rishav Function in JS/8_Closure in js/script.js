function outer()
{
    console.log("Inside Outer Function..!!")
    let a=10;
    function inner()
    {
        console.log("Inside Inner Function")
        console.log(a)
    }
    return inner;
}

const res=outer()
res()  