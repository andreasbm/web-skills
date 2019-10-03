
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
							["Chrome Devs - View And Edit Local Storage", "https://developers.google.com/web/tools/chrome-devtools/storage/localstorage"],
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
							["Chrome Devs - Service Workers: an Introduction", "https://developers.google.com/web/fundamentals/primers/service-workers"]
							["Chrome Devs - The Service Worker Lifecycle", "https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle"],
							["Chrome Devs - Service Worker Registration", "https://developers.google.com/web/fundamentals/primers/service-workers/registration"]
							["Chrome Devs - High-performance service worker loading", "https://developers.google.com/web/fundamentals/primers/service-workers/high-performance-loading"],
							["Codelabs - Scripting the service worker", "https://codelabs.developers.google.com/codelabs/pwa-scripting-the-service-worker/index.html?index=..%2F..dev-pwa-training#0"],
							["Codelabs - Caching files with the service worker", "https://codelabs.developers.google.com/codelabs/pwa-caching-service-worker/index.html?index=..%2F..dev-pwa-training#0"],
						]
					},
					skills: [
						{
							name: "Offline first",
							description: {
								text: "",
								links: [
									["Codelabs - Offline quickstart", "https://codelabs.developers.google.com/codelabs/pwa-offline-quickstart/index.html?index=..%2F..dev-pwa-training#0"],
									["Codelabs - Adding a Service Worker and Offline into your Web App", "https://codelabs.developers.google.com/codelabs/offline/index.html?index=..%2F..%2Findex#0"],
									["Supercharged - Offline Links", "https://www.youtube.com/watch?v=7fnpsF9tMXc"]
								]
							}
						},
						{
							name: "Push notifications",
							description: {
								text: "",
								links: [
									["Chrome Devs - Adding Push Notifications to a Web App", "https://developers.google.com/web/fundamentals/codelabs/push-notifications/"]
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
							["Chrome Devs - Web App Manifest", "https://developers.google.com/web/fundamentals/web-app-manifest/"],
							["W3C - Web App Manifest", "https://www.w3.org/TR/appmanifest/"]
						]
					}
				},
				{
					name: "Add to homescreen",
					description: {
						text: "",
						links: [
							["Chrome Devs - App Install Banners", "https://developers.google.com/web/fundamentals/app-install-banners/"]
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
							["Chrome Devs - The App Shell Model", "https://developers.google.com/web/fundamentals/architecture/app-shell"]
						]
					}
				},
				{
					name: "Render-Blocking Resources"
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
							["Addy Osmani - Lazy Loading Images", "https://addyosmani.com/blog/lazy-loading/"]
						]
					}
				},
				{
					name: "Offscreen images"
				},
				{
					name: "Critical Request Chains"
				},
				{
					name: "Tree shaking"
				},
				{
					name: "Codesplitting"
				},
				{
					name: "PRPL Pattern"
				},
				{
					name: "Resource Prioritization"
				},
				{
					name: "Caching"
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
							name: "Heap"
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
					skills: [
						{
							name: "requestAnimationFrame"
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
					name: "The Pixel Pipeline",
					skills: [
						{
							name: "Layout Trashing",
						},
						{
							name: "Paint areas"
						},
						{
							name: "Style calculations"
						},
						{
							name: "Layers"
						},
						{
							name: "Transforms"
						},
						{
							name: "Debounce"
						}
					],
				},
				{
					name: "Web Workers"
				}
			],
		},
		{
			name: "Audits",
			skills: [
				{
					name: "Performance budgets"
				},
				{
					name: "Lighthouse"
				},
				{
					name: "Chrome DevTools"
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
							["Chrome Devs - Why HTTPS Matters", "https://developers.google.com/web/fundamentals/security/encrypt-in-transit/why-https"],
							["Chrome Devs - Enabling HTTPS on Your Servers", "https://developers.google.com/web/fundamentals/security/encrypt-in-transit/enable-https"],
							["Chrome Devs - Mixed Content", "https://developers.google.com/web/fundamentals/security/prevent-mixed-content/what-is-mixed-content"],
							["Youtube - Stories from the field", "https://www.youtube.com/watch?v=GoXgl9r0Kjk"]
						]
					}
				},
				{
					name: "Content Security Policy",
					description: {
						text: "",
						links: [
							["Chrome Devs - CSP", "https://developers.google.com/web/fundamentals/security/csp"]
						]
					}
				}
			]
		}
	]
}