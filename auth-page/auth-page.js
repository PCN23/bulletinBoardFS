

checkAuth();

const logoutBtn = document.getElementById('logout');

logoutBtn.addEventListener('click', async () => {
    await logout();
});