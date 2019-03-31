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
    "revision": "226425bf06669d69e0882c7fc37d70e3"
  },
  {
    "url": "assets/css/0.styles.600b2cde.css",
    "revision": "6ce16481958ac87be864cd3cb03c7e7d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.c66361d3.js",
    "revision": "eeeb811f4a061e65ed7c40a6189e821e"
  },
  {
    "url": "assets/js/3.6bb0e15a.js",
    "revision": "745755fd7d363d3e9f43cb28b25deb2b"
  },
  {
    "url": "assets/js/4.d6f8f713.js",
    "revision": "d15f41a4f8f9ff14aecb189247a1315c"
  },
  {
    "url": "assets/js/5.7058afdb.js",
    "revision": "74d2394d3814f560347ff514adaa9e31"
  },
  {
    "url": "assets/js/6.03555785.js",
    "revision": "7ca9d83b6d4f792051102ea3ba8aeee9"
  },
  {
    "url": "assets/js/7.14bcad87.js",
    "revision": "dbb995e7f829503078aa4a9b87df4315"
  },
  {
    "url": "assets/js/8.9d686589.js",
    "revision": "1d082a9222ca02644f26a6a304058b00"
  },
  {
    "url": "assets/js/app.cfa533b2.js",
    "revision": "f519b602b2942ea7665f99c1da4037da"
  },
  {
    "url": "books/duong-linh/binh-an-voi-chua.html",
    "revision": "79109a5f03b853f5f9fb5af2c04d9231"
  },
  {
    "url": "books/index.html",
    "revision": "e994415d2354e791dde1697f0204203f"
  },
  {
    "url": "covers/duong-linh/binh-an-voi-chua.jpg",
    "revision": "fdfbbc009ed9acb7dbf8769323866152"
  },
  {
    "url": "hero.png",
    "revision": "ef80daaa731df89baf4d6a2e7f040094"
  },
  {
    "url": "icons/android/android-launchericon-144-144.png",
    "revision": "2af299af36550297b2b649c47f23f109"
  },
  {
    "url": "icons/android/android-launchericon-192-192.png",
    "revision": "70cfda01fb77ab82321838d05b06ce59"
  },
  {
    "url": "icons/android/android-launchericon-48-48.png",
    "revision": "b202c4a7f09f444bd72effa3253a11b4"
  },
  {
    "url": "icons/android/android-launchericon-512-512.png",
    "revision": "7065a8c93eafd02a7a3f502c324058e9"
  },
  {
    "url": "icons/android/android-launchericon-72-72.png",
    "revision": "ac12a7e920657a24da31057a1f27871e"
  },
  {
    "url": "icons/android/android-launchericon-96-96.png",
    "revision": "d1408146d79ea102bfd4e94dbca7e28b"
  },
  {
    "url": "icons/chrome/chrome-extensionmanagementpage-48-48.png",
    "revision": "b202c4a7f09f444bd72effa3253a11b4"
  },
  {
    "url": "icons/chrome/chrome-favicon-16-16.png",
    "revision": "39477f3be3debcd654f22056acca36e7"
  },
  {
    "url": "icons/chrome/chrome-installprocess-128-128.png",
    "revision": "76b4b39b1bfd6f31bad18d8a2a07b64d"
  },
  {
    "url": "icons/firefox/firefox-general-128-128.png",
    "revision": "76b4b39b1bfd6f31bad18d8a2a07b64d"
  },
  {
    "url": "icons/firefox/firefox-general-16-16.png",
    "revision": "39477f3be3debcd654f22056acca36e7"
  },
  {
    "url": "icons/firefox/firefox-general-256-256.png",
    "revision": "abf1193a5fc8efd5ce4ffe1e84f32b7e"
  },
  {
    "url": "icons/firefox/firefox-general-32-32.png",
    "revision": "05ece29fe71a4d42128ffbcbc27661fe"
  },
  {
    "url": "icons/firefox/firefox-general-48-48.png",
    "revision": "b202c4a7f09f444bd72effa3253a11b4"
  },
  {
    "url": "icons/firefox/firefox-general-64-64.png",
    "revision": "c4ced5d0fba9a7b489f34b261046c1f0"
  },
  {
    "url": "icons/firefox/firefox-general-90-90.png",
    "revision": "12a186229cd19cab6b46bca1ecd774da"
  },
  {
    "url": "icons/firefox/firefox-marketplace-128-128.png",
    "revision": "76b4b39b1bfd6f31bad18d8a2a07b64d"
  },
  {
    "url": "icons/firefox/firefox-marketplace-512-512.png",
    "revision": "7065a8c93eafd02a7a3f502c324058e9"
  },
  {
    "url": "icons/ios/ios-appicon-1024-1024.png",
    "revision": "e772e934fe599c037780e6975a142499"
  },
  {
    "url": "icons/ios/ios-appicon-120-120.png",
    "revision": "cb8dd06f17952b33b431f00d54b46ac3"
  },
  {
    "url": "icons/ios/ios-appicon-152-152.png",
    "revision": "aa308140e89efdedc13add8a3072368f"
  },
  {
    "url": "icons/ios/ios-appicon-180-180.png",
    "revision": "15c089aeb50ea9ec5f740c802b83ae22"
  },
  {
    "url": "icons/ios/ios-appicon-76-76.png",
    "revision": "3e2aeafbfa8bbc6ca1da317432d4bfc5"
  },
  {
    "url": "icons/ios/ios-launchimage-1024-768.png",
    "revision": "4442a5255b6db160c943712e6ef49b06"
  },
  {
    "url": "icons/ios/ios-launchimage-1242-2208.png",
    "revision": "89cd182b309cf41a31dfce8603e095a4"
  },
  {
    "url": "icons/ios/ios-launchimage-1334-750.png",
    "revision": "315f9b30246401dca2374d6daca2a949"
  },
  {
    "url": "icons/ios/ios-launchimage-1536-2048.png",
    "revision": "f6ac5f8cf7f9735c4a9b5f35a4f3b178"
  },
  {
    "url": "icons/ios/ios-launchimage-2048-1536.png",
    "revision": "7f51b23a7a6ce0e4a7066c6662f07e7a"
  },
  {
    "url": "icons/ios/ios-launchimage-2208-1242.png",
    "revision": "ad4ce29768f7b050448a6b518c352f29"
  },
  {
    "url": "icons/ios/ios-launchimage-640-1136.png",
    "revision": "36f62ff0217550151a91101794b395d4"
  },
  {
    "url": "icons/ios/ios-launchimage-640-960.png",
    "revision": "7332a7177ac70ad0816eff36d4276764"
  },
  {
    "url": "icons/ios/ios-launchimage-750-1334.png",
    "revision": "674b2a42dec18cdf48f2175356a9701f"
  },
  {
    "url": "icons/ios/ios-launchimage-768-1024.png",
    "revision": "fed3e61eb969ad8e6b2f9d3aa5638c4d"
  },
  {
    "url": "icons/windows/windows-smallsquare-24-24.png",
    "revision": "7d722a718856a27868e60fac560f5401"
  },
  {
    "url": "icons/windows/windows-smallsquare-30-30.png",
    "revision": "6aba34e1eaff50ca3ef60604b03e658f"
  },
  {
    "url": "icons/windows/windows-smallsquare-42-42.png",
    "revision": "d60d8d04c189465059478236355c476e"
  },
  {
    "url": "icons/windows/windows-smallsquare-54-54.png",
    "revision": "88f5112342c4051ae89e9389d8104cec"
  },
  {
    "url": "icons/windows/windows-splashscreen-1116-540.png",
    "revision": "f9145dd42349d54d0320cbc0505090c2"
  },
  {
    "url": "icons/windows/windows-splashscreen-620-300.png",
    "revision": "b2b207b70edbeac9c864c9311b97505d"
  },
  {
    "url": "icons/windows/windows-splashscreen-868-420.png",
    "revision": "1f58602efb3f4b7a6a7c7510719584b3"
  },
  {
    "url": "icons/windows/windows-squarelogo-120-120.png",
    "revision": "cb8dd06f17952b33b431f00d54b46ac3"
  },
  {
    "url": "icons/windows/windows-squarelogo-150-150.png",
    "revision": "7cff3b0e34c7669e81fd9a261da0fc73"
  },
  {
    "url": "icons/windows/windows-squarelogo-210-210.png",
    "revision": "eaa387460d043d2decdf73493578f603"
  },
  {
    "url": "icons/windows/windows-squarelogo-270-270.png",
    "revision": "7be422c200b6d4b2c6a50167d34f2056"
  },
  {
    "url": "icons/windows/windows-storelogo-50-50.png",
    "revision": "5922d149bc2159e46dd8be1100ee31fe"
  },
  {
    "url": "icons/windows/windows-storelogo-70-70.png",
    "revision": "a067e7e465d6fad0c9c7bf7d3c66293b"
  },
  {
    "url": "icons/windows/windows-storelogo-90-90.png",
    "revision": "12a186229cd19cab6b46bca1ecd774da"
  },
  {
    "url": "icons/windows/windowsphone-appicon-106-106.png",
    "revision": "2ee7aa58cda0569053309080b27e7948"
  },
  {
    "url": "icons/windows/windowsphone-appicon-44-44.png",
    "revision": "c41e684484a4bad0c8d0664eb460b8cc"
  },
  {
    "url": "icons/windows/windowsphone-appicon-62-62.png",
    "revision": "623127945bdb706d2ef44396b37daa81"
  },
  {
    "url": "icons/windows/windowsphone-mediumtile-150-150.png",
    "revision": "7cff3b0e34c7669e81fd9a261da0fc73"
  },
  {
    "url": "icons/windows/windowsphone-mediumtile-210-210.png",
    "revision": "eaa387460d043d2decdf73493578f603"
  },
  {
    "url": "icons/windows/windowsphone-mediumtile-360-360.png",
    "revision": "8e331726678b5153c530b741f5b49bc6"
  },
  {
    "url": "icons/windows/windowsphone-smalltile-170-170.png",
    "revision": "c3aea07be2db7e26b601d4f4194fe348"
  },
  {
    "url": "icons/windows/windowsphone-smalltile-71-71.png",
    "revision": "c0d9a20765e60e357c0138e12c15c8c8"
  },
  {
    "url": "icons/windows/windowsphone-smalltile-99-99.png",
    "revision": "3e28e04898d3e5c916b63e195998f7f0"
  },
  {
    "url": "icons/windows/windowsphone-storelogo-120-120.png",
    "revision": "cb8dd06f17952b33b431f00d54b46ac3"
  },
  {
    "url": "icons/windows/windowsphone-storelogo-50-50.png",
    "revision": "5922d149bc2159e46dd8be1100ee31fe"
  },
  {
    "url": "icons/windows/windowsphone-storelogo-70-70.png",
    "revision": "a067e7e465d6fad0c9c7bf7d3c66293b"
  },
  {
    "url": "icons/windows10/SplashScreen.scale-100.png",
    "revision": "b2b207b70edbeac9c864c9311b97505d"
  },
  {
    "url": "icons/windows10/SplashScreen.scale-125.png",
    "revision": "cefdd79bc10bfd8eeb7ec28b0daa6699"
  },
  {
    "url": "icons/windows10/SplashScreen.scale-150.png",
    "revision": "d5a1e7f2bf4542e604d1efd22c4463e9"
  },
  {
    "url": "icons/windows10/SplashScreen.scale-200.png",
    "revision": "03cc7b19962211b1d6a1b481126bd5d5"
  },
  {
    "url": "icons/windows10/SplashScreen.scale-400.png",
    "revision": "266a93ed5c5c5d4266ea47973995e2f5"
  },
  {
    "url": "icons/windows10/Square150x150Logo.scale-100.png",
    "revision": "7cff3b0e34c7669e81fd9a261da0fc73"
  },
  {
    "url": "icons/windows10/Square150x150Logo.scale-125.png",
    "revision": "ad7f9a6abaebc0e7a0402c940fa8d626"
  },
  {
    "url": "icons/windows10/Square150x150Logo.scale-150.png",
    "revision": "69fdc8084cc90b4943fca7a36ec23617"
  },
  {
    "url": "icons/windows10/Square150x150Logo.scale-200.png",
    "revision": "9d7b697eb78d3ffde69a0b67e10bb0b0"
  },
  {
    "url": "icons/windows10/Square150x150Logo.scale-400.png",
    "revision": "339ce30e7fb57f2d45e6802fc1e16176"
  },
  {
    "url": "icons/windows10/Square310x310Logo.scale-100.png",
    "revision": "aca19d1b21bf53700c0732b4421a5bcd"
  },
  {
    "url": "icons/windows10/Square310x310Logo.scale-125.png",
    "revision": "a2393f435a53af9079748ceceb8c7416"
  },
  {
    "url": "icons/windows10/Square310x310Logo.scale-150.png",
    "revision": "62b2074665c03698a4608552e5a11c0d"
  },
  {
    "url": "icons/windows10/Square310x310Logo.scale-200.png",
    "revision": "9fa35a2c0bc3c6b197e4cf97b74dc616"
  },
  {
    "url": "icons/windows10/Square310x310Logo.scale-400.png",
    "revision": "7ba4b2ae68f2876de042a5278eb32a52"
  },
  {
    "url": "icons/windows10/Square44x44Logo.scale-100.png",
    "revision": "c41e684484a4bad0c8d0664eb460b8cc"
  },
  {
    "url": "icons/windows10/Square44x44Logo.scale-125.png",
    "revision": "69d4ff605d48a5a8f54c9e2bbb74790c"
  },
  {
    "url": "icons/windows10/Square44x44Logo.scale-150.png",
    "revision": "631ef1b6b5206a2e7714a1857e032861"
  },
  {
    "url": "icons/windows10/Square44x44Logo.scale-200.png",
    "revision": "2032ab126b7e9a72fd0b9c7c8045bc78"
  },
  {
    "url": "icons/windows10/Square44x44Logo.scale-400.png",
    "revision": "b848143d21a9a1d432ba072d7f1a2d20"
  },
  {
    "url": "icons/windows10/Square44x44Logo.targetsize-16_altform-unplated.png",
    "revision": "39477f3be3debcd654f22056acca36e7"
  },
  {
    "url": "icons/windows10/Square44x44Logo.targetsize-16.png",
    "revision": "39477f3be3debcd654f22056acca36e7"
  },
  {
    "url": "icons/windows10/Square44x44Logo.targetsize-24_altform-unplated.png",
    "revision": "7d722a718856a27868e60fac560f5401"
  },
  {
    "url": "icons/windows10/Square44x44Logo.targetsize-24.png",
    "revision": "7d722a718856a27868e60fac560f5401"
  },
  {
    "url": "icons/windows10/Square44x44Logo.targetsize-256_altform-unplated.png",
    "revision": "abf1193a5fc8efd5ce4ffe1e84f32b7e"
  },
  {
    "url": "icons/windows10/Square44x44Logo.targetsize-256.png",
    "revision": "abf1193a5fc8efd5ce4ffe1e84f32b7e"
  },
  {
    "url": "icons/windows10/Square44x44Logo.targetsize-48_altform-unplated.png",
    "revision": "b202c4a7f09f444bd72effa3253a11b4"
  },
  {
    "url": "icons/windows10/Square44x44Logo.targetsize-48.png",
    "revision": "b202c4a7f09f444bd72effa3253a11b4"
  },
  {
    "url": "icons/windows10/Square71x71Logo.scale-100.png",
    "revision": "c0d9a20765e60e357c0138e12c15c8c8"
  },
  {
    "url": "icons/windows10/Square71x71Logo.scale-125.png",
    "revision": "05768fdc006d76a05834dbad6b9bfeda"
  },
  {
    "url": "icons/windows10/Square71x71Logo.scale-150.png",
    "revision": "85e2bc5dd51d73f963ae64ad8319774c"
  },
  {
    "url": "icons/windows10/Square71x71Logo.scale-200.png",
    "revision": "1feb952db019ca096d10166d949a244f"
  },
  {
    "url": "icons/windows10/Square71x71Logo.scale-400.png",
    "revision": "008ff00859881621b4b1b7cef452739a"
  },
  {
    "url": "icons/windows10/StoreLogo.png",
    "revision": "5922d149bc2159e46dd8be1100ee31fe"
  },
  {
    "url": "icons/windows10/StoreLogo.scale-100.png",
    "revision": "5922d149bc2159e46dd8be1100ee31fe"
  },
  {
    "url": "icons/windows10/StoreLogo.scale-125.png",
    "revision": "db1d1035a62c19731aeebffea2544fd6"
  },
  {
    "url": "icons/windows10/StoreLogo.scale-150.png",
    "revision": "a02a110da21eafa386a8a3528690e05d"
  },
  {
    "url": "icons/windows10/StoreLogo.scale-200.png",
    "revision": "829b2be559bae35776e662a20ca6faa8"
  },
  {
    "url": "icons/windows10/StoreLogo.scale-400.png",
    "revision": "f169962692e4e4e60361239a04badf86"
  },
  {
    "url": "icons/windows10/Wide310x150Logo.scale-100.png",
    "revision": "0348c4812174591ca7c08fe44b42710a"
  },
  {
    "url": "icons/windows10/Wide310x150Logo.scale-125.png",
    "revision": "e0a1099cb5b6f16793ddffb0598ec4c6"
  },
  {
    "url": "icons/windows10/Wide310x150Logo.scale-150.png",
    "revision": "0f8fd6ca25917c677612ee3a62fee00e"
  },
  {
    "url": "icons/windows10/Wide310x150Logo.scale-200.png",
    "revision": "b2b207b70edbeac9c864c9311b97505d"
  },
  {
    "url": "icons/windows10/Wide310x150Logo.scale-400.png",
    "revision": "03cc7b19962211b1d6a1b481126bd5d5"
  },
  {
    "url": "index.html",
    "revision": "df87ec2de581499c029c47ae80456c98"
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
