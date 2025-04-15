// settings.js - Manages settings panel and user preferences
export function setupSettings() {
    const settingsBtn = document.querySelector('.settings-btn');
    settingsBtn?.addEventListener('click', renderSettingsPanel);
}

function renderSettingsPanel() {
    const panelHTML = `
        <div class="settings-overlay">
            <div class="settings-panel">
                <div class="panel-header">
                    <h3 class="panel-title">Settings</h3>
                    <button class="close-btn">
                        <i class="bi bi-x-lg"></i>
                    </button>
                </div>
                
                <div class="panel-content">
                    ${createSettingItem({
                        id: 'language',
                        label: 'Language',
                        type: 'select',
                        options: ['English', 'हिंदी', 'मराठी'],
                        current: 'English'
                    })}
                    
                    ${createSettingItem({
                        id: 'theme',
                        label: 'Theme',
                        type: 'toggle',
                        options: ['Light', 'Dark'],
                        current: 'Light'
                    })}
                    
                    ${createSettingItem({
                        id: 'notifications',
                        label: 'Notifications',
                        type: 'switch',
                        current: true
                    })}
                </div>
                
                <div class="panel-footer">
                    <button class="save-btn">Save Preferences</button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', panelHTML);
    setupSettingsEvents();
}

function createSettingItem(config) {
    switch (config.type) {
        case 'select':
            return `
                <div class="setting-item">
                    <label for="${config.id}">${config.label}</label>
                    <select id="${config.id}" class="setting-input">
                        ${config.options.map(opt => `
                            <option value="${opt.toLowerCase()}" ${opt === config.current ? 'selected' : ''}>
                                ${opt}
                            </option>
                        `).join('')}
                    </select>
                </div>
            `;
            
        case 'toggle':
            return `
                <div class="setting-item">
                    <label>${config.label}</label>
                    <div class="toggle-group">
                        ${config.options.map(opt => `
                            <button class="toggle-option ${opt === config.current ? 'active' : ''}" 
                                    data-value="${opt.toLowerCase()}">
                                ${opt}
                            </button>
                        `).join('')}
                    </div>
                </div>
            `;
            
        case 'switch':
            return `
                <div class="setting-item">
                    <label>${config.label}</label>
                    <label class="switch">
                        <input type="checkbox" ${config.current ? 'checked' : ''}>
                        <span class="slider"></span>
                    </label>
                </div>
            `;
    }
}

function setupSettingsEvents() {
    // Close panel
    document.querySelector('.close-btn')?.addEventListener('click', () => {
        document.querySelector('.settings-overlay')?.remove();
    });
    
    // Toggle options
    document.querySelectorAll('.toggle-option').forEach(btn => {
        btn.addEventListener('click', function() {
            this.parentNode.querySelectorAll('.toggle-option').forEach(o => 
                o.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Save preferences
    document.querySelector('.save-btn')?.addEventListener('click', saveSettings);
}

function saveSettings() {
    const settings = {
        language: document.getElementById('language')?.value,
        theme: document.querySelector('.toggle-group .active')?.dataset.value,
        notifications: document.querySelector('.switch input')?.checked
    };
    
    console.log('Settings saved:', settings);
    // Here you would typically send to backend or localStorage
    localStorage.setItem('appSettings', JSON.stringify(settings));
    document.querySelector('.settings-overlay')?.remove();
    
    // Apply theme immediately
    if (settings.theme) {
        document.documentElement.classList.toggle(
            'dark-theme', 
            settings.theme === 'dark'
        );
    }
}

// Initialize saved settings on page load
export function loadSettings() {
    const saved = JSON.parse(localStorage.getItem('appSettings'));
    if (saved) {
        // Apply saved settings
        if (saved.theme === 'dark') {
            document.documentElement.classList.add('dark-theme');
        }
    }
}