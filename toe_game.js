let boxes = document.querySelectorAll(".box") ;
let reset = document.querySelector(".reset-btn") ;
let turn0 = true ;
let newbtn = document.querySelector("#new-btn") ;
let msgcontainer = document.querySelector(".msg-container") ;

let msg = document.querySelector("#msg") ;
let arr = [["pen" , "book"] , ["copy" , "pencil"] , ["diary" , "notebook"]] ; 
const win = [
    [0,1,2] ,
    [0,3,6] ,
    [0,4,8] ,
    [1,4,7] ,
    [2,5,8] ,
    [2,4,6] ,
    [3,4,5] ,
    [6,7,8] ,
] ;

const resetGame = () => {
    turn0 = true ;
    enableBoxes() ;
    msgcontainer.classList.add("hide") ;
}

boxes.forEach ((box) => {
    box.addEventListener("click" , () => {
        if(turn0) {
            box.innerText =  "X" ;
            box.style.color = "blue" ;
            turn0 = false ;
        }
        else {
            box.innerText = "O"  ; 
            box.style.color = "black" ;
            turn0 = true ;
        }
        box.disabled = true ;
        checkwinner() ;
    })
})

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false ;
        box.innerText = "" ;
    }
}

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true ;
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations , winner is ${winner}` ;
    msgcontainer.classList.remove("hide") ;
    disableBoxes() ;
}

const checkwinner = () => {
    for(let pattern of win) {
        let pos1val = boxes[pattern[0]].innerText ; 
        let pos2val = boxes[pattern[1]].innerText ; 
        let pos3val = boxes[pattern[2]].innerText ;

        if(pos1val != "" && pos2val != "" && pos3val != "") {
            if(pos1val == pos2val && pos2val == pos3val) {
                // console.log("Winner") ;
                showWinner(pos1val) ;
                return true;
            }
        }

    }
}

newbtn.addEventListener("click" , resetGame) ; 
reset.addEventListener("click" , resetGame) ;

