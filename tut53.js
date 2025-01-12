console.log("This is tutorial 53 by codewithharry") ;

function find(name) {
    console.log(name) ;
}

let arr = ["aad" , "gd" , "fdfs" , "hyrte"] ;

let name = "Aaditya raj" ; 
let name1 = "raj"  ; 
let name2 = "raja" ; 
let name3 = "aaditya" ;

for(let i=0 ; i<arr.length ; i++) {
    find(arr[i]) ;
}
// console.log(name + "is a bad boy") ; 


function sum(a , b) {
    return a + b ; 
}

let x = 5 ; 
let y = 4 ; 
console.log(sum(x , y)) ;

function compare(a , b) {
    return a > b ;
}

let first = 5 ; 
let second = 6 ; 

if(compare(first , second)) {
    console.log(first + "is greater than " + second) ;
}
else if(!compare(first , second)) {
    console.log(first + " is less than " + second) ;
}

