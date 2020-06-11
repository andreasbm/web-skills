const SW_VERSION = 7;
const APP_PREFIX = "web-skills";
const CACHE_NAME = `${APP_PREFIX}-v${SW_VERSION}`;
const DEBUG = false;
const URLS_TO_CACHE = [
	"",
	"index.html",
	"src/app.js",
	"src/config.js",
	"src/data.js",
	"src/util/icons.js",
	"src/util/util.js",
	"src/util/open-help.js",
	"src/util/open-share.js",
	"src/util/show-snackbar.js",
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
	"web_modules/web-dialog.js"
];

const BLACK_LISTED_REQUEST_PATHS = [
	"livereload", // Don't cache the local development server files
	"?c=", // Don't cache the config when we use it to find the newest version
	"r/collect" // Don't cache anything GA related
];

/**
 * Precache when installed.
 */
self.addEventListener("install", e => {
	log(`Installing`);
	e.waitUntil(precache());
});

/**
 * Delete old caches when activated.
 */
self.addEventListener("activate", async e => {
	log(`Activate`);
	self.clients.claim().then();
	e.waitUntil(deleteOldCaches());
});

/**
 * Handle fetch requests with a cache then network and cache strategy.
 */
self.addEventListener("fetch", e => {
	log(`Fetch`);

	// Let the browser do its default thing for non-GET requests.
	if (e.request.method !== 'GET') return;
	e.respondWith((async () => await cacheOrNetworkAndCache(e))());
});

/**
 * Make it possible to skip the waiting.
 */
self.addEventListener("message", async e => {
	log(`Message`);
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
		console.log(`SW (${CACHE_NAME})`, ...arguments);
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
 * Deletes old caches.
 * @returns {Promise<void>}
 */
async function deleteOldCaches () {
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

	// DevTools opening will trigger these o-i-c requests, which we ignore.
	// https://stackoverflow.com/a/49719964
	if (request.cache === "only-if-cached" && request.mode !== "same-origin") {
		return new Response();
	}

	// Try the cache
	const cachedResponse = await caches.match(request);
	log("Cache", cachedResponse);
	if (cachedResponse != null) return cachedResponse;

	// Fallback to network
	const response = await fetch(request);
	log("Response", response);

	// Cache response if necessary
	if (response != null && response.ok && response.type === "basic" && !isBlacklistedUrl(response.url)) {
		const cache = await caches.open(CACHE_NAME);
		cache.put(request, response.clone()).then();
	}

	return response;
}