const btn1=document.getElementById("btn1")
const btn2=document.getElementById("btn2")

btn1.addEventListener("click",()=>{
    const body=document.body;
    body.style.cssText="background-color:black;color:white;"
})

btn2.addEventListener("click",()=>{
    const body=document.body;
    body.style.cssText="background-color:white;color:black;"
})