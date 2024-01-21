import {createImg} from './createImg';
import {createKeyboard} from './createKeyboard';
import {createPseudoLetters} from './createpPeudoLetters';
import {generateWords} from './generateWords';
import {WORLD} from './consts';
import {ALPHABET} from './consts';

export const startGame = () => {
  const game = document.getElementById('game');
  const logo = document.querySelector('.logo');
  logo.classList.add('logo-min');
  const image = createImg();
  generateWords(WORLD);
  const keyboardWrapper = createKeyboard(ALPHABET);
  const pseudoLetters = createPseudoLetters(sessionStorage.getItem('world'));
  game.innerHTML = '';
  game.prepend(image);
  game.append(pseudoLetters.wrapper, pseudoLetters.lives, keyboardWrapper);
};
