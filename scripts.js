// Mobile menu toggle, will do something with this later maybe
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});



// Check for saved user preference or use system preference

//.matchMedia checks if a media query matches
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

//localStorage is the browser's presistent key-value storage, getitem gets the value under key theme
const currentTheme = localStorage.getItem('theme');

    // Set initial theme in the <html> tag
if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    updateButtonText();
}

function toggleDarkMode() {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';

    if (isDark) {
    html.removeAttribute('data-theme');
    //saves preference in localstorage
    localStorage.setItem('theme', 'light');
} else {
    html.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
}

    updateButtonText();
}

function updateButtonText() {
    const button = document.getElementById('dark-mode-toggle');
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    button.textContent = isDark ? 'Light Mode' : 'Dark Mode'; //switches between light and dark mode
}

    // Listen for system theme changes
prefersDarkScheme.addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
        if (e.matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
        updateButtonText();
    }
});