import { redirectIfLoggedIn, signInUser, signUpUser } from '../fetch-utils.js';

const signUpForm = document.getElementById('sign-up');
const signInForm = document.getElementById('sign-in');

redirectIfLoggedIn();

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    console.log({ email: data.get('email'), password: data.get('password') });

    const user = await signUpUser(data.get('email'), data.get('password'));
    console.log(user);
    if (user) {
        location.replace('./auth-page');
    }
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signInForm);

    console.log({ email: data.get('email'), password: data.get('password') });
    const user = await signInUser(data.get('email'), data.get ('password'));
    console.log(user);
    if (user) {
        location.replace('./auth-page.js');
    }
});

