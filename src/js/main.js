import '../css/style.css';

const toggleDarkMode = document.getElementById('toggleDarkMode');
const htmlElement = document.documentElement;

if (localStorage.getItem('mode') === 'dark') {
  htmlElement.classList.add('dark');
  toggleDarkMode.checked = true;
}

toggleDarkMode.addEventListener('input', () => {
  htmlElement.classList.toggle('dark');

  if (htmlElement.classList.contains('dark')) {
    localStorage.setItem('mode', 'dark');
  } else {
    localStorage.setItem('mode', 'light');
  }
});


const generateWords = () => {
  const words = ['природа', 'автомобиль', 'солнце',
    'дом', 'кошка', 'книга', 'яблоко', 'стул', 'компьютер', 'музыка'];
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }
};

