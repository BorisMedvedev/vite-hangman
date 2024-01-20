import {WORLD} from './consts';

export const generateWords = () => {
  for (let i = 0; i < WORLD.length; i++) {
    const randomIndex = Math.floor(Math.random() * WORLD.length);
    sessionStorage.setItem('world', WORLD[randomIndex]);
    return WORLD[randomIndex];
  }
};

