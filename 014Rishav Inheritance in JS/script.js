const animal={
    type:"domestic",
    speak:function(){
        console.log(`${this.name} can Speak`)
    }
}

const dog={
    name:"Sheru",
    sound:function(){
        console.log("Bhaoo Bhaoo")
    }
}
dog.__proto__=animal

console.log(dog.hasOwnProperty("type"))  //false
console.log(animal.hasOwnProperty("type")) //true