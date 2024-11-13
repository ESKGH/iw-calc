export function setupThemeToggle(button) {
    button.addEventListener('click', toggleTheme);
    updateButtonText(button);

    function toggleTheme() {
        document.body.classList.toggle('dark-theme');
        updateButtonText(button);
    }

    function updateButtonText(button) {
        const isDark = document.body.classList.contains('dark-theme');
        button.textContent = isDark ? 'change to Light Theme' : 'change to Dark Theme';
    }
}