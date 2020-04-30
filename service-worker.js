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
    "url": "assets/css/0.styles.727e7545.css",
    "revision": "7eca325aa96e760fd23e68f0bdb223a3"
  },
  {
    "url": "assets/img/address-bar.a15ff370.png",
    "revision": "a15ff370eed2f8f0b8219ea3d4976318"
  },
  {
    "url": "assets/img/architecture.30de09c7.png",
    "revision": "30de09c7c6530bc11ece7d9553497563"
  },
  {
    "url": "assets/img/connex.186d320e.jpg",
    "revision": "186d320e35a63378da3873e4c359aae7"
  },
  {
    "url": "assets/img/mpp.58a89201.png",
    "revision": "58a892017c66b562945baeee15505c80"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/wallet-detail-activity.0f9d89a3.png",
    "revision": "0f9d89a34631323541d04818f4a00ac4"
  },
  {
    "url": "assets/js/10.ea619ca3.js",
    "revision": "5fbda109f5d4759a5770f24f7797f575"
  },
  {
    "url": "assets/js/11.bd05c9b4.js",
    "revision": "391f600a6991bce965ea924644b2700a"
  },
  {
    "url": "assets/js/12.86c19ea2.js",
    "revision": "4b70ef445e6358687e4da239c1f060b0"
  },
  {
    "url": "assets/js/13.a8ed1307.js",
    "revision": "4035353b09411aaf610054d9d5118333"
  },
  {
    "url": "assets/js/14.1283300a.js",
    "revision": "7f300bc1f12dcdd1c83a252345a659fb"
  },
  {
    "url": "assets/js/15.2166d056.js",
    "revision": "d7cfa1626f801d8cb5471982e7c16463"
  },
  {
    "url": "assets/js/16.a05bb904.js",
    "revision": "82e6aed3cd5823304f63f3e0d29fc93b"
  },
  {
    "url": "assets/js/17.9da18bbc.js",
    "revision": "474ca68b36ea7792b52c0d89cb467a44"
  },
  {
    "url": "assets/js/18.57d00023.js",
    "revision": "dc372975d20fbb097d47a82bb0c27d02"
  },
  {
    "url": "assets/js/19.40aa8734.js",
    "revision": "bf15e495c63dec8bef4658ef974f52e5"
  },
  {
    "url": "assets/js/20.8cb58c1e.js",
    "revision": "0602827bae1334831d07c48aa670f9bd"
  },
  {
    "url": "assets/js/21.52c33a17.js",
    "revision": "b7f2ff6f098ade23cac2075bdf54abd4"
  },
  {
    "url": "assets/js/22.6dff57a3.js",
    "revision": "1903f83ead913a9e14dd01cca6d36312"
  },
  {
    "url": "assets/js/23.6bfb969d.js",
    "revision": "4f70653403ec62380e2e83b0ec0e95f3"
  },
  {
    "url": "assets/js/24.44b7716f.js",
    "revision": "6693e8c28f8b9347c6d592355885ba02"
  },
  {
    "url": "assets/js/25.c8c583d5.js",
    "revision": "c90e0cbc31db66673b0fe44a92457264"
  },
  {
    "url": "assets/js/26.c9d896a1.js",
    "revision": "2670845563160d22434f0ad59ac747e1"
  },
  {
    "url": "assets/js/27.e27f4cb8.js",
    "revision": "41b481975b044d131b9e7e0d60e0a281"
  },
  {
    "url": "assets/js/28.306478c0.js",
    "revision": "8a9c33e92e89914a69456ab09b322118"
  },
  {
    "url": "assets/js/29.5fd52193.js",
    "revision": "e1f5fa279700cd83d9efdf0a664f2098"
  },
  {
    "url": "assets/js/3.b4a9e1a9.js",
    "revision": "1454d9f6fce0e672a1336bd7f0656a38"
  },
  {
    "url": "assets/js/30.42427fe8.js",
    "revision": "efbba081258a6fb225540067a58e5537"
  },
  {
    "url": "assets/js/31.c2dcb074.js",
    "revision": "099f90f784860e22b8596a7d7a2ae6b3"
  },
  {
    "url": "assets/js/32.c6982e54.js",
    "revision": "5cf2fe8e3764756621989d0aa0c1a855"
  },
  {
    "url": "assets/js/33.c1ce93b2.js",
    "revision": "3306eb441ef6bc7bc059e59aec04e4d6"
  },
  {
    "url": "assets/js/34.eaa6f819.js",
    "revision": "9dc6f1d553d90a28e445fd05d8f04ee0"
  },
  {
    "url": "assets/js/35.95dcba5e.js",
    "revision": "e3a75460952c5c3aead54a680e5839a3"
  },
  {
    "url": "assets/js/36.ddd17ee6.js",
    "revision": "988f46bcc1e4e03ff225065023b4ebd0"
  },
  {
    "url": "assets/js/37.bbf14b99.js",
    "revision": "1fa3b9b461bcd226a9d7c5b61ec03f86"
  },
  {
    "url": "assets/js/38.7d53e192.js",
    "revision": "5410d7808e5179f05437dad1bdc337c8"
  },
  {
    "url": "assets/js/39.1dfab5b6.js",
    "revision": "7361b8059d191dcc960562ced788ec39"
  },
  {
    "url": "assets/js/4.9fbef010.js",
    "revision": "dea51d6e08ba423935ceb7688d137358"
  },
  {
    "url": "assets/js/40.ffcf8941.js",
    "revision": "e8f3886115ae3751d566196d75c07482"
  },
  {
    "url": "assets/js/41.90f59d3b.js",
    "revision": "b1bd3dda00121f77cf36cd46f2b7ac03"
  },
  {
    "url": "assets/js/42.ba529dcf.js",
    "revision": "60a741ab18d45e268f1d120a70a39a9f"
  },
  {
    "url": "assets/js/43.b32cbe1f.js",
    "revision": "174321de191910140918e289ab0f5371"
  },
  {
    "url": "assets/js/44.8bd65a8b.js",
    "revision": "5250438062f991f3740c35656ddd884c"
  },
  {
    "url": "assets/js/45.4f15ee9d.js",
    "revision": "318b24fa44f0d09a005bc1ee600f0424"
  },
  {
    "url": "assets/js/46.3e43704f.js",
    "revision": "7ef836737b37ac4a9411423379e6fb5a"
  },
  {
    "url": "assets/js/47.d5b1169f.js",
    "revision": "a2c94a3313d8b22c38c46a42f816b3fb"
  },
  {
    "url": "assets/js/48.19c560d9.js",
    "revision": "d30c60bc8cb5524d8f2980079218b30d"
  },
  {
    "url": "assets/js/5.5d2a96e6.js",
    "revision": "fe3aa5d0c99cf2ea92a98e75185a6240"
  },
  {
    "url": "assets/js/6.af542af0.js",
    "revision": "ca8ecbb9e8a80a6af8fd22169deafede"
  },
  {
    "url": "assets/js/7.d14b27ba.js",
    "revision": "aebd2b5327e2d31296b2e8704d61b16b"
  },
  {
    "url": "assets/js/8.77fe2b1e.js",
    "revision": "c4b451fe69490443fd7f63303041b222"
  },
  {
    "url": "assets/js/9.885e62d8.js",
    "revision": "0d32aa145c7441df6b83c6a7e98afb2c"
  },
  {
    "url": "assets/js/app.12baac25.js",
    "revision": "c114bf6ee6d9e0b4850e1f35fe31e7e9"
  },
  {
    "url": "assets/js/vendors~docsearch.f7385de5.js",
    "revision": "0e139e7e3e0d0e8bc373456260e50940"
  },
  {
    "url": "connex/api.html",
    "revision": "b8b0055bf8d7f51311b58771426cb7aa"
  },
  {
    "url": "connex/demos-and-service.html",
    "revision": "587d8ac645ac5e0b7376dc7dfdcd532d"
  },
  {
    "url": "connex/implementation.html",
    "revision": "61c29e6993b64757d278e5b66ca40541"
  },
  {
    "url": "connex/index.html",
    "revision": "0bd4a6700f60b643e69b4c2bfe357d46"
  },
  {
    "url": "icons/144.png",
    "revision": "ef022f52c54f8ee6ccc8f005d52b99de"
  },
  {
    "url": "icons/168.png",
    "revision": "cd596353879cab531903b1f9c0f8d6dc"
  },
  {
    "url": "icons/192.png",
    "revision": "6aaa85947b9a315ac47970a54c3a66f4"
  },
  {
    "url": "icons/48.png",
    "revision": "2d20f253068748053fc7082400c88f4b"
  },
  {
    "url": "icons/72.png",
    "revision": "02b333d138cc4764e770eb1d7274e7ea"
  },
  {
    "url": "icons/96.png",
    "revision": "b3240f2ffb00f383cbc3783370a782cc"
  },
  {
    "url": "index.html",
    "revision": "5d2d424165750307c3bb056ee5a573bd"
  },
  {
    "url": "logo.png",
    "revision": "1f7569a7fb96e141f556669c77877f1f"
  },
  {
    "url": "others/index.html",
    "revision": "03f736ebc76302b47f83188e7221adf8"
  },
  {
    "url": "sync/download-and-install.html",
    "revision": "c26ad7f989d9e2da4a484b05eed58670"
  },
  {
    "url": "sync/faq.html",
    "revision": "dabaa08138a3304b53d1cb81ba3c2415"
  },
  {
    "url": "sync/user-guide/activities.html",
    "revision": "b70991cf95bf4c134e14692a08c8eccd"
  },
  {
    "url": "sync/user-guide/browse-dapp-and-web.html",
    "revision": "15627ff50b47c29ec63641d1ccb93b23"
  },
  {
    "url": "sync/user-guide/contribute.html",
    "revision": "4acc9d249d3fa0193e70a0b10cb1fbcf"
  },
  {
    "url": "sync/user-guide/contributing.html",
    "revision": "b5840d73f7bbdb69b828e5796f7f5cfa"
  },
  {
    "url": "sync/user-guide/import-ledger.html",
    "revision": "ed78377713f1f6714786166815a75ae7"
  },
  {
    "url": "sync/user-guide/index.html",
    "revision": "6b337d5c60c6eae896386a8e5afc3be1"
  },
  {
    "url": "sync/user-guide/interact-with-dapps.html",
    "revision": "1f279dd4f5b78c300a4b33ea2fcb735c"
  },
  {
    "url": "sync/user-guide/report-issue.html",
    "revision": "28d4df6ab118b2ab70f50c9bed002517"
  },
  {
    "url": "sync/user-guide/settings.html",
    "revision": "beb284679c888304743007ba51d92930"
  },
  {
    "url": "thor/get-started/api.html",
    "revision": "b4bdd69b2b6257c0e9047692a24efb97"
  },
  {
    "url": "thor/get-started/custom-network.html",
    "revision": "2885428ce9f7e9efc6b11a69e565d835"
  },
  {
    "url": "thor/get-started/installation.html",
    "revision": "13cdfc2ad11b58c83beb81ee0806b64f"
  },
  {
    "url": "thor/learn/block.html",
    "revision": "85c437691195a253bf89602f4856d4a6"
  },
  {
    "url": "thor/learn/builtin-contracts.html",
    "revision": "46d1100a73d57b53762b707c22d1c9f9"
  },
  {
    "url": "thor/learn/faq.html",
    "revision": "8411096aa0ff0e1726ad29346c3cb6b3"
  },
  {
    "url": "thor/learn/fee-delegation.html",
    "revision": "aff90e8bc3996f5c60323eada3537c1a"
  },
  {
    "url": "thor/learn/index.html",
    "revision": "776fa70dcf5c1e25000065b49838eeea"
  },
  {
    "url": "thor/learn/proof-of-authority.html",
    "revision": "467b3cafd575b72f253f2f8410d2a451"
  },
  {
    "url": "thor/learn/transaction-calculation.html",
    "revision": "e910aaec8fb53162eefe5fc0a93c232e"
  },
  {
    "url": "thor/learn/transaction-model.html",
    "revision": "d70664af01d7c683c21e7b14a0af7ac3"
  },
  {
    "url": "thor/learn/two-token-design.html",
    "revision": "2a25506e82bd5331dd6dd724fcfcce2a"
  },
  {
    "url": "tutorials/contribute.html",
    "revision": "c293db4269ee32dff9ac01c501f05216"
  },
  {
    "url": "tutorials/designated-fee-delegation.html",
    "revision": "b9c76ae71930aa3f60004e63f190b88e"
  },
  {
    "url": "tutorials/forcible-transaction-dependency.html",
    "revision": "0cbb299a039453cd9c3caad305eb37e8"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-1.html",
    "revision": "173cbcf48343324214f8ac9269798f3d"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-2.html",
    "revision": "7e0c68ae13303a1156ebafd300b4e81b"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-3.html",
    "revision": "5ebe3edb060063572bc3f6b400c96035"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-1.html",
    "revision": "5809a8a02df1a93e2ec6b10480ff7b61"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-2.html",
    "revision": "0c430f9c18184741b63804cd0ec2d369"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-3.html",
    "revision": "619848ba008312db7c5a8951755b9ccf"
  },
  {
    "url": "tutorials/index.html",
    "revision": "9744a23cbdc7ebb0d4b4a11ea12a4d41"
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
