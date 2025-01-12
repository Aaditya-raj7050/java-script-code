let button = document.getElementById("btn") ; 

button.addEventListener("click" , () => {
    document.querySelector(".box").style.backgroundColor = "blue" ;
    document.querySelector(".box").innerText = "Blue" ;
    document.querySelector(".box").style.fontSize = "20px" ;
    
})