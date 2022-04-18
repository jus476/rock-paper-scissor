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
        return "draw";
    } else if (playerSelection == playerWin) {
        return "player"
    } else {
        return "computer"
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

/**
 * Plays 5 rounds, keeps score and determines the winner of the game
 */
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter Rock, Paper, or Scissors:").toLocaleLowerCase();
        const computerSelection = computerPlay();

        let winner = playRound(playerSelection, computerSelection);

        switch(winner) {
            case "player":
                playerScore++;
                console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
                break;
            case "computer":
                computerScore++;
                console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
                break;
            case "draw":
                console.log("Draw");
                break;
        }
    }

    if(playerScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > playerScore) {
        console.log("You lost the game");
    } else {
        console.log("Draw");
    }
}

game();