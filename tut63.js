// console.log("Raja is raja") ;
// let x = Math.random() ; 
// console.log(x) ;


// let arr = [1 , 2 , 3 , 5 , 5 , 4] ;

// console.log(arr) ;
// console.log(arr[0]) ; 
// console.log(arr[1]) ;
// console.log(arr[2]) ; 
// console.log(arr.length) ;


// console.log(arr.toString()) ;


// arr.pop() ;


// for(let i=0 ; i<6 ; i++) {
//     arr.pop() ; 
// }

// console.log(arr) ;
// arr.push(2204021) ; 
// arr.push(22200210) ; 
// arr.push(58577) ;
// arr.push(85865) ; 
// arr.push("raj") ; 
// arr.push("aditya") ;
// console.log(arr) ;
// console.log(arr.length) ; 

// delete arr[0] ; 
// delete arr[1] ;
// delete arr[2] ;
// delete arr[3] ;

// console.log(arr) ;

// console.log(arr.length) ;


// let arr1 = [10,25,3] ; 
// let arr2 = [47,55,6] ; 
// let arr3 = [77,812,9] ;

// arr1.concat(arr2 , arr3) ;
// console.log(arr1) ;
// console.log(arr2) ;
// console.log(arr3) ;

// arr1.sort()  ;
// console.log(arr1) ;

// arr1.splice(1,2) ;
// console.log(arr1) ;


// let obj = {
//     a : 1 ,
//     b : 2 ,
//     c : 3 
// }

// for (let key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(element) ;
//     }
// }

let firstarr = [1 , 3 , 5 , 7 ,11 , 13] ;
let newarr = [] ; 
for(let i = 0 ; i < firstarr.length ; i++) {
    let x = firstarr[i] ;
    newarr.push(x**2) ;
}

for(let i=0 ; i<newarr.length ; i++) {
    console.log(newarr[i]) ;
}

// console.log(newarr) ; 



// let maparr = firstarr.map((e) => {
//     return e**2 ;
// })


// let find = () => {
    // another method of function  
// }

function find (ele) {
    if(ele > 7) {
        return true ;
    }
    return false ;
}

console.log(firstarr.filter(find))  ;


