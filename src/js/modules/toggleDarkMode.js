export const toggleDarkMode = () => {
  const toggleDarkMode = document.getElementById('toggleDarkMode');
  const toggleText = document.getElementById('toggleText');
  const htmlElement = document.documentElement;

  if (localStorage.getItem('mode') === 'dark') {
    htmlElement.classList.add('dark');
    toggleDarkMode.checked = true;
    toggleText.textContent = 'Dark';
  } else {
    toggleText.textContent = 'Light';
  }

  toggleDarkMode.addEventListener('input', () => {
    htmlElement.classList.toggle('dark');

    if (htmlElement.classList.contains('dark')) {
      localStorage.setItem('mode', 'dark');
      toggleText.textContent = 'Dark';
    } else {
      localStorage.setItem('mode', 'light');
      toggleText.textContent = 'Light';
    }
  });
};
