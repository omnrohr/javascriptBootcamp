'use strict';

const rollDiceBtn = document.querySelector('.btn--roll');
const diceImage = document.querySelector('.dice');
const player0Screen = document.querySelector('.player--0');
const player1Screen = document.querySelector('.player--1');
const holdBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');

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
let score;
let currentScore;
let currentPlayer; //it will start from player 0 sure.
let playerNames = ['player 1', 'player 2'];
let playing;

const initilize = function () {
  currentScore = 0;
  score = [0, 0];
  playing = true;
  currentDice = 0;
  currentPlayer = 0;

  document.getElementById(`name--${currentPlayer}`).textContent =
    playerNames[currentPlayer];
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;

  player0Screen.classList.remove('player--winner');
  player1Screen.classList.remove('player--winner');
  diceImage.classList.add('hidden');
  player0Screen.classList.add('player--active');
  player1Screen.classList.remove('player--active');
};

initilize();

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

newGameBtn.addEventListener('click', initilize);
