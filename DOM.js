// alert("Attention") ;

// let heading = document.getElementById("heading") ;
// console.dir(heading) ;

// let Heading = document.getElementsByClassName("Heading") ;

// console.dir(Heading) ;
// console.log(Heading) ;

// let tag = document.getElementsByTagName("p") ; 
// console.log(tag) ; 
// console.dir(tag) ;

// let para = document.querySelector("p") ; 
// console.dir(para) ; 

// console.log(document.body.firstChild) ;

// let out = document.querySelector("h2") ;

// let str = " Apna college students" ;

// out.innerText += str ;

// let out = document.getElementsByClassName("box") ; 
// console.dir(out) ;

// console.log(out) ;

let Print = document.querySelectorAll(".box") ; 

console.log(Print[0].innerHTML) ;
console.log(Print[1].innerHTML) ;
console.log(Print[2].innerHTML) ;

console.log(Print[0].innerText = "New first div") ;
console.log(Print[1].innerText = "New second div") ; 
console.log(Print[2].innerText = "New Third div") ;


for(let x of Print) {
    console.log(x.innerText) ;
}



