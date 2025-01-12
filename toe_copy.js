let boxes = document.querySelectorAll(".box") ;
let arr = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6] ,
]

let turn0 = true ; 

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        if(turn0) {
            box.innerText = "X" ; 
            box.style.color = "blue" ;
            turn0 = false ;
        }
        else {
            box.innerText = "O" ;
            box.style.color = "brown" ;
            turn0 = true ;
        }
        box.disabled = true ;
        checkwinner() ;
    })
})

const disableBoxes = () => {
    for(x of boxes) {
        x.disabled = true ;
    }
}

let msgcont = document.querySelector(".msg-cont") ;
let msg = document.querySelector("#msg") ;

showwinner = (winner) => {
    msg.innerText = `Congratulations ${winner}` ;
    msgcont.classList.remove("msg-cont") ;
    // console.log(`congratulations ${winner}`) ;
    disableBoxes() ;
}

const checkwinner = () => {
    for(let pattern of arr) {
        let pos1 = boxes[pattern[0]].innerText ;
        let pos2 = boxes[pattern[1]].innerText ;
        let pos3 = boxes[pattern[2]].innerText ; 
    
        if(pos1 != "" && pos2 != "" && pos2 != "") {
            if(pos1 == pos2 && pos2 == pos3) {
                showwinner(pos1) ;
                return true ;
            }
        }
    }
}

const enablebox = () => {
    for(let y of boxes) {
        y.disabled = false ;
        y.innerText = "" ;
    }
}


const resetgame = () => {
    turn0 = true ;
    enablebox() ;
    msgcont.classList.add("msg-cont") ;
}

let reset = document.querySelector(".reset") ; 

reset.addEventListener("click" , resetgame) ;

