import '../css/style.css';
import {startGame} from './modules/game';
import {toggleDarkMode} from './modules/toggleDarkMode';


const init = () => {
  const startGameBtn = document.getElementById('startGame');

  startGameBtn.addEventListener('click', startGame);


  toggleDarkMode();
};

init();


