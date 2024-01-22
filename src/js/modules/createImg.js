export const createImg = () => {
  const image = document.createElement('img');
  image.classList.add('hagman-image');
  image.src = '/images/hg-0.png';
  image.alt = 'hagman image';
  image.id = 'hagmanImg';
  return image;
};

