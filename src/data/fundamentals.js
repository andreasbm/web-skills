export const fundamentalsCollection = {
	name: "Fundamentals",
	areas: [
		{
			name: "HTML",
			skills: [
				{
					name: "Syntax",
					description: {
						text: "Learn the basics of HTML and get comfortable with it's syntax and main concepts.",
						links: [
							["MDN - HTML Basics", "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"],
							["MDN - Introduction to HTML", "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML"],
							["Codecademy - Learn HTML", "https://www.codecademy.com/learn/learn-html"],
						]
					},
					skills: [
						{
							name: "Basic Tags",
							description: {
								text: "Get familiar with the basic HTML tags",
								links: [
									["MDN - HTML elements reference", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element"],
									["Tutorialspoint - Basic HTML tags", "https://www.tutorialspoint.com/html/html_basic_tags.htm"],
									["Elated - First 10 HTML tags", "https://www.elated.com/first-10-html-tags/"],
									["W3Schools - HTML tags", "https://www.w3schools.com/tags/ref_byfunc.asp"]
								]
							},
						},
					]
				},
				{
					name: "Forms",
					description: {
						text: "Learn how to design efficient forms, validating them effectively and keeping the user informed along the way.",
						links: [
							["MDN - HTML forms", "https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms"],
							["Google Web - Forms", "https://developers.google.com/web/fundamentals/design-and-ux/input/forms/"],
							["W3Schools - Forms", "https://www.w3schools.com/html/html_forms.asp"],
						]
					}
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
					name: "Svg",
					description: {
						text: "Learn how to work with SVG files to make graphics look crisp across all screen resolutions.",
						links: [
							["MDN - Adding vector graphics to the Web", "https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web"],
							["SVG on the web", "https://svgontheweb.com/"],
						]
					}
				},
				{
					name: "Best Practices",
					description: {
						text: "Learn the best practices of writing HTML.",
						links: [
							["MDN - HTML guidelines", "https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines/Code_guidelines/HTML"],
							["W3Schools - HTML Coding Conventions", "https://www.w3schools.com/html/html5_syntax.asp"]
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
						text: "Learn the basics of CSS and get comfortable with it's syntax and main concepts.",
						links: [
							["MDN - CSS Basics", "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics"],
							["W3Schools - CSS Tutorial", "https://www.w3schools.com/css/default.asp"],
							["Supercharged - CSS Selectors", "https://www.youtube.com/watch?v=IKho_xDKaLw"],
							["MDN - CSS first steps", "https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps"],
							["MDN - CSS building blocks", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks"],
							["MDN - CSS values and units", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units"],
							["MDN - CSS Syntax", "https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax"],
						]
					}
				},
				{
					name: "Selectors",
					description: {
						text: "Learn about CSS selectors and how to effeciently target DOM elements.",
						links: [
							["MDN - CSS selectors", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors"],
							["MDN - All selectors", "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors"],
							["CSS Tricks - Child and Sibling Selectors", "https://css-tricks.com/child-and-sibling-selectors/"],
							["CSS Tricks - All Selectors", "https://css-tricks.com/almanac/selectors/"],
							["W3Schools - CSS Combinators", "https://www.w3schools.com/css/css_combinators.asp"]
						]
					},
					skills: [
						{
							name: "Specificity",
							description: {
								text: "Learn what specificity means and how to use it when writing CSS.",
								links: [
									["MDN - Specificity", "https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity"],
									["MDN - Cascade and inheritance", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance"],
									["dev.to - CSS Specificity", "https://dev.to/emmawedekind/css-specificity-1kca"],
									["Specificity Calculator", "https://specificity.keegan.st/"],
									["W3Schools - CSS Specificity", "https://www.w3schools.com/css/css_specificity.asp"]
								]
							},
						},
						{
							name: "Pseudo Selectors",
							description: {
								text: "Learn how to use pseudo selectors.",
								links: [
									["MDN - Pseudo-classes", "https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes"],
									["CSS Tricks - Meet the Pseudo Class Selectors", "https://css-tricks.com/pseudo-class-selectors/"],
									["When do the :hover, :focus, and :active pseudo-classes apply?", "https://bitsofco.de/when-do-the-hover-focus-and-active-pseudo-classes-apply/"],
									["W3Schools - CSS Pseudo-elements", "https://www.w3schools.com/css/css_pseudo_elements.asp"],
									["W3Schools - CSS Pseudo-classes", "https://www.w3schools.com/css/css_pseudo_classes.asp"],
								]
							},
						},
					]
				},
				{
					name: "Box Model",
					description: {
						text: "Learn what the CSS box model means.",
						links: [
							["MDN - Introduction to the CSS basic box model", "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model"],
							["MDN - The box model", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model"],
							["CSS Tricks - Inheriting box-sizing", "https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/"],
						]
					},
					skills: [
						{
							name: "Margin Collapsing",
							description: {
								text: "Learn about margin collapsing.",
								links: [
									["MDN - Mastering margin collapsing", "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing"],
									["Margin Collapse in CSS: What, Why, and How", "https://medium.com/@joseph0crick/margin-collapse-in-css-what-why-and-how-328c10e37ca0"],
									["CSS Tricks - What You Should Know About Collapsing Margins", "https://css-tricks.com/what-you-should-know-about-collapsing-margins/"],
									["What's the Deal with Collapsible Margins?", "https://bitsofco.de/collapsible-margins/"],
									["What’s the Deal with Margin Collapse?", "https://jonathan-harrell.com/whats-the-deal-with-margin-collapse/"],
								]
							},
						}
					]
				},
				/*{
					name: "Overflow",
					description: {
						text: "Learn about what happens when there is too much content to be contained comfortably inside a box and how to manage it.",
						links: [
							["MDN - Overflowing content", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Overflowing_content"],
							["W3Schools - CSS Layout: Overflow", "https://www.w3schools.com/css/css_overflow.asp"],
							["Overflow In CSS", "https://ishadeed.com/article/overflow-css/"]
						]
					},
				},*/
				{
					name: "Colors",
					description: {
						text: "Learn the different ways you can define colors in CSS.",
						links: [
							["MDN - Color", "https://developer.mozilla.org/en-US/docs/Web/CSS/color"],
							["MDN - <color>", "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value"],
							["W3Schools - CSS Colors", "https://www.w3schools.com/css/css_colors.asp"],
						]
					},
				},
				{
					name: "Calc",
					description: {
						text: "Learn how to use the CSS calc function.",
						links: [
							["MDN - Calc", "https://developer.mozilla.org/en-US/docs/Web/CSS/calc"],
							["CSS Tricks - A Couple of Use Cases for Calc()", "https://css-tricks.com/a-couple-of-use-cases-for-calc/"],
						]
					},
				},
				{
					name: "Layout",
					description: {
						text: "Learn the different layout types for web.",
						links: [
							["Chrome Dev - Basic Layout", "https://developers.google.com/training/certification/mobile-web-specialist/study-guide/basic-layout"],
							["W3Schools - CSS Website Layout", "https://www.w3schools.com/css/css_website_layout.asp"],
							["MDN - Document and website structure", "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure"],
							["MDN - CSS layout", "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout"],
						]
					},
					skills: [
						{
							name: "Flex",
							description: {
								text: "Learn how to create layouts using flexbox.",
								links: [
									["MDN - Flexbox", "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox"],
									["A Complete Guide to Flexbox", "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"],
									["MDN - Flexbox", "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox"],
									["Flexbox Froggy", "https://flexboxfroggy.com/"],
									["Flexbox Defense", "http://flexboxdefense.com"],
								]
							},
						},
						{
							name: "Grid",
							description: {
								text: "Learn how to create layouts using CSS Grid.",
								links: [
									["MDN - Grids", "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids"],
									["A Complete Guide to CSS Grid", "https://css-tricks.com/snippets/css/complete-guide-grid/"],
									["MDN - CSS Grid", "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout"],
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
						links: [
							["MDN - transform", "https://developer.mozilla.org/en-US/docs/Web/CSS/transform"],
							["CSS Tricks - Transform", "https://css-tricks.com/almanac/properties/t/transform/"],
						]
					},
					skills: [
						{
							name: "Animations",
							description: {
								text: "Learn how to animate elements through CSS using keyframes.",
								links: [
									["MDN - Using CSS animations", "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations"],
									["CSS Tricks - Animation", "https://css-tricks.com/almanac/properties/a/animation/"],
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
							["MDN - Responsive design", "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design"],
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
								links: [
									["CSS Tricks - CSS Media Queries & Using Available Space", "https://css-tricks.com/css-media-queries/"],
									["MDN - Using media queries", "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries"],
									["MDN - Using Media Queries for Accessibility", "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_Media_Queries_for_Accessibility"],
								]
							},
						},
						{
							name: "Relative Units",
							description: {
								text: "Learn how to use relative units for properties such as font sizes and spacing.",
								links: [
									["MDN - Sizing items in CSS", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS"],
									["MDN - CSS values and units", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units"],
									["The CSS Workshop - Relative Units", "https://thecssworkshop.com/lessons/relative-units"],
									["CSS Tricks - Fun with Viewport Units", "https://css-tricks.com/fun-viewport-units/"],
									["dev.to - 15 CSS Relative units", "https://dev.to/bytegasm/15-css-relative-units-how-many-do-you-know-em-rem-ex-cap-ch-ic-6m"],
								]
							},
						},
						{
							name: "Images",
							description: {
								text: "Learn how to make images responsive, always showing the best possible version for the screen size.",
								links: [
									["Google Devs - Responsive Images", "https://developers.google.com/web/fundamentals/design-and-ux/responsive/images"],
									["MDN - Responsive Images", "https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images"],
								]
							}
						}
					]
				},
				{
					name: "CSS Variables",
					description: {
						text: "Learn how to define and use CSS variables.",
						links: [
							["MDN - Using CSS custom properties", "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"],
							["Google Devs - CSS Variables: Why Should You Care?", "https://developers.google.com/web/updates/2016/02/css-variables-why-should-you-care"],
							["dev.to - CSS Quickies: CSS Variables", "https://dev.to/lampewebdev/css-quickies-css-variables-or-how-you-create-a-white-dark-theme-easily-1i0i"],
							["CSS Variables explained with 5 examples", "https://codeburst.io/css-variables-explained-with-5-examples-84adaffaa5bd"],
						]
					}
				},
				{
					name: "Best Practices",
					description: {
						text: "Learn the best practices of writing CSS.",
						links: [
							["MDN - CSS guidelines", "https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines/Code_guidelines/CSS"],
							["MDN - Organizing your CSS", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Organizing"],
							["Speckyboy - Good and bad CSS practices", "https://speckyboy.com/good-bad-css-practices/"],
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
						text: "Learn the basics of Javascript and get comfortable with it's syntax and main concepts.",
						links: [
							["MDN - Javascript First Steps", "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps"],
							["MDN - Javascript Basics", "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics"],
							["MDN - Javascript Building Blocks", "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks"],
							/* ["You might not need jQuery", "http://youmightnotneedjquery.com/"],*/
						]
					},
					skills: [
						{
							name: "Spread",
							description: {
								text: "Learn how the spread syntax can help you when working with arrays.",
								links: [
									["MDN - Spread syntax", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax"],
									["Freecodecamp - An introduction to Spread syntax", "https://www.freecodecamp.org/news/an-introduction-to-spread-syntax-in-javascript-fba39595922c/"],
									["Object rest and spread properties", "https://v8.dev/features/object-rest-spread"],
								]
							},
						},
						{
							name: "Destructuring",
							description: {
								text: "Learn how destructuring can help you when working with objects.",
								links: [
									["MDN - Destructuring assignment", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"],
									["MDN - ES6 In Depth: Destructuring", "https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/"],
									["javascript.info - Destructuring assignment", "https://javascript.info/destructuring-assignment"],
								]
							},
						}
					]
				},
				{
					name: "DOM",
					description: {
						text: "Learn how the HTML is represented as objects that comprise the structure and content of a document.",
						links: [
							["MDN - DOM Introduction", "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction"],
							["Freecodecamp - What's the DOM", "https://www.freecodecamp.org/news/whats-the-document-object-model-and-why-you-should-know-how-to-use-it-1a2d0bc5429d/"],
							["Introduction to the DOM", "https://learn.co/lessons/introduction-to-the-dom"],
							["htmldom.dev", "https://htmldom.dev/"],
						]
					},
					skills: [
						{
							name: "DOM Manipulation",
							description: {
								text: "Learn how to query HTML elements through Javascript and manipulate them.",
								links: [
									["MDN - Locating DOM elements using selectors", "https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors"],
									["Supercharged - querySelector", "https://www.youtube.com/watch?v=s0vg_H9hBuU"],
								]
							}
						},
					]
				},
				{
					name: "Events",
					description: {
						text: "Learn how to dispatch and listen for events.",
						links: [
							["MDN - Introduction to events", "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events"],
							["MDN - Creating and triggering events", "https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events"],
							["Event Bubbling and Event Capturing in JavaScript", "https://medium.com/@vsvaibhav2016/event-bubbling-and-event-capturing-in-javascript-6ff38bec30e"],
							["Freecodecamp - A simplified explanation of event propagation", "https://www.freecodecamp.org/news/a-simplified-explanation-of-event-propagation-in-javascript-f9de7961a06e/"],
							["JavaScript Events Explained", "https://flaviocopes.com/javascript-events/"],
							["MDN - addEventListener()", "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"],
							["MDN - removeEventListener(", "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener"],
							["Event order", "https://www.quirksmode.org/js/events_order.html"],
						]
					}
				},
				{
					name: "Objects",
					description: {
						text: "Learn how to create and use objects.",
						links: [
							["MDN - Introducing JavaScript objects", "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects"],
							["MDN - Working with objects", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects"],
							["javascript.info - Objects", "https://javascript.info/object"],
							["MDN - this", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"],
							["W3Schools - The JavaScript this Keyword", "https://www.w3schools.com/js/js_this.asp"],
							["MDN - bind()", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind"],
							["MDN - new operator", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new"],
							["MDN - new.target", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target"],
							["Data Structures: Objects and Arrays", "https://scotch.io/courses/10-need-to-know-javascript-concepts/data-structures-objects-and-arrays"],
						]
					},
					skills: [
						{
							name: "Prototype",
							description: {
								text: "Learn how to extend objects and functions through its prototype.",
								links: [
									["The prototype chain", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain"],
									["Prototypes in JavaScript", "https://medium.com/better-programming/prototypes-in-javascript-5bba2990e04b"],
									["dev.to - JavaScript Visualized: Prototypal Inheritance", "https://dev.to/lydiahallie/javascript-visualized-prototypal-inheritance-47co"],
								]
							},
							skills: [
								{
									name: "Classes",
									description: {
										text: "Learn how to define and use classes. Get somewhat comfortable with some of the object oriented concepts such as inheritence and encapsulation.",
										links: [
											["MDN - Classes", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes"],
											["Medium - ES6 Classes", "https://medium.com/@luke_smaki/javascript-es6-classes-8a34b0a6720a"],
											["MDN - Inheritance", "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance"],
											["MDN - Object Oriented Programming", "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS"],
											["MDN - super", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super"],
										]
									}
								}
							]
						}
					]
				},
				{
					name: "Regex",
					description: {
						text: "Learn how to use regex to extract information from strings.",
						links: [
							["MDN - Regular Expressions", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"],
							["javascript.info - Regular expressions", "https://javascript.info/regular-expressions"],
							["MDN - RegExp", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp"],
						]
					}
				},
				{
					name: "Template Literals",
					description: {
						text: "Learn how template literals and tagged templates and help you manipulate strings.",
						links: [
							["MDN - Template literals", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals"],
							["MDN - ES6 In Depth: Template strings", "https://hacks.mozilla.org/2015/05/es6-in-depth-template-strings-2/"],
							["Google Devs - Getting Literal With ES6 Template Strings", "https://developers.google.com/web/updates/2015/01/ES6-Template-Strings"],
						]
					}
				},
				{
					name: "Promises",
					description: {
						text: "Learn how to use promises and what asynchronous code means.",
						links: [
							["Google Devs - JavaScript Promises: an Introduction", "https://developers.google.com/web/fundamentals/primers/promises"],
							["MDN - Promise", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"],
							["Master the JavaScript Interview: What is a Promise?", "https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261"],
						]
					},
					skills: [
						{
							name: "Callbacks",
							description: {
								text: "Learn how to use callbacks and why they are not always a good idea.",
								links: [
									["MDN - Callback function", "https://developer.mozilla.org/en-US/docs/Glossary/Callback_function"],
									["JavaScript: What the heck is a Callback?", "https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced"],
									["javascript.info - Callbacks", "https://javascript.info/callbacks"],
								]
							}
						},
						{
							name: "Async/await",
							description: {
								text: "Learn how to use the async and await keywords to make it easier to write asynchronous code.",
								links: [
									["MDN - async function", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function"],
									["Google Devs - Async functions", "https://developers.google.com/web/fundamentals/primers/async-functions"],
									["javascript.info - Async/await", "https://javascript.info/async-await"],
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
									["MDN - CORS", "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"],
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
							["MDN - Using The Web Animations API", "https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API"],
							["CSS Tricks - CSS Animations vs Web Animations API", "https://css-tricks.com/css-animations-vs-web-animations-api/"],
						]
					}
				},
				{
					name: "Modules",
					description: {
						text: "Learn how to modularize your code into ES6 modules using the export and import keywords.",
						links: [
							["MDN - Export", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export"],
							["MDN - Import", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import"],
							["V8 - Modules", "https://v8.dev/features/modules"],
							["Freecodecamp - A Practical guide to ES6 modules", "https://www.freecodecamp.org/news/how-to-use-es6-modules-and-why-theyre-important-a9b20b480773/"],
						]
					}
				},
				{
					name: "Intl",
					description: {
						text: "Learn how to localize your website using the Intl API.",
						links: [
							["MDN - Intl", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"],
							["MDN - Date Time Format", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat"],
							["New Intl APIs in JavaScript", "https://blog.bitsrc.io/new-intl-apis-in-javascript-c50dc89d2cf3"],
						]
					}
				},
				{
					name: "Canvas",
					description: {
						text: "Learn how to paint graphics onto a canvas.",
						links: [
							["MDN - Canvas tutorial", "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial"],
							["MDN - Canvas API", "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API"],
							["CSS Tricks - Manipulating Pixels Using Canvas", "https://css-tricks.com/manipulating-pixels-using-canvas/"],
						]
					}
				},
				{
					name: "Documentation",
					description: {
						text: "Learn how to create good documentation and why it is important.",
						links: [
							["Getting Started with JSDoc", "https://jsdoc.app/about-getting-started.html"],
							["A beginner’s guide to writing documentation", "https://www.writethedocs.org/guide/writing/beginners-guide-to-docs/"],
							["Write Good Documentation", "https://hackernoon.com/write-good-documentation-6caffb9082b4"],
							["The power of jsDoc", "https://dev.to/gmartigny/the-power-of-jsdoc-272d"],
							["Document your Javascript code with JSDoc", "https://dev.to/paulasantamaria/document-your-javascript-code-with-jsdoc-2fbf"],
						]
					},
				},
				{
					name: "Best Practices",
					description: {
						text: "Learn the best practices of writing Javascript.",
						links: [
							["MDN - JavaScript guidelines", "https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines/Code_guidelines/JavaScript"],
							["Airbnb - JavaScript Style Guide", "https://github.com/airbnb/javascript"],
							["Principles of Writing Consistent, Idiomatic JavaScript", "https://github.com/rwaldron/idiomatic.js/"],
							["5 JavaScript Style Guides", "https://codeburst.io/5-javascript-style-guides-including-airbnb-github-google-88cbc6b2b7aa"],
							["JavaScript Style Guide and Coding Conventions", "https://www.w3schools.com/js/js_conventions.asp"],
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
							["What Are Web Standards?", "https://www.elcom.com.au/resources/blog/web-standards"],
							["A Comprehensive Explanation of Web Standards", "https://robertnyman.com/2007/05/21/what-are-web-standards-a-comprehensive-explanation-of-what-is-comprised-in-the-term/"],
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
									["Web Standards Guide", "https://www.smashingmagazine.com/2019/01/web-standards-guide/"],
									["W3C - Groups", "https://www.w3.org/community/groups/"],
									["The W3C At Twenty-Five", "https://www.smashingmagazine.com/2019/10/happy-birthday-w3c/"],
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
						{
							name: "WHATWG",
							description: {
								text: "Learn what WHATWG are doing and how they are moving the web forward.",
								links: [
									["WHATWG - FAQ", "https://whatwg.org/faq"],
									["WHATWG - Standards", "https://spec.whatwg.org/"],
									["MDN - WHATWG", "https://developer.mozilla.org/en-US/docs/Glossary/WHATWG"],
									["W3C vs. WHATWG HTML5 Specs", "https://dzone.com/articles/w3c-vs-whatwg-html5-specs"],
									["WHATWG - HTML", "https://html.spec.whatwg.org/"],
									["Wikipedia - WHATWG", "https://en.wikipedia.org/wiki/WHATWG"],
								]
							}
						},
						{
							name: "Specifications",
							description: {
								text: "Learn how to read specifications developed by the standards committees.",
								links: [
									["How to Read the ECMAScript Specification", "https://timothygu.me/es-howto/"],
									["How to Read W3C Specs", "https://alistapart.com/article/readspec/"],
									["Learning CSS by reading specs", "https://www.chenhuijing.com/blog/learning-css-by-reading-specifications/"],
									["Understanding the CSS Specifications", "https://www.w3.org/Style/CSS/read.en.html"],
								]
							},
						}
					]
				},
				{
					name: "Browser Engines",
					description: {
						text: "Learn what a browser engine is and get an overview of the browser landscape and market share.",
						links: [
								["Medium - Browser Engines", "https://medium.com/@jonbiro/browser-engines-chromium-v8-blink-gecko-webkit-98d6b0490968"],
								["Wikipedia - Comparison", "https://en.wikipedia.org/wiki/Comparison_of_browser_engines"],
								["HTML5 Rocks - How Browsers Work", "https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/"],
								["Demystifying Browsers", "https://textslashplain.com/2020/02/09/demystifying-browsers/"],
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
						}
					]
				},
				{
					name: "HTTP",
					description: {
						text: "Learn how data is distributed through the HTTP protocol.",
						links: [
							["MDN - HTTP", "https://developer.mozilla.org/en-US/docs/Web/HTTP"],
							["MDN - HTTP Glossary", "https://developer.mozilla.org/en-US/docs/Glossary/HTTP"],
							["MDN - An overview of HTTP", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"],
							["Wikipedia - Hypertext Transfer Protocol", "https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol"],
						]
					}
				},
				{
					name: "The Internet",
					description: {
						text: "Learn the basics of how the internet works.",
						links: [
							["MDN - How does the Internet work?", "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work"],
							["Youtube - How the Internet Works in 5 Minutes", "https://www.youtube.com/watch?v=7_LPdttKXPc"],
							["Explain That Stuff - Internet", "https://www.explainthatstuff.com/internet.html"],
							["Stanford - How Does the Internet Work?", "https://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm"],
							["How the Internet Works", "https://blog.hubspot.com/marketing/how-the-internet-works"],
						]
					}
				},
				{
					name: "Polyfills",
					description: {
						text: "Learn how it is possible to use polyfills to increase the browser support for your website.",
						links: [
							["MDN - Polyfill", "https://developer.mozilla.org/en-US/docs/Glossary/Polyfill"],
							["Introduction To Polyfills & Their Usage", "https://medium.com/beginners-guide-to-mobile-web-development/introduction-to-polyfills-their-usage-9cd6db4b1923"],
							["W3C - Polyfills and the evolution of the Web", "https://www.w3.org/2001/tag/doc/polyfills/"],
							["Can I use", "http://caniuse.com/"],
						]
					}
				},
				{
					name: "Debugging",
					description: {
						text: "Learn about the basics concepts of debugging.",
						links: [
							["Google Devs - Inspect and Edit Pages and Styles", "https://developers.google.com/web/tools/chrome-devtools/inspect-styles/"],
							["MDN - Cross browser testing", "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing"],
							["5 things to remember for better debugging of your code", "https://medium.com/dev-bits/5-things-to-remember-for-better-debugging-of-your-code-94b9bc3fb3df"],
						]
					},
					skills: [
						{
							name: "Developer console",
							description: {
								text: "Learn how to use the developer console to debug your code.",
								links: [
									["MDN - Console", "https://developer.mozilla.org/en-US/docs/Web/API/Console"],
									["Google Devs - Console API Reference", "https://developers.google.com/web/tools/chrome-devtools/console/api"],
									["Google Devs - Get Started with Chrome DevTools", "https://developers.google.com/web/tools/chrome-devtools/javascript"],
									["Google Devs - Console Utilities API Reference", "https://developers.google.com/web/tools/chrome-devtools/console/utilities"],
									["MDN - Debugging CSS", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS"],
									["MDN - Debugging HTML", "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML"],
									["javascript.info - Debugging in Chrome", "https://javascript.info/debugging-chrome"],
									["14 JavaScript debugging tips", "https://raygun.com/javascript-debugging-tips"],
									["The definitive guide to debugging JavaScript", "https://flaviocopes.com/javascript-debugging/"],
									["Youtube - Chrome DevTools 101", "https://www.youtube.com/watch?v=H0XScE08hy8"],
									["Chrome Devs - Quickly monitor events", "https://developers.google.com/web/updates/2015/05/quickly-monitor-events-from-the-console-panel"],
									["Youtube - 14 Must Know Chrome Dev Tools Tricks", "https://www.youtube.com/watch?v=xkzDaKwinA8"]
								]
							},
							/*skills: [
								{
									name: "Console API",
									description: {
										text: "Learn how to use the console API.",
										links: [
											["MDN - Console", "https://developer.mozilla.org/en-US/docs/Web/API/Console"],
											["Google Devs - Console API Reference", "https://developers.google.com/web/tools/chrome-devtools/console/api"],
										]
									}
								}
							]*/
						},
						/*{
							name: "Breakpoints",
							description: {
								text: "Learn how to add breakpoints to your code.",
								links: [
									["Google Devs - How To Pause Your Code", "https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints"],
									["Debugging Javascript Like a Pro", "https://blog.bitsrc.io/debugging-javascript-like-a-pro-a2e0f6c53c2e"],
								]
							}
						}*/
					]
				}
			]
		}
	]
}