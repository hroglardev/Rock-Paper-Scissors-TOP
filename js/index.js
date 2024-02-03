'use strict'

const getComputerChoice = () => {
  let choice = Math.ceil(Math.random() * 3)
  if (choice === 1) return 'Rock'
  else if (choice === 2) return 'Paper'
  else return 'Scissors'
}

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "It's a tie"
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'You win! Rock beats scissors'
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'You lose! Paper beats Rock'
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'You win! Paper beats rock'
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return 'You lose! Scissors beats paper'
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'You win! Scissors beats paper'
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return 'You lose! Rock beats Scissors'
  }
}

const playGame = () => {
  let myScore = 0
  let computerScore = 0
  while (myScore < 5 || computerScore < 5) {
    let myChoice = prompt('Choose Rock, Paper or Scissors')
    if (myChoice.length === 0 || myChoice.trim().length === 0) {
      console.log('Must input an option')
      playGame()
    }

    let pcChoice = getComputerChoice()
    let result = playRound(myChoice.toLowerCase(), pcChoice.toLowerCase())
    if (result.includes('You lose')) {
      computerScore++
      console.log(`${result}. Your score is ${myScore} and computer's is ${computerScore}`)
    } else if (result.includes('You win')) {
      myScore++
      console.log(`${result}. Your score is ${myScore} and computer's is ${computerScore}`)
    } else {
      console.log(`${result}. Your score is ${myScore} and computer's is ${computerScore}`)
      continue
    }
  }

  if (myScore === 5) {
    console.log('Congrats you won the game')
  } else {
    console.log('You lost the game')
  }
}

playGame()
