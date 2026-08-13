// HOF - higer order function 

// A is Higer Order Function
// function A(){
//     console.log("A")
    
// }


// function B(){
//     console.log("B")
// }



// const x = {
//     a: 123,
// }

// A(B);



// this is used every where 
// js is a programming language that supports oop as well as functional programming 
//  as well as a procedural programming 


// exampler of HOF 
// looping through an array with custom logic

// function handleNum(num){
//     console.log(num * 3) 
// }

// function handleStr(str){
//     // for string 
//     const newStr = `${str}-bc`
//     console.log(newStr) 
// }

// function handleObj(obj){
//     const newObj = {
//         name: obj.name,
//         totalHours: obj.totalHours,
//     }
//     console.log(newObj)
// }

// const arrayOfNumbers = [1, 2, 3, 4, 5]
// const arrayOfStrings = ["a", "b", "c"]
// function CustomLoopWithLogic(array, callbackFn){
//     for(const item of array){
//         callbackFn(item)
//     }
// }

// CustomLoopWithLogic(arrayOfNumbers, handleNum)

// console.log("With ForEach")
// arrayOfNumbers.forEach(handleNum)



// // async 
// function someAsyncResolver(cb, ms){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(cb())
//         }, ms)
//     })
// }

// // cb is callback function
// async function createUser(name, age, cb){
//     const user = await someAsyncResolver(name, age)
    
    
//     cb(user)

//     // notify
//     // log the user inside the system
//     // update our user cache
// }


// createUser("Arbin", 23, (user) => {
//     console.log("Notify", user)
// })



// hof with callback 

function a(){
    console.log("A")
    return function b(){
        console.log("B")
        return function c(cb){
            console.log("C")
            cb()
        }
    }
}

const fnRefOfB = a()
const fnRefOfC = fnRefOfB()
fnRefOfC(() => {
    console.log("This is callback of C")
})


function B(){
    console.log("B")
    return function c(){
        console.log("C")
    }
}

function A() {
    console.log("A")
    // return B;
    return B();
}

const x = A()
x() // this should only do when function called is returning something/

// return nothing = void