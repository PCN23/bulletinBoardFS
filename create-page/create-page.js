import { checkAuth, logout } from '../fetch-utils.js';

checkAuth();

const postItForm = document.getElementById('post-it-form');
postItForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
});

const logoutButton = document.getElementById('logout');
logoutButton.addEventListener('click', () => {
    logout();
});

const home = document.getElementById('home');
home.addEventListener('click', () => {
    location.replace('/');
});



//set up form to accept port input

