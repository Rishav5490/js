const obj={
    name:"Rishav",
    age:23,
    city:"Mandi",
    isWorking:false,
    skills:["Web","Java","SQL"]
}

// convert javascript object into JSON(Javascript Object Notation)
//JSON.stringify()

const json_obj=JSON.stringify(obj)  
console.log(json_obj)


// convert JSON Object into normal js object
//JSON.parse()
const newObj=JSON.parse(json_obj)
console.log(newObj)