if (!self.define) {
  let e,
    s = {};
  const c = (c, t) => (
    (c = new URL(c + '.js', t).href),
    s[c] ||
      new Promise(s => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = c), (e.onload = s), document.head.appendChild(e);
        } else (e = c), importScripts(c), s();
      }).then(() => {
        let e = s[c];
        if (!e) throw new Error(`Module ${c} didn’t register its module`);
        return e;
      })
  );
  self.define = (t, a) => {
    const i =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[i]) return;
    let n = {};
    const f = e => c(e, i),
      r = { module: { uri: i }, exports: n, require: f };
    s[i] = Promise.all(t.map(e => r[e] || f(e))).then(e => (a(...e), n));
  };
}
define(['./workbox-e9849328'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/app-build-manifest.json',
          revision: '87b4c1f39cdd5b9ddba11da89baf5ed3',
        },
        {
          url: '/_next/static/chunks/077f787c-c407d73ef9b2c60b.js',
          revision: 'tVE_4JHMcqEMfsUoWt3Hf',
        },
        {
          url: '/_next/static/chunks/1b21f6ab-9f5b5545572c1e8a.js',
          revision: 'tVE_4JHMcqEMfsUoWt3Hf',
        },
        {
          url: '/_next/static/chunks/297-3e21434575ac016e.js',
          revision: 'tVE_4JHMcqEMfsUoWt3Hf',
        },
        {
          url: '/_next/static/chunks/375250d7-d8162ddd60d67ac7.js',
          revision: 'tVE_4JHMcqEMfsUoWt3Hf',
        },
        {
          url: '/_next/static/chunks/3b01dd32-a8d057453577a745.js',
          revision: 'tVE_4JHMcqEMfsUoWt3Hf',
        },
        {
          url: '/_next/static/chunks/417-0a6117c3c8f4a529.js',
          revision: 'tVE_4JHMcqEMfsUoWt3Hf',
        },
        {
          url: '/_next/static/chunks/540-cce131911ead48ac.js',
          revision: 'tVE_4JHMcqEMfsUoWt3Hf',
        },
        {
          url: '/_next/static/chunks/577863e9-c42270c478507860.js',
          revision: 'tVE_4JHMcqEMfsUoWt3Hf',
        },
        {
          url: '/_next/static/chunks/6247f780-3ecf9aebb4339c2a.js',
          revision: 'tVE_4JHMcqEMfsUoWt3Hf',
        },
        {
          url: '/_next/static/chunks/66ee0c0d-983ac147030ee4af.js',
          revision: 'tVE_4JHMcqEMfsUoWt3Hf',
        },
        {
          url: '/_next/static/chunks/721ef14c-c1670fa5f3398561.js',
          revision: 'tVE_4JHMcqEMfsUoWt3Hf',
        },
        {
          url: '/_next/static/chunks/813-13621df71f409596.js',
          revision: 'tVE_4JHMcqEMfsUoWt3Hf',
        },
        {
          url: '/_next/static/chunks/834-74d819547283a6f1.js',
          revision: 'tVE_4JHMcqEMfsUoWt3Hf',
        },
        {
          url: '/_next/static/chunks/app/%5Blocale%5D/layout-65e4d933d726abb5.js',
          revision: 'tVE_4JHMcqEMfsUoWt3Hf',
        },
        {
          url: '/_next/static/chunks/app/%5Blocale%5D/page-e91e79f9fdbebbfd.js',
          revision: 'tVE_4JHMcqEMfsUoWt3Hf',
        },
        {
          url: '/_next/static/chunks/app/%5Blocale%5D/projects/page-2b82bfe62053d9ba.js',
          revision: 'tVE_4JHMcqEMfsUoWt3Hf',
        },
        {
          url: '/_next/static/chunks/app/%5Blocale%5D/resume/page-2f4d9bd0086bba27.js',
          revision: 'tVE_4JHMcqEMfsUoWt3Hf',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-51b3441f9b744784.js',
          revision: 'tVE_4JHMcqEMfsUoWt3Hf',
        },
        {
          url: '/_next/static/chunks/app/layout-65c09c837c221a00.js',
          revision: 'tVE_4JHMcqEMfsUoWt3Hf',
        },
        {
          url: '/_next/static/chunks/app/not-found-c43e5c54ad6fc0e0.js',
          revision: 'tVE_4JHMcqEMfsUoWt3Hf',
        },
        {
          url: '/_next/static/chunks/app/page-22dc132eeff0f49c.js',
          revision: 'tVE_4JHMcqEMfsUoWt3Hf',
        },
        {
          url: '/_next/static/chunks/b877780c-f349b97dca09cf59.js',
          revision: 'tVE_4JHMcqEMfsUoWt3Hf',
        },
        {
          url: '/_next/static/chunks/bdec28db-33b6fbe7c4b24979.js',
          revision: 'tVE_4JHMcqEMfsUoWt3Hf',
        },
        {
          url: '/_next/static/chunks/f62f6e60-4fe9d208b8ce85f1.js',
          revision: 'tVE_4JHMcqEMfsUoWt3Hf',
        },
        {
          url: '/_next/static/chunks/fdc9a499-28a1b62e143ebf2f.js',
          revision: 'tVE_4JHMcqEMfsUoWt3Hf',
        },
        {
          url: '/_next/static/chunks/framework-5f0b285c13032f48.js',
          revision: 'tVE_4JHMcqEMfsUoWt3Hf',
        },
        {
          url: '/_next/static/chunks/main-2b9cbf62339471ab.js',
          revision: 'tVE_4JHMcqEMfsUoWt3Hf',
        },
        {
          url: '/_next/static/chunks/main-app-28f16e8dbad8efc7.js',
          revision: 'tVE_4JHMcqEMfsUoWt3Hf',
        },
        {
          url: '/_next/static/chunks/pages/_app-efdf6cefc58a6737.js',
          revision: 'tVE_4JHMcqEMfsUoWt3Hf',
        },
        {
          url: '/_next/static/chunks/pages/_error-ec7a63da8f84890e.js',
          revision: 'tVE_4JHMcqEMfsUoWt3Hf',
        },
        {
          url: '/_next/static/chunks/polyfills-42372ed130431b0a.js',
          revision: '846118c33b2c0e922d7b3a7676f81f6f',
        },
        {
          url: '/_next/static/chunks/webpack-667264c2dd3a751b.js',
          revision: 'tVE_4JHMcqEMfsUoWt3Hf',
        },
        {
          url: '/_next/static/css/9fd9d832b1dbfd09.css',
          revision: '9fd9d832b1dbfd09',
        },
        {
          url: '/_next/static/css/b3cbcd051438d1d5.css',
          revision: 'b3cbcd051438d1d5',
        },
        {
          url: '/_next/static/media/26a46d62cd723877-s.woff2',
          revision: 'befd9c0fdfa3d8a645d5f95717ed6420',
        },
        {
          url: '/_next/static/media/55c55f0601d81cf3-s.woff2',
          revision: '43828e14271c77b87e3ed582dbff9f74',
        },
        {
          url: '/_next/static/media/581909926a08bbc8-s.woff2',
          revision: 'f0b86e7c24f455280b8df606b89af891',
        },
        {
          url: '/_next/static/media/6d93bde91c0c2823-s.woff2',
          revision: '621a07228c8ccbfd647918f1021b4868',
        },
        {
          url: '/_next/static/media/97e0cb1ae144a2a9-s.woff2',
          revision: 'e360c61c5bd8d90639fd4503c829c2dc',
        },
        {
          url: '/_next/static/media/a34f9d1faa5f3315-s.p.woff2',
          revision: 'd4fe31e6a2aebc06b8d6e558c9141119',
        },
        {
          url: '/_next/static/media/df0a9ae256c0569c-s.woff2',
          revision: 'd54db44de5ccb18886ece2fda72bdfe0',
        },
        {
          url: '/_next/static/tVE_4JHMcqEMfsUoWt3Hf/_buildManifest.js',
          revision: '73a8e6bc35876a6b6cb9e1c46cda209a',
        },
        {
          url: '/_next/static/tVE_4JHMcqEMfsUoWt3Hf/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/apple-icon.png',
          revision: 'e2699ca6c887c45fbc78dd68b107682f',
        },
        {
          url: '/assets/2025 CV Cesar HERTZ Software.pdf',
          revision: '46908155c983f766cd9e485efae5c924',
        },
        { url: '/favicon.ico', revision: '240998054ed38aca1b3a81df2acc3fee' },
        {
          url: '/imageLaptop.webp',
          revision: 'e2699ca6c887c45fbc78dd68b107682f',
        },
        {
          url: '/imageWork.webp',
          revision: 'c4c5485e1255fdc699d7fc718bce9a05',
        },
        {
          url: '/images/cesar.jpg',
          revision: 'e9515a1e654aab607aaadab153e09017',
        },
        {
          url: '/images/cesar.png',
          revision: 'af877b8a87c8e3e5ffe12b6e42df4ed1',
        },
        {
          url: '/images/cesar.webp',
          revision: '146179661df200b11137cc24ed2a113e',
        },
        {
          url: '/images/projects/chipedin.png',
          revision: '8635a910b3d69c3367f10645d5aa67f3',
        },
        {
          url: '/images/projects/frenchHouse.webp',
          revision: '77e595e96d7c6dc7f083d945cf103ce5',
        },
        {
          url: '/images/projects/italki.png',
          revision: 'ff7a3ee59ed664c798fbd074c7b8b11d',
        },
        {
          url: '/images/projects/meldd.png',
          revision: '1a3c63293f0f28a14fa701e7ab0f2b56',
        },
        {
          url: '/images/projects/mikaelhertz.jpg',
          revision: 'c8edc0c363f1f8c268e06f76371668ee',
        },
        {
          url: '/images/projects/pola.jpg',
          revision: '5b2ab3f8a2bfba904b9039675e794cae',
        },
        {
          url: '/images/projects/portfolio.png',
          revision: 'd15a09ff0ee626b1a813c29ca1131761',
        },
        {
          url: '/images/projects/pureliving.png',
          revision: 'e9c65b9dbd66eb98e4787eb5aa74540a',
        },
        {
          url: '/images/projects/redilink.png',
          revision: 'b60c0352a6902e2dbd13a7df62c1cf94',
        },
        {
          url: '/images/projects/salmon.png',
          revision: '218b692d86d27f44b86720543b37156e',
        },
        {
          url: '/images/projects/storever.png',
          revision: '5e33abda16e902fed4c26b4260268dc9',
        },
        {
          url: '/images/wechat.jpg',
          revision: '72391cdcb8b7ac07c6dcb928f00858ea',
        },
        { url: '/manifest.json', revision: '9b4f21fa45949f8b0a6dfc72ab73cdf5' },
        { url: '/vercel.svg', revision: '4b4f1876502eb6721764637fe5c41702' },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: c,
              state: t,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET',
    );
});
