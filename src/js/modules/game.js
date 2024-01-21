import {createImg} from './createImg';
import {createKeyboard} from './createKeyboard';
import {createPseudoLetters} from './createpPeudoLetters';
import {generateWords} from './generateWords';

export const startGame = () => {
  const game = document.getElementById('game');
  const logo = document.querySelector('.logo');
  logo.classList.add('logo-min');
  const image = createImg();
  generateWords();
  const keyboardWrapper = createKeyboard();
  const pseudoLetters = createPseudoLetters(sessionStorage.getItem('world'));
  game.innerHTML = '';
  game.prepend(image);
  game.append(pseudoLetters.wrapper, pseudoLetters.lives, keyboardWrapper);
};
