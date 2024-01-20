export const createPseudoLetters = (world) => {
  const wrapper = document.createElement('div');
  for (let i = 0; i < world.length; i++) {
    const p = document.createElement('p');
    p.textContent = '_';
    p.className = 'letter';
    p.id = `letter_${i}`;
    wrapper.append(p);
    wrapper.classList.add('wrapper');
  }
  return wrapper;
};
