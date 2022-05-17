import { fetchPosts } from '../fetch-utils.js';

function onLoad(){
    const data = await fetchPosts();
    console.log(data);
}

onLoad();