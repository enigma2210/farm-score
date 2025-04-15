// js/utils/helpers.js - Final Version (Complete Utilities)
/**
 * DOM Utilities
 */
export const $ = (selector, parent = document) => parent.querySelector(selector);
export const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

/**
 * Storage Helpers
 */
export const getStorage = (key, defaultValue = null) => {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : defaultValue;
    } catch (error) {
        console.error('Storage read error:', error);
        return defaultValue;
    }
};

export const setStorage = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (error) {
        console.error('Storage write error:', error);
        return false;
    }
};

export const removeStorage = (key) => {
    localStorage.removeItem(key);
};

/**
 * Device/Environment Detection
 */
export const isMobile = () => window.innerWidth < 768;
export const isOnline = () => navigator.onLine;
export const getOS = () => {
    const userAgent = navigator.userAgent;
    if (/android/i.test(userAgent)) return 'android';
    if (/iPad|iPhone|iPod/.test(userAgent)) return 'ios';
    if (/Win/.test(userAgent)) return 'windows';
    if (/Mac/.test(userAgent)) return 'macos';
    return 'unknown';
};

/**
 * Formatting Utilities
 */
export const formatNumber = (num) => new Intl.NumberFormat('en-IN').format(num);
export const formatCurrency = (amount, currency = 'INR') => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency
    }).format(amount);
};
export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
export const truncate = (str, length = 50) => {
    return str.length > length ? `${str.substring(0, length)}...` : str;
};

/**
 * Performance Utilities
 */
export const debounce = (func, wait = 300) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
};

export const throttle = (func, limit = 300) => {
    let lastCall = 0;
    return (...args) => {
        const now = Date.now();
        if (now - lastCall >= limit) {
            func(...args);
            lastCall = now;
        }
    };
};

/**
 * Navigation Utilities
 */
export const scrollTo = (element, offset = 20) => {
    const target = typeof element === 'string' ? $(element) : element;
    if (!target) return;

    const top = target.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
        top: top - offset,
        behavior: 'smooth'
    });
};

export const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

/**
 * Data Generation
 */
export const generateId = (length = 8) => {
    return Math.random().toString(36).substring(2, 2 + length);
};

export const generateRandomHex = (size = 6) => {
    return `#${[...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')}`;
};

/**
 * Date/Time Utilities
 */
export const formatDate = (date = new Date()) => {
    return new Intl.DateTimeFormat('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    }).format(date);
};

/**
 * URL Utilities
 */
export const getQueryParam = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
};

export const updateQueryParam = (param, value) => {
    const url = new URL(window.location);
    url.searchParams.set(param, value);
    window.history.pushState({}, '', url);
};

/**
 * Object Utilities
 */
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmpty = (obj) => {
    if (!obj) return true;
    return Object.keys(obj).length === 0;
};