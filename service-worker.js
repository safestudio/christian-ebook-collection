/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "64eca515fb84a6ad7a14b5e91b6733ae"
  },
  {
    "url": "assets/css/0.styles.07768f3a.css",
    "revision": "fe5c46b6878211d3d09357f6536021fb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.3515c565.js",
    "revision": "9b341bf7c7520010d412cd2805a6ff9f"
  },
  {
    "url": "assets/js/3.1669288a.js",
    "revision": "1f01f7b666da8bfb27786dc889b2d297"
  },
  {
    "url": "assets/js/4.a0926cbf.js",
    "revision": "0adf61d8c83fd002a6181b2e8446ace3"
  },
  {
    "url": "assets/js/5.9cae9d89.js",
    "revision": "214258911a3648a442e0a9d5e84e4cb0"
  },
  {
    "url": "assets/js/6.b186d743.js",
    "revision": "4040b74c68074f40dc2174cc53e33710"
  },
  {
    "url": "assets/js/7.57be3200.js",
    "revision": "10ac3bf110ba1f64288c40cd6024c78f"
  },
  {
    "url": "assets/js/app.c78d818a.js",
    "revision": "7514c37ff3da326ce65f158bf9ea19e1"
  },
  {
    "url": "books/duong-linh/binh-an-voi-chua.html",
    "revision": "3f405feac33c7009a6417052ba4b3a71"
  },
  {
    "url": "hero.png",
    "revision": "ef80daaa731df89baf4d6a2e7f040094"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "c4c630599f5c5157b53281e7f8b7e697"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "b9986a7dee9813f5cc6e778cdacec962"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "7d2ab7325c0c5748a967b144d30d8b00"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "af56e7f479366db5e5d603ae910711de"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "2568303c2230651c50af27dc73d8a289"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "39863d712d7ebbc40a686cb740e390e1"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "d847c7e8e35a8f2cf7d40a06ccf88de1"
  },
  {
    "url": "index.html",
    "revision": "e5cec9024f4ae1e62dae9854499a80e4"
  },
  {
    "url": "logo.png",
    "revision": "c4c630599f5c5157b53281e7f8b7e697"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
