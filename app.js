/*
GAME RULES:

var score, roundScore, activePlayer, dice;

score = [0,0];
roundScore = 0;
activePlayer = 1;
dice = Math.floor(Math.random()*6)+1;

document.querySelector('#current-'+activePlayer ).textContent = dice;
document.querySelector('#current-'+ Math.abs(activePlayer-1) ).innerHTML = '<em>'+dice+'</em>';

var x = document.querySelector('#current-'+activePlayer ).textContent;
document.querySelector('.dice').style.display = 'none';