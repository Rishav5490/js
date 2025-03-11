const button=document.getElementById("btn")

button.onclick=changeBg

function changeBg()
{
    const body=document.body;
    body.style.cssText="background-color:black;color:white;"
}