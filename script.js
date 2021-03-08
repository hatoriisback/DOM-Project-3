// // Pig Games | Dice // //

'use strict';

// Selecting Elements

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const name0El = document.getElementById('name--0');
const name1El = document.getElementById('name--1');

// Name Elements
name0El.textContent = 'Bu Bro';
name1El.textContent = 'Bang Jago';

// Starting Conditions

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling Dice Functionality

btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. Check for rolled 1: if true, switch to next player
  if (dice !== 1) {
    // Add dice to the current score
    currentScore += dice;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;

    // current0El.textContent = currentScore; // Change Later
  } else {
    // Switch to next player
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});

btnHold.addEventListener('click', function () {
  // 1. Add current score to active player
  scores[activePlayer] += currentScore;

  // 2. Check if the player's score is >= 100
  // Finish the game


  // Switch to the next player

  
});
