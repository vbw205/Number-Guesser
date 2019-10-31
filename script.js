let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {return Math.floor(Math.random()*10)}; //computer guess

const getAbsoluteDistance = (num1, num2) => {return Math.abs(num1 - num2)};//calculates distance between two numbers

const compareGuesses = (userGuess, compGuess, targetNum) => {if (getAbsoluteDistance(targetNum, userGuess) <= getAbsoluteDistance(targetNum,compGuess)) {return true} else {return false}}; //compares guesses

const updateScore = (winner) => {if (winner === 'human') {humanScore += 1} else if (winner === 'computer') {computerScore += 1}};//updates score

const advanceRound = () => {currentRoundNumber += 1};//updates round

const alertMessage = (userGuess) => {if (userGuess > 9 || userGuess < 0) {alert('Guess must be between 0 and 9!')}}; //alert message if out of range
