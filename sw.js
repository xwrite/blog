self.addEventListener('install', (event) => {
  console.log('sw.js install');
});

self.addEventListener('fetch', (event) => {
  console.log('sw.js fetch');
});