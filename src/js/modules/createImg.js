export const createImg = () => {
  const image = document.createElement('img');
  image.classList.add('hagman-image');
  image.src = 'img/hg-0.png';
  image.alt = 'hagman image';
  image.id = 'hagmanimages';
  return image;
};

