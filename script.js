document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
        icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }

    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    });

    // Bot status
    fetch('status.json')
        .then(response => response.json())
        .then(data => {
            const status = data.status;
            const statusDot = document.querySelector('.status-dot');
            const statusText = document.querySelector('.bot-status span:last-child');

            statusDot.className = 'status-dot ' + status;
            statusText.textContent = 'Bot Status: ' + status.charAt(0).toUpperCase() + status.slice(1);
        })
        .catch(error => {
            console.error('Error fetching status:', error);
        });
});