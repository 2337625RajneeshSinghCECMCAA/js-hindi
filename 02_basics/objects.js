//object literals
const mySym  = Symbol("key1")
const JsUser ={
    name : "Rajneesh",
    [mySym]: "mykey1",
    age : 24,
    location : "Chamba",
    email:"raj@123.com",
    isLoggedIn : false,
    lastLogindays : ["monday","saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser ["email"]);
// console.log(typeof JsUser[mySym]);
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello");
    
}
JsUser.greetingtwo = function(){
    console.log(`hello, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());