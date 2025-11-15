const CACHE_NAME = 'neuroscores-v1';
const urlsToCache = [
  // Danh sách các tệp cần lưu cache để dùng ngoại tuyến
  '/indexnp.html',
  '/style.css', // Sửa nếu tên file CSS của bạn khác
  '/script.js', // Sửa nếu tên file JavaScript của bạn khác
  '/manifest.json',
  '/icon-192x192.png', 
  '/icon-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting(); 
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
