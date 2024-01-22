export const createPseudoLetters = (world) => {
  const wrapper = document.createElement('div');
  const lives = document.createElement('p');
  lives.classList.add('lives-text');
  for (let i = 0; i < world.length; i++) {
    const p = document.createElement('p');
    p.textContent = '_';
    p.className = 'letter';
    p.id = `letter_${i}`;
    wrapper.append(p);
    wrapper.classList.add('wrapper');
  }
  lives.innerHTML = `Попыток: <span class='counter'>10</span>`;
  return {
    wrapper,
    lives,
  };
};
