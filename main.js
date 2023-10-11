const root = document.documentElement;
root.className = 'dark';

function setTheme() {
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;

    // document.querySelector('')
}

document.querySelector('.theme-toggle').addEventListener('click', setTheme);