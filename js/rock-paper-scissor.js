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
    if(playerScore >= 5) {
        alert("Player Wins!");
        resetGame();
    } else if (computerScore >= 5) {
        alert("Computer Wins!");
        resetGame();
    } else {
        // No winner yet; keep playing
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
 * Updates result display
 */
function updateScore() {
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    roundResultDisplay.textContent = `Round Winner: ${roundResult}`
}

/**
 * Reset scores
 */
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundResult = '';
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