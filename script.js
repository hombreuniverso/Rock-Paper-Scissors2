//TOP's Suggestions Incorporated

//Create variables to store querySelector values
const playerOutput = document.querySelector("#playerOutput");
const computerOutput = document.querySelector("#computerOutput");
const results = document.querySelector("#results");
const pScoreTag = document.querySelector("#playerScore");
const cScoreTag = document.querySelector("#computerScore");
const dScoreTag = document.querySelector("#draw");
const finalResultsTag = document.querySelector("#finalResults");
const btns = document.querySelectorAll(".btns button");
const playCancelBtn = document.querySelectorAll(".play-cancel button");
const roundsTag = document.querySelector("#rounds-left");

playCancelBtn.forEach((btn) => btn.addEventListener("click", playCancel));

//Declare and assign player, computer scores and counter;
let cScore = 0;
let pScore = 0;
let dScore = 0;
let counter = 0;
let roundsLeft = 5;

function playCancel(e) {
  if (e.target.id === "play-btn") {
    console.log("happy");
    playGame = true;

    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
    document.getElementById("play-btn").disabled = true;

    cScore = 0;
    pScore = 0;
    dScore = 0;
    counter = 0;
    roundsLeft = 5;

    cScoreTag.textContent = cScore;
    pScoreTag.textContent = pScore;
    dScoreTag.textContent = dScore;
    roundsTag.textContent = roundsLeft;
    document.getElementById("winner").style.visibility = "hidden";
  } else {
    console.log("Is working");
    playGame = false;

    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
    document.getElementById("play-btn").disabled = false;

    cScore = 0;
    pScore = 0;
    dScore = 0;
    counter = 0;
    roundsLeft = 5;

    cScoreTag.textContent = cScore;
    pScoreTag.textContent = pScore;
    dScoreTag.textContent = dScore;
    roundsTag.textContent = roundsLeft;
    document.getElementById("winner").style.visibility = "hidden";
  }
}

btns.forEach((btn) => btn.addEventListener("click", playRound));

//Create boolean playGame to play or exit game
let playGame = false;

//Function: Play round
function playRound(e) {
  if (playGame === false) {
    return;
  } else {
    //Create variables for player and computer choices to get to compareSelections
    const playerSelection = getPlayerInput();
    const computerSelection = getComputerChoice();

    //Call Function
    compareSelections(playerSelection, computerSelection);

    //Function: getPlayerInput
    //Get input/ choice of player
    function getPlayerInput() {
      let playerInput = e.target.id;
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
      
      //Count number of rounds remaining
      roundsLeft = roundsLeft - 1;
      roundsTag.textContent = roundsLeft;

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

        pScore = pScore + 1;
        pScoreTag.textContent = pScore;
        cScoreTag.textContent = cScore;
      } else if (
        playerSelection === "rock" &&
        computerSelection === "scissors"
      ) {
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


        pScore = pScore + 1;
        pScoreTag.textContent = pScore;
        cScoreTag.textContent = cScore;
      } else if (
        playerSelection === "scissors" &&
        computerSelection === "rock"
      ) {
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

        dScore = dScore + 1;
        dScoreTag.textContent = dScore;

        console.log("Player's Choice: " + playerSelection);
        console.log("Computer's choice: " + computerSelection);
        console.log("A draw");

       
        // cScore = cScore + 1;
        //pScore = pScore + 1;
        pScoreTag.textContent = pScore;
        cScoreTag.textContent = cScore;
      }
      return (
        /*playerOutput.textContent, computerOutput.textContent, results.textContent,*/ cScore,
        pScore
      );
    }

    //Determine number of rounds in game
    if (counter === 5) {
      document.getElementById("winner").style.visibility = "visible";
      document.getElementById("rock").disabled = true;
      document.getElementById("paper").disabled = true;
      document.getElementById("scissors").disabled = true;
      document.getElementById("play-btn").disabled = false;

      //Call function
      calculateScore();
    }

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
}
