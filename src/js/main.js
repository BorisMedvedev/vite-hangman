import '../css/style.css';

const toggleDarkMode = document.getElementById('toggleDarkMode');

toggleDarkMode.addEventListener('input', () => {
  const htmlEltmtnt = document.documentElement;
  htmlEltmtnt.classList.toggle('dark');
});
