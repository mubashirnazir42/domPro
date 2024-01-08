"use strict";

var score0 = document.querySelector("#score--0"); // score 0
var score1 = document.querySelector("#score--1"); // score 1
var currentScore0 = document.querySelector("#current--0"); // current score nechay wala plyer 0
let currentscoreNumber = Number(currentScore0.innerHTML); // Number the value of current score 0
let currentScore1 = document.querySelector("#current--1"); //current score nechay wala plyer 1
var diceEl = document.querySelector(".dice");
var diceNum = Number(document.querySelector(".dice"));
var rolldice = document.querySelector(".btn--roll"); //roll button
var hold = document.querySelector(".btn--hold"); //hold button
var newGame = document.querySelector(".btn--new"); //newGame button

diceEl.classList.add("hidden"); //hide dice

rolldice.addEventListener("click", function () {
  diceEl.classList.remove("hidden");

  let randomNumber = Math.trunc(Math.random() * 6) + 1; //dice random number
  diceEl.src = `dice-${randomNumber}.png`;

  if (randomNumber == 1) {
    console.log("switched");
    diceEl.innerHTML = "1 number aya hai scip krna lazmi hai";
  } else {
    diceEl.innerHTML = randomNumber;
    currentscoreNumber = currentscoreNumber + randomNumber;
    console.log(currentscoreNumber); //current score board m ye add krna
    currentScore0.textContent = currentscoreNumber;
  }
});

hold.addEventListener("click", function () {
  //hold event m value oper put krwana
  score0.innerHTML = currentscoreNumber;
  diceEl.innerHTML = 0;
});

newGame.addEventListener("click", function () {
  //newGame button (everything will be zero)
  diceEl.innerHTML = 0;
  score0.innerHTML = 0;
  currentScore0.innerHTML = 0;
  score1.innerHTML = 0;
  currentscoreNumber = 0;
  currentScore1.innerHTML = 0;
  diceEl.classList.add("hidden");
});
