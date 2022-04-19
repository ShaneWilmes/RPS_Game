//  ROCK**PAPER**SCISSORS GAME

//  Setting variables of wins and losses
var wins = 0;
var losses = 0;
var ties = 0;

//  Setting an arry for the choices
var options = ['R', 'P', 'S'];


//  Function Play Game to execute the game
function playGame () {

//  Getting player's choice    
var playerChoice = window.prompt("Enter R, P, or P"); 

//  Converting to uppercase text input
playerChoice = playerChoice.toUpperCase(); 

//  Randomizing and getting the computer's choice
var randomChoice = Math.floor(Math.random() * options.length);
var computerChoice = options[randomChoice];
alert("The computer chose " + computerChoice);

//  Verifying the wins, losses and ties
if (playerChoice === computerChoice) {
    ties++
    alert("It's a tie!");

} else if (
    (playerChoice === 'R' && computerChoice === 'S') ||
    (playerChoice === 'P' && computerChoice === 'R') ||
    (playerChoice === 'S' && computerChoice === 'P')

) {
    wins++;
    alert("You won!");
    
} else {
    losses++;
    alert("You lost!");

}

//  Displaying the stats and asking to play again

alert("Stats: " + wins + " Losses: " + losses + "Ties: " + ties);

//  Asking the user to play again
var startOver = confirm("Play again?");

if (startOver) {
    playGame();
}


}

playGame()  //  Calling function to start the game

var centeredH1 = document.getElementsByTagName("h1")[0];
centeredH1.style.textAlign = "center";