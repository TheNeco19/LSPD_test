// Beispiel-Benutzer (nur für Demo)
const users = [
  { username: 'officer1', password: 'password123' },
  { username: 'admin', password: 'adminpass' }
];

function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  const validUser = users.find(u => u.username === user && u.password === pass);
  if (validUser) {
    sessionStorage.setItem('loggedInUser', user);
    window.location.href = 'dashboard.html';
  } else {
    document.getElementById('loginError').style.display = 'block';
  }
}

function checkAuth() {
  if (!sessionStorage.getItem('loggedInUser')) {
    window.location.href = 'login.html';
  }
}

function logout() {
  sessionStorage.removeItem('loggedInUser');
  window.location.href = 'index.html';
}
