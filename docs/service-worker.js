"use strict";var precacheConfig=[["/clicky-game/index.html","fa78082c4875fa598d5bb6e3910ba3cd"],["/clicky-game/static/js/main.a75c718e.js","40ff471da50693e3095f002407c3367c"],["/clicky-game/static/media/ditto.6dd90232.png","6dd90232692b99b65d8d12988c3c7a82"],["/clicky-game/static/media/hitmonlee.43fe6b3d.png","43fe6b3dbcc76ea1a23decb9629678dd"],["/clicky-game/static/media/hypno.8cfeceda.png","8cfeceda8dce7b999c8be50ff873edbf"],["/clicky-game/static/media/kabuto.f67b43ff.png","f67b43ffce09604a10b2ed1762fd8db2"],["/clicky-game/static/media/magmar.3164213d.png","3164213d16db7a7dcaf65cb5d12362f1"],["/clicky-game/static/media/mew.ef100e01.png","ef100e0189bb28401ef542facab3e8a3"],["/clicky-game/static/media/onix.6be18669.png","6be186693a4e5979326e19e975f4e1d1"],["/clicky-game/static/media/pinsir.71f04e06.png","71f04e069e304231cfe29c00ca73076b"],["/clicky-game/static/media/seel.f74e03b1.png","f74e03b1fff781c56bc492dc25b77f67"],["/clicky-game/static/media/shellder.03012eb3.png","03012eb354476ab1e5b46fcb42e5e7f5"],["/clicky-game/static/media/snorlax.3acd4b56.png","3acd4b56b12a20a0cb8fb93f2497cf66"],["/clicky-game/static/media/tentacruel.cbdb389c.png","cbdb389cfc1c965c97e8a03a856eb293"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var c=new URL(e);return a&&c.pathname.match(a)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),c=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var c="/clicky-game/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});