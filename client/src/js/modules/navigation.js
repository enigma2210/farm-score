// navigation.js - Handles mobile navigation and responsive behavior
export function setupNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const settingsBtn = document.querySelector('.settings-btn');

    // Mobile menu toggle
    hamburger?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="bi bi-x-lg text-2xl"></i>' 
            : '<i class="bi bi-list text-2xl"></i>';
    });

    // Settings panel toggle
    settingsBtn?.addEventListener('click', showSettingsPanel);

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-links') && !e.target.closest('.hamburger')) {
            navLinks.classList.remove('active');
            hamburger.innerHTML = '<i class="bi bi-list text-2xl"></i>';
        }
    });

    // Handle window resize
    window.addEventListener('resize', handleResponsiveNavigation);
}

function showSettingsPanel() {
    const settingsHTML = `
        <div class="settings-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="settings-panel bg-white p-6 rounded-xl max-w-md w-full m-4 animate-fade-in">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-xl font-bold">Settings</h3>
                    <button class="close-settings p-2 hover:bg-gray-100 rounded-full">
                        <i class="bi bi-x-lg"></i>
                    </button>
                </div>
                <div class="space-y-4">
                    ${renderSettingsOption('Language', 'select', ['English', 'हिंदी', 'मराठी'])}
                    ${renderSettingsOption('Theme', 'toggle', ['Light', 'Dark'])}
                    ${renderSettingsOption('Notifications', 'switch', ['On', 'Off'])}
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', settingsHTML);
    
    // Close settings handler
    document.querySelector('.close-settings')?.addEventListener('click', () => {
        document.querySelector('.settings-overlay')?.remove();
    });
}

function renderSettingsOption(label, type, options) {
    switch (type) {
        case 'select':
            return `
                <div class="flex items-center justify-between">
                    <span>${label}</span>
                    <select class="p-2 border rounded text-sm">
                        ${options.map(opt => `<option>${opt}</option>`).join('')}
                    </select>
                </div>
            `;
        case 'toggle':
            return `
                <div class="flex items-center justify-between">
                    <span>${label}</span>
                    <div class="flex items-center space-x-2">
                        ${options.map((opt, i) => `
                            <button class="theme-toggle ${i === 0 ? 'bg-blue-500 text-white' : 'bg-gray-200'} 
                                    px-3 py-1 rounded-full text-sm">
                                ${opt}
                            </button>
                        `).join('')}
                    </div>
                </div>
            `;
        case 'switch':
            return `
                <div class="flex items-center justify-between">
                    <span>${label}</span>
                    <label class="switch">
                        <input type="checkbox" checked>
                        <span class="slider round"></span>
                    </label>
                </div>
            `;
    }
}

function handleResponsiveNavigation() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    
    if (window.innerWidth >= 768) {
        navLinks.classList.remove('active');
        hamburger.innerHTML = '<i class="bi bi-list text-2xl"></i>';
    }
}