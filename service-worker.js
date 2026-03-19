const CACHE = 'chalant-v1';
const ASSETS = [
  '/chalant/',
  '/chalant/index.html',
  '/chalant/manifest.json',
  '/chalant/icon-180.png',
  '/chalant/icon-192.png',
  '/chalant/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
