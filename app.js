// import functions and grab DOM elements

import { checkAuth, fetchPosts } from './fetch-utils.js';

const postsElem = document.getElementById('posts');
//checkAuth();

const logoutBtn = document.getElementById('logout');
logoutBtn.addEventListener('click', () => {
    window.location.href = '/';
});


const authButton = document.getElementById('auth-button');
authButton.addEventListener('click', () => {
    window.location.href = '/auth-page';
});


async function onLoad() {
    const posts = await fetchPosts();
    console.log(posts);
    for (let post of posts) {
        const div = document.createElement('div');
        const p = document.createElement('p');
        const h2 = document.createElement('h2');
        h2.textContent = post.title;
        p.textContent = post.description;
        div.append(h2, p);
        postsElem.append(div);
    }
}
onLoad();








// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
