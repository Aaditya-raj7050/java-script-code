console.log("This is good boy") ;

let button = document.querySelector('#btn') ; 
let para = document.getElementById('para') ;

button.addEventListener("mouseover" , () => {
    alert("Event listner") ;
    hide() ;
}) 


function hide () {

    if(para.style.display != 'none') {
        para.style.display = 'none' ;
    }
    else {
        para.style.display = 'block' ;
    }
   
}

