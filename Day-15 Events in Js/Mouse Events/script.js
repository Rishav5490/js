/*const btn=document.getElementById("btn")


let count=0
 click event
btn.addEventListener("click",()=>{
    console.log("Left Clicked!")
    const body=document.body;
    body.style.cssText="background-color:black;color:white;"
})*/

/* dblclick
btn.addEventListener("dblclick",()=>{
    count++;
   if(count%2===0)
   {
         const h1=document.querySelector("h1");
        h1.style.color="red"
       
    }
    else{
       const h1=document.querySelector("h1");
      h1.style.color="white"      
   }
})*/

/* contextmenu: Right Clicked
btn.addEventListener("contextmenu",(e)=>{
    e.preventDefault()
    console.log("Right Clicked!")
    const h1=document.querySelector("h1")
    const colorVal=window.getComputedStyle(h1).color
   if(colorVal === "rgb(255, 255, 255)")
   {
    h1.style.color="cyan"
   }   
   
})
*/

/* mouseenter mouseleave*/
/* mouseover mouseout*/


const btn=document.getElementById("btn")
btn.addEventListener("mouseenter",()=>{
    const body=document.body;
    body.style.cssText="background-color:black;color:white"
})
btn.addEventListener("mouseleave",()=>{
    const body=document.body;
    body.style.cssText="background-color:white;color:black"
})



