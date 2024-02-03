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
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    return 'You win! Rock beats Scissors'
  } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    return 'You lose! Paper beats Rock'
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    return 'You win! Paper beats Rock'
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    return 'You lose! Scissors beats paper'
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    return 'You win! Scissors beats Paper'
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    return 'You lose! Rock beats Scissors'
  }
}

const playGame = () => {
  let myScore = 0
  let computerScore = 0
  while (myScore < 5 || computerScore < 5) {
    let myChoice = prompt('Choose Rock, Paper or Scissors')
    let pcChoice = getComputerChoice()
    let result = playRound(myChoice[0].toUpperCase() + myChoice.slice(1).toLowerCase(), pcChoice[0].toUpperCase() + myChoice.slice(1).toLowerCase())
    if (result.includes('You lose')) {
      computerScore++
      console.log(`You lost the round. Your score is ${myScore} and computer's is ${computerScore}`)
    } else if (result.includes('You win')) {
      myScore++
      console.log(`You won the round. Your score is ${myScore} and computer's is ${computerScore}`)
    } else {
      console.log(`Tied Round. Your score is ${myScore} and computer's is ${computerScore}`)
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
