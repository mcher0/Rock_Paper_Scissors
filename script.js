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
function getHumanChoice(){
    let userInput = prompt("What do you choose?", "rock");

    return userInput;
}

let computerScore = 0;
let humanScore = 0;
function playRound(ComputerChoice,humanChoice){
    compChoice = ComputerChoice.toLowerCase();
    hmChoice = humanChoice.toLowerCase();
    if (hmChoice == "rock" && compChoice == "scissors"){
        alert("You won, the computer chose scissors")
        humanScore++;
    }else if(hmChoice == "rock" && compChoice =="paper"){
        alert("You lost, the computer chose paper")
        computerScore++;
    }else if(hmChoice == "rock" && compChoice == "rock"){
        alert("It's a draw ! You both chose rock")
        computerScore++;
        humanScore++;
    }

    if (hmChoice == "scissors" && compChoice == "paper"){
        alert("You won, the computer chose paper")
        humanScore++;
    }else if(hmChoice == "scissors" && compChoice =="rock"){
        alert("You lost, the computer chose rock")
        computerScore++;
    }else if(hmChoice == "scissors" && compChoice == "scissors"){
        alert("It's a draw ! You both chose scissors")
        computerScore++;
        humanScore++;
    }

    if (hmChoice == "paper" && compChoice == "rock"){
        alert("You won, the computer chose rock")
        humanScore++;
    }else if(hmChoice == "paper" && compChoice =="scissors"){
        alert("You lost, the computer chose scissors")
        computerScore++;
    }else if(hmChoice == "paper" && compChoice == "paper"){
        alert("It's a draw ! You both chose paper")
        computerScore++;
        humanScore++;
    }    
}
/*
function playGame(){
    for (let i = 0; i < 5; i++) {
        playRound(getComputerChoice(),getHumanChoice())
        alert(`Your score: ${humanScore}\nComputer score: ${computerScore}`)
      } 
    if (humanScore > computerScore){
        alert("You beat the computer! Congrats");
    } else if (computerScore > humanScore){
        alert("The computer beat you! lock in bro")
    } else{
        alert("Damn, it's a draw")
    }
}
playGame()
*/