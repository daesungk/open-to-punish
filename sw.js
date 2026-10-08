/* Offline support: cache the whole app on install, serve from cache first.
   Bump VERSION whenever any file changes so returning users get the update. */
const VERSION = "book-moves-v3";
const FILES = [
  "./", "index.html", "manifest.webmanifest",
  "css/app.css", "js/app.js", "data/book.js", "data/traps.js", "vendor/chess.js",
  "icons/icon.svg", "icons/icon-192.png", "icons/icon-512.png", "icons/icon-512-maskable.png",
  "fonts/chess-pieces.woff2", "fonts/young-serif-latin-400-normal.woff2",
  "fonts/public-sans-latin-400-normal.woff2", "fonts/public-sans-latin-500-normal.woff2",
  "fonts/public-sans-latin-600-normal.woff2", "fonts/public-sans-latin-700-normal.woff2",
  "fonts/jetbrains-mono-latin-400-normal.woff2", "fonts/jetbrains-mono-latin-600-normal.woff2"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(hit => hit || fetch(e.request))
  );
});
