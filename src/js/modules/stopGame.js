import {startGame} from './game';

export const stopGame = (statusgame) => {
  const world = sessionStorage.getItem('world');
  const btn = document.createElement('button');
  btn.classList.add('cancel-btn');
  btn.textContent = 'Рестарт';
  document.querySelector('.keyboard-wrapper').remove();
  document.querySelector('.wrapper').remove();
  document.querySelector('.lives-text').remove();
  document.querySelector('.hagman-image').src = '/images/hg-win.png';
  document.getElementById('game').innerHTML += `<h2>Вы выйграли :)</h2>`;
  if (statusgame === 'win') {
    document.querySelector('.hagman-image').src = '/images/hg-win.png';
    document.getElementById('game').innerHTML += `<h2>Вы выйграли :)</h2>`;
  } else {
    document.getElementById('game').innerHTML += `<h2>Вы проиграли :(</h2>`;
    document.querySelector('.hagman-image').src = '/images/hg-10.png';
  }

  document.getElementById('game').innerHTML += `<h2>слово было: ${world}</h2>`;

  document.getElementById('game').append(btn);
  btn.addEventListener('click', startGame);
};
