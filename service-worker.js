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
    "revision": "969615fc9f2cf32d18628e76dc96d8a8"
  },
  {
    "url": "assets/css/0.styles.621ea09d.css",
    "revision": "98ed8c845664974f82585871fcacbb34"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.83899088.js",
    "revision": "ac7eb1eac07643e0778b0b55f2dbdf02"
  },
  {
    "url": "assets/js/2.26abcf07.js",
    "revision": "e5f54001b67c92ad3e0b33f2cef3e529"
  },
  {
    "url": "assets/js/3.805cd242.js",
    "revision": "1ff8f9ad2bc0690be121ec472ee6e165"
  },
  {
    "url": "assets/js/4.4bd4f657.js",
    "revision": "18a3cf37be88af968f1df5a8675f2a26"
  },
  {
    "url": "assets/js/5.5bb596ae.js",
    "revision": "2a0f0243ec7acc40b1a1bfedf6bda6ea"
  },
  {
    "url": "assets/js/6.9d0f90ab.js",
    "revision": "5de39038f07a0e8cb4b59c77753a3763"
  },
  {
    "url": "assets/js/app.b7a9e654.js",
    "revision": "f463a9d10d2a1e1e0aec6b2f462b4ef0"
  },
  {
    "url": "books/duong-linh/binh-an-voi-chua.html",
    "revision": "9f39acba4d19d20b214186779198b26f"
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
    "revision": "ccb797732f534b8d9065fd99f7a9b5c1"
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
