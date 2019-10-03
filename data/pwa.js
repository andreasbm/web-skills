
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
							["Mozilla - Storage API", "https://developer.mozilla.org/en-US/docs/Web/API/Storage_API"]
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
					skills: [
						{
							name: "Offline first"
						},
						{
							name: "Push notifications"
						},
						{
							name: "Add to homescreen"
						}
					]
				},
				{
					name: "Web App manifest"
				}
			]
		},
		{
			name: "Loading Performance",
			skills: [
				{
					name: "App shell"
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