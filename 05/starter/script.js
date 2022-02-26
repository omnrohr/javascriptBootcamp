'use strict';
// document.querySelector('.message').textContent = '🎉 Correct answer!';
let score = 20;
let highScore = 0;

const getSectrtNumber = function () {
  return Math.trunc(Math.random() * 20 + 1);
};
let sectrtNumber = getSectrtNumber();
document.querySelector('.score').textContent = score;
console.log(sectrtNumber);

document.querySelector('.check').addEventListener('click', function () {
  let userInput = Number(document.querySelector('.guess').value);
  //No input form user.
  if (!userInput)
    document.querySelector('.message').textContent = 'No number entered!';
  //input is higher.
  else if (userInput !== sectrtNumber) {
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent =
      userInput > sectrtNumber ? 'too high.' : 'too low!.';
  } else {
    document.querySelector('.message').textContent = 'correct Asnwer 🎖';
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
    document.querySelector('.message').textContent = '😞 you lose!';
  }

  document.querySelector('.guess').value = '';
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  score = 20;
  sectrtNumber = getSectrtNumber();
});
