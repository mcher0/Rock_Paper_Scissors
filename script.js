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
    let userInput = prompt("What do you choose? (enter rock,paper or scissors with no capital letters)", "rock");
    return userInput;
}
console.log(getComputerChoice());
console.log(getHumanChoice())