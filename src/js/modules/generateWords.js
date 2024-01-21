export const generateWords = (WORLD) => {
  for (let i = 0; i < WORLD.length; i++) {
    const randomIndex = Math.floor(Math.random() * WORLD.length);
    sessionStorage.setItem('world', WORLD[randomIndex]);
    return WORLD[randomIndex];
  }
};

