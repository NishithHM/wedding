const cacheName = 'pwa-conf-v1';
const staticAssets = [
  './',
  './index.html',
  './app.js',
  './styles.css'
];

async function registerSW() { 
    if ('serviceWorker' in navigator) { 
        try {
          await navigator.serviceWorker.register('./sw.js'); 
        } catch (e) {
          alert('ServiceWorker registration failed'); 
        }
      } else {
        document.querySelector('.alert').removeAttribute('hidden'); 
      }
    }
// Install event
self.addEventListener('install', async event => {
    const cache = await caches.open(cacheName); 
    await cache.addAll(staticAssets); 
    console.log('dine')
  });
  // Fetch event
  self.addEventListener('fetch', async event => {
    console.log('fetch event')
  });  

