import {stopGame} from './stopGame';
let letterCount = null;

export const checktLetter = (letter) => {
  const world = sessionStorage.getItem('world');
  const inputLetter = letter.toLowerCase();
  const triesCounter = document.querySelector('.counter');
  const hagmanImg = document.getElementById('hagmanimages');
  if (!world.includes(inputLetter)) {
    triesCounter.textContent--;
    hagmanImg.src = `img/hg-${10 - +triesCounter.textContent}.png`;
    if (+triesCounter.textContent === 0) {
      stopGame('lose');
    }
  } else {
    const worldArr = Array.from(world);
    worldArr.forEach((element, i) => {
      if (element === inputLetter) {
        letterCount++;
        console.log(element);
        if (+letterCount === world.length) {
          stopGame('win');
          return;
        }
        document.getElementById(`letter_${i}`)
            .textContent = inputLetter.toUpperCase();
      }
    });
  }
};
