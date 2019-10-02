export const basicCollection = {
	name: "Basics",
	areas: [
		{
			name: "HTML",
			skills: [
				{
					name: "Syntax",
					description: {
						text: "Learn the basic HTML syntax and get a feeling for how to structure a HTML document.",
						links: [
							["Mozilla - HTML Basics", "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"],
							["Codecademy - Learn HTML", "https://www.codecademy.com/learn/learn-html"]
						]
					}
				},
				{
					name: "DOM",
					description: {
						text: "Learn how to work with the DOM. This means learning the basic tags, and learning how to work with attributes. You need to get an understanding of how the HTML structures are represented by the browser.",
						links: [
							["Freecodecamp - What's the DOM", "https://www.freecodecamp.org/news/whats-the-document-object-model-and-why-you-should-know-how-to-use-it-1a2d0bc5429d/"],
							["Introduction to the DOM", "https://learn.co/lessons/introduction-to-the-dom"],
							["Mozilla - DOM Introduction", "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction"],
							["w3schools - HTML Elements", "https://www.w3schools.com/tags/ref_byfunc.asp"]
						]
					},
					skills: [
						{
							name: "Basic Tags",
							description: {
								text: "Get familiar with the basic HTML tags",
								links: [
									["Tutorialspoint - Basic HTML tags", "https://www.tutorialspoint.com/html/html_basic_tags.htm"],
									["Elated - First 10 HTML tags", "https://www.elated.com/first-10-html-tags/"],
									["w3schools - HTML tags", "https://www.w3schools.com/tags/ref_byfunc.asp"]
								]
							}
						}
					]
				},
				{
					name: "SEO",
					description: {
						text: "Learn how to make your content search-friendly.",
						links: [
							["web.dev - Discoverable", "https://web.dev/discoverable"],
							["Google Search - Get Started", "https://developers.google.com/search/docs/guides/get-started"],
							["Google Search - SEO basics", "https://developers.google.com/search/docs/guides/javascript-seo-basics"],
						]
					},
					skills: [
						{
							name: "Discoverable Content",
							description: {
								text: "Learn how to structure your HTML in a way that provides a rich experience when sharing it online.",
								links: [
									["Google Web - Social Discovery", "https://developers.google.com/web/fundamentals/discovery/social-discovery"],
									["Google Search - Search Features", "https://developers.google.com/search/docs/guides/search-features"],
									["Google Search - Structured Data", "https://developers.google.com/search/docs/guides/intro-structured-data"]
								]
							}
						}
					]
				},
				{
					name: "Forms",
					description: {
						text: "Learn how to design efficient forms, validating them effectively and keeping the user informed along the way.",
						links: [
							["Google Web - Forms", "https://developers.google.com/web/fundamentals/design-and-ux/input/forms/"],
							["w3schools - Forms", "https://www.w3schools.com/html/html_forms.asp"]
						]
					}
				},
				{
					name: "Svg",
					description: {
						text: "Learn how to work with SVG files to make graphics look crisp across all screen resolutions.",
						links: [
							["SVG on the web", "https://svgontheweb.com/"]
						]
					}
				},
				{
					name: "Best Practices",
					description: {
						text: "Learn the best practices of writing HTML.",
						links: [
							["w3schools - HTML Coding Conventions", "https://www.w3schools.com/html/html5_syntax.asp"]
						]
					}
				}
			]
		},
		{
			name: "CSS",
			skills: [
				{
					name: "Syntax",
					description: {
						text: "Learn the basic CSS syntax and get comfortable with CSS classes and selectors.",
						links: [
							["Mozilla - CSS Basics", "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics"],
							["w3schools - CSS Tutorial", "https://www.w3schools.com/css/default.asp"]
						]
					}
				},
				{
					name: "Selectors",
					description: {
						text: "Learn the more advanced CSS selectors."
					},
					skills: [
						{
							name: "Specificity",
							description: {
								text: "Learn what specificity means and how to use it when writing CSS."
							},
						},
						{
							name: "Pseudo Selectors",
							description: {
								text: "Learn how to use the :before and :after pseudo selectors."
							},
						}
					]
				},
				{
					name: "Box Model",
					description: {
						text: "Learn what the CSS box model means."
					},
				},
				{
					name: "Colors",
					description: {
						text: "Learn the different ways you can define colors in CSS."
					},
				},
				{
					name: "Calc",
					description: {
						text: "Learn how to use the CSS calc function."
					},
				},
				{
					name: "Layout",
					description: {
						text: "Learn the different layout types for web."
					},
					skills: [
						{
							name: "Flex",
							description: {
								text: "Learn how to create layouts using flexbox.",
								links: [
									["A Complete Guide to Flexbox", "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"],
									["Mozilla - Flexbox", "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox"],
									["Flexbox Froggy", "https://flexboxfroggy.com/"]
								]
							},
						},
						{
							name: "Grid",
							description: {
								text: "Learn how to create layouts using CSS Grid.",
								links: [
									["A Complete Guide to CSS Grid", "https://css-tricks.com/snippets/css/complete-guide-grid/"],
									["Mozilla - CSS Grid", "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout"],
									["CSS Grid Garden", "https://cssgridgarden.com/"]
								]
							},
						}
					]
				},
				{
					name: "Transforms",
					description: {
						text: "Learn the different ways to transform elements through CSS."
					},
					skills: [
						{
							name: "Animations",
							description: {
								text: "Learn how to animate elements through CSS using keyframes."
							},
						}
					]
				},
				{
					name: "Responsive Design",
					description: {
						text: "Learn how to make your website responsive so it works across different screen sizes.",
						links: [
							"https://developers.google.com/web/fundamentals/design-and-ux/responsive",
							"https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns",
							"https://developers.google.com/web/fundamentals/design-and-ux/responsive/content"
						]
					},
					skills: [
						{
							name: "Media Queries",
							description: {
								text: "Learn how use media queries to build responsive layout.",
							},
						},
						{
							name: "Relative Sizes",
							description: {
								text: "Learn how to use relative sizes for values such as font sizes and spacing."
							},
						},
						{
							name: "Images",
							description: {
								text: "Learn how to make images responsive, always showing the best possible version for the screen size.",
								links: [
									"https://developers.google.com/web/fundamentals/design-and-ux/responsive/images"
								]
							}
						}
					]
				},
				{
					name: "CSS Variables",
					description: {
						text: "Learn how to define and use CSS variables."
					}
				},
				{
					name: "Best Practices",
					description: {
						text: "Learn the best practices of writing CSS.",
						links: [
							["Speckyboy - Good and bad CSS practices", "https://speckyboy.com/good-bad-css-practices/"]
						]
					}
				}
			]
		},
		{
			name: "Javascript",
			skills: [
				{
					name: "Syntax",
					description: {
						text: "Learn the basic Javascript syntax and get comfortable with the basic API's, data types and how to create variables.",
						links: [
							["Mozilla - Javascript Basics", "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics"]
						]
					}
				},
				{
					name: "DOM Manipulation",
					description: {
						text: "Learn how to query HTML elements through Javascript and manipulate them."
					}
				},
				{
					name: "Objects",
					description: {
						text: "Learn how to create and use objects.",
						links: [
							["Mozilla - Object basics", "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics"]
						]
					},
					skills: [
						{
							name: "Prototype",
							description: {
								text: "Learn how to extend objects and functions through its prototype.",
								links: [
									["The prototype chain", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain"]
								]
							},
							skills: [
								{
									name: "Classes",
									description: {
										text: "Learn how to define and use classes. Get somewhat comfortable with some of the object oriented concepts such as inheritence and encapsulation.",
										links: [
											["Mozilla - Classes", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes"],
											["Medium - ES6 Classes", "https://medium.com/@luke_smaki/javascript-es6-classes-8a34b0a6720a"],
											["Mozilla - Inheritance", "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance"],
											["Mozilla - Object Oriented Programming", "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS"]
										]
									}
								}
							]
						}
					]
				},
				{
					name: "Events",
					description: {
						text: "Learn how to dispatch and listen for events."
					}
				},
				{
					name: "Regex",
					description: {
						text: "Learn how to use regex to extract information from strings."
					}
				},
				{
					name: "Promises",
					description: {
						text: "Learn how to use promises and what asynchronous code means."
					},
					skills: [
						{
							name: "Callbacks",
							description: {
								text: "Learn how to use callbacks and why they are not always a good idea."
							}
						},
						{
							name: "Async/await",
							description: {
								text: "Learn how to use the async and await keywords to make it easier to write asynchronous code."
							}
						},
						{
							name: "Fetch",
							description: {
								text: "Learn how to use the fetch API to fetch data."
							}
						},
					]
				},
				{
					name: "Web Animations",
					description: {
						text: "Learn how to use web animations to animate elements in the DOM.",
						links: [
							["Mozilla - Using The Web Animations API", "https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API"],
						]
					}
				},
				{
					name: "Modules",
					description: {
						text: "Learn how to modularize your code into ES6 modules using the export and import keywords.",
						links: [
							["Mozilla - Export", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export"]
							["Mozilla - Import", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import"]
						]
					}
				},
				{
					name: "Intl",
					description: {
						text: "Learn how to localize your website using the Intl API."
					}
				},
				{
					name: "Canvas",
					description: {
						text: "Learn how to paint graphics onto a canvas."
					}
				},
				{
					name: "Best Practices",
					description: {
						text: "Learn the best practices of writing Javascript.",
						links: [
							["w3schools - JS Best Practices", "https://www.w3schools.com/js/js_best_practices.asp"],
							["Airbnb - JavaScript Style Guide", "https://github.com/airbnb/javascript"]
						]
					}
				}
			]
		},
		{
			name: "The Browser",
			skills: [
				{
					name: "W3C",
					description: {
						text: "Learn what W3C are doing, why web standards are important and how new specifications are standardised through a process.",
						links: [
							["W3C - About", "https://www.w3.org/standards/about.html"],
							["W3C - Standards", "https://www.w3.org/standards/"],
							["W3C - Process", "http://webdiy.org/w3c/"],
							["Web Standards Guide", "https://www.smashingmagazine.com/2019/01/web-standards-guide/"]
						]
					}
				},
				{
					name: "Browser Engines",
					description: {
						text: "Learn what a browser engine is and get an overview of the browser landscape and market share.",
						links: [
								["Medium - Browser Engines", "https://medium.com/@jonbiro/browser-engines-chromium-v8-blink-gecko-webkit-98d6b0490968"],
								["Wikipedia - Comparison", "https://en.wikipedia.org/wiki/Comparison_of_browser_engines"]
						]
					},
					skills: [
						{
							name: "Webkit",
							description: {
								text: "Learn about the Webkit browser engine.",
								links: [
									["Webkit", "https://webkit.org/"]
								]
							}
						},
						{
							name: "Blink",
							description: {
								text: "Learn about the Blink browser engine.",
								links: [
									["Blink", "https://en.wikipedia.org/wiki/Blink_(browser_engine)"],
								]
							}
						},
						{
							name: "Gecko",
							description: {
								text: "Learn about the Gecko browser engine.",
								links: [
									["Gecko", "https://en.wikipedia.org/wiki/Gecko_(software)"]
								]
							}
						},
						{
							name: "Servo",
							description: {
								text: "Learn about the Servo browser engine.",
								links: [
									["Servo", "https://research.mozilla.org/servo-engines/"]
								]
							}
						},
					]
				},
				{
					name: "HTTP",
					description: {
						text: "Learn how data is distributed through the HTTP protocol."
					}
				},
				{
					name: "DNS",
					description: {
						text: "Learn how a DNS translates domain names to IP addresses so the browser can load internet resources."
					}
				},
				{
					name: "Polyfills",
					description: {
						text: "Learn how it is possible to use polyfills to increase the browser support for your website."
					}
				},
				{
					name: "Debugging",
					description: {
						text: "Learn about the basics concepts of debugging."
					},
					skills: [
						{
							name: "Developer console",
							description: {
								text: "Learn how to use the developer console of your favorite browser."
							}
						},
						{
							name: "Breakpoints",
							description: {
								text: "Learn how to add breakpoints to your code."
							}
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
					name: "Best practices"
				},
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
					name: "BEM Pattern"
				},

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
					name: "Transpilers",
					description: {
						text: "",
						links: [
							["Scotch - Javascript Transpilers", "https://scotch.io/tutorials/javascript-transpilers-what-they-are-why-we-need-them"]
						]
					},
					skills: [
						{
							name: "Babel",
							description: {
								text: "",
								links: [
									["Babel", "https://babeljs.io/"]
								]
							}
						}
					]
				},
				{
					name: "CSS Pre-processors",
					description: {
						text: "",

					},
					skills: [
						{
							name: "SASS",
							description: {
								text: "",
								links: [
									["SASS", "https://sass-lang.com/"]
								]
							}
						},
						{
							name: "PostCSS",
							description: {
								text: "",
								links: [
									["PostCSS", "https://postcss.org/"]
								]
							}
						}
					]
				},
				{
					name: "Typescript"
				},
				{
					name: "Node.js",
					description: {
						text: "",
						links: [
							["Node.js", "https://nodejs.org"],
							["Introduction to Node.js", "https://nodejs.dev/"],
							["w3schools - Node.js tutorial", "https://www.w3schools.com/nodejs/"]
						]
					}
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
					name: "Testing Methodologies",
					skills: [
						{
							name: "Unit Testing"
						},
						{
							name: "Integration Testing"
						},
						{
							name: "Performance Testing"
						},
						{
							name: "Usability Testing"
						},
						{
							name: "White Box Testing"
						},
						{
							name: "Black Box Testing"
						},
						{
							name: "Automated Testing"
						},
						{
							name: "Manual Testing"
						},
					]
				},
				{
					name: "Continuous integration"
				},
				{
					name: "A/B Testing"
				},
				{
					name: "Test Runners",
					description: {
						text: "",
						links: [
							["Udacity - Javascript Testing", "https://www.udacity.com/course/javascript-testing--ud549"]
						]
					},
					skills: [
						{
							name: "Mocha",
							description: {
								text: "",
								links: [
									["Mocha", "https://mochajs.org/"]
								]
							}
						},
						{
							name: "Karma",
							description: {
								text: "",
								links: [
									["Karma", "https://karma-runner.github.io/latest/index.html"]
								]
							}
						},
						{
							name: "Jasmine",
							description: {
								text: "",
								links: [
									["Jasmine", "https://jasmine.github.io/"]
								]
							}
						},
						{
							name: "Cypress",
							description: {
								text: "",
								links: [
									["Cypress", "https://www.cypress.io/"]
								]
							}
						}
					]
				},
				{
					name: "Best Practices",
					description: {
						text: "",
						links: [
							["Javascript Testing Best Practices", "https://github.com/goldbergyoni/javascript-testing-best-practices"]
						]
					}
				}
			]
		}
	]
}

export const frameworksAndLibrariesCollection = {
	name: "Frameworks & Libraries",
	areas: [
		{
			skills: [
				{
					name: "lit-element"
				},
				{
					name: "Vue"
				},
				{
					name: "React"
				},
				{
					name: "Angular"
				},
				{
					name: "Stencil"
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
					name: "Streams",
					skills: [
						{
							name: "Media Devices",
						},
						{
							name: "Media Recorder"
						},
						{
							name: "Web RTC"
						}
					]
				},
				{
					name: "Speech Synthesis"
				},
				{
					name: "Web Sockets"
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
					name: "Payment Request API"
				},
				{
					name: "Web Bluetooth"
				},
				{
					name: "Web USB"
				},
				{
					name: "Credentials Manager API"
				},
				{
					name: "Observers",
					skills: [
						{
							name: "Mutation Observer"
						},
						{
							name: "Intersection Observer"
						},
						{
							name: "Resize Observer"
						},
					]
				},
				{
					name: "Scrollsnapping"
				},
				{
					name: "Web Assembly"
				},
				{
					name: "Beacon",
					description: {
						text: "",
						links: [
							["Mozilla - sendBeacon", "https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon"]
						]
					}
				},
				{
					name: "Clipboard",
					description: {
						text: "",
						links: [
							["Mozilla - Clipboard", "https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard"]
						]
					}
				},
				{
					name: "Share",
					description: {
						text: "",
						links: [
							["Mozilla - Share", "https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share"]
						]
					}
				}
			]
		}
	]
}

export const teamCollaborationCollection = {
	name: "Team Collaboration",
	areas: [
		{
			name: "Version Control",
			skills: [
				{
					name: "Git",
					description: {
						text: "",
						links: [
							["Learn Git Branching", "https://learngitbranching.js.org/"]
						]
					},
					skills: [
						{
							name: "Github"
						},
						{
							name: "Bitbucket"
						}
					]
				}
			]
		},
		{
			name: "Management",
			skills: [
				{
					name: "Agile Development",
					skills: [
						{
							name: "Scrum"
						},
						{
							name: "Kanban"
						},
					]
				},
				{
					name: "Waterfall Development"
				}
			]
		},
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
	frameworksAndLibrariesCollection,
	advancedCollection,
	teamCollaborationCollection
]