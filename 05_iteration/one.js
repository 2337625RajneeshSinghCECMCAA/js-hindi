// for of loop

// const arr = [1,2,3,4,5]

// for ( const num of arr) {
//     console.log(num);
    
// }

const mynum = [1,2,3,4,5,6,7,8,9,,10]

const newnum=mynum.forEach((item)=> {
    
    console.log(item);
    return item
    
   
})
console.log(newnum);
