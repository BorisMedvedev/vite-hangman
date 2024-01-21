import {stopGame} from './stopGame';
let letterCount = null;

export const checktLetter = (letter) => {
  const world = sessionStorage.getItem('world');
  const inputLetter = letter.toLowerCase();
  const triesCounter = document.querySelector('.counter');
  const hagmanImg = document.getElementById('hagmanImg');
  if (!world.includes(inputLetter)) {
    triesCounter.textContent--;
    hagmanImg.src = `/images/hg-${10 - +triesCounter.textContent}.png`;
    if (+triesCounter.textContent === 0) {
      stopGame('lose');
    }
  } else {
    const worldArr = Array.from(world);
    worldArr.forEach((element, i) => {
      if (element === inputLetter) {
        letterCount++;
        if (letterCount === world.length) {
          stopGame('win');
        }
        document.getElementById(`letter_${i}`)
            .textContent = inputLetter.toUpperCase();
      }
    });
  }
  console.log(letterCount);
};
