const SUPABASE_URL = 'https://rtlscqxivjinblfrlgls.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0bHNjcXhpdmppbmJsZnJsZ2xzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIzMDU0MTMsImV4cCI6MTk2Nzg4MTQxM30.00XIP2vqbUttvWfraYlPerWhL6U91pxWMD114J1FM8I';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


export async function fetchPosts(){
    const response = await client.from('bulletin_board').select('*');
    console.log(response.data);
    return response.data;
}

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function checkAuth() {
    const user = await getUser();
    if (!user) location.replace('/auth-page');
}

export async function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('/');
    }
}

export async function signUpUser(email, password) {
    const response = await client.auth.signUp({ email, password });
    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });
    return response.user;
}


export async function createPosts(post) {
    const resp = await client.from('bulletin_board').insert(post);
    console.log(resp);
    return resp.data;
}

export async function logout() {
    await client.auth.signOut();
    return (window.location.href = '/');
}