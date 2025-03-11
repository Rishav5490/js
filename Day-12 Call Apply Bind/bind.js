const obj={
    name:"Rishi",
    age:23,
    city:"himachal"
}
function details(state,country) {
    console.log(this)
    console.log(this.name)
    console.log(this.age)
    console.log(this.city)
    console.log(state)
    console.log(country)
}
const result=details.bind(obj,"himachal","India")
// console.log(result)
result()