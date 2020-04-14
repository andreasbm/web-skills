export const pwaCollection = {
	name: "Progressive Webapps",
	areas: [
		{
			name: "API's",
			skills: [
				{
					name: "Storage",
					description: {
						text: "Learn how to store data for your web app.",
						links: [
							["MDN - Storage", "https://developer.mozilla.org/en-US/docs/Web/API/Storage_API"],
							["MDN - Web Storage API", "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API"],
							["MDN - Cookies", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"],
							["MDN - IndexedDB API", "https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API"],
							["Google Devs - View And Edit Local Storage", "https://developers.google.com/web/tools/chrome-devtools/storage/localstorage"],
							["MDN - Client-side storage", "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage"],
						]
					}
				},
				{
					name: "Routing",
					description: {
						text: "Learn what routing means in single page applications.",
						links: [
							["How Single-Page Applications Work", "https://blog.pshrmn.com/how-single-page-applications-work/"],
							["Static Apps - Routing URLs in Static Web Apps", "https://staticapps.org/articles/routing-urls-in-static-apps/"],
							["Routing With Single Page Applications or Client Side Routing", "https://pennyforyourcode.com/tldr-routing-with-single-page-applications-or-client-side-routing-327626cdc5dd"],
						]
					},
					skills: [
						{
							name: "History API",
							description: {
								text: "Learn how to use the history API to add single page applicaiton routing to your web app.",
								links: [
									["MDN - Working with the History API", "https://developer.mozilla.org/en-US/docs/Web/API/History_API/Working_with_the_History_API"],
									["MDN - History API", "https://developer.mozilla.org/en-US/docs/Web/API/History_API"],
									["Single-page application routing in vanilla JavaScript", "https://medium.com/@george.norberg/history-api-getting-started-36bfc82ddefc"],
									["CSS Tricks - Using the HTML5 History API", "https://css-tricks.com/using-the-html5-history-api/"],
									["The History API", "https://flaviocopes.com/history-api/"],
									["Google Devs - History API: Scroll Restoration", "https://developers.google.com/web/updates/2015/09/history-api-scroll-restoration"],
									["MDN - The Document Base URL element", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base"]
								]
							},
						}
					]
				},
				{
					name: "Service Workers",
					description: {
						text: "Learn how to register a service worker to provide a rich native-like experience.",
						links: [
							["Google Devs - Service Workers: an Introduction", "https://developers.google.com/web/fundamentals/primers/service-workers"],
							["Google Devs - The Service Worker Lifecycle", "https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle"],
							["Google Devs - Service Worker Registration", "https://developers.google.com/web/fundamentals/primers/service-workers/registration"],
							["MDN - Service Worker API", "https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers"],
							["Google Devs - High-performance service worker loading", "https://developers.google.com/web/fundamentals/primers/service-workers/high-performance-loading"],
							["Codelabs - Scripting the service worker", "https://codelabs.developers.google.com/codelabs/pwa-scripting-the-service-worker/index.html?index=..%2F..dev-pwa-training#0"],
							["Codelabs - Caching files with the service worker", "https://codelabs.developers.google.com/codelabs/pwa-caching-service-worker/index.html?index=..%2F..dev-pwa-training#0"],
							["Codelabs - Adding a Service Worker", "https://developers.google.com/web/fundamentals/codelabs/offline"],
							["Google Devs - Debugging Service Workers", "https://developers.google.com/web/fundamentals/codelabs/debugging-service-workers"],
							["Caching best practices", "https://jakearchibald.com/2016/caching-best-practices/"],
						]
					},
					skills: [
						{
							name: "Offline first",
							description: {
								text: "Learn how to make your web app working offline with an offline first approach.",
								links: [
									["Google Devs - The Offline Cookbook", "https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook"],
									["Udacity - Offline Web Applications", "https://www.udacity.com/course/offline-web-applications--ud899"],
									["Offline First", "http://offlinefirst.org/"],
									["Google Devs - Offline UX Considerations", "https://developers.google.com/web/fundamentals/instant-and-offline/offline-ux"],
									["Google Devs - Offline Storage for Progressive Web Apps", "https://developers.google.com/web/fundamentals/instant-and-offline/web-storage/offline-for-pwa"],
									["Codelabs - Offline quickstart", "https://codelabs.developers.google.com/codelabs/pwa-offline-quickstart/index.html?index=..%2F..dev-pwa-training#0"],
									["Codelabs - Adding a Service Worker and Offline into your Web App", "https://codelabs.developers.google.com/codelabs/offline/index.html?index=..%2F..%2Findex#0"],
									["Supercharged - Offline Links", "https://www.youtube.com/watch?v=7fnpsF9tMXc"],
									["MDN - Online and offline events", "https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/Online_and_offline_events"],
									["MDN - Making PWAs work offline", "https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Offline_Service_workers"]
								]
							}
						},
						{
							name: "Push notifications",
							description: {
								text: "Learn how to add push notifications to your web app.",
								links: [
									["Google Devs - Adding Push Notifications to a Web App", "https://developers.google.com/web/fundamentals/codelabs/push-notifications/"],
									["MDN - How to make PWAs re-engageable", "https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Re-engageable_Notifications_Push"],
									["MDN - Notifications API", "https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API"],
								]
							}
						},
					]
				},
				{
					name: "Web App manifest",
					description: {
						text: "Learn how to tell the browser about your web app and how it should behave when 'installed' by creating a web app manifest.",
						links: [
							["Google Devs - Web App Manifest", "https://developers.google.com/web/fundamentals/web-app-manifest/"],
							["web.dev - Add a web app manifest", "https://web.dev/add-manifest/"],
							["W3C - Web App Manifest", "https://www.w3.org/TR/appmanifest/"],
							["MDN - How to make PWAs installable", "https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Installable_PWAs"],
						]
					}
				},
				{
					name: "Add to homescreen",
					description: {
						text: "Learn how to make your web app installable.",
						links: [
							["web.dev - Installable", "https://web.dev/installable"],
							["Google Devs - App Install Banners", "https://developers.google.com/web/fundamentals/app-install-banners/"],
							["MDN - Add to Home screen", "https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Add_to_home_screen"]
						]
					}
				},
				{
					name: "Pointer Events",
					description: {
						text: "Learn how to handle inputs from pointing devices such as a mouse, pen/stylus or touch.",
						links: [
							["MDN - Pointer Events", "https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events"],
							["Google Devs - Add Touch to Your Site", "https://developers.google.com/web/fundamentals/design-and-ux/input/touch"],
							["Google Devs - Pointing the Way Forward", "https://developers.google.com/web/updates/2016/10/pointer-events"],
							["Google Devs - Touch Action Options", "https://developers.google.com/web/updates/2016/10/touch-action"],
							["W3C - Pointer Events", "https://www.w3.org/TR/pointerevents/"]
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
						text: "Learn how to use an app shell to provide an instant and reliable experience to users on repeat visits",
						links: [
							["Google Devs - The App Shell Model", "https://developers.google.com/web/fundamentals/architecture/app-shell"],
							["MDN - Architecture of an app", "https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/App_structure"]
						]
					}
				},
				{
					name: "Render-Blocking Resources",
					description: {
						text: "Learn about render-blocking resources and why they are bad for the user-experience.",
						links: [
							["MDN - Render-blocking resources", "https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Loading#Render-blocking_resources"],
							["Google Devs - Render-Blocking Resources", "https://developers.google.com/web/tools/lighthouse/audits/blocking-resources"]
						]
					},
				},
				{
					name: "Compression",
					description: {
						text: "Learn how to minimize the overall download size by optimizing and compressing resources.",
						links: [
							["Google Devs - Optimizing Encoding and Transfer Size", "https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer"],
							["Google Devs - Replace Animated GIFs with Video", "https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/replace-animated-gifs-with-video/"],
							["Squoosh", "https://squoosh.app/"],
							["Google Devs - Text Content", "https://developers.google.com/web/fundamentals/performance/get-started/textcontent-3"],
							["Google Devs - Optimize Images", "https://developers.google.com/web/tools/lighthouse/audits/optimize-images"],
							["web.dev - Reduce JavaScript execution time", "https://web.dev/bootup-time/"]
						]
					},
				},
				{
					name: "Performance metrics",
					description: {
						text: "Learn why it is important to measure performance and which metrics you should prioritize.",
						links: [
							["Google Devs - User-centric Performance Metrics", "https://developers.google.com/web/fundamentals/performance/user-centric-performance-metrics"],
							["Udacity - Website Performance Optimization", "https://www.udacity.com/course/website-performance-optimization--ud884"],
							["Udacity - Browser Rendering Optimization", "https://www.udacity.com/course/browser-rendering-optimization--ud860"]
						]
					},
					skills: [
						{
							name: "Largest Contentful Paint",
							description: {
								text: "Learn about Largest Contentful Paint and how it impacts the overall performance.",
								links: [
									["web.dev - Largest Contentful Paint", "https://web.dev/lcp/"],
									["web.dev - Lighthouse Largest Contentful Paint", "https://web.dev/lighthouse-largest-contentful-paint"],
									["Medium - New Performance Metric: What is Largest Contentful Paint?", "https://medium.com/speedrank-app/new-performance-metric-what-is-largest-contentful-paint-dc784a497dd5"]
								]
							},
						},
						{
							name: "Total Blocking Time",
							description: {
								text: "Learn about Total Blocking Time and how it impacts the overall performance.",
								links: [
									["web.dev - First CPU Idle", "https://web.dev/first-cpu-idle"],
									["Google Devs - Total Blocking Time", "https://web.dev/tbt"],
								]
							},
						},
						{
							name: "Time to Interactive",
							description: {
								text: "Learn about Time to Interactive and how it impacts the overall performance.",
								links: [
									["web.dev - Total Blocking Time", "https://web.dev/lighthouse-total-blocking-time/"],
									["Google Devs - Time to Interactive", "https://developers.google.com/web/tools/lighthouse/audits/time-to-interactive"],
								]
							},
						},
					]
				},
				{
					name: "Lazy Loading",
					description: {
						text: "Learn how to use lazy loading to lower the initial page payload and load time.",
						links: [
							["Google Devs - Lazy Loading Images and Video", "https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video"],
							["Addy Osmani - Lazy Loading Images", "https://addyosmani.com/blog/lazy-loading/"],
							["web.dev - Native lazy-loading for the web", "https://web.dev/native-lazy-loading/"]
						]
					},
					skills: [
						{
							name: "Dynamic Import",
							description: {
								text: "Learn how to use dynamic import to lazy load javascript.",
								links: [
									["V8 - Dynamic import()", "https://v8.dev/features/dynamic-import"],
									["JavaScript dynamic import() & export", "https://medium.com/@WebReflection/javascript-dynamic-import-export-b0e8775a59d4"],
									["MDN - Dynamic Import", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#Dynamic_Imports"],
									["TC39 - proposal-dynamic-import", "https://github.com/tc39/proposal-dynamic-import"]
								]
							},
						},
						{
							name: "Offscreen images",
							description: {
								text: "Learn why offscreen images increase the load time and how to avoid them by lazy loading images.",
								links: [
									["web.dev - Defer offscreen images", "https://web.dev/offscreen-images/"],
									["Google Devs - Properly Size Images", "https://developers.google.com/web/tools/lighthouse/audits/oversized-images"],
									["web.dev - Native lazy-loading for the web", "https://web.dev/native-lazy-loading"],
									["Addy Osmani - Native image lazy-loading for the web!", "https://addyosmani.com/blog/lazy-loading/"],
								]
							},
						},
					]
				},
				{
					name: "Critical Request Chains",
					description: {
						text: "Learn about the critical request chains and how to find them in your web app.",
						links: [
							["Google Devs - Critical Request Chains", "https://developers.google.com/web/tools/lighthouse/audits/critical-request-chains"],
							["web.dev - Minimize critical requests depth", "https://web.dev/critical-request-chains"]
						]
					},
				},
				{
					name: "Tree shaking",
					description: {
						text: "Learn how to use tree shaking to eliminate dead code.",
						links: [
							["Google Devs - Reduce JavaScript Payloads", "https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking"],
							["How to Clean Up Your JavaScript", "https://www.keycdn.com/blog/tree-shaking"],
						]
					},
				},
				{
					name: "Codesplitting",
					description: {
						text: "Learn about codesplitting an how dividing your code into multiple chunks makes your web app faster.",
						links: [
							["Google Devs - Reduce JavaScript Payloads", "https://developers.google.com/web/fundamentals/performance/optimizing-javascript/code-splitting"],
							["All you need to know about JavaScript code splitting", "https://www.creativebloq.com/how-to/all-you-need-to-know-about-javascript-code-splitting"]
						]
					},
				},
				{
					name: "PRPL Pattern",
					description: {
						text: "Learn how to use the PRPL pattern to make web apps more performant.",
						links: [
							["Google Devs - The PRPL Pattern", "https://developers.google.com/web/fundamentals/performance/prpl-pattern/"],
							["Google Devs - JavaScript Start-up Optimization", "https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/javascript-startup-optimization"],
							["Ben Schwarz - Real world performance", "https://building.calibreapp.com/beyond-the-bubble-real-world-performance-9c991dcd5342?gi=76804aa8f46e"],
							["The Cost of Javascript", "https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4"],
						]
					},
				},
				{
					name: "Resource Prioritization",
					description: {
						text: "Learn about resource prioritization and how to inform the browser about the importance of a resource.",
						links: [
							["Google Devs - Resource Prioritization", "https://developers.google.com/web/fundamentals/performance/resource-prioritization"],
							["Eliminating Roundtrips with Preconnect", "https://www.igvita.com/2015/08/17/eliminating-roundtrips-with-preconnect/"],
							["Addy Osmani - Preload, Prefetch And Priorities in Chrome", "https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf"],
							["web.dev - Preconnect to required origins", "https://web.dev/uses-rel-preconnect/"],
							["Preload, prefetch and other <link> tags", "https://3perf.com/blog/link-rels/"]
						]
					},
				},
				{
					name: "Caching",
					description: {
						text: "Learn about caching and how it can be uses to make web apps load faster.",
						links: [
							["Google Devs - HTTP Caching", "https://developers.google.com/web/fundamentals/performance/get-started/httpcaching-6"],
							["MDN - HTTP caching", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching"]
						]
					},
				},
			]
		},
		{
			name: "Rendering Performance",
			skills: [
				{
					name: "Rendering",
					description: {
						text: "Learn about rendering, how a page is rendered and why it is important to keep your web app interactive and smooth running.",
						links: [
							["Google Devs - Constructing the Object Model", "https://developers.google.com/web/fundamentals/performance/critical-rendering-path/constructing-the-object-model"],
							["Google Devs - Rendering Performance", "https://developers.google.com/web/fundamentals/performance/rendering"],
							["Google Devs - Render-tree Construction", "https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction"],
							["Google Devs - Render Blocking CSS", "https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css"]
						]
					},
				},
				{
					name: "Event loop",
					description: {
						text: "Learn about the event loop and how Javascript simulate like it’s running our commands in a multi-thread environment.",
						links: [
							["Youtube - Jake Archibald: In The Loop", "https://youtu.be/cCOL7MC4Pl0"],
							["Understanding JavaScript", "https://medium.com/@muratcatal/understanding-javascript-heap-stack-event-loops-and-callback-queue-6fdec3cfe32e"],
							["JavaScript Event Loop Explained", "https://medium.com/front-end-weekly/javascript-event-loop-explained-4cd26af121d4"],
							["Youtube - What the heck is the event loop anyway?", "https://www.youtube.com/watch?v=8aGhZQkoFbQ"],
							["The JavaScript Event Loop", "https://flaviocopes.com/javascript-event-loop/"],
							["dev.to - JavaScript Visualized: Event Loop", "https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif"],
						]
					},
					skills: [
						{
							name: "Microtask",
							description: {
								text: "Learn about microtasks and the microtask queue.",
								links: [
									["Tasks, microtasks, queues and schedules", "https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/"],
									["MDN - Using microtasks in JavaScript", "https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide"],
									["javascript.info - Microtasks and macrotasks", "https://javascript.info/event-loop"],
									["javascript.info - Microtasks", "https://javascript.info/microtask-queue"],
								]
							},
						},
						{
							name: "Stack",
							description: {
								text: "Learn about the stack and how to investigate the staack trace when debugging.",
								links: [
									["Javascript Stack Trade - Using it to debug", "https://www.scalyr.com/blog/javascript-stack-trace-understanding-it-and-using-it-to-debug/"],
									["MDN - console.trace()", "https://developer.mozilla.org/en-US/docs/Web/API/Console/trace"],
									["V8 - Stack trace API", "https://v8.dev/docs/stack-trace-api"],
									["Confused about Stack and Heap?", "https://medium.com/fhinkel/confused-about-stack-and-heap-2cf3e6adb771"],
								]
							},
						},
						{
							name: "Heap",
							description: {
								text: "Learn about the heap and how to investigate the heap snapshots when debugging.",
								links: [
									["Google Devs - Memory Problems", "https://developers.google.com/web/tools/chrome-devtools/memory-problems/"],
									["Google Devs - Memory Terminology", "https://developers.google.com/web/tools/chrome-devtools/memory-problems/memory-101"],
									["Google Devs - How to Record Heap Snapshots", "https://developers.google.com/web/tools/chrome-devtools/memory-problems/heap-snapshots"],
									["Confused about Stack and Heap?", "https://medium.com/fhinkel/confused-about-stack-and-heap-2cf3e6adb771"],
									["Google Devs - How to Use the Allocation Profiler Tool", "https://developers.google.com/web/tools/chrome-devtools/memory-problems/allocation-profiler"],
								]
							},
						},
					]
				},
				{
					name: "RAIL Model",
					description: {
						text: "Learn how to use the RAIL model to ensure a good user experience.",
						links: [
							["Google Devs - RAIL", "https://developers.google.com/web/fundamentals/performance/rail"],
							["Google Devs - Why Performance Matters", "https://developers.google.com/web/fundamentals/performance/why-performance-matters/"],
							["Google Devs - Get Started With Analyzing", "https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/"],
							["Google Devs - Animations and Performance", "https://developers.google.com/web/fundamentals/design-and-ux/animations/animations-and-performance"],
							["Google Devs - CSS Versus JavaScript Animations", "https://developers.google.com/web/fundamentals/design-and-ux/animations/css-vs-javascript"],
							["Google Devs - Choosing the Right Easing", "https://developers.google.com/web/fundamentals/design-and-ux/animations/choosing-the-right-easing"],
							["Google Devs - Animating Modal Views", "https://developers.google.com/web/fundamentals/design-and-ux/animations/animating-modal-views"],
							["MDN - CSS and JavaScript animation performance", "https://developer.mozilla.org/en-US/docs/Web/Performance/CSS_JavaScript_animation_performance"],
							["MDN - Performance fundamentals", "https://developer.mozilla.org/en-US/docs/Web/Performance/Fundamentals"],
							["Youtube - Fast By Default", "https://www.youtube.com/watch?v=_srJ7eHS3IM"],
						]
					},
					skills: [
						{
							name: "requestAnimationFrame",
							description: {
								text: "Learn how to use the requestAnimationFrame API to create butter-smooth animations.",
								links: [
									["Google Devs - Optimize JavaScript Execution", "https://developers.google.com/web/fundamentals/performance/rendering/optimize-javascript-execution"],
									["MDN - requestAnimationFrame()", "https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame"]
								]
							},
						},
						{
							name: "requestIdleCallback",
							description: {
								text: "Learn how to use the requestIdleCallback to defer heavy tasks.",
								links: [
									["MDN - Background Tasks API", "https://developer.mozilla.org/en-US/docs/Web/API/Background_Tasks_API"],
									["Google Dev - requestIdleCallback", "https://developers.google.com/web/updates/2015/08/using-requestidlecallback?hl=en"],
									["MDN - requestIdleCallback()", "https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback"]
								]
							}
						}
					]
				},
				{
					name: "Critical Rendering Path",
					description: {
						text: "Learn about the critical rendering path and how to identify it.",
						links: [
							["Google Devs - Critical Rendering Path", "https://developers.google.com/web/fundamentals/performance/critical-rendering-path/"],
							["MDN - Critical Rendering Path", "https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path"],
							["Understanding the critical rendering path", "https://medium.com/@luisvieira_gmr/understanding-the-critical-rendering-path-rendering-pages-in-1-second-735c6e45b47a"]
						]
					},
				},
				{
					name: "The Pixel Pipeline",
					description: {
						text: "Learn about the five key points in the pixels-to-screen pipeline.",
						links: [
							["Google Devs - The pixel pipeline", "https://developers.google.com/web/fundamentals/performance/rendering#the_pixel_pipeline"],
							["Pixels are expensive", "https://aerotwist.com/blog/pixels-are-expensive/"],
							["Google Devs - The Applied Science of Runtime Performance", "https://www.youtube.com/watch?v=RCFQu0hK6bU"],
							["CSS Triggers", "https://csstriggers.com/"]
						]
					},
					skills: [
						{
							name: "Style calculations",
							description: {
								text: "Learn how to optimize your CSS to avoid heavy style calculations.",
								links: [
									["Google Devs - Style Calculations", "https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations"],
								]
							},
						},
						{
							name: "Transforms",
							description: {
								text: "Learn about transforms and how it is possible to avoid both layout and paint.",
								links: [
									["Google Devs - Use transform and opacity for animations", "https://developers.google.com/web/fundamentals/performance/rendering/stick-to-compositor-only-properties-and-manage-layer-count#use_transform_and_opacity_changes_for_animations"],
									["Achieving 60 FPS Animations with CSS3", "https://medium.com/outsystems-experts/how-to-achieve-60-fps-animations-with-css3-db7b98610108"],
									["HTML5 Rocks - High Performance Animations", "https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/"],
								]
							},
						},
						{
							name: "Paint areas",
							description: {
								text: "Learn about paint areas and how it is possible to reduce them.",
								links: [
									["Google Devs - Paint Areas", "https://developers.google.com/web/fundamentals/performance/rendering/simplify-paint-complexity-and-reduce-paint-areas"],
									["CSS Tricks - Browser painting", "https://css-tricks.com/browser-painting-and-considerations-for-web-performance/"],
									["HTML5 Rocks - Avoiding Unnecessary Paints", "https://www.html5rocks.com/en/tutorials/speed/unnecessary-paints/"]
								]
							},
						},
						{
							name: "Layout Trashing",
							description: {
								text: "Learn about layout trashing and how to avoid it.",
								links: [
									["Google Devs - Layout Thrashing", "https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing"],
									["Beware JavaScript Layout Thrashing!", "https://blog.idrsolutions.com/2014/08/beware-javascript-layout-thrashing/"],
									["Layout thrashing cheatsheet", "https://devhints.io/layout-thrashing"]
								]
							},
						},
						{
							name: "Layers",
							description: {
								text: "Learn about layers and how to promote an element to another layer.",
								links: [
									["Google Devs - Manage Layer Count", "https://developers.google.com/web/fundamentals/performance/rendering/stick-to-compositor-only-properties-and-manage-layer-count"],
									["HTML5 Rocks - Accelerated Rendering in Chrome", "https://www.html5rocks.com/en/tutorials/speed/layers/"],
									["Layers and how to force them", "https://dassur.ma/things/forcing-layers/"]
								]
							},
						},
						{
							name: "Debounce",
							description: {
								text: "Learn how to debounce computationally expensive code to avoid blocking the UI.",
								links: [
									["Google Devs - Debounce Your Input Handlers", "https://developers.google.com/web/fundamentals/performance/rendering/debounce-your-input-handlers"],
									["What is Debouncing?", "https://medium.com/@jamischarles/what-is-debouncing-2505c0648ff1"],
									["Level Up - Debounce in JavaScript", "https://levelup.gitconnected.com/debounce-in-javascript-improve-your-applications-performance-5b01855e086"]
								]
							},
						}
					],
				},
				{
					name: "CSS Containment",
					description: {
						text: "Learn how to use CSS containment to improve the performance of your web app.",
						links: [
							["Google Devs - CSS Containment", "https://developers.google.com/web/updates/2016/06/css-containment"],
							["W3C - CSS Containment Module", "https://www.w3.org/TR/css-contain-1/"],
							["An introduction to CSS Containment", "https://blogs.igalia.com/mrego/2019/01/11/an-introduction-to-css-containment/"],
							["MDN - Contain", "https://developer.mozilla.org/en-US/docs/Web/CSS/contain"],
							["CSS Tricks - CSS containment", "https://css-tricks.com/css-containment/"],
						]
					},
				},
				{
					name: "Web Workers",
					description: {
						text: "Learn how to use web workers to run a script operation in a background thread separate from the main execution thread.",
						links: [
							["MDN - Web Workers API", "https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"],
							["HTML5 Rocks - The Basics of Web Workers", "https://www.html5rocks.com/en/tutorials/workers/basics/"],
							["When should you be using Web Workers?", "https://dassur.ma/things/when-workers/"]
						]
					}
				}
			],
		},
		{
			name: "Security",
			skills: [
				{
					name: "HTTPS",
					description: {
						text: "Learn about HTTPS and why a website should always be protected with HTTPS.",
						links: [
							["Google Devs - Why HTTPS Matters", "https://developers.google.com/web/fundamentals/security/encrypt-in-transit/why-https"],
							["Google Devs - Enabling HTTPS on Your Servers", "https://developers.google.com/web/fundamentals/security/encrypt-in-transit/enable-https"],
							["Google Devs - Mixed Content", "https://developers.google.com/web/fundamentals/security/prevent-mixed-content/what-is-mixed-content"],
							["Youtube - Stories from the field", "https://www.youtube.com/watch?v=GoXgl9r0Kjk"]
						]
					}
				},
				{
					name: "Browser Sandbox",
					description: {
						text: "Learn about the sandbox security mechanism and how it restricts the execution environment.",
						links: [
							["web.dev - Browser sandbox", "https://web.dev/browser-sandbox/"],
							["Wikipedia - Sandbox (computer security)", "https://en.wikipedia.org/wiki/Sandbox_(computer_security)"],
							["Howtogeek - Sandboxes Explained", "https://www.howtogeek.com/169139/sandboxes-explained-how-theyre-already-protecting-you-and-how-to-sandbox-any-program/"]
						]
					},
				},
				{
					name: "OWASP",
					description: {
						text: "Learn about the OWASP organization and how they help with web application security.",
						links: [
							["Wikipedia - OWASP", "https://en.wikipedia.org/wiki/OWASP"],
							["OWASP - About", "https://www.owasp.org/index.php/About_The_Open_Web_Application_Security_Project"],
							["OWASP - OWASP Top 10", "https://www.owasp.org/images/7/72/OWASP_Top_10-2017_%28en%29.pdf.pdf"],
							["OWASP - Cheatsheets", "https://cheatsheetseries.owasp.org/"],
							["Youtube - OWASP", "https://www.youtube.com/user/OWASPGLOBAL"],
							["OWASP Top 10 Security Risks", "https://blog.sucuri.net/2018/10/owasp-top-10-security-risks-part-i.html"],
							["Wikipedia - Web application security", "https://en.wikipedia.org/wiki/Web_application_security"],
						]
					},
					skills: [
						{
							name: "Cross-Site Scripting",
							description: {
								text: "Learn about cross-site scripting and how it is possible mitigate these kind of attacks.",
								links: [
									["MDN - Cross-site scripting", "https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting"],
									["OWASP - Cross-site Scripting (XSS)", "https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)"],
									["OWASP - XSS Cheatsheet", "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html"],
									["Excess XSS", "https://excess-xss.com/"]
								]
							},
						},
						{
							name: "Clickjacking",
							description: {
								text: "Learn about clickjacking and how it is possible to mitigate these kind of attacks.",
								links: [
									["OWASP - Clickjacking", "https://www.owasp.org/index.php/Clickjacking"],
									["Wikipedia - Clickjacking", "https://en.wikipedia.org/wiki/Clickjacking"],
									["web.dev - Same-origin policy", "https://web.dev/same-origin-policy/#how-to-prevent-clickjacking"],
									["OWASP - Clickjacking Cheatsheet", "https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html"]
								]
							},
						},
					]
				},
				{
					name: "Content Security Policy",
					description: {
						text: "Learn about content security policy and how it can help to detect and mitigate certain types of attacks.",
						links: [
							["MDN - Content Security Policy (CSP)", "https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"],
							["Google Devs - CSP", "https://developers.google.com/web/fundamentals/security/csp"]
						]
					}
				},
			]
		},
		{
			name: "Audits",
			description: {
				text: "Learn how to do an audit to check the health of your web app.",
				links: [
					["Google Devs - Auditing Performance", "https://developers.google.com/web/fundamentals/performance/audit"],
					["web.dev - Performance audits", "https://web.dev/lighthouse-performance"],
					["Google Devs - Prework", "https://developers.google.com/web/fundamentals/performance/audit/prework"],
					["Google Devs - Check site security", "https://developers.google.com/web/fundamentals/performance/audit/security"],
					["Google Devs - Use tools to measure performance", "https://developers.google.com/web/fundamentals/performance/audit/tools"],
					["Google Devs - Find and Fix Web App Performance Issues", "https://developers.google.com/web/fundamentals/codelabs/web-perf/"],
					["web.dev - Measure", "https://web.dev/measure/"],
					["Google Devs - How To Think About Speed Tools", "https://developers.google.com/web/fundamentals/performance/speed-tools/"],
					["web.dev - PWA audits", "https://web.dev/lighthouse-pwa"],
					["web.dev - Best Practices audits", "https://web.dev/lighthouse-best-practices"]
				]
			},
			skills: [
				{
					name: "Performance budgets",
					description: {
						text: "Learn about performance budgets and how you can create one for your web app.",
						links: [
							["web.dev - Performance Budgets", "https://web.dev/performance-budgets-101"],
							["Google Devs - Performance Budget", "https://developers.google.com/web/tools/lighthouse/audits/budgets"],
							["Addy Osmani - Start Performance Budgeting", "https://addyosmani.com/blog/performance-budgets/"]
						]
					},
				},
				{
					name: "Lighthouse",
					description: {
						text: "Learn about lighthouse and how it can be used to audit your web app.",
						links: [
							["Google Devs - Lighthouse", "https://developers.google.com/web/tools/lighthouse/"],
							["Youtube - Staying off the Rocks", "https://www.youtube.com/watch?v=NoRYn6gOtVo"],
							["web.dev - Measure", "https://web.dev/measure"]
						]
					},
				},
				{
					name: "Chrome DevTools",
					description: {
						text: "Learn about the Chrome DevTools and how it can be used to audit your web app.",
						links: [
							["Google Devs - Chrome DevTools", "https://developers.google.com/web/tools/chrome-devtools"],
							["Google Devs - Inspect animations", "https://developers.google.com/web/tools/chrome-devtools/inspect-styles/animations"],
							["Investigate animation performance with DevTools", "https://calibreapp.com/blog/investigate-animation-performance-with-devtools/"],
						]
					},
				}
			]
		},
	]
}
