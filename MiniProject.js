let userScore = 0 ; 
let compScore = 0 ; 

const choices = document.querySelectorAll(".choice") ; 

const genComChoice = () => {
    let arr = ["rock" , "paper" , "scissors"] ;
    let compchoice = arr[Math.floor(Math.random()*3)]
    console.log("comp choice -> " , compchoice) ;
    return compchoice ;
}

let userX = document.querySelector(".X") ; 
let compY = document.querySelector(".Y") ;

let para = document.querySelector(".won") ;
let last = document.querySelector(".last") ;
last.style.backgroundcolor = "blue" ;

const playGame = (userChoice) => {
    console.log(`userchoice is -> ${userChoice}`) ;
    let compchoice = genComChoice() ;
    console.log(compchoice) ;

    if(userChoice == compchoice) {
        para.innerText = "Game draw" ;
        console.log("Game is draw") ;
        para.style.color = "blue" ;
    }
    else {
        if(userChoice == "rock") {
            if(compchoice == "paper") {
                compScore ++ ;
                compY.innerText = compScore ;
                para.innerText = "Computer win!" ;
                para.style.color = "red" ;
            }
            else {
                userScore ++ ;
                userX.innerText = userScore  ;
                para.innerText = "You win!" ;
                para.style.color = "green" ;
            }
        }
        else if(userChoice == "paper") {
            if(compchoice == "rock") {
                userScore ++ ;
                userX.innerText = userScore  ;
                para.innerText = "You win!" ;
                para.style.color = "green" ;
            }
            else {
                compScore ++ ;
                compY.innerText = compScore ;
                para.innerText = "Computer win!" ;
                para.style.color = "red" ;
            }
        }
        else {
            if(compchoice == "rock") {
                compScore ++ ;
                compY.innerText = compScore  ;
                para.innerText = "Computer win!" ;
                para.style.color = "red" ;
            }
            else {
                userScore ++ ;
                userX.innerText = userScore  ;
                para.innerText = "You win!" ;
                para.style.color = "green" ;
            }
        }
    }
}

choices.forEach((choice)  => {
    console.log(choice) ;
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id") ;
        console.log("choice was clicked" , userChoice) ; 
        playGame(userChoice) ;
    } )
})