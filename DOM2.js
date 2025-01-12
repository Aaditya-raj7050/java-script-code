let div = document.querySelector("div") ; 

console.log(div) ;
console.dir(div) ;
let clas = div.getAttribute("class") ;
console.log(clas) ;

let div4 = document.querySelector("div") ;

let y = div4.getAttribute("id") ; 
console.log(y) ;

let str = document.querySelector("div") ; 
let ans = str.getAttribute("name") ; 
console.log(ans) ;


let res = document.querySelector("p") ;
let resu = res.getAttribute("class") ; 

console.log(resu) ;

let a1 = document.querySelector("p") ; 
a1.setAttribute("class" , "newpara") ;


let string = document.querySelector("div") ; 

string.style.backgroundColor = "blue"; 

string.style.fontSize = "15px" ;
string.style.display = "flex" ;
string.style.justifyContent = "Center" ;
string.style.alignItems = "Center" ;
string.style.visibility = "hidden" ;


let newbtn = document.createElement("button") ; 
console.log(newbtn) ;
newbtn.innerText = "CLick here" ;

let app = document.querySelector("div") ;
app.prepend(newbtn) ;

newbtn.remove() ;

let newbtn = document.createElement("button") ; 
newbtn.innerText = "CLick here" ;

let bod = document.querySelector("body") ; 

bod.prepend(newbtn) ;

newbtn.style.backgroundColor = "red" ;
newbtn.style.color = "white" ;

let acces = document.querySelector("p") ; 
acces.setAttribute("class" , "newclass") ;
acces.classList.add("newclass") ;
