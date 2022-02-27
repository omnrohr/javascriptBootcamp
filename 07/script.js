'use strict';

const rollDiceBtn = document.querySelector('.btn--roll');
const diceImage = document.querySelector('.dice');
const player0Screen = document.querySelector('.player--0');
const player1Screen = document.querySelector('.player--1');
const holdBtn = document.querySelector('.btn--hold');

//initilize currnt dice.
let currentDice;

const getRollDice = function () {
  currentDice = Math.trunc(Math.random() * 6) + 1;
  diceImage.classList.remove('hidden');
  diceImage.src = `dice-${currentDice}.png`;
};

//swich plyaer logic
const switchPlayer = function () {
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  currentScore = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  player0Screen.classList.toggle('player--active');
  player1Screen.classList.toggle('player--active');
};

//game variables
const score = [0, 0];
let currentScore = 0;
// let activePlayer = player0Screen.classList.contains('player--active') ? 0 : 1;
let currentPlayer = 0; //it will start from player 0 sure.
// let playerNames = [
//   prompt('Sirst player name? '),
//   prompt('Second player name? '),
// ];

let playerNames = ['player 1', 'player 2'];
let playing = true;

document.getElementById('name--0').textContent =
  playerNames[0].toLocaleUpperCase();
document.getElementById('name--1').textContent =
  playerNames[1].toLocaleUpperCase();

//roll dice logic
rollDiceBtn.addEventListener('click', function () {
  if (playing) {
    getRollDice();
    if (currentDice !== 1) {
      currentScore += currentDice;
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
    } else {
      currentScore = 0;
      document.getElementById(`current--${currentPlayer}`).textContent = 0;
      document
        .querySelector('.player--active')
        .classList.remove('player--active');

      currentPlayer = currentPlayer === 0 ? 1 : 0;
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--active');
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
    }
  }
});

holdBtn.addEventListener('click', function () {
  if (playing) {
    score[currentPlayer] += currentScore;
    document.getElementById(`current--${currentPlayer}`).textContent = 0;
    document.getElementById(`score--${currentPlayer}`).textContent =
      score[currentPlayer];
    if (score[currentPlayer] >= 100) {
      playing = false;
      diceImage.classList.add('hidden');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove('player--active');

      document.getElementById(
        `name--${currentPlayer}`
      ).textContent = `the winner 🥇${playerNames[currentPlayer]}`;
    } else {
      // currentScore = 0;
      // document.getElementById(`current--${currentPlayer}`).textContent =
      //   currentScore;
      // currentPlayer = currentPlayer === 0 ? 1 : 0;
      // player0Screen.classList.toggle('player--active');
      // player1Screen.classList.toggle('player--active');
      switchPlayer();
    }
  }
});
