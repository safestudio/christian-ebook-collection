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
    "revision": "b2656a9894dc5613909921811edcec2d"
  },
  {
    "url": "assets/css/0.styles.730dea4f.css",
    "revision": "d6f16bc0a3883bd7200af1b424c07167"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.2ab4813c.js",
    "revision": "bbd498f606cfd3cc8eeab1b1dbf2f4b1"
  },
  {
    "url": "assets/js/3.f7536755.js",
    "revision": "d87f8f5af738c37fe781e095a8e13f2a"
  },
  {
    "url": "assets/js/4.1eb4e4e4.js",
    "revision": "f7753c60aded4071a57343cddbeb0356"
  },
  {
    "url": "assets/js/5.2620732e.js",
    "revision": "77bdbc5093ec1b1308285b7662614083"
  },
  {
    "url": "assets/js/app.9da94529.js",
    "revision": "6428be4a6accfbb098080801a21de11d"
  },
  {
    "url": "books/duong-linh/binh-an-voi-chua.html",
    "revision": "e505b4bbef0d54e1f6ae84df9322c929"
  },
  {
    "url": "hero.png",
    "revision": "86b82e76944d1625a00eed8143b83414"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "7011ead68f5b7ebc333c5db102055ad2"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "86b82e76944d1625a00eed8143b83414"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "444df8b144ae0229262b4c4f06ea0c83"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "e4d30d0deab01d187d91aee881dca725"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "c965b75f0fde1de25a5687d618933664"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "ea31b6654c4e8123fd490b19e22eba13"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "4b04e6d3463cc73002fd0d06bca3aefc"
  },
  {
    "url": "index.html",
    "revision": "aa3a0164c2cafa56f5b59c214005f583"
  },
  {
    "url": "logo.png",
    "revision": "7011ead68f5b7ebc333c5db102055ad2"
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
