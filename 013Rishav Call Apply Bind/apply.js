const user={
    name:"Rishav",
    age:23,
    city:"Sundernagar"
}

function details(isWorking,state) {
    console.log(this)
    console.log(this.name)
    console.log(this.age)
    console.log(this.city)
    console.log(isWorking)
    console.log(state)
}

details.apply(user,[false,"himachal pradesh"])