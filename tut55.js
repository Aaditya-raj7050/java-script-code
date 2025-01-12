console.log("Aaditya raj") ;
console.log("This is lecture 55") ;

let arr = [1,5,4,8,5,8] ; 

let sum = 0 ; 

for(let i=0 ; i<arr.length ; i++) {
    sum += arr[i] ; 
}
console.log(sum) ; 

for(x of arr) {
    console.log(x) ;
}


let employee = {  
    name : "Raja" ,
    salary : 25 ,
    id : 5
}

for(x in employee) {
    console.log(`${x} -> ${employee[x]}`) ;
}