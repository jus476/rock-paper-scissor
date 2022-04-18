const OPTIONS = ["rock", "paper", "scissors"]

/** 
 *  Randomly generate computer choice. 
 *  @return {string} The computer's choice.
 */ 
function computerPlay() {
    return OPTIONS[Math.floor(Math.random() * OPTIONS.length)];
}

/** 
 *  Implements game logic to select a winner
 *
 * @param {string} playerSelection The player's selection
 * @param {string} computerSelection The Computer's selection
 * @return {string} The winner of the round 
 */
function playRound(playerSelection, computerSelection) {
    const playerWin = getWinningOption(computerSelection);

    if(playerSelection == computerSelection) {
        return "Draw";
    } else if (playerSelection == playerWin) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

/**
 * Determines the option that will defeat the selection
 * 
 * @param {string} selection Option to be defeated
 * @return {string} Winning option
 */
function getWinningOption(selection) {  
    switch(selection)
    {
        case "rock":
            return "paper";
        case "paper":
            return "scissors";
        case "scissors":
            return "rock";
    }
}

const playerSelection = prompt("Enter Rock, Paper, or Scissors:").toLocaleLowerCase();
const computerSelection = computerPlay();
console.log("Player selection: ", playerSelection);
console.log("Computer selection: ", computerSelection);
console.log(playRound(playerSelection, computerSelection));