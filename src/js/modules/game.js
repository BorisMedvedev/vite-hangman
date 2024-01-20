import {createPseudoLetters} from './createpPeudoLetters';
import {generateWords} from './generateWords';

export const startGame = () => {
  const game = document.getElementById('game');
  generateWords();
  const pseudoLetters = createPseudoLetters(sessionStorage.getItem('world'));
  game.innerHTML = '';
  game.append(pseudoLetters);
};
