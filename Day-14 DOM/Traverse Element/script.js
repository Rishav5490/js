// const child4=document.querySelector(".child-4")

// console.log(child1.parentElement)
// console.log(child1.nextElementSibling)
// console.log(child4.previousElementSibling)

const div=document.getElementById("parent")

console.log(div.children)  //html collection:- impure object
console.log(div.childNodes)  //nodelist:- impure array


//remove()
const p4=document.querySelector(".child-4");
p4.remove()