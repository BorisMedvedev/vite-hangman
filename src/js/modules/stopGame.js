import {startGame} from './game';

export const stopGame = (statusgame) => {
  const world = sessionStorage.getItem('world').toLocaleUpperCase();
  const btn = document.createElement('button');
  btn.classList.add('cancel-btn');
  btn.textContent = 'Старт Игры';
  document.querySelector('.keyboard-wrapper').remove();
  document.querySelector('.wrapper').remove();
  document.querySelector('.lives-text').remove();

  if (statusgame === 'win') {
    document.querySelector('.hagman-image').src = '/images/hg-win.png';
    document.getElementById('game')
        .innerHTML += `<h2 class='stop-title'>Вы выйграли :)</h2>`;
  } else if (statusgame === 'lose') {
    document.getElementById('game')
        .innerHTML += `<h2 class='stop-title'>Вы проиграли :(</h2>`;
    document.getElementById('game')
        .innerHTML += `<h2 class='stop-title'>Загаданное Слово:
         [ ${world} ]</h2>`;
    document.querySelector('.cancel-btn').remove();
  } else if (statusgame === 'quit') {
    document.querySelector('.hagman-image').remove();
    document.querySelector('.cancel-btn').remove();
    document.querySelector('.logo').classList.remove('logo-min');
  }
  document.getElementById('game').append(btn);
  btn.addEventListener('click', startGame);
};
