'use strict';
// document.querySelector('.message').textContent = '🎉 Correct answer!';
let score = 0;
let highScore = 0;

let sectrtNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.score').textContent = score;
console.log(sectrtNumber);
// document.querySelector('.number').textContent = sectrtNumber;
// document.querySelector('.guess').value = 10;
// console.log(document.querySelector('.guess').value);

document.querySelector('.check').addEventListener('click', function () {
  let userInput = Number(document.querySelector('.guess').value);
  if (!userInput)
    document.querySelector('.message').textContent = 'No number entered!';
  else if (userInput !== sectrtNumber) {
    score -= 1;
    document.querySelector('.score').textContent = score;
  } else {
    score += 1;
    document.querySelector('.message').textContent = 'correct Asnwer 🎖';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = sectrtNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  document.querySelector('.guess').value = '';
});
