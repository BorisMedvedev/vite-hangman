import {createImg} from './createImg';
import {createKeyboard} from './createKeyboard';
import {createPseudoLetters} from './createpPeudoLetters';
import {generateWords} from './generateWords';
import {WORLD} from './consts';
import {ALPHABET} from './consts';
import {stopGame} from './stopGame';

export const startGame = () => {
  const game = document.getElementById('game');
  const logo = document.querySelector('.logo');
  const image = createImg();
  const keyboardWrapper = createKeyboard(ALPHABET);
  const pseudoLetters = createPseudoLetters(sessionStorage.getItem('world'));
  const cancelBtn = document.createElement('button');
  logo.classList.add('logo-min');
  cancelBtn.classList.add('cancel-btn');
  cancelBtn.textContent = 'Выйти';
  game.innerHTML = '';
  generateWords(WORLD);
  game.prepend(image);
  game.append(pseudoLetters.wrapper,
      pseudoLetters.lives,
      keyboardWrapper,
      cancelBtn,
  );
  cancelBtn.addEventListener('click', () => {
    if (confirm('Вы точно хотите выйти?')) {
      stopGame('quit');
    }
  });
};
