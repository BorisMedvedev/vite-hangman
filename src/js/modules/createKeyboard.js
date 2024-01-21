import {ALPHABET} from './consts';

export const createKeyboard = () => {
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

  });
  return keyboardWrapper;
};

