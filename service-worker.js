/**
 * Service Worker for Learn & Play App
 * Enables offline functionality
 */

const CACHE_NAME = 'learn-play-v2';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js',
    '/manifest.json'
];

// Install event - cache assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Caching app assets');
                return cache.addAll(ASSETS_TO_CACHE);
            })
            .then(() => {
                // Activate immediately
                return self.skipWaiting();
            })
    );
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames
                        .filter((name) => name !== CACHE_NAME)
                        .map((name) => caches.delete(name))
                );
            })
            .then(() => {
                // Take control of all pages immediately
                return self.clients.claim();
            })
    );
});

// Fetch event - network-first, falling back to cache when offline.
// This app is under active development, so the app shell (HTML/JS/CSS)
// must always prefer the latest deployed version when online — a
// cache-first strategy here would silently keep serving an old app.js
// forever to anyone who already has this service worker installed,
// since the browser only re-checks this script itself for updates, not
// the assets it caches.
self.addEventListener('fetch', (event) => {
    // Let the browser handle cross-origin requests (e.g. flashcard photos
    // from Unsplash/Pexels) directly. Routing them through the service
    // worker isn't needed for caching, and doing so for many concurrent
    // image requests was stalling most of them instead of loading fast.
    if (!event.request.url.startsWith(self.location.origin)) {
        return;
    }

    // For navigations and same-origin app-shell files, bypass the browser's
    // own HTTP cache too (not just the Cache Storage API above) — otherwise
    // a Last-Modified-based heuristic cache hit can still serve a stale
    // app.js even though this handler asks the network first.
    const networkRequest = event.request.mode === 'navigate'
        ? new Request(event.request.url, { cache: 'no-store' })
        : new Request(event.request, { cache: 'no-store' });

    event.respondWith(
        fetch(networkRequest)
            .then((networkResponse) => {
                // Don't cache non-GET requests
                if (event.request.method !== 'GET') {
                    return networkResponse;
                }

                // Clone and cache the fresh response for offline use
                const responseToCache = networkResponse.clone();
                caches.open(CACHE_NAME)
                    .then((cache) => {
                        cache.put(event.request, responseToCache);
                    });

                return networkResponse;
            })
            .catch(() => {
                // Offline (or request failed) - fall back to cache
                return caches.match(event.request).then((cachedResponse) => {
                    if (cachedResponse) {
                        return cachedResponse;
                    }
                    if (event.request.destination === 'document') {
                        return caches.match('/index.html');
                    }
                    return new Response('Offline', { status: 503 });
                });
            })
    );
});

// Handle messages from the app
self.addEventListener('message', (event) => {
    if (event.data === 'skipWaiting') {
        self.skipWaiting();
    }
});
