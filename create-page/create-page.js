import { checkAuth, logout, createPosts } from '../fetch-utils.js';

checkAuth();

const postItForm = document.getElementById('post-it-form');
postItForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(postItForm);
    
    await createPosts({
        name: data.get('name'),
        position: data.get('position'),
        country: data.get('country'),
        info: data.get('info'),
    });
    location.replace('/');
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

