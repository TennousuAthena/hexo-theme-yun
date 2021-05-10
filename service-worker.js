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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "eb838bec1656f2647b62d402a0e16bfa"
  },
  {
    "url": "about.html",
    "revision": "9a76956febe91628a2877b1c3d880e88"
  },
  {
    "url": "assets/css/0.styles.ab1aa851.css",
    "revision": "0794aafa8116bccb265eb186af8a5eb5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f2283238.js",
    "revision": "ae2c2bdf53b24b4c37a5903c2353f2de"
  },
  {
    "url": "assets/js/11.2771d596.js",
    "revision": "735803f03fcbfe4c760c8b4152f543f0"
  },
  {
    "url": "assets/js/12.96159e78.js",
    "revision": "421b88f222c6447b97ebac3b4205637e"
  },
  {
    "url": "assets/js/13.6d7983fe.js",
    "revision": "d7f5160f4e9cfed827fc693093f09862"
  },
  {
    "url": "assets/js/14.110e8a2a.js",
    "revision": "aa16a460bc210eddc66d51a369a8570a"
  },
  {
    "url": "assets/js/15.d7283bf5.js",
    "revision": "59b69061cd7d2e9977e8521134eb6fca"
  },
  {
    "url": "assets/js/16.7d58ad5a.js",
    "revision": "85292c39085418aafc2d3c5f85c01229"
  },
  {
    "url": "assets/js/17.db7cdf22.js",
    "revision": "ec2c1a1b68d00c4169d4535355d05ce0"
  },
  {
    "url": "assets/js/18.eb1246c5.js",
    "revision": "b0722846c801d8563024f8933675d37d"
  },
  {
    "url": "assets/js/19.58c04d86.js",
    "revision": "62a137da2b3e2c628ea40b98909eb291"
  },
  {
    "url": "assets/js/20.bd8b4ed2.js",
    "revision": "5fa6363bea1ecef4c1dad08e2a3893eb"
  },
  {
    "url": "assets/js/21.0cd462c7.js",
    "revision": "052af9ea5bee2b7bd98f5332dff4cb08"
  },
  {
    "url": "assets/js/22.b9a70315.js",
    "revision": "320a5a347b516bee0852e03642998426"
  },
  {
    "url": "assets/js/23.75e05e92.js",
    "revision": "5c085f5a2c101ab819f636b242d27143"
  },
  {
    "url": "assets/js/24.bcac4cc3.js",
    "revision": "85f52a80861534526d3d95fed67f0e6c"
  },
  {
    "url": "assets/js/25.ec6fd61c.js",
    "revision": "9bc01deea05fb88489eec190b82aa8db"
  },
  {
    "url": "assets/js/26.fdef87a8.js",
    "revision": "935bdf011aa0ea44c44954665c541292"
  },
  {
    "url": "assets/js/27.7ddf3502.js",
    "revision": "6dbfb580cfefc89b4846c156307ed6d6"
  },
  {
    "url": "assets/js/28.44344be8.js",
    "revision": "9a617f06bb3c4270a9ee18455bbaa4ab"
  },
  {
    "url": "assets/js/29.c32bac93.js",
    "revision": "e5a0acf3d5bf8031bf4da2ffa8459cc9"
  },
  {
    "url": "assets/js/3.43d9387c.js",
    "revision": "bc41be8a159d931f36a6a9974f0d48b4"
  },
  {
    "url": "assets/js/30.f1fea3e6.js",
    "revision": "8ab751988d3740e47138a62277f1dc38"
  },
  {
    "url": "assets/js/31.2f2e24f2.js",
    "revision": "a9ded7b230911f8cb6bea7b839b4d7ba"
  },
  {
    "url": "assets/js/32.fdcef6d6.js",
    "revision": "bb63ec213ba5d45d438e1055917b37f5"
  },
  {
    "url": "assets/js/4.6833dbb2.js",
    "revision": "36287a285e32a9b90acfae8a35f188e8"
  },
  {
    "url": "assets/js/5.8fcb1d32.js",
    "revision": "7d98d33ed607ecbf1aa27816595d8580"
  },
  {
    "url": "assets/js/6.a46a4e0b.js",
    "revision": "2bc0ae8970b1632bb80a1f1e35066c25"
  },
  {
    "url": "assets/js/7.83ccad9a.js",
    "revision": "d5926272b570610d998cd388765fca77"
  },
  {
    "url": "assets/js/8.5d720831.js",
    "revision": "043a5ea4007184aac12fbfd1a004b695"
  },
  {
    "url": "assets/js/9.8f8b6c82.js",
    "revision": "9cef0481067200a77bb444e7f77aa3d6"
  },
  {
    "url": "assets/js/app.8815fc60.js",
    "revision": "49478644964d75369d9867f11abaf0d8"
  },
  {
    "url": "assets/js/vendors~docsearch.a3c35701.js",
    "revision": "5d321dc41033da987689316aef193f9f"
  },
  {
    "url": "demo.html",
    "revision": "6928c8ce48701d849a92922efdb99564"
  },
  {
    "url": "en/about.html",
    "revision": "22635cdf2845de70dd01adfaf34484a0"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "4dd0f27f203467c7d6d7c0d44bbd85dc"
  },
  {
    "url": "en/guide/config.html",
    "revision": "06d27d56d3d90fc9c4d6e84663039500"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "f39a4f97d3c539acbd109945af2371da"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "576742f9b092f09faa769de60ddf9807"
  },
  {
    "url": "en/guide/index.html",
    "revision": "317bf5822688ae2a7b14be7e89207475"
  },
  {
    "url": "en/guide/page.html",
    "revision": "0849bc6f62884143feb31bf651d1409c"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "f1c91667c0c1600fc0159d15f0a24152"
  },
  {
    "url": "en/index.html",
    "revision": "685e84c2f0dc0c99ea18009b9a8a8c26"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "d1edfd8fd67a3f4c75182f08fa2b41f7"
  },
  {
    "url": "guide/config.html",
    "revision": "1e76d7dc6fedba1d14039f1aeeb34244"
  },
  {
    "url": "guide/faq.html",
    "revision": "7a4ba8c93b4a31c5c3a2a0b9de2e3a20"
  },
  {
    "url": "guide/icon.html",
    "revision": "72d7a9891b0bc192531c0cec4deb4397"
  },
  {
    "url": "guide/index.html",
    "revision": "57f1a3665b96c9712c4afbc461b1b2fd"
  },
  {
    "url": "guide/migrate.html",
    "revision": "9e9028e25a9de063e1f1e3c3ddad340f"
  },
  {
    "url": "guide/page.html",
    "revision": "87d76359cb68553ab98d4f774f8794ad"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "51f82aab1fa8022fad96737f3c559a00"
  },
  {
    "url": "images/index-preview.jpg",
    "revision": "7c5199d9f75605f77990cf7a984eaf0f"
  },
  {
    "url": "images/mickey-mouse.jpg",
    "revision": "c636a5e47f7a741a28a57ff22c98ceac"
  },
  {
    "url": "index.html",
    "revision": "5b7c850f9deedd7293de5a9916aef5b3"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "yun.svg",
    "revision": "ebbd22f3cde555d95e5dec5d41ed8505"
  }
].concat(self.__precacheManifest || []);
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
