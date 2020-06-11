export const buildtoolsCollection = {
	name: "Build tools",
	areas: [
		{
			skills: [
				{
					name: "Package Managers",
					description: {
						text: "Learn about package managers and how they make managing dependencies easier.",
						links: [
							["Freecodecamp - How JavaScript package managers work", "https://www.freecodecamp.org/news/javascript-package-managers-101-9afd926add0a/"],
							["Guide to JavaScript frontend package managers", "https://www.javascriptstuff.com/javascript-frontend-package-managers/"],
						]
					},
					skills: [
						{
							name: "NPM",
							description: {
								text: "Learn about NPM and how it can be used to manage dependencies.",
								links: [
									["npmjs - About npm", "https://docs.npmjs.com/about-npm/"],
									["npmjs - Getting started", "https://docs.npmjs.com/getting-started/"],
									["Introduction to npm and basic npm commands", "https://medium.com/beginners-guide-to-mobile-web-development/introduction-to-npm-and-basic-npm-commands-18aa16f69f6b"],
									["An Absolute Beginner's Guide to Using npm", "https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/"],
								]
							},
						},
						{
							name: "Yarn",
							description: {
								text: "Learn about Yarn and how it can be used to manage dependencies.",
								links: [
									["Yarnpkg - Getting Started", "https://yarnpkg.com/en/docs/getting-started"],
									["Facebook Engineering - Yarn", "https://engineering.fb.com/web/yarn-a-new-package-manager-for-javascript/"],
								]
							},
						}
					]
				},
				{
					name: "Module Bundlers",
					description: {
						text: "Learn about module bundler and how they can help bundling your code.",
						links: [
							["dev.to - What is a module bundler?", "https://dev.to/tanhauhau/what-is-module-bundler-and-how-does-it-work-3gp2"],
							["Freecodecamp - Let’s learn how module bundlers work", "https://www.freecodecamp.org/news/lets-learn-how-module-bundlers-work-and-then-write-one-ourselves-b2e3fe6c88ae/"],
							["JavaScript Bundlers, a Comparison", "https://medium.com/@ajmeyghani/javascript-bundlers-a-comparison-e63f01f2a364"],
						]
					},
					skills: [
						{
							name: "Rollup",
							description: {
								text: "Learn how you can use Rollup to bundle your code.",
								links: [
									["Rollup - Introduction", "https://rollupjs.org/guide/en/"],
									["How to Bundle JavaScript With Rollup", "https://lengstorf.com/learn-rollup-js/"],
								]
							},
						},
						{
							name: "Webpack",
							description: {
								text: "Learn how you can use Webpack to bundle your code.",
								links: [
									["Webpack - Getting Started", "https://webpack.js.org/guides/getting-started/"],
									["Webpack: A Gentle Introduction to the Module Bundler", "https://auth0.com/blog/webpack-a-gentle-introduction/"],
								]
							},
						},
						{
							name: "Parcel",
							description: {
								text: "Learn how you can use Parcel to bundle your code.",
								links: [
									["Parcel - Getting Started", "https://parceljs.org/getting_started.html"],
									["Parcel, a simpler webpack", "https://flaviocopes.com/parcel/"]
								]
							},
						},
						{
							name: "Snowpack",
							description: {
								text: "Learn how Snowpack can replace the traditional app bundler during development.",
								links: [
									["Snowpack", "https://www.snowpack.dev/"],
									["Snowpack - Quickstart", "https://www.snowpack.dev/#quickstart"],
									["Github - Snowpack", "https://github.com/pikapkg/snowpack"],
									["Pika - About", "https://www.pika.dev/about/"],
									["A Future Without Webpack", "https://www.pika.dev/blog/pika-web-a-future-without-webpack/"],
								]
							},
						}
					]
				},
				{
					name: "Linters and formatters",
					description: {
						text: "Learn how you can improve your code quality with linters and formatters.",
						links: [
							["Improve Your JavaScript Code Quality With Linters", "https://www.gistia.com/javascript-linters-formatter-prettier-eslint/"],
							["Why you should always use a Linter", "https://medium.com/dailyjs/why-you-should-always-use-a-linter-and-or-pretty-formatter-bb5471115a76"],
						]
					},
					skills: [
						{
							name: "Prettier",
							description: {
								text: "Learn how you can use Prettier to format your code.",
								links: [
									["Prettier - What is Prettier?", "https://prettier.io/docs/en/index.html"],
									["Let the computer do the formatting", "https://blog.bitsrc.io/let-the-computer-do-the-formatting-ddb799e8a068"],
									["Prettier - Playground", "https://prettier.io/playground/"],
									["Prettier - Integrating with Linters", "https://prettier.io/docs/en/integrating-with-linters.html"] 
								]
							},
						},
						{
							name: "ESLint",
							description: {
								text: "Learn how you can use ESLint to lint your code.",
								links: [
									["Eslint - Getting Started", "https://eslint.org/docs/user-guide/getting-started"],
									["Streamline Code Reviews with ESLint + Prettier", "https://medium.com/javascript-scene/streamline-code-reviews-with-eslint-prettier-6fb817a6b51d"],
									["Prettier vs ESLint: What’s The Difference?", "https://www.futurehosting.com/blog/prettier-vs-eslint-whats-the-difference/"]
								]
							},
						}
					]
				},
				{
					name: "Task Runners",
					description: {
						text: "Learn about task runners and how you can automate code execution.",
						links: [
							["The Advantages of Using Task Runners", "https://www.dbswebsite.com/blog/the-advantages-of-using-task-runners/"],
							["Being Productive With Task Runners", "https://www.smashingmagazine.com/2016/06/harness-machines-productive-task-runners/"],
						]
					},
					skills: [
						{
							name: "NPM Scripts",
							description: {
								text: "Learn about NPM scripts and how you can run your own.",
								links: [
									["CSS Tricks - Why npm Scripts?", "https://css-tricks.com/why-npm-scripts/"],
									["Helpers and tips for npm run scripts", "https://michael-kuehnel.de/tooling/2018/03/22/helpers-and-tips-for-npm-run-scripts.html"],
								]
							},
						}
					]
				},
				{
					name: "Transpilers",
					description: {
						text: "Learn what transpilers are and why we need them.",
						links: [
							["Scotch - Javascript Transpilers", "https://scotch.io/tutorials/javascript-transpilers-what-they-are-why-we-need-them"],
							["What JavaScript Programmers Need to Know about Transpilers", "https://thenewstack.io/javascript-transpilers-need-know/"],
							["Wikipedia - Source-to-source compiler", "https://en.wikipedia.org/wiki/Source-to-source_compiler"],
						]
					},
					skills: [
						{
							name: "Babel",
							description: {
								text: "Learn about Babel and how you can use it to transpile your code.",
								links: [
									["Complete Babel 7 Guide for Beginners", "https://medium.com/@onlykiosk/complete-babel-7-guide-for-beginners-in-2019-7dd78214c464"],
									["Babel - What is Babel?", "https://babeljs.io/docs/en/"],
									["Babel - Usage Guide", "https://babeljs.io/docs/en/usage"],
									["A Beginner’s Guide to Babel", "https://www.sitepoint.com/babel-beginners-guide/"],
									["Moving to ES6 — Babel and Transpilers", "https://hackernoon.com/moving-to-es6-babel-and-transpilers-337921c025b1"],
								]
							}
						},
						{
							name: "Typescript",
							description: {
								text: "Learn how to use Typescript and how it can help making your code typesafe.",
								links: [
									["Typescript - Documentation", "http://www.typescriptlang.org/docs/home.html"],
									["Typescript: Why should one use i?", "https://medium.com/tech-tajawal/typescript-why-should-one-use-it-a539faa92010"],
									["Why TypeScript is the best way to write Front-end in 2019", "https://medium.com/@jtomaszewski/why-typescript-is-the-best-way-to-write-front-end-in-2019-feb855f9b164"]
								]
							},
						}
					]
				},
				{
					name: "CSS Pre-processors",
					description: {
						text: "Learn about CSS pre-processors and why we need them.",
						links: [
							["MDN - CSS preprocessor", "https://developer.mozilla.org/en-US/docs/Glossary/CSS_preprocessor"],
							["Advantages of Using a Preprocessor", "https://medium.com/swlh/advantages-of-using-a-preprocessor-sass-in-css-eb7310179944"],
							["Deconfusing Pre- and Post-processing", "https://medium.com/@ddprrt/deconfusing-pre-and-post-processing-d68e3bd078a3"],
						]
					},
					skills: [
						{
							name: "SASS",
							description: {
								text: "Learn about SASS and how you can use it to simplify your styles.",
								links: [
									["SASS - Guide", "https://sass-lang.com/guide"],
									["10 Reasons to Use a CSS Preprocessor in 2018", "https://raygun.com/blog/10-reasons-css-preprocessor/"],
								]
							}
						},
						{
							name: "PostCSS",
							description: {
								text: "Learn about PostCSS and how you can use its ecosystem of plugins to extend your CSS build pipeline.",
								links: [
									["PostCSS", "https://postcss.org/"],
									["What is PostCSS?", "https://www.sitepoint.com/an-introduction-to-postcss/"],
									["Introduction to PostCSS", "https://flaviocopes.com/postcss/"],
									["Getting started with PostCSS in 2019", "https://blog.logrocket.com/getting-started-with-postcss-in-2019-484262a4d725/"]
								]
							}
						}
					]
				},
				{
					name: "Node.js",
					description: {
						text: "Learn how to use Node.js.",
						links: [
							["Node.js", "https://nodejs.org"],
							["Introduction to Node.js", "https://nodejs.dev/"],
							["Node.js - Guides", "https://nodejs.org/en/docs/guides/"],
							["W3Schools - Node.js tutorial", "https://www.w3schools.com/nodejs/"]
						]
					}
				}
			]
		}
	]
}