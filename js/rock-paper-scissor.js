const OPTIONS = ["rock", "paper", "scissors"]

function computerPlay() {
    return OPTIONS[Math.floor(Math.random() * OPTIONS.length)];
}
