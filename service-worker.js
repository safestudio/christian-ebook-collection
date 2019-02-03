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
    "revision": "dd634123225ab2f5e91bce81abf1510a"
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
    "url": "assets/js/app.642a0d2b.js",
    "revision": "7147536a7f19a943b93f0dbaec6cedcf"
  },
  {
    "url": "books/duong-linh/binh-an-voi-chua.html",
    "revision": "02a83564ea2e5754b9aa6ea5f3b869cd"
  },
  {
    "url": "hero.png",
    "revision": "e90026e39d13d1e9e63ff0510a95a6a6"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "b141cd50b0fbd8f37cee0a84a0e5fc45"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "2075c44b31ef49e5b45419e10bc0e166"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "7d6932c68e5f93066ba94b7698698099"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "c0b2777401587c2b4c9983bbc1c4e45d"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "6c76e598a652eadf4eca7be4918fc0c9"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "f2990d306486389cecd02a6cb75a649d"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "d847c7e8e35a8f2cf7d40a06ccf88de1"
  },
  {
    "url": "index.html",
    "revision": "781684f0a3335d54d7ac33bb416b4893"
  },
  {
    "url": "logo.png",
    "revision": "b141cd50b0fbd8f37cee0a84a0e5fc45"
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
