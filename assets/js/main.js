document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('modeToggle');
    const body = document.body;
  
    // Initial Button Text je nach Modus
    if (body.classList.contains('light-mode')) {
      toggleBtn.textContent = 'Dark Mode';
    } else {
      toggleBtn.textContent = 'Light Mode';
    }
  
    toggleBtn.addEventListener('click', () => {
      if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        toggleBtn.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
      } else {
        body.classList.add('light-mode');
        toggleBtn.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light');
      }
    });
  
    // Prüfe gespeicherten Modus beim Laden und setze ihn
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      body.classList.add('light-mode');
      toggleBtn.textContent = 'Dark Mode';
    } else if (savedTheme === 'dark') {
      body.classList.remove('light-mode');
      toggleBtn.textContent = 'Light Mode';
    }
  });
  