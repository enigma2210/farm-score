// submenu.js - Handles all submenu and detail view interactions
import { sections } from './sections.js';
import { detailViews } from './detail-views.js';

export function setupSubmenus() {
    const submenuContainer = document.getElementById('submenu-container');
    const detailContainer = document.getElementById('detail-container');

    // Initialize main button event listeners
    document.querySelectorAll('.main-button').forEach(button => {
        button.addEventListener('click', function() {
            const sectionKey = this.dataset.section;
            renderSubmenu(sectionKey);
            scrollToElement(submenuContainer);
        });
    });

    // Render submenu for a given section
    function renderSubmenu(sectionKey) {
        if (!sections[sectionKey]) return;

        const { title, items } = sections[sectionKey];
        
        submenuContainer.innerHTML = `
            <div class="bg-white p-6 rounded-xl shadow-md animate-fade-in">
                <h2 class="text-xl font-bold mb-4">${title}</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    ${items.map(item => `
                        <button class="submenu-item p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all 
                                    flex flex-col items-center" data-detail="${item.name}">
                            <i class="bi ${item.icon} text-2xl mb-2 text-gray-700"></i>
                            <span class="text-sm font-medium">${item.name}</span>
                        </button>
                    `).join('')}
                </div>
            </div>
        `;

        attachSubmenuItemListeners();
    }

    // Handle clicks on submenu items
    function attachSubmenuItemListeners() {
        document.querySelectorAll('.submenu-item').forEach(item => {
            item.addEventListener('click', function() {
                const detailName = this.dataset.detail;
                renderDetailView(detailName);
                scrollToElement(detailContainer);
            });
        });
    }

    // Render the appropriate detail view
    function renderDetailView(detailName) {
        detailContainer.innerHTML = detailViews[detailName] || createFallbackView(detailName);
        detailContainer.classList.add('active');
    }

    // Fallback for missing detail views
    function createFallbackView(detailName) {
        return `
            <div class="bg-white p-6 rounded-xl shadow-md animate-fade-in">
                <h2 class="text-xl font-bold mb-4">${detailName}</h2>
                <div class="text-center py-8">
                    <i class="bi bi-tools text-4xl text-gray-400 mb-3"></i>
                    <p class="text-gray-600">This feature is under development</p>
                    <p class="text-sm text-gray-500 mt-2">Check back in our next update!</p>
                </div>
            </div>
        `;
    }

    // Smooth scroll helper
    function scrollToElement(element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}