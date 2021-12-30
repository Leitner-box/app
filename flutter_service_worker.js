'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "7589bad3ced8623d34c9f6040b4224e2",
".git/config": "6e10da7610340c2222d91d1106a4831a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "25c93b68fbcd144430c9809c7d70f128",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bd400635fc6bcac68d89bd87e4d6a472",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "80e3768f7dbc5a0bc0ea7034d927a138",
".git/logs/refs/heads/master": "80e3768f7dbc5a0bc0ea7034d927a138",
".git/logs/refs/remotes/githubio/master": "3e31ad5441b8f1173ca866c3b313e977",
".git/objects/00/53f71821a9eaca1310cf85369d1d3599ec033a": "ce56562be5864b2d68274d5190eee6ed",
".git/objects/04/81d294cf2d15aba1e5d48088039b5eadfd1806": "08d3f90d0cd49508f8c3311aea36cfe0",
".git/objects/09/fc261d100271f3655ae45c74f2ee0dd1f2a8dc": "b8d4c6ddc3712a28a32a3a500e442d67",
".git/objects/13/e9bf33aa638b0c72efd5887ebad737550c6ce3": "31c07a622780fc0af8d155876ccfc0e1",
".git/objects/1b/4be6a9550be364c9a8efc411fc451e3bd6d646": "5dbafecd7a0cdba7468e6e2200306c4a",
".git/objects/1d/c9f20b286956cfb590ed03efd55321f249f15c": "8fdd5b42994a14dd5e05b4691af72b2a",
".git/objects/23/e3f2cc096d44a284b2a64fa1c63d5301364484": "9e4f3c4e1dfd0b6bff4409bc210055a2",
".git/objects/36/37058828f619e41dc2f13d29ed62f08ecc1223": "e7e15410c0d404ebec37c1c0078abd9d",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/44/0fc4a64ce1b4d6b0d055cb996bb59b67fd2c32": "f3314dec62142368c9239a7cecf75f15",
".git/objects/4a/0882feb6c6b17b183691b5d32d30910fc2a2a4": "72afdb5a236eb10b5c17221a85cf38c2",
".git/objects/5e/bfb786962f53fd208604221a6e22b28677b1ce": "3bed81e930fa8509d0b3723c7edb64dd",
".git/objects/67/32fd10c2feb72e3442b7775304290685219dec": "69e0542e877cb8a2d5b40713dfa85e83",
".git/objects/70/1db27aaf235453b3e7a0afbb93754ff05fbc6c": "fba0868295102b3c1393bd406578a16e",
".git/objects/8a/4338711e1caef0f0daf7c95b8f0be81132a7ab": "83d25683179282f86caa060fb0feea75",
".git/objects/8b/42a4b77eaf96c066f5ce75398bfb5fae8bcfec": "bf315da4c7cbeec683e4d68f7b20e4ed",
".git/objects/8d/1ac182c5c95a2d6ff13a5eb9de81bc85a51320": "5df0ee02681cdf8d5c2cde4a76b3ec64",
".git/objects/8f/98ffa64ee33bc3da63fbb0c667b141c1eabd86": "f2daf7d655913a7ca8ee51d5688eb668",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/95/4271ba0b3076a4e6e65ae3407a6e52135e545a": "a0af28505dc09f79e80ebf7b6670455e",
".git/objects/96/cacb5a3f6ca5465bf3da505bb3db723edb964b": "b8291f46716efe079f1cf4b162ec4328",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/a8/f7d1d8ed963e97d95e33783f216651f7d3e7b3": "7a7aa6c3dbd8d7345e5dbd78166936e6",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/b0/d7d3aa309a9ce7805298e72f6df03cddd37140": "84e08a5b7d63c0b8e9db3d07ea067e3e",
".git/objects/b1/600854a0545827ca20a5463797b14a6725b5a7": "84676bb823f34ec180d17756db40725a",
".git/objects/b4/1dce5ad2e3c71a175745ba8c380eb1bd283c44": "222e66d811354dc4c003f53f554764b7",
".git/objects/c1/3f8002f011187e9af55c6b346f63d309afaeed": "c6cac762b704c1712f267a2654a9c7fe",
".git/objects/c4/16e1db86aaa400eeb204ecc96ad5ce22cfeb3c": "1b61a200471a80c7beea63a14ca4fdeb",
".git/objects/c6/54f89f99f872c9f5879e24a921036b15fb1c1b": "643d74dfe828e13aed48a34b48ee046a",
".git/objects/cc/ed0090a9a07c25be23db65c1a22220d320d0d0": "2b086492dbef8187ddc18ae6449e22be",
".git/objects/d0/b2d99c3e7e3638f27c79ce25953bb296fda70f": "3d0d8e645117f91510adfe6e110c4aa7",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/ea/14429d09c7960ef8fe2f54f6415f7bdac1dfa1": "94b2f004ec5e0d1cebab885ca1981d1b",
".git/objects/ee/8982f1bea28b0937be4e1822c3cc44fd1a945a": "12d79c0f0c9b9e8b09ac3b3bc34cbfba",
".git/objects/f1/3954cb2096f6cf8c94484bf1cd7cb09f194208": "e8aa342a5587de266d5d99d7d6d5d78a",
".git/objects/f5/b22ac33d9925c39ac3c3df2cc7f34e0867a4ad": "e54bdc8bac9c4bc3b2d95ec5f44f8171",
".git/objects/f6/ab1d743821b0923a6fdedd7de6991290581e49": "7e54616de3a6f8342c152e20f3b7bd1e",
".git/objects/fd/6fd2145018e1224428baf7b83241abb1a74ae5": "d046cea8a2eb3cdd0494a4c560b9b0c3",
".git/objects/pack/pack-9df984455726e28c1ac43614e6971ad99b5afa4d.idx": "e9fa47fe94427b025d1f54b732020de1",
".git/objects/pack/pack-9df984455726e28c1ac43614e6971ad99b5afa4d.pack": "1676b68c921f6055c202c3297ed111fe",
".git/ORIG_HEAD": "bf74adaf197f5e2a9c88808322c83995",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/master": "b289c5e6cea04feae4fc903a32c840d7",
".git/refs/remotes/githubio/master": "b289c5e6cea04feae4fc903a32c840d7",
"assets/AssetManifest.json": "0d1412b1736ea55b41f8f385496f4f8e",
"assets/assets/md.png": "b07dc8b0956ce4b72bf2605d05c45be3",
"assets/assets/moon-regular.svg": "6f1f85f3a1c1a07ace28f724b77de4c2",
"assets/assets/moon-solid.svg": "399b1420858b9b19d9046a66f05227a8",
"assets/assets/sun-regular.svg": "fbffcf4c0463919a493c67a071c8ec21",
"assets/assets/sun-solid.svg": "aa59b8a4563d9e4bab5397881af52dcd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "1b8d7836511aa205444b9261df8b6f5a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "608f1f9fa1f03e7c234af7f266eb786c",
"/": "608f1f9fa1f03e7c234af7f266eb786c",
"main.dart.js": "b92c7b835566be16f511b92a017ce93b",
"manifest.json": "52fc0453b8855eb9dd5b8bde98ad1f4f",
"version.json": "5bc9edc5a9a8858968012a5ae6c787e0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  // "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
