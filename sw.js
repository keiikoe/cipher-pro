self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("cipher-cache").then(cache => {
            return cache.addAll([
                "./",
                "./index.html",
                "./lol.png"
            ]);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(res => {
            return res || fetch(e.request);
        })
    );
});