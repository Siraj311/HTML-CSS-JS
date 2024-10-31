const container = document.getElementById('container');
const register = document.getElementById('register');
const login = document.getElementById('login');

register.addEventListener('click', () => {
    container.classList.add('active');
});

login.addEventListener('click', () => {
    container.classList.remove('active');
});

