// public/sw.js - Service Worker

const CACHE_NAME = 'agri-intel-v1';
const OFFLINE_CACHE = 'agri-intel-offline';
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/css/main.css',
  '/js/main.js',
  '/assets/images/fallback.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => 
      Promise.all(
        keys.filter(key => ![CACHE_NAME, OFFLINE_CACHE].includes(key))
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request)
      .then(cached => cached || fetch(event.request)
      .catch(() => caches.match('/offline.html'))
  ));
});