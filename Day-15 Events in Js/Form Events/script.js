const myForm=document.getElementById("myForm")

/*
input1.addEventListener("input",()=>{
    console.log(input1.value)
})

input1.addEventListener("change",()=>{
    console.log(input1.value)
}) */

myForm.addEventListener("submit",(event)=>{
    event.preventDefault()  //Stop Form Submission and reload
    const input1=document.getElementById("name")
    const input2=document.getElementById("email")
    const input3=document.getElementById("pass")
    console.log(input1.value)
    console.log(input2.value)
    console.log(input3.value)
})

myForm.addEventListener("reset",()=>{
    alert("All values will be removed..!!")
})