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
							["Mozilla - Introduction to HTML", "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML"],
							["Mozilla - HTML Basics", "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"],
							["Codecademy - Learn HTML", "https://www.codecademy.com/learn/learn-html"],
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
							["web.dev - SEO audits", "https://web.dev/lighthouse-seo"]
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
									["Google Search - Structured Data", "https://developers.google.com/search/docs/guides/intro-structured-data"],
									["web.dev - Easily discoverable", "https://web.dev/discoverable"]
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
							["Mozilla - HTML forms", "https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms"],
							["Google Web - Forms", "https://developers.google.com/web/fundamentals/design-and-ux/input/forms/"],
							["w3schools - Forms", "https://www.w3schools.com/html/html_forms.asp"],
						]
					}
				},
				{
					name: "Svg",
					description: {
						text: "Learn how to work with SVG files to make graphics look crisp across all screen resolutions.",
						links: [
							["Mozilla - Adding vector graphics to the Web", "https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web"],
							["SVG on the web", "https://svgontheweb.com/"],
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
						text: "Learn the basic CSS syntax and get comfortable with CSS classes and basic concepts.",
						links: [
							["Mozilla - CSS Basics", "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics"],
							["w3schools - CSS Tutorial", "https://www.w3schools.com/css/default.asp"],
							["Supercharged - CSS Selectors", "https://www.youtube.com/watch?v=IKho_xDKaLw"],
							["Mozilla - CSS first steps", "https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps"],
							["Mozilla - CSS building blocks", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks"],
							["Mozilla - CSS values and units", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units"],
						]
					}
				},
				{
					name: "Selectors",
					description: {
						text: "Learn about CSS selectors and how to effeciently target DOM elements.",
						links: [
							["Mozilla - CSS selectors", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors"],
							["Mozilla - All selectors", "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors"],
							["CSS Tricks - Child and Sibling Selectors", "https://css-tricks.com/child-and-sibling-selectors/"],
							["CSS Tricks - All Selectors", "https://css-tricks.com/almanac/selectors/"],
						]
					},
					skills: [
						{
							name: "Specificity",
							description: {
								text: "Learn what specificity means and how to use it when writing CSS.",
								links: [
									["Mozilla - Specificity", "https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity"],
									["Mozilla - Cascade and inheritance", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance"],
									["dev.to - CSS Specificity", "https://dev.to/emmawedekind/css-specificity-1kca"],
									["Specificity Calculator", "https://specificity.keegan.st/"],
								]
							},
						},
						{
							name: "Pseudo Selectors",
							description: {
								text: "Learn how to use pseudo class selectors.",
								skills: [
									["Mozilla - Pseudo-classes", "https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes"],
									["CSS Tricks - Meet the Pseudo Class Selectors", "https://css-tricks.com/pseudo-class-selectors/"],
									["When do the :hover, :focus, and :active pseudo-classes apply?", "https://bitsofco.de/when-do-the-hover-focus-and-active-pseudo-classes-apply/"],
								]
							},
						}
					]
				},
				{
					name: "Box Model",
					description: {
						text: "Learn what the CSS box model means.",
						skills: [
							["Mozilla - Introduction to the CSS basic box model", "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model"],
							["Mozilla - The box model", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model"],
							["", ""],
							["", ""],
							["", ""],
						]
					},
				},
				{
					name: "Overflow",
					description: {
						text: "Learn about what happens when there is too much content to be contained comfortably inside a box and how to manage it.",
						links: [
							["Mozilla - Overflowing content", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Overflowing_content"],
						]
					},
				},
				{
					name: "Colors",
					description: {
						text: "Learn the different ways you can define colors in CSS.",
						skills: [
							["", ""],
							["", ""],
							["", ""],
							["", ""],
							["", ""],
						]
					},
				},
				{
					name: "Calc",
					description: {
						text: "Learn how to use the CSS calc function.",
						links: [
							["Mozilla - Calc", "https://developer.mozilla.org/en-US/docs/Web/CSS/calc"]
						]
					},
				},
				{
					name: "Layout",
					description: {
						text: "Learn the different layout types for web.",
						links: [
							["Chrome Dev - Basic Layout", "https://developers.google.com/training/certification/mobile-web-specialist/study-guide/basic-layout"]
						]
					},
					skills: [
						{
							name: "Flex",
							description: {
								text: "Learn how to create layouts using flexbox.",
								links: [
									["Mozilla - Flexbox", "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox"],
									["A Complete Guide to Flexbox", "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"],
									["Mozilla - Flexbox", "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox"],
									["Flexbox Froggy", "https://flexboxfroggy.com/"],
								]
							},
						},
						{
							name: "Grid",
							description: {
								text: "Learn how to create layouts using CSS Grid.",
								links: [
									["Mozilla - Grids", "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids"],
									["A Complete Guide to CSS Grid", "https://css-tricks.com/snippets/css/complete-guide-grid/"],
									["Mozilla - CSS Grid", "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout"],
									["CSS Grid Garden", "https://cssgridgarden.com/"],
									["Supercharged - CSS Grids", "https://www.youtube.com/watch?v=AqwPrR7hklE"]
								]
							},
						}
					]
				},
				{
					name: "Transforms",
					description: {
						text: "Learn the different ways to transform elements through CSS.",
						skills: [
							["", ""],
							["", ""],
							["", ""],
							["", ""],
							["", ""],
						]
					},
					skills: [
						{
							name: "Animations",
							description: {
								text: "Learn how to animate elements through CSS using keyframes.",
								skills: [
									["", ""],
									["", ""],
									["", ""],
									["", ""],
									["", ""],
								]
							},
						}
					]
				},
				{
					name: "Responsive Design",
					description: {
						text: "Learn how to make your website responsive so it works across different screen sizes.",
						links: [
							["Mozilla - Responsive design", "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design"],
							["Responsive Web Design Fundamentals by Google", "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"],
							["Google Dev - Responsive Design", "https://developers.google.com/web/fundamentals/design-and-ux/responsive"],
							["Google Dev - UX Patterns", "https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns"],
							["Google Dev - Responsive Content", "https://developers.google.com/web/fundamentals/design-and-ux/responsive/content"],
							["Codelabs - Responsive Design", "https://codelabs.developers.google.com/codelabs/pwa-responsive-design/index.html?index=..%2F..dev-pwa-training#0"],
						]
					},
					skills: [
						{
							name: "Media Queries",
							description: {
								text: "Learn how use media queries to build responsive layout.",
								skills: [
									["", ""],
									["", ""],
									["", ""],
									["", ""],
									["", ""],
								]
							},
						},
						{
							name: "Relative Sizes",
							description: {
								text: "Learn how to use relative sizes for values such as font sizes and spacing.",
								skills: [
									["Mozilla - Sizing items in CSS", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS"],
									["Mozilla - CSS values and units", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units"],
									["", ""],
									["", ""],
									["", ""],
								]
							},
						},
						{
							name: "Images",
							description: {
								text: "Learn how to make images responsive, always showing the best possible version for the screen size.",
								links: [
									["Google Devs - Responsive Images", "https://developers.google.com/web/fundamentals/design-and-ux/responsive/images"],
									["Mozilla - Responsive Images", "https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images"],
								]
							}
						}
					]
				},
				{
					name: "CSS Variables",
					description: {
						text: "Learn how to define and use CSS variables.",
						skills: [
							["", ""],
							["", ""],
							["", ""],
							["", ""],
							["", ""],
						]
					}
				},
				{
					name: "Best Practices",
					description: {
						text: "Learn the best practices of writing CSS.",
						links: [
							["Speckyboy - Good and bad CSS practices", "https://speckyboy.com/good-bad-css-practices/"],
							["Mozilla - Organizing your CSS", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Organizing"],
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
							["Mozilla - Javascript First Steps", "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps"],
							["Mozilla - Javascript Building Blocks", "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks"],
							["Mozilla - Javascript Basics", "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics"],
						]
					}
				},
				{
					name: "DOM Manipulation",
					description: {
						text: "Learn how to query HTML elements through Javascript and manipulate them.",
						links: [
							["Mozilla - Locating DOM elements using selectors", "https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors"],
							["Supercharged - querySelector", "https://www.youtube.com/watch?v=s0vg_H9hBuU"],
						]
					}
				},
				{
					name: "Objects",
					description: {
						text: "Learn how to create and use objects.",
						links: [
							["Mozilla - Introducing JavaScript objects", "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects"]
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
						text: "Learn how to dispatch and listen for events.",
						skills: [
							["Mozilla - Introduction to events", "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events"],
							["", ""],
							["", ""],
							["", ""],
							["", ""],
						]
					}
				},
				{
					name: "Regex",
					description: {
						text: "Learn how to use regex to extract information from strings.",
						skills: [
							["", ""],
							["", ""],
							["", ""],
							["", ""],
							["", ""],
						]
					}
				},
				{
					name: "Promises",
					description: {
						text: "Learn how to use promises and what asynchronous code means.",
						links: [
							["Google Devs - JavaScript Promises: an Introduction", "https://developers.google.com/web/fundamentals/primers/promises"]
						]
					},
					skills: [
						{
							name: "Callbacks",
							description: {
								text: "Learn how to use callbacks and why they are not always a good idea.",
								skills: [
									["", ""],
									["", ""],
									["", ""],
									["", ""],
									["", ""],
								]
							}
						},
						{
							name: "Async/await",
							description: {
								text: "Learn how to use the async and await keywords to make it easier to write asynchronous code.",
								links: [
									["Google Devs - Async functions", "https://developers.google.com/web/fundamentals/primers/async-functions"]
								]
							}
						},
						{
							name: "Fetch",
							description: {
								text: "Learn how to use the fetch API to fetch data.",
								links: [
									["Google Devs - Introduction to fetch", "https://developers.google.com/web/updates/2015/03/introduction-to-fetch"],
									["Google Devs - Networking", "https://developers.google.com/training/certification/mobile-web-specialist/study-guide/networking"],
									["Freecodecamp - Fetch practical guide", "https://www.freecodecamp.org/news/a-practical-es6-guide-on-how-to-perform-http-requests-using-the-fetch-api-594c3d91a547/"],
									["Mozilla - CORS", "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"],
									["Alligator - Fetch API", "https://alligator.io/js/fetch-api/"],
									["Supercharged - Fetch", "https://www.youtube.com/watch?v=GiI77ya60yk"],
									["Codelabs - Fetch ", "https://codelabs.developers.google.com/codelabs/pwa-fetch/index.html?index=..%2F..dev-pwa-training#0"]
								]
							}
						},
					]
				},
				{
					name: "Web Animations",
					description: {
						text: "Learn how to use web animations to animate elements in the DOM.",
						links: [
							["Google Devs - Animations", "https://developers.google.com/web/fundamentals/design-and-ux/animations"],
							["Mozilla - Using The Web Animations API", "https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API"],
						]
					}
				},
				{
					name: "Modules",
					description: {
						text: "Learn how to modularize your code into ES6 modules using the export and import keywords.",
						links: [
							["Mozilla - Export", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export"],
							["Mozilla - Import", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import"],
							["V8 - Modules", "https://v8.dev/features/modules"]
						]
					}
				},
				{
					name: "Intl",
					description: {
						text: "Learn how to localize your website using the Intl API.",
						skills: [
							["", ""],
							["", ""],
							["", ""],
							["", ""],
							["", ""],
						]
					}
				},
				{
					name: "Canvas",
					description: {
						text: "Learn how to paint graphics onto a canvas.",
						skills: [
							["", ""],
							["", ""],
							["", ""],
							["", ""],
							["", ""],
						]
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
					name: "Standardization",
					description: {
						text: "Learn why web standards are important and how new specifications are standardised.",
						links: [
							["Wikipedia - Web Standards", "https://en.wikipedia.org/wiki/Web_standards"],
							["Designing to Web Standards", "https://www.soswebdesign.com/gallery/webstandards.cfm"],
							["What Are Web Standards?", "https://robertnyman.com/2007/05/21/what-are-web-standards-a-comprehensive-explanation-of-what-is-comprised-in-the-term/"],
						]
					},
					skills: [
						{
							name: "W3C",
							description: {
								text: "Learn what W3C are doing and how they are moving the web forward.",
								links: [
									["W3C - About", "https://www.w3.org/standards/about.html"],
									["W3C - Standards", "https://www.w3.org/standards/"],
									["W3C - Process", "http://webdiy.org/w3c/"],
									["Web Standards Guide", "https://www.smashingmagazine.com/2019/01/web-standards-guide/"]
								]
							}
						},
						{
							name: "TC39",
							description: {
								text: "Learn what TC39 are doing and how they are moving the web forward.",
								links: [
									["The TC39 process for ECMAScript features", "https://2ality.com/2015/11/tc39-process.html"],
									["Github - TC39", "https://github.com/tc39"],
									["Ecma International - Programme of work", "https://www.ecma-international.org/memento/tc39.htm"],
									["Wikipedia - Ecma International", "https://en.wikipedia.org/wiki/Ecma_International"],
								]
							},
						},
					]
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
						text: "Learn how data is distributed through the HTTP protocol.",
						skills: [
							["", ""],
							["", ""],
							["", ""],
							["", ""],
							["", ""],
						]
					}
				},
				{
					name: "The Internet",
					description: {
						text: "Learn the basics of how the internet works.",
						skills: [
							["Mozilla - How does the Internet work?", "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work"],
							["Youtube - How the Internet Works in 5 Minutes", "https://www.youtube.com/watch?v=7_LPdttKXPc"],
							["", ""],
							["", ""],
							["", ""],
						]
					}
				},
				{
					name: "Polyfills",
					description: {
						text: "Learn how it is possible to use polyfills to increase the browser support for your website.",
						skills: [
							["", ""],
							["", ""],
							["", ""],
							["", ""],
							["", ""],
						]
					}
				},
				{
					name: "Debugging",
					description: {
						text: "Learn about the basics concepts of debugging.",
						links: [
							["Google Devs - Inspect and Edit Pages and Styles", "https://developers.google.com/web/tools/chrome-devtools/inspect-styles/"],
							["Mozilla - Cross browser testing", "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing"],
						]
					},
					skills: [
						{
							name: "Developer console",
							description: {
								text: "Learn how to use the developer console of your favorite browser.",
								skills: [
									["Mozilla - Debugging CSS", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS"],
									["Mozilla - Debugging HTML", "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML"],
									["", ""],
									["", ""],
									["", ""],
									["", ""],
									["", ""],
								]
							},
							skills: [
								{
									name: "Console API",
									description: {
										text: "Learn how to use the console API.",
										links: [
											["Mozilla - Console", "https://developer.mozilla.org/en-US/docs/Web/API/Console"]
										]
									}
								}
							]
						},
						{
							name: "Breakpoints",
							description: {
								text: "Learn how to add breakpoints to your code.",
								skills: [
									["", ""],
									["", ""],
									["", ""],
									["", ""],
									["", ""],
								]
							}
						}
					]
				}
			]
		}
	]
}