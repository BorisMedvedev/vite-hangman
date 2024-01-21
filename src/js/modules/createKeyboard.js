import {checktLetter} from './checktLetter';

export const createKeyboard = (ALPHABET) => {
  const keyboardWrapper = document.createElement('div');
  keyboardWrapper.classList.add('keyboard-wrapper');
  for (let i = 0; i < ALPHABET.length; i++) {
    const btn = document.createElement('button');
    btn.textContent = ALPHABET[i];
    btn.id = `btn_${i}`;
    btn.classList.add('btn-keyboard');
    keyboardWrapper.append(btn);
  }
  keyboardWrapper.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'button') {
      e.target.classList.add('disable');
      checktLetter(e.target.textContent);
    }
  });

  return keyboardWrapper;
};

