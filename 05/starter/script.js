'use strict';
// document.querySelector('.message').textContent = '🎉 Correct answer!';
let score = 20;
let highScore = 0;

const getSectrtNumber = function () {
  return Math.trunc(Math.random() * 20 + 1);
};
const sectrtNumber = getSectrtNumber();
document.querySelector('.score').textContent = score;
console.log(sectrtNumber);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let userInput = Number(document.querySelector('.guess').value);
  //No input form user.
  if (!userInput)
    // document.querySelector('.message').textContent = 'No number entered!';
    displayMessage('No number entered!');
  //input is higher.
  else if (userInput !== sectrtNumber) {
    score--;
    document.querySelector('.score').textContent = score;
    displayMessage(userInput > sectrtNumber ? 'too high.' : 'too low!.');
  } else {
    displayMessage('correct Asnwer 🎖');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = sectrtNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //high score record.
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // lose the game.
  if (score <= 0) {
    displayMessage('😞 you lose!');
  }

  document.querySelector('.guess').value = '';
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  score = 20;
  sectrtNumber = getSectrtNumber();
});
