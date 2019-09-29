export const basicCollection = {
	name: "Basics",
	areas: [
		{
			name: "HTML",
			skills: [
				{
					name: "Syntax",
				},
				{
					name: "DOM",
					description: {
						text: "Learn how to work with the DOM. This means learning the different standard tags such as anchor, paragraph or div tags.",
						links: [
							"https://web.dev/dom"
						]
					},
				},
				{
					name: "SEO",
					skills: [
						{
							name: "Discoverable Content",
							description: "",
							img: "discoverable-content"
						}
					]
				},
				{
					name: "Forms",
				},
				{
					name: "Svg",
				},

			]
		},
		{
			name: "CSS",
			skills: [
				{
					name: "Syntax",
				},
				{
					name: "Selectors",
					skills: [
						{
							name: "Specificity",
						}
					]
				},
				{
					name: "Box Model",
				},
				{
					name: "Colors",
				},
				{
					name: "Layout",
					skills: [
						{
							name: "Flex",
						},
						{
							name: "Grid",
						}
					]
				},
				{
					name: "Transforms",
					skills: [
						{
							name: "Animations",
						}
					]
				},
				{
					name: "Responsive Design",
					skills: [
						{
							name: "Media Queries",
						},
						{
							name: "Relative Sizes"
						}
					]
				},
				{
					name: "CSS Variables"
				}
			]
		},
		{
			name: "Javascript",
			skills: [
				{
					name: "Syntax",
				},
				{
					name: "DOM Manipulation"
				},
				{
					name: "Objects",
					skills: [
						{
							name: "Prototype",
							skills: [
								{
									name: "Classes"
								}
							]
						}
					]
				},
				{
					name: "Events"
				},
				{
					name: "Regex"
				},
				{
					name: "Fetch",
					skills: [
						{
							name: "Async/await"
						}
					]
				},
				{
					name: "Web Animations"
				},
				{
					name: "Modules"
				},
				{
					name: "Intl"
				},
				{
					name: "Canvas"
				}
			]
		},
		{
			name: "The Browser",
			skills: [
				{
					name: "Browser Engines",
					skills: [
						{
							name: "Webkit"
						},
						{
							name: "Blink"
						},
						{
							name: "Gecko"
						}
					]
				},
				{
					name: "HTTP"
				},
				{
					name: "DNS"
				},
				{
					name: "Polyfills"
				},
				{
					name: "Debugging",
					skills: [
						{
							name: "Developer console"
						},
						{
							name: "Breakpoints"
						}
					]
				}
			]
		}
	]
}

export const webcomponentsCollection = {
	name: "Web Components",
	areas: [
		{
			skills: [
				{
					name: "Custom Elements"
				},
				{
					name: "Shadow DOM",
					skills: [
						{
							name: "Shadow Parts"
						},
						{
							name: "Slots"
						}
					]
				},
				{
					name: "HTML Templates"
				},
				{
					name: "Constructible Stylesheets"
				},
				{
					name: "lit-html"
				},
				{
					name: "Best practices"
				}
			]
		}
	]
}

export const accessibilityCollection = {
	name: "Accessibility",
	areas: [
		{
			skills: [
				{
					name: "Amazing forms"
				},
				{
					name: "UI States"
				},
				{
					name: "Focus"
				},
				{
					name: "Accessibility tree",
					skills: [
						{
							name: "Screenreaders"
						},
						{
							name: "ARIA"
						},
						{
							name: "Semantics"
						},
						{
							name: "Alt text"
						}
					]
				},
				{
					name: "A11y reviews"
				}
			]
		}
	]
}

export const pwaCollection = {
	name: "Progressive Webapps",
	areas: [
		{
			name: "API's",
			skills: [
				{
					name: "Storage"
				},
				{
					name: "Web Sockets"
				},
				{
					name: "History API"
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
					name: "Lazy Loading"
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
					name: "RAIL Model",
					skills: [
						{
							name: "requestAnimationFrame"
						},
						{
							name: "requestIdleCallback"
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
					name: "Web Workesr"
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
					name: "HTTPS"
				}
			]
		}
	]
}

export const architectureCollection = {
	name: "Architecture & paradigmes",
	areas: [
		{
			skills: [
				{
					name: "Functional programming",
					skills: [
						{
							name: "Recursion"
						}
					]
				},
				{
					name: "Object Oriented Programming",
					skills: [
						{
							name: "S.O.L.I.D"
						}
					]
				},
				{
					name: "BEM Pattern"
				},
				{
					name: "Design Patterns",
					skills: [
						{
							name: "Singleton"
						},
						{
							name: "Observer"
						},
						{
							name: "Prototype"
						},
						{
							name: "Bridge"
						},
						{
							name: "Proxy"
						},
						{
							name: "Chain of responsibility"
						},
						{
							name: "Constructor"
						}
					]
				},
				{
					name: "IFFE"
				},
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
				}

			]
		}
	]
}

export const buildtoolsCollection = {
	name: "Build tools",
	areas: [
		{
			skills: [
				{
					name: "Package Managers",
					skills: [
						{
							name: "NPM"
						},
						{
							name: "Yarn"
						}
					]
				},
				{
					name: "Module Bundlers",
					skills: [
						{
							name: "Rollup"
						},
						{
							name: "Webpack"
						},
						{
							name: "Parcel"
						}
					]
				},
				{
					name: "Linters and formatters",
					skills: [
						{
							name: "Prettier"
						},
						{
							name: "ESLint"
						}
					]
				},
				{
					name: "Task Runners",
					skills: [
						{
							name: "NPM Scripts"
						}
					]
				},
				{
					name: "CSS Pre-processors",
					skills: [
						{
							name: "SASS"
						}
					]
				},
				{
					name: "Typescript"
				}
			]
		}
	]
}

export const testingCollection = {
	name: "Testing",
	areas: [
		{
			skills: [
				{
					name: "Mocha"
				},
				{
					name: "Karma"
				},
				{
					name: "Cypress"
				}
			]
		}
	]
}

export const advancedCollection = {
	name: "Advanced",
	areas: [
		{
			skills: [
				{
					name: "Media",
					skills: [
						{
							name: "Capture images",
						},
						{
							name: "Capture video"
						},
						{
							name: "Record audio"
						},
						{
							name: "Media Recorder"
						}
					]
				},
				{
					name: "User location"
				},
				{
					name: "Device orientation & motion"
				},
				{
					name: "Fullscreen"
				},
				{
					name: "Web VR"
				},
				{
					name: "HTTPS 2"
				},
				{
					name: "Web USB"
				},
				{
					name: "Payment Request API"
				},
				{
					name: "Web Bluetooth"
				},
				{
					name: "Credentials Manager API"
				},
				{
					name: "Mutation Observer"
				},
				{
					name: "Intersection Observer"
				},
				{
					name: "Scrollsnapping"
				}
			]
		}
	]
}

export const collections = [
	basicCollection,
	webcomponentsCollection,
	accessibilityCollection,
	pwaCollection,
	architectureCollection,
	buildtoolsCollection,
	testingCollection,
	advancedCollection
]