
export const pwaCollection = {
	name: "Progressive Webapps",
	areas: [
		{
			name: "API's",
			skills: [
				{
					name: "Storage",
					description: {
						text: "",
						links: [
							["Mozilla - Storage", "https://developer.mozilla.org/en-US/docs/Web/API/Storage_API"],
							["Mozilla - Web Storage API", "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API"],
							["Mozilla - Cookies", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"],
							["Mozilla - IndexedDB API", "https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API"],
							["Google Devs - View And Edit Local Storage", "https://developers.google.com/web/tools/chrome-devtools/storage/localstorage"],
						]
					}
				},
				{
					name: "Routing",
					skills: [
						{
							name: "History API"
						}
					]
				},
				{
					name: "Service Workers",
					description: {
						text: "",
						links: [
							["Mozilla - Service Worker API", "https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers"],
							["Google Devs - Service Workers: an Introduction", "https://developers.google.com/web/fundamentals/primers/service-workers"]
							["Google Devs - The Service Worker Lifecycle", "https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle"],
							["Google Devs - Service Worker Registration", "https://developers.google.com/web/fundamentals/primers/service-workers/registration"]
							["Google Devs - High-performance service worker loading", "https://developers.google.com/web/fundamentals/primers/service-workers/high-performance-loading"],
							["Codelabs - Scripting the service worker", "https://codelabs.developers.google.com/codelabs/pwa-scripting-the-service-worker/index.html?index=..%2F..dev-pwa-training#0"],
							["Codelabs - Caching files with the service worker", "https://codelabs.developers.google.com/codelabs/pwa-caching-service-worker/index.html?index=..%2F..dev-pwa-training#0"],
							["Codelabs - Adding a Service Worker", "https://developers.google.com/web/fundamentals/codelabs/offline"],
							["Google Devs - Debugging Service Workers", "https://developers.google.com/web/fundamentals/codelabs/debugging-service-workers"]
						]
					},
					skills: [
						{
							name: "Offline first",
							description: {
								text: "",
								links: [
									["Google Devs - The Offline Cookbook", "https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook"],
									["Google Devs - Offline UX Considerations", "https://developers.google.com/web/fundamentals/instant-and-offline/offline-ux"],
									["Google Devs - Offline Storage for Progressive Web Apps", "https://developers.google.com/web/fundamentals/instant-and-offline/web-storage/offline-for-pwa"],
									["Codelabs - Offline quickstart", "https://codelabs.developers.google.com/codelabs/pwa-offline-quickstart/index.html?index=..%2F..dev-pwa-training#0"],
									["Codelabs - Adding a Service Worker and Offline into your Web App", "https://codelabs.developers.google.com/codelabs/offline/index.html?index=..%2F..%2Findex#0"],
									["Supercharged - Offline Links", "https://www.youtube.com/watch?v=7fnpsF9tMXc"],
									["Mozilla - Online and offline events", "https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/Online_and_offline_events"],
								]
							}
						},
						{
							name: "Push notifications",
							description: {
								text: "",
								links: [
									["Google Devs - Adding Push Notifications to a Web App", "https://developers.google.com/web/fundamentals/codelabs/push-notifications/"],
									["Mozilla - Notifications API", "https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API"]
								]
							}
						},
					]
				},
				{
					name: "Web App manifest",
					description: {
						text: "",
						links: [
							["Google Devs - Web App Manifest", "https://developers.google.com/web/fundamentals/web-app-manifest/"],
							["W3C - Web App Manifest", "https://www.w3.org/TR/appmanifest/"]
						]
					}
				},
				{
					name: "Add to homescreen",
					description: {
						text: "",
						links: [
							["Google Devs - App Install Banners", "https://developers.google.com/web/fundamentals/app-install-banners/"]
						]
					}
				},
				{
					name: "Touch Events",
					description: {
						text: "",
						links: [
							["Mozilla - Touch Events", "https://developer.mozilla.org/en-US/docs/Web/API/Touch_events"],
							["Mozilla - Pointer Events", "https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events"]
						]
					}
				}
			]
		},
		{
			name: "Loading Performance",
			skills: [
				{
					name: "App shell",
					description: {
						text: "",
						links: [
							["Google Devs - The App Shell Model", "https://developers.google.com/web/fundamentals/architecture/app-shell"]
						]
					}
				},
				{
					name: "Render-Blocking Resources"
				},
				{
					name: "Compression",
					description: {
						text: "",
						links: [
							["Google Devs - Optimizing Encoding and Transfer Size", "https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer"],
							["Google Devs - Replace Animated GIFs with Video", "https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/replace-animated-gifs-with-video/"],
							["Squoosh", "https://squoosh.app/"]
						]
					},
				},
				{
					name: "Performance metrics",
					skills: [
						{
							name: "First meaningful paint"
						},
						{
							name: "First CPU idle"
						},
						{
							name: "Time to interactive"
						},
					]
				},
				{
					name: "Lazy Loading",
					description: {
						text: "",
						links: [
							["Google Devs - Lazy Loading Images and Video", "https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video"],
							["Addy Osmani - Lazy Loading Images", "https://addyosmani.com/blog/lazy-loading/"]
						]
					}
				},
				{
					name: "Offscreen images"
				},
				{
					name: "Critical Request Chains",
					description: {
						text: "",
						links: [
							["Google Devs - Critical Request Chains", "https://developers.google.com/web/tools/lighthouse/audits/critical-request-chains"],
						]
					},
				},
				{
					name: "Tree shaking",
					description: {
						text: "",
						links: [
							["Google Devs - Reduce JavaScript Payloads", "https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking"],
						]
					},
				},
				{
					name: "Codesplitting",
					description: {
						text: "",
						links: [
							["Google Devs - Reduce JavaScript Payloads", "https://developers.google.com/web/fundamentals/performance/optimizing-javascript/code-splitting"],
						]
					},
				},
				{
					name: "PRPL Pattern",
					description: {
						text: "",
						links: [
							["Google Devs - The PRPL Pattern", "https://developers.google.com/web/fundamentals/performance/prpl-pattern/"],
							["Google Devs - JavaScript Start-up Optimization", "https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/javascript-startup-optimization"]
							["Ben Schwarz - Real world performance", "https://building.calibreapp.com/beyond-the-bubble-real-world-performance-9c991dcd5342?gi=76804aa8f46e"],
						]
					},
				},
				{
					name: "Resource Prioritization",
					description: {
						text: "",
						links: [
							["Google Devs - Resource Prioritization", "https://developers.google.com/web/fundamentals/performance/resource-prioritization"],
							["Eliminating Roundtrips with Preconnect", "https://www.igvita.com/2015/08/17/eliminating-roundtrips-with-preconnect/"],
							["Addy Osmani - Preload, Prefetch And Priorities in Chrome", "https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf"],
						]
					},
				},
				{
					name: "Caching",
				},
			]
		},
		{
			name: "Rendering Performance",
			skills: [
				{
					name: "Event loop",
					skills: [
						{
							name: "Heap",
							description: {
								text: "",
								links: [
									["Google Devs - Memory Problems", "https://developers.google.com/web/tools/chrome-devtools/memory-problems/"],
								]
							},
						},
						{
							name: "Stack"
						},
						{
							name: "Microtask"
						}
					]
				},
				{
					name: "RAIL Model",
					description: {
						text: "",
						links: [
							["Google Devs - RAIL", "https://developers.google.com/web/fundamentals/performance/rail"],
							["Google Devs - Why Performance Matters", "https://developers.google.com/web/fundamentals/performance/why-performance-matters/"],
							["Google Devs - Get Started With Analyzing", "https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/"],
							["Google Devs - Animations and Performance", "https://developers.google.com/web/fundamentals/design-and-ux/animations/animations-and-performance"],
							["Google Devs - CSS Versus JavaScript Animations", "https://developers.google.com/web/fundamentals/design-and-ux/animations/css-vs-javascript"],
							["Google Devs - Choosing the Right Easing", "https://developers.google.com/web/fundamentals/design-and-ux/animations/choosing-the-right-easing"],
							["Google Devs - Animating Modal Views", "https://developers.google.com/web/fundamentals/design-and-ux/animations/animating-modal-views"]
						]
					},
					skills: [
						{
							name: "requestAnimationFrame",
							description: {
								text: "",
								links: [
									["Google Devs - Optimize JavaScript Execution", "https://developers.google.com/web/fundamentals/performance/rendering/optimize-javascript-execution"],
								]
							},
						},
						{
							name: "requestIdleCallback",
							description: {
								text: "",
								links: [
									["Mozilla - Background Tasks API", "https://developer.mozilla.org/en-US/docs/Web/API/Background_Tasks_API"],
									["Google Dev - requestIdleCallback", "https://developers.google.com/web/updates/2015/08/using-requestidlecallback?hl=en"]
								]
							}
						}
					]
				},
				{
					name: "Critical Rendering Path",
					description: {
						text: "",
						links: [
							["Google Devs - Critical Rendering Path", "https://developers.google.com/web/fundamentals/performance/critical-rendering-path/"],
						]
					},
				},
				{
					name: "The Pixel Pipeline",
					description: {
						text: "",
						links: [
							["Google Devs - Rendering Performance", "https://developers.google.com/web/fundamentals/performance/rendering"],,
							["Pixels are expensive", "https://aerotwist.com/blog/pixels-are-expensive/"],
							["Google Devs - The Applied Science of Runtime Performance", "https://www.youtube.com/watch?v=RCFQu0hK6bU"],
							["CSS Triggers", "https://csstriggers.com/"]
						]
					},
					skills: [
						{
							name: "Layout Trashing",
							description: {
								text: "",
								links: [
									["Google Devs - Layout Thrashing", "https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing"],
								]
							},
						},
						{
							name: "Paint areas",
							description: {
								text: "",
								links: [
									["Google Devs - Paint Areas", "https://developers.google.com/web/fundamentals/performance/rendering/simplify-paint-complexity-and-reduce-paint-areas"],
								]
							},
						},
						{
							name: "Style calculations",
							description: {
								text: "",
								links: [
									["Google Devs - Style Calculations", "https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations"],
								]
							},
						},
						{
							name: "Layers",
							description: {
								text: "",
								links: [
									["Google Devs - Manage Layer Count", "https://developers.google.com/web/fundamentals/performance/rendering/stick-to-compositor-only-properties-and-manage-layer-count"],
								]
							},
						},
						{
							name: "Transforms"
						},
						{
							name: "Debounce",
							description: {
								text: "",
								links: [
									["Google Devs - Debounce Your Input Handlers", "https://developers.google.com/web/fundamentals/performance/rendering/debounce-your-input-handlers"],
								]
							},
						}
					],
				},
				{
					name: "Web Workers",
					description: {
						text: "",
						links: [
							["Mozilla - Web Workers API", "https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"],
						]
					}
				}
			],
		},
		{
			name: "Audits",
			description: {
				text: "",
				links: [
					["Google Devs - Auditing Performance", "https://developers.google.com/web/fundamentals/performance/audit"],
					["Google Devs - Prework", "https://developers.google.com/web/fundamentals/performance/audit/prework"],
					["Google Devs - Check site security", "https://developers.google.com/web/fundamentals/performance/audit/security"],
					["Google Devs - Use tools to measure performance", "https://developers.google.com/web/fundamentals/performance/audit/tools"],
					["Google Devs - Find and Fix Web App Performance Issues", "https://developers.google.com/web/fundamentals/codelabs/web-perf/"],
					["web.dev - Measure", "https://web.dev/measure/"],
					["Google Devs - How To Think About Speed Tools", "https://developers.google.com/web/fundamentals/performance/speed-tools/"]
				]
			},
			skills: [
				{
					name: "Performance budgets"
				},
				{
					name: "Lighthouse",
					description: {
						text: "",
						links: [
							["Google Devs - Lighthouse", "https://developers.google.com/web/tools/lighthouse/"],
						]
					},
				},
				{
					name: "Chrome DevTools",
					description: {
						text: "",
						links: [
							["Google Devs - Inspect animations", "https://developers.google.com/web/tools/chrome-devtools/inspect-styles/animations"],
						]
					},
				}
			]
		},
		{
			name: "Security",
			skills: [
				{
					name: "HTTPS",
					description: {
						text: "",
						links: [
							["Google Devs - Why HTTPS Matters", "https://developers.google.com/web/fundamentals/security/encrypt-in-transit/why-https"],
							["Google Devs - Enabling HTTPS on Your Servers", "https://developers.google.com/web/fundamentals/security/encrypt-in-transit/enable-https"],
							["Google Devs - Mixed Content", "https://developers.google.com/web/fundamentals/security/prevent-mixed-content/what-is-mixed-content"],
							["Youtube - Stories from the field", "https://www.youtube.com/watch?v=GoXgl9r0Kjk"]
						]
					}
				},
				{
					name: "Content Security Policy",
					description: {
						text: "",
						links: [
							["Google Devs - CSP", "https://developers.google.com/web/fundamentals/security/csp"]
						]
					}
				}
			]
		}
	]
}