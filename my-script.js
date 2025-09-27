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
