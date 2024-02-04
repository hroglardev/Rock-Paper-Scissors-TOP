'use strict'

window.addEventListener('load', () => {
  const getComputerChoice = () => {
    let choice = Math.ceil(Math.random() * 3)
    if (choice === 1) return 'Rock'
    else if (choice === 2) return 'Paper'
    else return 'Scissors'
  }

  const playRound = (playerSelection, computerSelection) => {
    switch (true) {
      case playerSelection === computerSelection:
        return "It's a tie"

      case playerSelection === 'Rock' && computerSelection === 'Scissors':
        return 'You win! Rock beats Scissors'

      case playerSelection === 'Rock' && computerSelection === 'Paper':
        return 'You lose! Paper beats rock'

      case playerSelection === 'Paper' && computerSelection === 'Rock':
        return 'You win! Paper beats rock'

      case playerSelection === 'Paper' && computerSelection === 'Scissors':
        return 'You lose! Scissors beats paper'

      case playerSelection === 'Scissors' && computerSelection === 'Paper':
        return 'You win! Scissors beats paper'

      case playerSelection === 'Scissors' && computerSelection === 'Rock':
        return 'You lose! Rock beats Scissors'

      default:
        return 'Invalid Selection'
    }
  }
  let myScore = 0
  let computerScore = 0

  const message = document.querySelector('.message')
  const body = document.querySelector('body')

  const userScore = document.querySelector('.myScore')
  const pcScore = document.querySelector('.computer-score')
  const buttons = Array.from(document.querySelectorAll('button'))

  const resetGame = () => {
    myScore = 0
    computerScore = 0
    message.innerHTML = 'Good luck'
    userScore.innerText = `My score is ${myScore}`
    pcScore.innerText = `Computer's score is ${computerScore}`
    body.removeChild(resetButton)
    buttons.forEach((button) => button.removeAttribute('disabled'))
  }

  const resetButton = document.createElement('button')
  resetButton.innerText = 'Play again'
  resetButton.addEventListener('click', resetGame)

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      let roundResult = playRound(button.innerText, getComputerChoice())
      if (roundResult.includes('You win')) {
        myScore++
        message.innerText = roundResult
        userScore.innerText = `My score is ${myScore}`
      } else if (roundResult.includes('You lose')) {
        computerScore++
        message.innerText = roundResult
        pcScore.innerText = `Computer's score is ${computerScore}`
      } else {
        message.innerText = roundResult
      }
      if (myScore === 5 || computerScore === 5) {
        body.appendChild(resetButton)
        message.innerText = myScore === 5 ? 'Congrats, you won the game' : "Sorry, you've lost to the pc"
        buttons.forEach((button) => {
          button.setAttribute('disabled', true)
        })
      }
    })
  })
})
