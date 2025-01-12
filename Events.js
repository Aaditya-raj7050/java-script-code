// let box = document.querySelector("div") ; 
// box.onclick = (e) => {
//     console.log("Thats good") ;
//     console.log(e) ;
//     console.log(e.type) ;
//     console.log(e.target) ;
// }
// let btn = document.querySelector("button") ; 
// btn.onmouseover = (e) => {
//     console.log(e) ;
//     console.log(e.type) ;
//     console.log(e.target) ;
// }
// btn.addEventListener("click" , () =>  {
//     console.log("It is even listner") ;
// })
// btn.removeEventListener("click" , () => {
//     console.log("It is even listner") ;
// })
let btn = document.querySelector(".btn") ; 
let currmode = "light" ; 
btn.addEventListener ("click"  , () => {
    if(currmode == "light") {
        currmode = "dark" ;
        document.querySelector("body").style.backgroundColor = "black" ;
        document.querySelector("body").style.color = "white" ;
    }
    else {
        currmode = "light" ;
        document.querySelector("body").style.backgroundColor = "white" ;
        document.querySelector("body").style.color = "black" ;
    }
    console.log(currmode) ;
})


