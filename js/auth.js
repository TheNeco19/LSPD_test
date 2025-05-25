// js/auth.js
window.onload = function () {
    const isAuth = localStorage.getItem('lspdAuth') === 'true';
    const content = document.getElementById('content');
    if (!isAuth) {
      alert('Zugriff verweigert. Bitte zuerst einloggen.');
      window.location.href = 'login.html';
    } else if (content) {
      content.style.display = 'block';
    }
  };
  