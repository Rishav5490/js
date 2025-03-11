class Human
{
    constructor(name)
    {
        this.name=name
    }
    sleep()
    {
        console.log(`${this.name} can sleep`)
    }
    eat()
    {
        console.log(`${this.name} can eat`)
    }
}

// Child class
class User extends Human
{
    constructor(name,age,city)
    {
        super(name);
        this.age=age;
        this.city=city;
    }
    work()
    {
        console.log(`${this.name} can do work..!!`)
    }
}
const person1=new User("Harshit",22,"Lucknow")
console.log(person1)
person1.work()
person1.sleep()
person1.eat()