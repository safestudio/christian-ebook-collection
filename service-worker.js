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
    "revision": "785b0e558b285223f577028ea4f7f84b"
  },
  {
    "url": "assets/css/0.styles.59e0dcb8.css",
    "revision": "9004da55bc47c16599c08d9e3a9437c1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.32fc2f60.js",
    "revision": "bbd498f606cfd3cc8eeab1b1dbf2f4b1"
  },
  {
    "url": "assets/js/3.0fe528bd.js",
    "revision": "d87f8f5af738c37fe781e095a8e13f2a"
  },
  {
    "url": "assets/js/4.630f9ac0.js",
    "revision": "f7753c60aded4071a57343cddbeb0356"
  },
  {
    "url": "assets/js/5.c3e42228.js",
    "revision": "77bdbc5093ec1b1308285b7662614083"
  },
  {
    "url": "assets/js/app.a6719fc0.js",
    "revision": "e9c75aa2ba04ad03cdfe8a4397c99755"
  },
  {
    "url": "books/duong-linh/binh-an-voi-chua.html",
    "revision": "b1459401371a10c16d4dac0c7b20a0f9"
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
    "revision": "be8fc1188a16bac5f9d9672dad97fc67"
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
