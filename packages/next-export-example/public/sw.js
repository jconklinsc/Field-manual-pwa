// Draw It Out® Field Manual PWA — Offline Service Worker
// Strategy: App-shell caching + static asset caching + navigation fallback

const CACHE_NAME = 'dio-field-manual-v1';
const STATIC_ASSETS = [
  '/', 
  '/daily-care',
  '/pre-ride',
  '/post-ride',
  '/skin-and-legs',
  '/environment',
  '/quick-reference',
  '/favicon.ico',
  '/manifest.json'
];

// Install event — pre-cache app shell
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
});

// Activate event — cleanup old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    )
  );
});

// Fetch event — offline-first strategy
self.addEventListener('fetch', event => {
  const req = event.request;

  // Navigation requests → serve app shell
  if (req.mode === 'navigate') {
    event.respondWith(
      caches.match('/').then(cacheRes => {
        return cacheRes || fetch(req);
      })
    );
    return;
  }

  // Static files → cache-first
  event.respondWith(
    caches.match(req).then(cacheRes => {
      return cacheRes || fetch(req).then(fetchRes => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(req, fetchRes.clone());
          return fetchRes;
        });
      });
    })
  );
});
