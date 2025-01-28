function getComputerChoice(){
    let choice = Math.random();
    if (choice <= 0.33){
        return "rock"
    } else if(choice >= 0.33 && choice <=0.66){
        return "paper"
    } else{
        return "scissors"
    }
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener('click', ()=>{
    playRound(getComputerChoice(),"rock");
})
paperButton.addEventListener('click', ()=>{
    playRound(getComputerChoice(),"paper");
})
scissorsButton.addEventListener('click', ()=>{
    playRound(getComputerChoice(),"scissors");
})


let computerScore = 0;
let humanScore = 0;
let roundCount = 1;
function playRound(compChoice,hmChoice){
    if (roundCount <5)
    {
        const hmScore = document.querySelector("#hmscore");
        const pcScore = document.querySelector("#compscore");
        const roundMsg = document.querySelector("#roundMsg");
        if (hmChoice == "rock" && compChoice == "scissors"){
            humanScore++;
            hmScore.textContent = `Your score: ${humanScore}`;
            pcScore.textContent = `Computer score:${computerScore}`;
            roundMsg.textContent = "You won, the computer chose scissors";
        }else if(hmChoice == "rock" && compChoice =="paper"){
            computerScore++;
            hmScore.textContent = `Your score: ${humanScore}`;
            pcScore.textContent = `Computer score:${computerScore}`;
            roundMsg.textContent = "You lost, the computer chose paper";
        }else if(hmChoice == "rock" && compChoice == "rock"){
            computerScore++;
            humanScore++;
            hmScore.textContent = `Your score: ${humanScore}`;
            pcScore.textContent = `Computer score:${computerScore}`;
            roundMsg.textContent = "It's a draw ! You both chose rock";
        }

        if (hmChoice == "scissors" && compChoice == "paper"){
            humanScore++;
            hmScore.textContent = `Your score: ${humanScore}`;
            pcScore.textContent = `Computer score:${computerScore}`;
            roundMsg.textContent = "You won, the computer chose paper";
        }else if(hmChoice == "scissors" && compChoice =="rock"){
            computerScore++;
            hmScore.textContent = `Your score: ${humanScore}`;
            pcScore.textContent = `Computer score:${computerScore}`;
            roundMsg.textContent = "You lost, the computer chose rock";
        }else if(hmChoice == "scissors" && compChoice == "scissors"){
            computerScore++;
            humanScore++;
            hmScore.textContent = `Your score: ${humanScore}`;
            pcScore.textContent = `Computer score: ${computerScore}`;
            roundMsg.textContent = "It's a draw ! You both chose scissors";
        }

        if (hmChoice == "paper" && compChoice == "rock"){
            humanScore++;
            hmScore.textContent = `Your score: ${humanScore}`;
            pcScore.textContent = `Computer score: ${computerScore}`;
            roundMsg.textContent = "You won, the computer chose rock";
        }else if(hmChoice == "paper" && compChoice =="scissors"){
            computerScore++;
            hmScore.textContent = `Your score: ${humanScore}`;
            pcScore.textContent = `Computer score: ${computerScore}`;
            roundMsg.textContent = "You lost, the computer chose scissors";
        }else if(hmChoice == "paper" && compChoice == "paper"){
            computerScore++;
            humanScore++;
            hmScore.textContent = `Your score: ${humanScore}`;
            pcScore.textContent = `Computer score: ${computerScore}`;
            roundMsg.textContent = "It's a draw ! You both chose paper";
        }
        roundCount++;
    }else
    {
        rockButton.remove();
        paperButton.remove();
        scissorsButton.remove();
        if (humanScore > computerScore){
            roundMsg.textContent = "You beat the computer! Congrats";
        } else if (computerScore > humanScore){
            roundMsg.textContent = "The computer beat you! lock in bro";
        } else{
            roundMsg.textContent = "Damn, it's a tie";
        }

    }
}

/*
function playGame(){
    for (let i = 0; i < 5; i++) {
        playRound(getComputerChoice(),getHumanChoice())
        alert(`Your score: ${humanScore}\nComputer score: ${computerScore}`)
      } 

}
playGame()
*/