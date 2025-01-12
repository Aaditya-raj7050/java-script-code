// function first(msg , n) {
//     console.log("It is function") ;
//     console.log("first functon") ;
//     console.log(msg*n) ;
// }

// first("I am a boy" , 50) ;

// function sum(x , y) {
//     return x+y ;
// }

// (x , y) => {
//     return x + y ;
// }

// let result = sum(5,25) ;

// console.log(result) ;
// let ans =  (11,22) ;


// function vowel(str) {
    
//     let num = 0 ; 

//     for(let i=0 ; i<str.length ; i++) {
//         if((str[i] == 'a')||(str[i]=='e')||(str[i]=='i')||(str[i]=='o')||(str[i]=='u')) {
//             num ++ ;
//         }
//     }

//     return num ;
// }

// let numvowel = vowel("aadityaraja") ;
// console.log(numvowel) ;


// const vowel = (str) => {
    
//     let num = 0 ; 

//     for(let i=0 ; i<str.length ; i++) {
//         if((str[i] == 'a')||(str[i]=='e')||(str[i]=='i')||(str[i]=='o')||(str[i]=='u')) {
//             num ++ ;
//         }
//     }

//     return num ;
// }

// let numvowel = vowel("aadityaraja") ;
// console.log(numvowel) ;
// let str = 5 ;

// const fum = (num) => {
//     return num*num ;
// }

// let ans = fum.forEach(fum);
// console.log(ans) ;

// let arr = [1,5,2,3] ; 

// arr.map((val) => {
//     console.log(val) ;
// })

// let newarr = arr.map((val) => {
//     return val*2 ;
// })

// console.log(newarr) ;


// filter in js

// let arr = [1,2,4,5,0,6,3] ; 

// arr.forEach((val) => {
//     console.log(val) ;
// })

// let evenarr = arr.filter((val) => {
//     return val%2==0 ;
// })

// console.log(evenarr) ;
// let arr = [1,2,3,2,4] ; 
// const out = arr.reduce((x , y) => {
//     return x + y;
// })
// console.log(out) ;

let marks = [44,6,9,8,7,9,99,48,89,96,9,37,95] ;

let newmarks = marks.filter((val) => {
    return val > 90 ;
})


console.log(newmarks) ;