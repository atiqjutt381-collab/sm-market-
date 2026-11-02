self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('sm-fsd-v2').then(cache => {
      return cache.addAll(['./index.html','./manifest.json','./logopng.jpg']);
    })
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
