// console.log("first") ;
// console.log("second") ; 
// console.log("third") ;

// function hello () {
//     console.log("hello") ;
// }

// setTimeout(hello , 2000) ;


// setTimeout( () => {
//     console.log("friends") ;
// } , 2000) ;

// console.log("slast") ;
// console.log("last") ;


// function getData (dataId , getNextData) {
//     setTimeout( () => {
//         console.log("data" , dataId) ;
//         if(getNextData) 
//         getNextData() ;
//     } , 2000)
// }

// getData(1 , () => {
//     getData(5 , () => {
//         getData(3) ;
//     }) ;
// })


// provinces -> 

// let promise = new Promise((resolve , reject ) => {
//     console.log("I am a promise") ;
//     // resolve(123) ;
//     reject("some error") ;
// })

const getPromise = () => {
    return new Promise((resolve , reject ) => {
        console.log("I am a promise") ;
        // resolve("success") ;
        reject("some error") ;
    })
}

let promise = getPromise() ;   
   
promise.then(() => {
    console.log("promise fullfiled") ;
})

promise.catch(() => {
    console.log("some error occured") ;
})

function asyncFunc() {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log("some datal") ;
            resolve("success") ;
        } , 4000) ;
    })
}

console.log("fetching data1") ;
let p1 = asyncFunc() ;
p1.then((res) => {
    console.log(res) ;
})