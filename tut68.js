console.log("My name is Aaditya raj") ;

let box =  document.getElementsByClassName("box") ; 

console.log(box) ;
box[1].style.backgroundColor = "red" ;

document.querySelector("#boxes").style.backgroundColor = "blue" ;


// document.querySelectorAll(".box").style.backgroundColor = "green" ; error 

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "green" ;
})
