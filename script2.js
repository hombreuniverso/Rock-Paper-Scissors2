//TOP's Suggestions Incorporated

//Create prompt to get number of rounds from the user
const gameNum = prompt("Enter how many rounds you wish to play.");
//console.log(Number(gameNum));

//Error checking of user amount
if(isNaN(gameNum) || gameNum === ""){
  alert("Please enter a number!");
}else if(gameNum === null){
  alert("You exited the game!")
 
}

//Create variables to store querySelector values
const playerOutput = document.querySelector("#playerOutput");
const computerOutput = document.querySelector("#computerOutput");
const results = document.querySelector("#results");
const pScoreTag = document.querySelector("#playerScore");
const cScoreTag = document.querySelector("#computerScore");
const finalResultsTag = document.querySelector("#finalResults");



//Create boolean playGame to play or exit game
let playGame = true;

//Declare and assign player, computer scores and counter;
let cScore = 0;
let pScore = 0;
let counter = 0;


//Call functions
//Call game
game();

//Create Functions
//Function: Play game multiple times
function game() {
 
  for(i = 1; i <= Number(gameNum) ; i++){
    playRound()    
 //console.log(i);
  
}
}

//Function: Play round
function playRound() {
  //Create variables for player and computer choices to get to compareSelections
  playerSelection = getPlayerInput();
  computerSelection = getComputerChoice();

  //Logging to console
  //console.log(playerSelection);
  //console.log(computerSelection);

  //Call Function
  compareSelections(playerSelection, computerSelection);

  //Function: getPlayerInput
  //Get input/ choice of player
  function getPlayerInput() {
    //Use prompt to get user input
    let playerInput = prompt("Type: 'rock' or 'paper', or 'scissors'.", "");

    //Function: Error checking of input
    //Give message for cancel and no input
    if (playerInput === null) {
      results.textContent = "You exited the game!";
    } else if (playerInput === "") {
      results.textContent = "Enter 'rock' or 'paper' or 'scissors'!";
    }
    //Convert all input to lowercase for comparison
    else {
      playerInput = playerInput.toLowerCase();
      if (
        playerInput !== "rock" &&
        playerInput !== "paper" &&
        playerInput !== "scissors"
      ) {
        results.textContent = "Please enter 'rock' or 'paper' or 'scissors'!";
      }
    }
    return playerInput;
  }

  //Call randomNum
  randomNum();

  //Function: Generate random number
  function randomNum() {
    //Generate random number between 0 and 2
    let computerNum = Math.floor(Math.random() * 3);
    return computerNum;
  }

  //Function: Get computer Choice
  function getComputerChoice() {
    let computerNum = randomNum();
    let computerChoice;
    //Link each digit to a choice e.g. 0 is "rock" using if/else if/else
    if (computerNum === 0) {
      computerChoice = "rock";
    } else if (computerNum === 1) {
      computerChoice = "paper";
    } else if (computerNum === 2) {
      computerChoice = "scissors";
    }

    /*    
  //Link each digit to a choice e.g. 0 is "rock" using switch
  switch (true) {
    case computerNum === 0:
      return "rock";
      break;
    case computerNum === 1:
      return "paper";
      break;
    case computerNum === 2:
      return "scissors";
      break;
  }
*/
    return computerChoice;
  }

  //Function: play round - compare players (win/ draw)
  function compareSelections(playerSelection, computerSelection) {
    //Count number of rounds
    counter = counter + 1;
    if (playerSelection === "rock" && computerSelection === "paper") {
      alert(
        "Player's Choice: " +
          playerSelection +
          "\n" +
          "Computer's choice: " +
          computerSelection +
          "\n" +
          "Computer wins! Paper covers Rock."
      );

      console.log("Player's Choice: " + playerSelection);
      console.log("Computer's choice: " + computerSelection);
      console.log("Computer wins! Paper covers Rock.");

      //console.log(playerOutput.textContent = "Player's Choice: " + playerSelection);
      //console.log(computerOutput.textContent = "Computer's choice: " + computerSelection);
      //console.log(results.textContent = "Computer wins! Paper covers Rock.");

      cScore = cScore + 1;
      cScoreTag.textContent = cScore;
      pScoreTag.textContent = pScore;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      alert(
        "Player's Choice: " +
          playerSelection +
          "\n" +
          "Computer's choice: " +
          computerSelection +
          "\n" +
          "Congratulations! You win! Paper covers rock"
      );

      console.log("Player's Choice: " + playerSelection);
      console.log("Computer's choice: " + computerSelection);
      console.log("Congratulations! You win! Paper covers rock");

      //console.log(playerOutput.textContent = "Player's Choice: " + playerSelection);
      //console.log(computerOutput.textContent = "Computer's choice: " + computerSelection);
      //console.log(results.textContent = "Congratulations! You win! Paper covers rock");

      pScore = pScore + 1;
      pScoreTag.textContent = pScore;
      cScoreTag.textContent = cScore;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      alert(
        "Player's Choice: " +
          playerSelection +
          "\n" +
          "Computer's choice: " +
          computerSelection +
          "\n" +
          "Congratulations! You win! Rock crushes scissors."
      );

      console.log("Player's Choice: " + playerSelection);
      console.log("Computer's choice: " + computerSelection);
      console.log("Congratulations! You win! Rock crushes scissors.");

      //console.log(playerOutput.textContent = "Player's Choice: " + playerSelection);
      //console.log(computerOutput.textContent = "Computer's choice: " + computerSelection);
      //console.log(results.textContent = "Congratulations! You win! Rock crushes scissors.");

      pScore = pScore + 1;
      pScoreTag.textContent = pScore;
      cScoreTag.textContent = cScore;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      alert(
        "Player's Choice: " +
          playerSelection +
          "\n" +
          "Computer's choice: " +
          computerSelection +
          "\n" +
          "Computer wins! Rock crushes Scissors"
      );

      console.log("Player's Choice: " + playerSelection);
      console.log("Computer's choice: " + computerSelection);
      console.log("Computer wins! Rock crushes Scissors");

      //console.log(playerOutput.textContent = "Player's Choice: " + playerSelection);
      //console.log(computerOutput.textContent = "Computer's choice: " + computerSelection);
      //console.log(results.textContent = "Computer wins! Rock crushes Scissors");

      cScore = cScore + 1;
      cScoreTag.textContent = cScore;
      pScoreTag.textContent = pScore;
    } else if (
      playerSelection === "paper" &&
      computerSelection === "scissors"
    ) {
      alert(
        "Player's Choice: " +
          playerSelection +
          "\n" +
          "Computer's choice: " +
          computerSelection +
          "\n" +
          "Computer wins! Scissors cut paper"
      );

      console.log("Player's Choice: " + playerSelection);
      console.log("Computer's choice: " + computerSelection);
      console.log("Computer wins! Scissors cut paper");

      //console.log(playerOutput.textContent = "Player's Choice: " + playerSelection);
      //console.log(computerOutput.textContent = "Computer's choice: " + computerSelection);
      //console.log(results.textContent = "Computer wins! Scissors cuts paper");

      cScore = cScore + 1;
      cScoreTag.textContent = cScore;
      pScoreTag.textContent = pScore;
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      alert(
        "Player's Choice: " +
          playerSelection +
          "\n" +
          "Computer's choice: " +
          computerSelection +
          "\n" +
          "Congratulations! You win! Scissors cut Paper"
      );

      console.log("Player's Choice: " + playerSelection);
      console.log("Computer's choice: " + computerSelection);
      console.log("Congratulations! You win! Scissors cut Paper");

      //console.log(playerOutput.textContent = "Player's Choice: " + playerSelection);
      //console.log(computerOutput.textContent = "Computer's choice: " + computerSelection);
      //console.log(results.textContent = "Congratulations! You win! Scissors cuts Paper");

      pScore = pScore + 1;
      pScoreTag.textContent = pScore;
      cScoreTag.textContent = cScore;
    } else if (playerSelection === computerSelection) {
      alert(
        "Player's Choice: " +
          playerSelection +
          "\n" +
          "Computer's choice: " +
          computerSelection +
          "\n" +
          "A draw"
      );

      console.log("Player's Choice: " + playerSelection);
      console.log("Computer's choice: " + computerSelection);
      console.log("A draw");

      //console.log(playerOutput.textContent = "Player's Choice: " + playerSelection);
      //console.log(computerOutput.textContent = "Computer's choice: " + computerSelection);
      //console.log(results.textContent = "A draw");

      cScore = cScore + 1;
      pScore = pScore + 1;
      pScoreTag.textContent = pScore;
      cScoreTag.textContent = cScore;
    }
    return (
      /*playerOutput.textContent, computerOutput.textContent, results.textContent,*/ cScore,
      pScore
    );
  }

  //Call function
  calculateScore();

  //Function: Determine winner based on score
  function calculateScore() {
    if (pScore === 0 && cScore === 0) {
      finalResultsTag.textContent = "None!";
    } else if (pScore > cScore) {
      finalResultsTag.textContent =
        "Congrats! You win with " + pScore + " out of " + counter + " rounds";
    } else if (cScore > pScore) {
      finalResultsTag.textContent =
        "Computer wins with " + cScore + " out of " + counter + " rounds";
    } else {
      finalResultsTag.textContent = "A draw: " + pScore + " : " + cScore;
    }
    return finalResultsTag.textContent;
  }
}

