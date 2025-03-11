/**/ HOF
function generic(task1,task2,name,city)
{
    task1(name)
    task2(city)
}

// CBF
function getName(name)
{
    console.log(`User Name: ${name}`)
}

function getCity(city)
{
    console.log(`City: ${city}`)
}

generic(getName,getCity,"Chombu","Dholakpur") 

//Example-2

// HOF
function generic(task1,task2,name,city)
{
    task1(name)
    task2(city)
}

// CBF
generic(function (name)
{
    console.log(`User Name: ${name}`)
},
function (city)
{
    console.log(`City: ${city}`)
},"Chombu","Dholakpur")