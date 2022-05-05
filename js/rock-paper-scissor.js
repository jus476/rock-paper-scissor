const OPTIONS = ["rock", "paper", "scissors"]
let playerScore = 0;
let computerScore = 0;
let roundResult = '';

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
        roundResult = "Draw";
    } else if (playerSelection == playerWin) {
        playerScore++;
        roundResult = "Player";
    } else {
        computerScore++;
        roundResult = "Computer";
    }
    updateScore();
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

/**
 * Updates result display
 */
function updateScore() {
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    roundResultDisplay.textContent = `Round Winner: ${roundResult}`
}

/**
 * Determines the option that will defeat the selection
 * 
 * @param {object} parent element object that field will be appended to
 * @return {object} newly created field element object
 */
function createResultField(parent) {
    let field = document.createElement('div');
    parent.appendChild(field);
    return field;
}

const optionButtons = document.querySelectorAll('.select');
const resultsView = document.querySelector('.results');
const playerScoreDisplay = createResultField(resultsView);
const computerScoreDisplay = createResultField(resultsView);
const roundResultDisplay = createResultField(resultsView);
updateScore();

optionButtons.forEach((button) => {
    button.addEventListener('click', () => {
        let computerSelection = computerPlay();
        playRound(button.id, computerSelection);
    });
})