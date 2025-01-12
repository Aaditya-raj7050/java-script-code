// Arrays
// let arr = [25 , 23 ,41 , 22, 77] ; 

// console.log(arr[0]) ;
// console.log(arr[3]) ;

// for(let i of arr) {
//     console.log(i) ;
// }
// let sum = 0 ; 

// for(let i of arr) {
//     sum += i ;
// }

// console.log(sum) ;

// let string = ["raja" , "sbbs" , "bds" , "nhbgf"] ;

// console.log(string) ;
// string.push("tea" , "trwp") ;
// console.log(string) ;
// string.pop() ; 
// console.log(string) ;

// string.unshift("first") ; 
// console.log(string) ;

// let slic = string.slice(2,4) ; 

// console.log(slic) ;

// string.splice(2,2,10,142,452) ; 

// console.log(string) ;

// // practise 
let store = ["Microsoft" , "uber" , "google" , "ibm" , "netflix"] ; 

let n = store.length ;
store.slice(1,n) ;

console.log(store.splice(1,1,"ola")) ;

console.log(store) ;
store.push("Amazon") ;
console.log(store) ;
