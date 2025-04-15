import { setupNavigation } from './modules/navigation.js';
import { setupSubmenus } from './modules/submenu.js';
import { setupSettings, loadSettings } from './modules/settings.js';
import { 
    isOnline, 
    getStorage,
    setStorage,
    debounce 
} from './utils/helpers.js';

// App Configuration
const CONFIG = {
    APP_VERSION: '1.0.0',
    PERFORMANCE_MONITORING: true,
    ERROR_TRACKING: true
};

/**
 * Core Application Initialization
 */
const initApp = () => {
    // Phase 1: Load critical configurations
    loadSettings();
    initAnalytics();

    // Phase 2: Initialize core modules
    setupNavigation();
    setupSubmenus();
    setupSettings();

    // Phase 3: Secondary initializations
    initServiceWorker();
    setupErrorHandling();
    
    if (CONFIG.PERFORMANCE_MONITORING) {
        setupPerformanceMonitoring();
    }

    // Development tools
    if (import.meta.env.MODE === 'development') {
        initDevTools();
    }
};

/**
 * Service Worker Registration
 */
const initServiceWorker = () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(() => {
                console.debug('Service Worker registered');
                trackEvent('ServiceWorker', 'Registered');
            })
            .catch(err => {
                console.error('Service Worker registration failed:', err);
                trackEvent('ServiceWorker', 'RegistrationFailed');
            });
    }
};

/**
 * Error Handling System
 */
const setupErrorHandling = () => {
    if (!CONFIG.ERROR_TRACKING) return;

    // Global error handler
    window.addEventListener('error', (event) => {
        const errorData = {
            message: event.message,
            filename: event.filename,
            lineno: event.lineno,
            colno: event.colno,
            stack: event.error?.stack
        };
        
        console.error('Application Error:', errorData);
        trackEvent('Error', 'Global', errorData);
    });

    // Unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
        console.error('Unhandled Rejection:', event.reason);
        trackEvent('Error', 'UnhandledRejection', {
            reason: event.reason?.toString()
        });
    });
};

/**
 * Performance Monitoring
 */
const setupPerformanceMonitoring = () => {
    window.addEventListener('load', () => {
        if ('performance' in window) {
            const [navigationEntry] = performance.getEntriesByType('navigation');
            const perfMetrics = {
                loadTime: navigationEntry.loadEventEnd - navigationEntry.startTime,
                domReady: navigationEntry.domComplete - navigationEntry.domLoading,
                tti: navigationEntry.domInteractive - navigationEntry.startTime
            };
            
            console.debug('Performance Metrics:', perfMetrics);
            trackEvent('Performance', 'PageLoad', perfMetrics);
        }
    });
};

/**
 * Analytics Tracking
 */
const initAnalytics = () => {
    // Initialize analytics SDKs here
    trackEvent('App', 'Init');
};

const trackEvent = (category, action, data = {}) => {
    // Implement your analytics tracking here
    const eventData = {
        ...data,
        timestamp: new Date().toISOString(),
        version: CONFIG.APP_VERSION,
        online: isOnline()
    };
    
    console.debug(`[Analytics] ${category}:${action}`, eventData);
    // Example: sendToAnalytics(category, action, eventData);
};

/**
 * Development Tools
 */
const initDevTools = () => {
    window.app = {
        // Core functions
        reload: () => window.location.reload(),
        getState: () => getStorage('appState'),
        
        // Version info
        version: CONFIG.APP_VERSION,
        env: import.meta.env.MODE,
        
        // Debug utilities
        testOfflineMode: () => {
            setStorage('__simulateOffline', true);
            window.location.reload();
        },
        
        // Module access
        modules: {
            navigation: setupNavigation,
            submenus: setupSubmenus,
            settings: setupSettings
        }
    };

    console.info('Development tools enabled. Access via window.app');
};

/**
 * Start the application
 */
const startApp = debounce(() => {
    if (document.readyState === 'complete') {
        initApp();
    } else {
        document.addEventListener('DOMContentLoaded', initApp);
    }
}, 100);

// Launch the application
startApp();