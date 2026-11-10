// Offline support for Tabi Spend.
// When you change index.html, bump VERSION so phones pick up the new copy.
const VERSION = 'tabi-spend-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-180.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Serve from cache first (works offline), refresh the cache in the background.
// Requests to other sites (the exchange-rate API) go straight to the network.
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;

  const fresh = fetch(req).then(async res => {
    if (res.ok) {
      const copy = res.clone();
      const cache = await caches.open(VERSION);
      await cache.put(req, copy);
    }
    return res;
  });

  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then(hit =>
      hit || fresh.catch(() => caches.match('./index.html'))
    )
  );
  e.waitUntil(fresh.then(() => {}, () => {}));
});
