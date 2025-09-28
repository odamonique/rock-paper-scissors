//Declare the players score variables to keep track
let humanScore = 0;
let computerScore = 0;

//Create function to get the computer's choice
function getComputerChoice() {

    //Get random number between 0, 1, 2 and assign it to a variable
    let randomNumber = Math.floor(Math.random()*3);

    //Return the string values "rock", "paper", "scissor"
    switch (randomNumber) {
        //Case the random number is 0, then return "rock"
        case 0:
            return "rock";
        //Case the random number is 1, then return "paper"
        case 1:
            return "paper";
        //Case the random number is 2, then return "scissors"
        case 2:
            return "scissors";
    }
}

    //Create a variable to hold the computer's choice
    const computersChoice = getComputerChoice();
    //Check if the returned value works as expected 
    console.log(computersChoice);

//Create function to get the user's choice 
function getHumanChoice() {
    
    //Get user's input 
    let choice = prompt("Choose rock, paper or scissors");
    //return user's choice 
    return choice;
}

//Create variable to hold user's choice 
const humanChoice = getHumanChoice();
//Check if returned value works as expected 
console.log(humanChoice);

//Create function to play a round 
function playRound(humanChoice, computerChoice) {
    
    //Make human choice case-insensitive
    humanChoice = humanChoice.toLowerCase();

    //Compare choices to check the winner 
    //If human choice is the same as computer 
    if (humanChoice === computerChoice) {
        //Show a tie message 
        console.log("It's a tie!");
    }
    //If human choice is Rock and computer choice is scissors 
    else if (humanChoice === "rock" & computerChoice === "scissors"){
        //Show a winner message
        console.log("You win! Rock beats scissors");
        //Increment human score
        humanScore++;
    }
    //If human choice is scissors and computer choice is rock
    else if (humanChoice === "scissors" & computerChoice === "rock"){
        //Show loser message
        console.log("You lose! Rock beats scissors");
        //Increment computer score
        computerScore++;
    }
    //If human choice is scissors and computer choice is paper
    else if (humanChoice === "scissors" & computerChoice === "paper"){
        //Show winner message 
        console.log("You win! Scissors beats paper");
        //Increment human score
        humanScore++;
    }
    //If human choice is paper and computer choice is scissors
    else if (humanChoice === "paper" & computerChoice === "scissors") {
        //Show loser massage
        console.log("You lose! Scissors beats paper");
        //Increment computer score
        computerScore++;
    }
    //If human choice is paper and computers choice is rock
    else if (humanChoice === "paper" & computerChoice === "rock") {
        //Show winner message 
        console.log("You win! Paper beats rock");
        //Increment human score
        humanScore++;
    }
    //If human choice is rock and computer choice is paper 
    else
    {
        //Show loser message 
        console.log("You lose! Paper beats rock");
        //Increment computer score
        computerScore++;
    }
    
}

//Call function playRound and pass the user and computers choice as arguments 
playRound(humanChoice, computersChoice);
