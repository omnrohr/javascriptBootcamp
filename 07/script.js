'use strict';

const rollDiceBtn = document.querySelector('.btn--roll');
const diceImage = document.querySelector('.dice');
const player0Screen = document.querySelector('.player--0');
const player1Screen = document.querySelector('.player--1');

//initilize currnt dice.
let currentDice;

const getRollDice = function () {
  currentDice = Math.trunc(Math.random() * 6) + 1;
  diceImage.classList.remove('hidden');
  diceImage.src = `dice-${currentDice}.png`;
};

//game variables
const scores = [0, 0];
let currentScore = 0;
let activePlayer = player0Screen.classList.contains('player--active') ? 0 : 1;
let currentPlayer = 0; //it will start from player 0 sure.

//roll dice logic
rollDiceBtn.addEventListener('click', function () {
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

    // you can also do
    // player0Screen.classList.toggle('player--active');
    // player1Screen.classList.toggle('player--active');
    // this method will check if the current item have the class
    // it will reomve it or will add it.
    currentPlayer = currentPlayer === 0 ? 1 : 0;
    document
      .querySelector(`.player--${currentPlayer}`)
      .classList.add('player--active');
    document.getElementById(`current--${currentPlayer}`).textContent =
      currentScore;
  }
});
