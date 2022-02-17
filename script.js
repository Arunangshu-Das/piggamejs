'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const scores = [0, 0];
// let currentScore=0
let activePlayer = 0;
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;
let playing = true;
//rolling dice
const switching = function () {
  document
    .getElementById(`current--${activePlayer}`)
    .classList.remove('player--active');
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = (activePlayer + 1) % 2;
  currentScore = 0;
  document
    .getElementById(`current--${activePlayer}`)
    .classList.add('player--active');
};
buttonRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if (dice == 1) {
      switching();
    } else {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    let score = Number(
      document.getElementById(`score--${activePlayer}`).textContent
    );
    score += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = score;
    if (score >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      playing = false;
      diceEl.classList.add('hidden');
    }

  switching();
  }
});
buttonNew.addEventListener('click',function(){
  document
    .querySelector(`.player--0`)
    .classList.remove('player--winner');
  document
    .querySelector(`.player--0`)
    .classList.add('player--active');
    document.querySelector(`.player--1`).classList.remove('player--winner');
    // document.querySelector(`.player--1`).classList.add('player--active');
    score0El.textContent=0
    score1El.textContent=0
    current0El.textContent=0
    current1El.textContent=0
    playing=true
})