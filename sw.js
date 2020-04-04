const APP_PREFIX = "web-skills";
const VERSION = 1;
const CACHE_NAME = `${APP_PREFIX}-v${VERSION}`;
const DEBUG = false;
const URLS_TO_CACHE = [
	"index.html",
	"src/app.js",
	"src/config.js",
	"src/data.js",
	"src/util/icons.js",
	"src/util/util.js",
	"src/util/open-help.js",
	"src/util/open-share.js",
	"src/util/open-update.js",
	"src/util/measure.js",
	"src/util/confetti-helper.js",
	"src/molecules/area.js",
	"src/molecules/collection.js",
	"src/molecules/skill.js",
	"src/firebase/init-firebase.js",
	"src/firebase/auth.js",
	"src/atoms/blur.js",
	"src/atoms/button.js",
	"src/atoms/description.js",
	"src/atoms/icon.js",
	"src/atoms/compact-switch.js",
	"src/atoms/snackbar.js",
	"src/data/accessibility.js",
	"src/data/algorithms.js",
	"src/data/architecture-and-paradigmes.js",
	"src/data/build-tools.js",
	"src/data/databases.js",
	"src/data/design-and-ux.js",
	"src/data/frameworks-and-libraries.js",
	"src/data/fundamentals.js",
	"src/data/modern.js",
	"src/data/pwa.js",
	"src/data/team-collaboration.js",
	"src/data/testing.js",
	"src/data/web-components.js",
	"src/styles/shared.js",
	"src/styles/global.css",
	"https://fonts.googleapis.com/css?family=Rubik:300,400,500,700&display=swap",
	"https://www.googletagmanager.com/gtag/js?id=UA-96179028-7"
];

const BLACK_LISTED_REQUEST_PATHS = [
	"livereload"
];

/**
 * Install service worker.
 */
self.addEventListener("install", e => {
	log(`SW: Installing ${CACHE_NAME}`);
	e.waitUntil(precache());
});

/**
 * Delete outdated caches.
 */
self.addEventListener("activate", async e => {
	log(`SW: Activate ${CACHE_NAME}`);
	self.clients.claim().then();
	e.waitUntil(clearOldCaches());
});

/**
 * Handle fetch requests with a cache then network strategy.
 */
self.addEventListener("fetch", e => {
	log(`SW: Fetch ${CACHE_NAME}`);
	e.respondWith((async () => await cacheOrNetworkAndCache(e))());
});

/**
 * Make it possible to skip the waiting.
 */
self.addEventListener("message", async e => {
	log(`SW: Message ${CACHE_NAME}`);
	const {action} = e.data;
	switch (action) {
		case "skipWaiting":
			self.skipWaiting();
			break;
		default:
			break;
	}
});

/**
 * Show debug message.
 */
function log () {
	if (DEBUG) {
		console.log(...arguments);
	}
}

/**
 * Precache the resources.
 * @returns {Promise<void>}
 */
async function precache () {
	const cache = await caches.open(CACHE_NAME);

	// https://jakearchibald.com/2016/caching-best-practices/
	await cache.addAll(URLS_TO_CACHE.map(url => new Request(url, {cache: "no-cache"})));
}

/**
 * Clears old caches.
 * @returns {Promise<void>}
 */
async function clearOldCaches () {
	const keys = await caches.keys();

	// Delete old caches
	await Promise.all(keys.map(key => {
		if (key !== CACHE_NAME) {
			return caches.delete(key);
		}
	}));
}

/**
 * Determines whether the URL is blacklisted.
 * @param url
 * @returns {string}
 */
function isBlacklistedUrl (url) {
	return BLACK_LISTED_REQUEST_PATHS.find(path => url.includes(path));
}

/**
 * Fetches a request using a cache first strategy.
 * @param e
 * @returns {Promise<Response>}
 */
async function cacheOrNetworkAndCache (e) {
	const {request} = e;

	// Try the cache
	const cachedResponse = await caches.match(request);
	if (cachedResponse != null) return cachedResponse;

	// Try the preload
	const preloadedResponse = await e.preloadResponse;
	if (preloadedResponse != null) return preloadedResponse;

	// Fallback to network
	const response = await fetch(request);

	// Cache response if necessary
	if (response != null && response.ok && response.type === "basic" && !isBlacklistedUrl(response.url)) {
		const cache = await caches.open(CACHE_NAME);
		cache.put(request, response.clone()).then();
	}

	return response;
}