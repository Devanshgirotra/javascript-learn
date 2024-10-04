//if we declare objects through literals then they are not singleton 
//if we declare objects with the help of constructor then they are singleton

//object literals

let Jsuser={
    name:"Devansh",
    age:20,
    location:"delhi",
    isLoggedIn:false,
    email:"devansh@google.com",
    lastLogInDays:["MOnday","Saturday"]
}

//to access the object value we can do in the following way

console.log(Jsuser["name"])
console.log(Jsuser["age"])
console.log(Jsuser.age)

//changing values of object

Jsuser["email"]="devansh@chatgpt.com"
console.log(Jsuser["email"]);


//freezing object in javascript

// Object.freeze(Jsuser)

// adding functions to object

Jsuser.greeting= function(){
    console.log("hello Js User")
}

console.log(Jsuser.greeting)