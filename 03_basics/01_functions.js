


// function sayMyName(){
//     console.log("H");
//     console.log("I");
//     console.log("I");
// }

// sayMyName()

// function addTwoNumber (number1,number2){
//    console.log( number1 + number2);
   

// }
function addTwoNumber (number1,number2){

//    let result =number1 + number2
//    return result
      return number1 + number2
}

const result = addTwoNumber(3,5)

// console.log("Result :",result)


function loginusermessage(username){

    return `${username} just logged in`

}
// console.log(loginusermessage("Rajneesh"))


function calculateCartPrice (...num1){
    return num1

}
// console.log(calculateCartPrice(200,300,400,500))

const user ={
    username : "rajneesh",
    price : 200
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);   
}
// handleobject(user)

function myArray (getarray){
    return getarray[2]

}
console.log(myArray([100,200,300,400]));

