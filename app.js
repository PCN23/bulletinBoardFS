// import functions and grab DOM elements

import { fetchPosts } from './fetch-utils.js';

const postsElem = document.getElementById('posts');
const authButton = document.getElementById('auth-button');
const createBtn = document.getElementById('create');




async function onLoad() {
    const posts = await fetchPosts();
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
