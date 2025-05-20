document.addEventListener('click', function(e) {
    const menu = document.querySelector('#mobile-menu');
    const btn = document.querySelector('[aria-controls="mobile-menu"]');

    if (!menu.contains(e.target)) {
        menu.classList.add('hidden');
        menu.classList.remove('block');
    }

    // Close menu when clicking outside
    function setupMenuCloseHandlers() {
        document.addEventListener('click', function(e) {
            const menuButton = document.querySelector('[aria-label="Mobile menu"]');
            const menu = document.querySelector('[aria-expanded]');

            if (menu && menuButton &&
                !menu.contains(e.target) &&
                !menuButton.contains(e.target)) {
                const event = new Event('closemenu', { bubbles: true });
                menuButton.dispatchEvent(event);
            }
        });
    }

// Make function available globally
    window.setupMenuCloseHandlers = setupMenuCloseHandlers;
    
});