'use strict'

window.addEventListener('load', () => {
  const getComputerChoice = () => {
    let choice = Math.ceil(Math.random() * 3)
    if (choice === 1) return 'Rock'
    else if (choice === 2) return 'Paper'
    else return 'Scissors'
  }
  const buttons = Array.from(document.querySelectorAll('button'))

  const rock = document.querySelector('.rock')
  const paper = document.querySelector('.paper')
  const scissors = document.querySelector('.scissors')

  const playRound = (playerSelection, computerSelection) => {
    switch (true) {
      case playerSelection === computerSelection:
        return "It's a tie"

      case playerSelection === 'Rock' && computerSelection === 'Scissors':
        paper.classList.add('filter')
        scissors.classList.add('filter')
        setTimeout(() => {
          paper.classList.remove('filter')
          scissors.classList.remove('filter')
        }, 1000)
        return 'You win! Rock beats Scissors'

      case playerSelection === 'Rock' && computerSelection === 'Paper':
        paper.classList.add('filter')
        scissors.classList.add('filter')
        setTimeout(() => {
          paper.classList.remove('filter')
          scissors.classList.remove('filter')
        }, 1000)
        return 'You lose! Paper beats Rock'

      case playerSelection === 'Paper' && computerSelection === 'Rock':
        scissors.classList.add('filter')
        rock.classList.add('filter')
        setTimeout(() => {
          rock.classList.remove('filter')
          scissors.classList.remove('filter')
        }, 1000)
        return 'You win! Paper beats Rock'

      case playerSelection === 'Paper' && computerSelection === 'Scissors':
        rock.classList.add('filter')
        scissors.classList.add('filter')
        setTimeout(() => {
          rock.classList.remove('filter')
          scissors.classList.remove('filter')
        }, 1000)
        return 'You lose! Scissors beats Paper'

      case playerSelection === 'Scissors' && computerSelection === 'Paper':
        paper.classList.add('filter')
        rock.classList.add('filter')
        setTimeout(() => {
          paper.classList.remove('filter')
          rock.classList.remove('filter')
        }, 1000)
        return 'You win! Scissors beats Paper'

      case playerSelection === 'Scissors' && computerSelection === 'Rock':
        paper.classList.add('filter')
        rock.classList.add('filter')
        setTimeout(() => {
          paper.classList.remove('filter')
          rock.classList.remove('filter')
        }, 1000)
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
  resetButton.classList.add('button')
  resetButton.classList.add('reset')
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
