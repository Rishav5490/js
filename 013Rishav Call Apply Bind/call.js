const obj={
    name:"Tinku",
    age:21,
    city:"Noida"
}

function details(state)
{
    console.log(this);
    console.log(this.name);
    console.log(this.age);
    console.log(this.city)
    console.log(state)
}
details.call(obj,"UP")