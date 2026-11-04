// Permet d'ouvrir le site hors connexion. Le réseau passe toujours en premier,
// pour que les mises à jour du site arrivent dès qu'il y a du réseau.
const CACHE = "mes-notes-v1";
const FICHIERS = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FICHIERS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then(r => { if (r.ok) { const copie = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copie)); } return r; })
      .catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || (e.request.mode === "navigate" ? caches.match("./index.html") : undefined)))
  );
});
