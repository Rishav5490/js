/* window.addEventListener("keypress",(e)=>{
    console.log("Key: "+e.key)
}) 

window.addEventListener("keydown",()=>{
    console.log("Key Pressed..!")
})
window.addEventListener("keyup",()=>{
    console.log("Key Released..!")
})*/


window.addEventListener("keydown",(e)=>{
    const body=document.body;

    if(e.ctrlKey &&( e.key==="D"||e.key==="d"))
    {
        e.preventDefault()
        console.log("Dark Mode Activated!")
        body.style.cssText="background-color:black;color:white;"
    }
    else if(e.ctrlKey &&( e.key==="L"||e.key==="l"))
    {
        e.preventDefault()
        console.log("Light Mode Activated!")
        body.style.cssText="background-color:white;color:black;"
    }
    else{
        console.log("Other key pressed")
    }
})