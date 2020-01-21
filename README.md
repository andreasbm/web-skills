<h1 align="center">Web Skills</h1>
I have tried to create a comprehensive visual overview of useful skills to learn as a web developer. Keep in mind that the list is opinionated. This is not a definitive overview of what you HAVE to learn as a web developer but rather a visual overview of what you could learn and where you could start. Hopefully it can give you some inspiration for your own journey to learn more about web development. If you feel like something is missing you are always welcome to create a pull request.

<br />
<br />

<a href="http://andreasbm.github.io/web-skills" target="_blank"><img src="https://raw.githubusercontent.com/andreasbm/web-skills/master/demo.gif" alt="Demo" width="800" /></a>


Go to [http://andreasbm.github.io/web-skills](http://andreasbm.github.io/web-skills) to check out the visual overview or scroll through this readme to get the overview as a list. 


<details>
<summary>📖 Table of Contents</summary>
<br />

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

## ➤ Table of Contents

* [➤ Fundamentals](#-fundamentals)
	* [HTML](#html)
	* [Syntax](#syntax)
		* [Basic Tags](#basic-tags)
	* [Forms](#forms)
	* [SEO](#seo)
		* [Discoverable Content](#discoverable-content)
	* [Svg](#svg)
	* [Best Practices](#best-practices)
	* [CSS](#css)
	* [Syntax](#syntax-1)
	* [Selectors](#selectors)
		* [Specificity](#specificity)
		* [Pseudo Selectors](#pseudo-selectors)
	* [Box Model](#box-model)
		* [Margin Collapsing](#margin-collapsing)
	* [Colors](#colors)
	* [Calc](#calc)
	* [Layout](#layout)
		* [Flex](#flex)
		* [Grid](#grid)
	* [Transforms](#transforms)
		* [Animations](#animations)
	* [Responsive Design](#responsive-design)
		* [Media Queries](#media-queries)
		* [Relative Units](#relative-units)
		* [Images](#images)
	* [CSS Variables](#css-variables)
	* [Best Practices](#best-practices-1)
	* [Javascript](#javascript)
	* [Syntax](#syntax-2)
		* [Spread](#spread)
		* [Destructuring](#destructuring)
	* [DOM](#dom)
		* [DOM Manipulation](#dom-manipulation)
	* [Events](#events)
	* [Objects](#objects)
		* [Prototype](#prototype)
			* [Classes](#classes)
	* [Regex](#regex)
	* [Template Literals](#template-literals)
	* [Promises](#promises)
		* [Callbacks](#callbacks)
		* [Async/await](#asyncawait)
		* [Fetch](#fetch)
	* [Web Animations](#web-animations)
	* [Modules](#modules)
	* [Intl](#intl)
	* [Canvas](#canvas)
	* [Documentation](#documentation)
	* [Best Practices](#best-practices-2)
	* [The Browser](#the-browser)
	* [Standardization](#standardization)
		* [W3C](#w3c)
		* [TC39](#tc39)
		* [WHATWG](#whatwg)
		* [Specifications](#specifications)
	* [Browser Engines](#browser-engines)
		* [Webkit](#webkit)
		* [Blink](#blink)
		* [Gecko](#gecko)
		* [Servo](#servo)
	* [HTTP](#http)
	* [The Internet](#the-internet)
	* [Polyfills](#polyfills)
	* [Debugging](#debugging)
		* [Developer console](#developer-console)
* [➤ Accessibility](#-accessibility)
	* [The why](#the-why)
	* [Screen Readers](#screen-readers)
	* [Accessibility tree](#accessibility-tree)
		* [ARIA](#aria)
		* [Accessible HTML](#accessible-html)
			* [Alt text](#alt-text)
		* [Accessible CSS](#accessible-css)
	* [Accessible forms](#accessible-forms)
	* [UI States](#ui-states)
	* [Keyboard Accessibility](#keyboard-accessibility)
		* [Focus](#focus)
	* [Accessible Colors](#accessible-colors)
	* [Laws & Policies](#laws--policies)
		* [Audits](#audits)
* [➤ Web Components](#-web-components)
	* [Custom Elements](#custom-elements)
	* [HTML Templates](#html-templates)
	* [Shadow DOM](#shadow-dom)
		* [Shadow Parts](#shadow-parts)
		* [Slots](#slots)
	* [Constructible Stylesheets](#constructible-stylesheets)
	* [Best practices](#best-practices)
	* [Form Participation](#form-participation)
* [➤ Progressive Webapps](#-progressive-webapps)
	* [API's](#apis)
	* [Storage](#storage)
	* [Routing](#routing)
		* [History API](#history-api)
	* [Service Workers](#service-workers)
		* [Offline first](#offline-first)
		* [Push notifications](#push-notifications)
	* [Web App manifest](#web-app-manifest)
	* [Add to homescreen](#add-to-homescreen)
	* [Touch Events](#touch-events)
	* [Loading Performance](#loading-performance)
	* [App shell](#app-shell)
	* [Render-Blocking Resources](#render-blocking-resources)
	* [Compression](#compression)
	* [Performance metrics](#performance-metrics)
		* [First meaningful paint](#first-meaningful-paint)
		* [First CPU idle](#first-cpu-idle)
		* [Time to interactive](#time-to-interactive)
	* [Lazy Loading](#lazy-loading)
		* [Dynamic Import](#dynamic-import)
		* [Offscreen images](#offscreen-images)
	* [Critical Request Chains](#critical-request-chains)
	* [Tree shaking](#tree-shaking)
	* [Codesplitting](#codesplitting)
	* [PRPL Pattern](#prpl-pattern)
	* [Resource Prioritization](#resource-prioritization)
	* [Caching](#caching)
	* [Rendering Performance](#rendering-performance)
	* [Rendering](#rendering)
	* [Event loop](#event-loop)
		* [Microtask](#microtask)
		* [Stack](#stack)
		* [Heap](#heap)
	* [RAIL Model](#rail-model)
		* [requestAnimationFrame](#requestanimationframe)
		* [requestIdleCallback](#requestidlecallback)
	* [Critical Rendering Path](#critical-rendering-path)
	* [The Pixel Pipeline](#the-pixel-pipeline)
		* [Style calculations](#style-calculations)
		* [Transforms](#transforms-1)
		* [Paint areas](#paint-areas)
		* [Layout Trashing](#layout-trashing)
		* [Layers](#layers)
		* [Debounce](#debounce)
	* [CSS Containment](#css-containment)
	* [Web Workers](#web-workers)
	* [Security](#security)
	* [HTTPS](#https)
	* [Browser Sandbox](#browser-sandbox)
	* [OWASP](#owasp)
		* [Cross-Site Scripting](#cross-site-scripting)
		* [Clickjacking](#clickjacking)
	* [Content Security Policy](#content-security-policy)
	* [Audits](#audits-1)
	* [Performance budgets](#performance-budgets)
	* [Lighthouse](#lighthouse)
	* [Chrome DevTools](#chrome-devtools)
* [➤ Build tools](#-build-tools)
	* [Package Managers](#package-managers)
		* [NPM](#npm)
		* [Yarn](#yarn)
	* [Module Bundlers](#module-bundlers)
		* [Rollup](#rollup)
		* [Webpack](#webpack)
		* [Parcel](#parcel)
		* [Pika](#pika)
	* [Linters and formatters](#linters-and-formatters)
		* [Prettier](#prettier)
		* [ESLint](#eslint)
	* [Task Runners](#task-runners)
		* [NPM Scripts](#npm-scripts)
	* [Transpilers](#transpilers)
		* [Babel](#babel)
		* [Typescript](#typescript)
	* [CSS Pre-processors](#css-pre-processors)
		* [SASS](#sass)
		* [PostCSS](#postcss)
	* [Node.js](#nodejs)
* [➤ Frameworks & Libraries](#-frameworks--libraries)
	* [lit-element](#lit-element)
	* [Vue](#vue)
	* [React](#react)
	* [Angular](#angular)
	* [Svelte](#svelte)
	* [Stencil](#stencil)
* [➤ Testing](#-testing)
	* [Testing Methodologies](#testing-methodologies)
		* [Unit Testing](#unit-testing)
		* [Integration Testing](#integration-testing)
		* [System Testing](#system-testing)
		* [Acceptance Testing](#acceptance-testing)
		* [Smoke Testing](#smoke-testing)
		* [Performance Testing](#performance-testing)
		* [Usability Testing](#usability-testing)
		* [White Box Testing](#white-box-testing)
		* [Black Box Testing](#black-box-testing)
		* [Automated Testing](#automated-testing)
		* [Manual Testing](#manual-testing)
	* [Continuous integration](#continuous-integration)
	* [A/B Testing](#ab-testing)
	* [Test Runners](#test-runners)
		* [Karma](#karma)
		* [Mocha](#mocha)
		* [Jasmine](#jasmine)
		* [Cypress](#cypress)
		* [Ava](#ava)
	* [Best Practices](#best-practices-3)
* [➤ Architecture & paradigms](#-architecture--paradigms)
	* [Paradigms](#paradigms)
	* [Programming Paradigms](#programming-paradigms)
	* [Object Oriented Programming](#object-oriented-programming)
		* [S.O.L.I.D](#solid)
	* [Functional programming](#functional-programming)
		* [Recursion](#recursion)
		* [Higher-Order Functions](#higher-order-functions)
		* [Currying](#currying)
		* [Monads](#monads)
	* [Architecture](#architecture)
	* [Design Patterns](#design-patterns)
		* [Singleton](#singleton)
		* [Observer](#observer)
		* [Prototype](#prototype-1)
		* [Bridge](#bridge)
		* [Proxy](#proxy)
		* [Chain of responsibility](#chain-of-responsibility)
		* [Constructor](#constructor)
	* [CSS Methodologies](#css-methodologies)
		* [BEM](#bem)
		* [SMACSS](#smacss)
		* [OOCSS](#oocss)
* [➤ Team Collaboration](#-team-collaboration)
	* [Version Control](#version-control)
	* [Git](#git)
		* [Github](#github)
		* [Bitbucket](#bitbucket)
	* [Management](#management)
	* [Agile Development](#agile-development)
		* [Scrum](#scrum)
		* [Kanban](#kanban)
	* [Waterfall Development](#waterfall-development)
	* [Test Driven Development](#test-driven-development)
* [➤ Design & UX](#-design--ux)
	* [Color Theory](#color-theory)
		* [Color Wheel](#color-wheel)
	* [Typography](#typography)
		* [Font Size](#font-size)
		* [Line Spacing](#line-spacing)
	* [C.R.A.P](#crap)
		* [Contrast](#contrast)
		* [Repetition](#repetition)
		* [Alignment](#alignment)
		* [Proximity](#proximity)
	* [Consistency](#consistency)
	* [Spacing](#spacing)
	* [Error Handling](#error-handling)
	* [Loading](#loading)
	* [The Golden Ratio](#the-golden-ratio)
	* [Mobile First](#mobile-first)
		* [Hit Targets](#hit-targets)
	* [Design Systems](#design-systems)
		* [Material Design](#material-design)
		* [Fluent Design](#fluent-design)
	* [Accessibility](#accessibility)
	* [Best Practices](#best-practices-4)
* [➤ The Modern Web](#-the-modern-web)
	* [Streams](#streams)
		* [Media Streams](#media-streams)
		* [Media Recorder](#media-recorder)
		* [Web RTC](#web-rtc)
		* [Screen Capture](#screen-capture)
		* [Generators](#generators)
	* [Speech Synthesis](#speech-synthesis)
	* [Web Sockets](#web-sockets)
	* [Geolocation](#geolocation)
	* [Device orientation & motion](#device-orientation--motion)
	* [Fullscreen](#fullscreen)
	* [Variable Fonts](#variable-fonts)
	* [Web XR](#web-xr)
	* [HTTP/2](#http2)
	* [Payment Request API](#payment-request-api)
	* [Web Audio](#web-audio)
	* [Web Bluetooth](#web-bluetooth)
	* [Web USB](#web-usb)
	* [Credentials Manager API](#credentials-manager-api)
	* [Houdini](#houdini)
	* [Project Fugu](#project-fugu)
	* [Observers](#observers)
		* [Mutation Observer](#mutation-observer)
		* [Intersection Observer](#intersection-observer)
		* [Resize Observer](#resize-observer)
		* [Performance Observer](#performance-observer)
	* [Scrollsnapping](#scrollsnapping)
	* [Web Assembly](#web-assembly)
	* [Beacon](#beacon)
	* [Clipboard](#clipboard)
	* [Share](#share)
	* [Performance API](#performance-api)
	* [Gamepad API](#gamepad-api)
	* [Network Information API](#network-information-api)
	* [Speech Recognition](#speech-recognition)
	* [Interaction Media Queries](#interaction-media-queries)
	* [Presentation](#presentation)
	* [Native File System](#native-file-system)
	* [Browser Extensions](#browser-extensions)
	* [Shape Detection](#shape-detection)
* [➤ Algorithms & Data structures](#-algorithms--data-structures)
	* [Data structures](#data-structures)
	* [Arrays](#arrays)
	* [Queues & Stacks](#queues--stacks)
	* [Trees](#trees)
		* [Binary Indexed Tree](#binary-indexed-tree)
		* [Heap](#heap-1)
		* [Red-black Tree](#red-black-tree)
		* [Trie](#trie)
		* [K-D Tree](#k-d-tree)
	* [Hash Tables](#hash-tables)
	* [Linked Lists](#linked-lists)
	* [Graphs](#graphs)
	* [Analysis](#analysis)
	* [Time complexity](#time-complexity)
		* [Cost model](#cost-model)
		* [Order of Growth](#order-of-growth)
		* [Big O notation](#big-o-notation)
	* [Space Complexity](#space-complexity)
	* [Algorithms](#algorithms)
	* [Sorting](#sorting)
		* [Insertion Sort](#insertion-sort)
		* [Quicksort](#quicksort)
		* [Mergesort](#mergesort)
		* [Heapsort](#heapsort)
	* [Searching](#searching)
		* [Binary Search](#binary-search)
		* [Breadth First Search](#breadth-first-search)
		* [Depth First Search](#depth-first-search)
		* [Dijkstra's Algorithm](#dijkstras-algorithm)
		* [String Search](#string-search)
	* [Hashing](#hashing)
* [➤ Databases & Servers](#-databases--servers)
	* [Databases](#databases)
	* [Relational Databases](#relational-databases)
		* [SQL](#sql)
		* [MySQL](#mysql)
		* [PostgreSQL](#postgresql)
	* [Non-relational Databases](#non-relational-databases)
		* [Redis](#redis)
		* [MongoDB](#mongodb)
	* [Data Modelling](#data-modelling)
		* [ER Diagram](#er-diagram)
		* [Keys](#keys)
	* [Indexing](#indexing)
	* [Data Integrity](#data-integrity)
	* [Normalization](#normalization)
		* [Functional Dependencies](#functional-dependencies)
		* [Normal Forms](#normal-forms)
	* [Transactions](#transactions)
		* [ACID](#acid)
		* [Serializability](#serializability)
		* [Locks](#locks)
			* [Deadlocks](#deadlocks)
		* [Precedence graph](#precedence-graph)
	* [Servers](#servers)
	* [Architectural Models](#architectural-models)
		* [Client-Server](#client-server)
		* [Proxy Server](#proxy-server)
		* [Peer-To-Peer](#peer-to-peer)
	* [Middleware](#middleware)
	* [Request-Reply Protocol](#request-reply-protocol)
		* [UDP](#udp)
		* [TCP](#tcp)
	* [REST API](#rest-api)
		* [CRUD](#crud)
	* [Express](#express)
	* [GraphQL](#graphql)
	* [GNU/Linux](#gnulinux)
	* [Docker](#docker)
	* [SSH](#ssh)
* [➤ Contributors](#-contributors)
* [➤ License](#-license)
</details>


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#fundamentals)

## ➤ Fundamentals

### HTML

### Syntax

Learn the basics of HTML and get comfortable with it's syntax and main concepts.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FLearn%2FGetting_started_with_the_web%2FHTML_basics" alt="Logo" /> Mozilla - HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FLearn%2FHTML%2FIntroduction_to_HTML" alt="Logo" /> Mozilla - Introduction to HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.codecademy.com%2Flearn%2Flearn-html" alt="Logo" /> Codecademy - Learn HTML](https://www.codecademy.com/learn/learn-html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3schools.com%2Ftags%2Fref_byfunc.asp" alt="Logo" /> w3schools - HTML Elements](https://www.w3schools.com/tags/ref_byfunc.asp)

#### Basic Tags

Get familiar with the basic HTML tags

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.tutorialspoint.com%2Fhtml%2Fhtml_basic_tags.htm" alt="Logo" /> Tutorialspoint - Basic HTML tags](https://www.tutorialspoint.com/html/html_basic_tags.htm)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.elated.com%2Ffirst-10-html-tags%2F" alt="Logo" /> Elated - First 10 HTML tags](https://www.elated.com/first-10-html-tags/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3schools.com%2Ftags%2Fref_byfunc.asp" alt="Logo" /> w3schools - HTML tags](https://www.w3schools.com/tags/ref_byfunc.asp)

### Forms

Learn how to design efficient forms, validating them effectively and keeping the user informed along the way.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FLearn%2FHTML%2FForms" alt="Logo" /> Mozilla - HTML forms](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fdesign-and-ux%2Finput%2Fforms%2F" alt="Logo" /> Google Web - Forms](https://developers.google.com/web/fundamentals/design-and-ux/input/forms/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3schools.com%2Fhtml%2Fhtml_forms.asp" alt="Logo" /> w3schools - Forms](https://www.w3schools.com/html/html_forms.asp)

### SEO

Learn how to make your content search-friendly.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev%2Fdiscoverable" alt="Logo" /> web.dev - Discoverable](https://web.dev/discoverable)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fsearch%2Fdocs%2Fguides%2Fget-started" alt="Logo" /> Google Search - Get Started](https://developers.google.com/search/docs/guides/get-started)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fsearch%2Fdocs%2Fguides%2Fjavascript-seo-basics" alt="Logo" /> Google Search - SEO basics](https://developers.google.com/search/docs/guides/javascript-seo-basics)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev%2Flighthouse-seo" alt="Logo" /> web.dev - SEO audits](https://web.dev/lighthouse-seo)

#### Discoverable Content

Learn how to structure your HTML in a way that provides a rich experience when sharing it online.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fdiscovery%2Fsocial-discovery" alt="Logo" /> Google Web - Social Discovery](https://developers.google.com/web/fundamentals/discovery/social-discovery)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fsearch%2Fdocs%2Fguides%2Fsearch-features" alt="Logo" /> Google Search - Search Features](https://developers.google.com/search/docs/guides/search-features)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fsearch%2Fdocs%2Fguides%2Fintro-structured-data" alt="Logo" /> Google Search - Structured Data](https://developers.google.com/search/docs/guides/intro-structured-data)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev%2Fdiscoverable" alt="Logo" /> web.dev - Easily discoverable](https://web.dev/discoverable)

### Svg

Learn how to work with SVG files to make graphics look crisp across all screen resolutions.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FLearn%2FHTML%2FMultimedia_and_embedding%2FAdding_vector_graphics_to_the_Web" alt="Logo" /> Mozilla - Adding vector graphics to the Web](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fsvgontheweb.com%2F" alt="Logo" /> SVG on the web](https://svgontheweb.com/)

### Best Practices

Learn the best practices of writing HTML.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3schools.com%2Fhtml%2Fhtml5_syntax.asp" alt="Logo" /> w3schools - HTML Coding Conventions](https://www.w3schools.com/html/html5_syntax.asp)


### CSS

### Syntax

Learn the basics of CSS and get comfortable with it's syntax and main concepts.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FLearn%2FGetting_started_with_the_web%2FCSS_basics" alt="Logo" /> Mozilla - CSS Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3schools.com%2Fcss%2Fdefault.asp" alt="Logo" /> w3schools - CSS Tutorial](https://www.w3schools.com/css/default.asp)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIKho_xDKaLw" alt="Logo" /> Supercharged - CSS Selectors](https://www.youtube.com/watch?v=IKho_xDKaLw)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FLearn%2FCSS%2FFirst_steps" alt="Logo" /> Mozilla - CSS first steps](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FLearn%2FCSS%2FBuilding_blocks" alt="Logo" /> Mozilla - CSS building blocks](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FLearn%2FCSS%2FBuilding_blocks%2FValues_and_units" alt="Logo" /> Mozilla - CSS values and units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FCSS%2FSyntax" alt="Logo" /> Mozilla - CSS Syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax)

### Selectors

Learn about CSS selectors and how to effeciently target DOM elements.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FLearn%2FCSS%2FBuilding_blocks%2FSelectors" alt="Logo" /> Mozilla - CSS selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FCSS%2FCSS_Selectors" alt="Logo" /> Mozilla - All selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com%2Fchild-and-sibling-selectors%2F" alt="Logo" /> CSS Tricks - Child and Sibling Selectors](https://css-tricks.com/child-and-sibling-selectors/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com%2Falmanac%2Fselectors%2F" alt="Logo" /> CSS Tricks - All Selectors](https://css-tricks.com/almanac/selectors/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3schools.com%2Fcss%2Fcss_combinators.asp" alt="Logo" /> w3schools - CSS Combinators](https://www.w3schools.com/css/css_combinators.asp)

#### Specificity

Learn what specificity means and how to use it when writing CSS.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FCSS%2FSpecificity" alt="Logo" /> Mozilla - Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FLearn%2FCSS%2FBuilding_blocks%2FCascade_and_inheritance" alt="Logo" /> Mozilla - Cascade and inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to%2Femmawedekind%2Fcss-specificity-1kca" alt="Logo" /> dev.to - CSS Specificity](https://dev.to/emmawedekind/css-specificity-1kca)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fspecificity.keegan.st%2F" alt="Logo" /> Specificity Calculator](https://specificity.keegan.st/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3schools.com%2Fcss%2Fcss_specificity.asp" alt="Logo" /> w3schools - CSS Specificity](https://www.w3schools.com/css/css_specificity.asp)

#### Pseudo Selectors

Learn how to use pseudo selectors.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FCSS%2FPseudo-classes" alt="Logo" /> Mozilla - Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com%2Fpseudo-class-selectors%2F" alt="Logo" /> CSS Tricks - Meet the Pseudo Class Selectors](https://css-tricks.com/pseudo-class-selectors/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fbitsofco.de%2Fwhen-do-the-hover-focus-and-active-pseudo-classes-apply%2F" alt="Logo" /> When do the :hover, :focus, and :active pseudo-classes apply?](https://bitsofco.de/when-do-the-hover-focus-and-active-pseudo-classes-apply/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3schools.com%2Fcss%2Fcss_pseudo_elements.asp" alt="Logo" /> w3schools - CSS Pseudo-elements](https://www.w3schools.com/css/css_pseudo_elements.asp)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3schools.com%2Fcss%2Fcss_pseudo_classes.asp" alt="Logo" /> w3schools - CSS Pseudo-classes](https://www.w3schools.com/css/css_pseudo_classes.asp)

### Box Model

Learn what the CSS box model means.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FCSS%2FCSS_Box_Model%2FIntroduction_to_the_CSS_box_model" alt="Logo" /> Mozilla - Introduction to the CSS basic box model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FLearn%2FCSS%2FBuilding_blocks%2FThe_box_model" alt="Logo" /> Mozilla - The box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com%2Finheriting-box-sizing-probably-slightly-better-best-practice%2F" alt="Logo" /> CSS Tricks - Inheriting box-sizing](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/)

#### Margin Collapsing

Learn about margin collapsing.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FCSS%2FCSS_Box_Model%2FMastering_margin_collapsing" alt="Logo" /> Mozilla - Mastering margin collapsing](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40joseph0crick%2Fmargin-collapse-in-css-what-why-and-how-328c10e37ca0" alt="Logo" /> Margin Collapse in CSS: What, Why, and How](https://medium.com/@joseph0crick/margin-collapse-in-css-what-why-and-how-328c10e37ca0)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com%2Fwhat-you-should-know-about-collapsing-margins%2F" alt="Logo" /> CSS Tricks - What You Should Know About Collapsing Margins](https://css-tricks.com/what-you-should-know-about-collapsing-margins/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fbitsofco.de%2Fcollapsible-margins%2F" alt="Logo" /> What's the Deal with Collapsible Margins?](https://bitsofco.de/collapsible-margins/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fjonathan-harrell.com%2Fwhats-the-deal-with-margin-collapse%2F" alt="Logo" /> What’s the Deal with Margin Collapse?](https://jonathan-harrell.com/whats-the-deal-with-margin-collapse/)

### Colors

Learn the different ways you can define colors in CSS.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FCSS%2Fcolor" alt="Logo" /> Mozilla - Color](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FCSS%2Fcolor_value" alt="Logo" /> Mozilla - <color>](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3schools.com%2Fcss%2Fcss_colors.asp" alt="Logo" /> w3schools - CSS Colors](https://www.w3schools.com/css/css_colors.asp)

### Calc

Learn how to use the CSS calc function.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FCSS%2Fcalc" alt="Logo" /> Mozilla - Calc](https://developer.mozilla.org/en-US/docs/Web/CSS/calc)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com%2Fa-couple-of-use-cases-for-calc%2F" alt="Logo" /> CSS Tricks - A Couple of Use Cases for Calc()](https://css-tricks.com/a-couple-of-use-cases-for-calc/)

### Layout

Learn the different layout types for web.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Ftraining%2Fcertification%2Fmobile-web-specialist%2Fstudy-guide%2Fbasic-layout" alt="Logo" /> Chrome Dev - Basic Layout](https://developers.google.com/training/certification/mobile-web-specialist/study-guide/basic-layout)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3schools.com%2Fcss%2Fcss_website_layout.asp" alt="Logo" /> w3schools - CSS Website Layout](https://www.w3schools.com/css/css_website_layout.asp)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FLearn%2FHTML%2FIntroduction_to_HTML%2FDocument_and_website_structure" alt="Logo" /> Mozilla - Document and website structure](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FLearn%2FCSS%2FCSS_layout" alt="Logo" /> Mozilla - CSS layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout)

#### Flex

Learn how to create layouts using flexbox.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FLearn%2FCSS%2FCSS_layout%2FFlexbox" alt="Logo" /> Mozilla - Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com%2Fsnippets%2Fcss%2Fa-guide-to-flexbox%2F" alt="Logo" /> A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FCSS%2FCSS_Flexible_Box_Layout%2FBasic_Concepts_of_Flexbox" alt="Logo" /> Mozilla - Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fflexboxfroggy.com%2F" alt="Logo" /> Flexbox Froggy](https://flexboxfroggy.com/)

#### Grid

Learn how to create layouts using CSS Grid.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FLearn%2FCSS%2FCSS_layout%2FGrids" alt="Logo" /> Mozilla - Grids](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com%2Fsnippets%2Fcss%2Fcomplete-guide-grid%2F" alt="Logo" /> A Complete Guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FCSS%2FCSS_Grid_Layout" alt="Logo" /> Mozilla - CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcssgridgarden.com%2F" alt="Logo" /> CSS Grid Garden](https://cssgridgarden.com/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DAqwPrR7hklE" alt="Logo" /> Supercharged - CSS Grids](https://www.youtube.com/watch?v=AqwPrR7hklE)

### Transforms

Learn the different ways to transform elements through CSS.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FCSS%2Ftransform" alt="Logo" /> Mozilla - transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com%2Falmanac%2Fproperties%2Ft%2Ftransform%2F" alt="Logo" /> CSS Tricks - Transform](https://css-tricks.com/almanac/properties/t/transform/)

#### Animations

Learn how to animate elements through CSS using keyframes.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FCSS%2FCSS_Animations%2FUsing_CSS_animations" alt="Logo" /> Mozilla - Using CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com%2Falmanac%2Fproperties%2Fa%2Fanimation%2F" alt="Logo" /> CSS Tricks - Animation](https://css-tricks.com/almanac/properties/a/animation/)

### Responsive Design

Learn how to make your website responsive so it works across different screen sizes.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FLearn%2FCSS%2FCSS_layout%2FResponsive_Design" alt="Logo" /> Mozilla - Responsive design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.udacity.com%2Fcourse%2Fresponsive-web-design-fundamentals--ud893" alt="Logo" /> Responsive Web Design Fundamentals by Google](https://www.udacity.com/course/responsive-web-design-fundamentals--ud893)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fdesign-and-ux%2Fresponsive" alt="Logo" /> Google Dev - Responsive Design](https://developers.google.com/web/fundamentals/design-and-ux/responsive)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fdesign-and-ux%2Fresponsive%2Fpatterns" alt="Logo" /> Google Dev - UX Patterns](https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fdesign-and-ux%2Fresponsive%2Fcontent" alt="Logo" /> Google Dev - Responsive Content](https://developers.google.com/web/fundamentals/design-and-ux/responsive/content)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcodelabs.developers.google.com%2Fcodelabs%2Fpwa-responsive-design%2Findex.html%3Findex%3D..%252F..dev-pwa-training%230" alt="Logo" /> Codelabs - Responsive Design](https://codelabs.developers.google.com/codelabs/pwa-responsive-design/index.html?index=..%2F..dev-pwa-training#0)

#### Media Queries

Learn how use media queries to build responsive layout.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com%2Fcss-media-queries%2F" alt="Logo" /> CSS Tricks - CSS Media Queries & Using Available Space](https://css-tricks.com/css-media-queries/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FCSS%2FMedia_Queries%2FUsing_media_queries" alt="Logo" /> Mozilla - Using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FCSS%2FMedia_Queries%2FUsing_Media_Queries_for_Accessibility" alt="Logo" /> Mozilla - Using Media Queries for Accessibility](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_Media_Queries_for_Accessibility)

#### Relative Units

Learn how to use relative units for properties such as font sizes and spacing.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FLearn%2FCSS%2FBuilding_blocks%2FSizing_items_in_CSS" alt="Logo" /> Mozilla - Sizing items in CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FLearn%2FCSS%2FBuilding_blocks%2FValues_and_units" alt="Logo" /> Mozilla - CSS values and units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fthecssworkshop.com%2Flessons%2Frelative-units" alt="Logo" /> The CSS Workshop - Relative Units](https://thecssworkshop.com/lessons/relative-units)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com%2Ffun-viewport-units%2F" alt="Logo" /> CSS Tricks - Fun with Viewport Units](https://css-tricks.com/fun-viewport-units/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to%2Fbytegasm%2F15-css-relative-units-how-many-do-you-know-em-rem-ex-cap-ch-ic-6m" alt="Logo" /> dev.to - 15 CSS Relative units](https://dev.to/bytegasm/15-css-relative-units-how-many-do-you-know-em-rem-ex-cap-ch-ic-6m)

#### Images

Learn how to make images responsive, always showing the best possible version for the screen size.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fdesign-and-ux%2Fresponsive%2Fimages" alt="Logo" /> Google Devs - Responsive Images](https://developers.google.com/web/fundamentals/design-and-ux/responsive/images)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FLearn%2FHTML%2FMultimedia_and_embedding%2FResponsive_images" alt="Logo" /> Mozilla - Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

### CSS Variables

Learn how to define and use CSS variables.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FCSS%2FUsing_CSS_custom_properties" alt="Logo" /> Mozilla - Using CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Fupdates%2F2016%2F02%2Fcss-variables-why-should-you-care" alt="Logo" /> Google Devs - CSS Variables: Why Should You Care?](https://developers.google.com/web/updates/2016/02/css-variables-why-should-you-care)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to%2Flampewebdev%2Fcss-quickies-css-variables-or-how-you-create-a-white-dark-theme-easily-1i0i" alt="Logo" /> dev.to - CSS Quickies: CSS Variables](https://dev.to/lampewebdev/css-quickies-css-variables-or-how-you-create-a-white-dark-theme-easily-1i0i)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcodeburst.io%2Fcss-variables-explained-with-5-examples-84adaffaa5bd" alt="Logo" /> CSS Variables explained with 5 examples](https://codeburst.io/css-variables-explained-with-5-examples-84adaffaa5bd)

### Best Practices

Learn the best practices of writing CSS.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fspeckyboy.com%2Fgood-bad-css-practices%2F" alt="Logo" /> Speckyboy - Good and bad CSS practices](https://speckyboy.com/good-bad-css-practices/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FLearn%2FCSS%2FBuilding_blocks%2FOrganizing" alt="Logo" /> Mozilla - Organizing your CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Organizing)


### Javascript

### Syntax

Learn the basics of Javascript and get comfortable with it's syntax and main concepts.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FLearn%2FJavaScript%2FFirst_steps" alt="Logo" /> Mozilla - Javascript First Steps](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FLearn%2FGetting_started_with_the_web%2FJavaScript_basics" alt="Logo" /> Mozilla - Javascript Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FLearn%2FJavaScript%2FBuilding_blocks" alt="Logo" /> Mozilla - Javascript Building Blocks](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks)

#### Spread

Learn how the spread syntax can help you when working with arrays.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FOperators%2FSpread_syntax" alt="Logo" /> Mozilla - Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Fan-introduction-to-spread-syntax-in-javascript-fba39595922c%2F" alt="Logo" /> Freecodecamp - An introduction to Spread syntax](https://www.freecodecamp.org/news/an-introduction-to-spread-syntax-in-javascript-fba39595922c/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fv8.dev%2Ffeatures%2Fobject-rest-spread" alt="Logo" /> Object rest and spread properties](https://v8.dev/features/object-rest-spread)

#### Destructuring

Learn how destructuring can help you when working with objects.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FOperators%2FDestructuring_assignment" alt="Logo" /> Mozilla - Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fhacks.mozilla.org%2F2015%2F05%2Fes6-in-depth-destructuring%2F" alt="Logo" /> Mozilla - ES6 In Depth: Destructuring](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fjavascript.info%2Fdestructuring-assignment" alt="Logo" /> javascript.info - Destructuring assignment](https://javascript.info/destructuring-assignment)

### DOM

Learn how the HTML is represented as objects that comprise the structure and content of a document.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FDocument_Object_Model%2FIntroduction" alt="Logo" /> Mozilla - DOM Introduction](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Fwhats-the-document-object-model-and-why-you-should-know-how-to-use-it-1a2d0bc5429d%2F" alt="Logo" /> Freecodecamp - What's the DOM](https://www.freecodecamp.org/news/whats-the-document-object-model-and-why-you-should-know-how-to-use-it-1a2d0bc5429d/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Flearn.co%2Flessons%2Fintroduction-to-the-dom" alt="Logo" /> Introduction to the DOM](https://learn.co/lessons/introduction-to-the-dom)

#### DOM Manipulation

Learn how to query HTML elements through Javascript and manipulate them.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FDocument_object_model%2FLocating_DOM_elements_using_selectors" alt="Logo" /> Mozilla - Locating DOM elements using selectors](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Ds0vg_H9hBuU" alt="Logo" /> Supercharged - querySelector](https://www.youtube.com/watch?v=s0vg_H9hBuU)

### Events

Learn how to dispatch and listen for events.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FLearn%2FJavaScript%2FBuilding_blocks%2FEvents" alt="Logo" /> Mozilla - Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FGuide%2FEvents%2FCreating_and_triggering_events" alt="Logo" /> Mozilla - Creating and triggering events](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40vsvaibhav2016%2Fevent-bubbling-and-event-capturing-in-javascript-6ff38bec30e" alt="Logo" /> Event Bubbling and Event Capturing in JavaScript](https://medium.com/@vsvaibhav2016/event-bubbling-and-event-capturing-in-javascript-6ff38bec30e)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Fa-simplified-explanation-of-event-propagation-in-javascript-f9de7961a06e%2F" alt="Logo" /> Freecodecamp - A simplified explanation of event propagation](https://www.freecodecamp.org/news/a-simplified-explanation-of-event-propagation-in-javascript-f9de7961a06e/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fflaviocopes.com%2Fjavascript-events%2F" alt="Logo" /> JavaScript Events Explained](https://flaviocopes.com/javascript-events/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FEventTarget%2FaddEventListener" alt="Logo" /> Mozilla - addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FEventTarget%2FremoveEventListener" alt="Logo" /> Mozilla - removeEventListener(](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.quirksmode.org%2Fjs%2Fevents_order.html" alt="Logo" /> Event order](https://www.quirksmode.org/js/events_order.html)

### Objects

Learn how to create and use objects.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FLearn%2FJavaScript%2FObjects" alt="Logo" /> Mozilla - Introducing JavaScript objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FGuide%2FWorking_with_Objects" alt="Logo" /> Mozilla - Working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fjavascript.info%2Fobject" alt="Logo" /> javascript.info - Objects](https://javascript.info/object)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FOperators%2Fthis" alt="Logo" /> Mozilla - this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3schools.com%2Fjs%2Fjs_this.asp" alt="Logo" /> w3schools - The JavaScript this Keyword](https://www.w3schools.com/js/js_this.asp)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FFunction%2Fbind" alt="Logo" /> Mozilla - bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FOperators%2Fnew" alt="Logo" /> Mozilla - new operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FOperators%2Fnew.target" alt="Logo" /> Mozilla - new.target](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fscotch.io%2Fcourses%2F10-need-to-know-javascript-concepts%2Fdata-structures-objects-and-arrays" alt="Logo" /> Data Structures: Objects and Arrays](https://scotch.io/courses/10-need-to-know-javascript-concepts/data-structures-objects-and-arrays)

#### Prototype

Learn how to extend objects and functions through its prototype.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FInheritance_and_the_prototype_chain" alt="Logo" /> The prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Fbetter-programming%2Fprototypes-in-javascript-5bba2990e04b" alt="Logo" /> Prototypes in JavaScript](https://medium.com/better-programming/prototypes-in-javascript-5bba2990e04b)

##### Classes

Learn how to define and use classes. Get somewhat comfortable with some of the object oriented concepts such as inheritence and encapsulation.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FClasses" alt="Logo" /> Mozilla - Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40luke_smaki%2Fjavascript-es6-classes-8a34b0a6720a" alt="Logo" /> Medium - ES6 Classes](https://medium.com/@luke_smaki/javascript-es6-classes-8a34b0a6720a)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FLearn%2FJavaScript%2FObjects%2FInheritance" alt="Logo" /> Mozilla - Inheritance](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FLearn%2FJavaScript%2FObjects%2FObject-oriented_JS" alt="Logo" /> Mozilla - Object Oriented Programming](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FOperators%2Fsuper" alt="Logo" /> Mozilla - super](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super)

### Regex

Learn how to use regex to extract information from strings.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FGuide%2FRegular_Expressions" alt="Logo" /> Mozilla - Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fjavascript.info%2Fregular-expressions" alt="Logo" /> javascript.info - Regular expressions](https://javascript.info/regular-expressions)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FRegExp" alt="Logo" /> Mozilla - RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

### Template Literals

Learn how template literals and tagged templates and help you manipulate strings.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FTemplate_literals" alt="Logo" /> Mozilla - Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fhacks.mozilla.org%2F2015%2F05%2Fes6-in-depth-template-strings-2%2F" alt="Logo" /> Mozilla - ES6 In Depth: Template strings](https://hacks.mozilla.org/2015/05/es6-in-depth-template-strings-2/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Fupdates%2F2015%2F01%2FES6-Template-Strings" alt="Logo" /> Google Devs - Getting Literal With ES6 Template Strings](https://developers.google.com/web/updates/2015/01/ES6-Template-Strings)

### Promises

Learn how to use promises and what asynchronous code means.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fprimers%2Fpromises" alt="Logo" /> Google Devs - JavaScript Promises: an Introduction](https://developers.google.com/web/fundamentals/primers/promises)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FPromise" alt="Logo" /> Mozilla - Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Fjavascript-scene%2Fmaster-the-javascript-interview-what-is-a-promise-27fc71e77261" alt="Logo" /> Master the JavaScript Interview: What is a Promise?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261)

#### Callbacks

Learn how to use callbacks and why they are not always a good idea.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FGlossary%2FCallback_function" alt="Logo" /> Mozilla - Callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcodeburst.io%2Fjavascript-what-the-heck-is-a-callback-aba4da2deced" alt="Logo" /> JavaScript: What the heck is a Callback?](https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fjavascript.info%2Fcallbacks" alt="Logo" /> javascript.info - Callbacks](https://javascript.info/callbacks)

#### Async/await

Learn how to use the async and await keywords to make it easier to write asynchronous code.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FStatements%2Fasync_function" alt="Logo" /> Mozilla - async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fprimers%2Fasync-functions" alt="Logo" /> Google Devs - Async functions](https://developers.google.com/web/fundamentals/primers/async-functions)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fjavascript.info%2Fasync-await" alt="Logo" /> javascript.info - Async/await](https://javascript.info/async-await)

#### Fetch

Learn how to use the fetch API to fetch data.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Fupdates%2F2015%2F03%2Fintroduction-to-fetch" alt="Logo" /> Google Devs - Introduction to fetch](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Ftraining%2Fcertification%2Fmobile-web-specialist%2Fstudy-guide%2Fnetworking" alt="Logo" /> Google Devs - Networking](https://developers.google.com/training/certification/mobile-web-specialist/study-guide/networking)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Fa-practical-es6-guide-on-how-to-perform-http-requests-using-the-fetch-api-594c3d91a547%2F" alt="Logo" /> Freecodecamp - Fetch practical guide](https://www.freecodecamp.org/news/a-practical-es6-guide-on-how-to-perform-http-requests-using-the-fetch-api-594c3d91a547/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FHTTP%2FCORS" alt="Logo" /> Mozilla - CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Falligator.io%2Fjs%2Ffetch-api%2F" alt="Logo" /> Alligator - Fetch API](https://alligator.io/js/fetch-api/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DGiI77ya60yk" alt="Logo" /> Supercharged - Fetch](https://www.youtube.com/watch?v=GiI77ya60yk)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcodelabs.developers.google.com%2Fcodelabs%2Fpwa-fetch%2Findex.html%3Findex%3D..%252F..dev-pwa-training%230" alt="Logo" /> Codelabs - Fetch ](https://codelabs.developers.google.com/codelabs/pwa-fetch/index.html?index=..%2F..dev-pwa-training#0)

### Web Animations

Learn how to use web animations to animate elements in the DOM.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fdesign-and-ux%2Fanimations" alt="Logo" /> Google Devs - Animations](https://developers.google.com/web/fundamentals/design-and-ux/animations)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FWeb_Animations_API%2FUsing_the_Web_Animations_API" alt="Logo" /> Mozilla - Using The Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com%2Fcss-animations-vs-web-animations-api%2F" alt="Logo" /> CSS Tricks - CSS Animations vs Web Animations API](https://css-tricks.com/css-animations-vs-web-animations-api/)

### Modules

Learn how to modularize your code into ES6 modules using the export and import keywords.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FStatements%2Fexport" alt="Logo" /> Mozilla - Export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FStatements%2Fimport" alt="Logo" /> Mozilla - Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fv8.dev%2Ffeatures%2Fmodules" alt="Logo" /> V8 - Modules](https://v8.dev/features/modules)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Fhow-to-use-es6-modules-and-why-theyre-important-a9b20b480773%2F" alt="Logo" /> Freecodecamp - A Practical guide to ES6 modules](https://www.freecodecamp.org/news/how-to-use-es6-modules-and-why-theyre-important-a9b20b480773/)

### Intl

Learn how to localize your website using the Intl API.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FIntl" alt="Logo" /> Mozilla - Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FDateTimeFormat" alt="Logo" /> Mozilla - Date Time Format](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fblog.bitsrc.io%2Fnew-intl-apis-in-javascript-c50dc89d2cf3" alt="Logo" /> New Intl APIs in JavaScript](https://blog.bitsrc.io/new-intl-apis-in-javascript-c50dc89d2cf3)

### Canvas

Learn how to paint graphics onto a canvas.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FCanvas_API%2FTutorial" alt="Logo" /> Mozilla - Canvas tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FCanvas_API" alt="Logo" /> Mozilla - Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com%2Fmanipulating-pixels-using-canvas%2F" alt="Logo" /> CSS Tricks - Manipulating Pixels Using Canvas](https://css-tricks.com/manipulating-pixels-using-canvas/)

### Documentation

Learn how to create good documentation and why it is important.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fjsdoc.app%2Fabout-getting-started.html" alt="Logo" /> Getting Started with JSDoc](https://jsdoc.app/about-getting-started.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.writethedocs.org%2Fguide%2Fwriting%2Fbeginners-guide-to-docs%2F" alt="Logo" /> A beginner’s guide to writing documentation](https://www.writethedocs.org/guide/writing/beginners-guide-to-docs/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fhackernoon.com%2Fwrite-good-documentation-6caffb9082b4" alt="Logo" /> Write Good Documentation](https://hackernoon.com/write-good-documentation-6caffb9082b4)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to%2Fgmartigny%2Fthe-power-of-jsdoc-272d" alt="Logo" /> The power of jsDoc](https://dev.to/gmartigny/the-power-of-jsdoc-272d)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to%2Fpaulasantamaria%2Fdocument-your-javascript-code-with-jsdoc-2fbf" alt="Logo" /> Document your Javascript code with JSDoc](https://dev.to/paulasantamaria/document-your-javascript-code-with-jsdoc-2fbf)

### Best Practices

Learn the best practices of writing Javascript.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3schools.com%2Fjs%2Fjs_best_practices.asp" alt="Logo" /> w3schools - JS Best Practices](https://www.w3schools.com/js/js_best_practices.asp)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com%2Fairbnb%2Fjavascript" alt="Logo" /> Airbnb - JavaScript Style Guide](https://github.com/airbnb/javascript)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com%2Frwaldron%2Fidiomatic.js%2F" alt="Logo" /> Principles of Writing Consistent, Idiomatic JavaScript](https://github.com/rwaldron/idiomatic.js/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcodeburst.io%2F5-javascript-style-guides-including-airbnb-github-google-88cbc6b2b7aa" alt="Logo" /> 5 JavaScript Style Guides](https://codeburst.io/5-javascript-style-guides-including-airbnb-github-google-88cbc6b2b7aa)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3schools.com%2Fjs%2Fjs_conventions.asp" alt="Logo" /> JavaScript Style Guide and Coding Conventions](https://www.w3schools.com/js/js_conventions.asp)


### The Browser

### Standardization

Learn why web standards are important and how new specifications are standardised.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FWeb_standards" alt="Logo" /> Wikipedia - Web Standards](https://en.wikipedia.org/wiki/Web_standards)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.elcom.com.au%2Fresources%2Fblog%2Fweb-standards" alt="Logo" /> What Are Web Standards?](https://www.elcom.com.au/resources/blog/web-standards)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Frobertnyman.com%2F2007%2F05%2F21%2Fwhat-are-web-standards-a-comprehensive-explanation-of-what-is-comprised-in-the-term%2F" alt="Logo" /> A Comprehensive Explanation of Web Standards](https://robertnyman.com/2007/05/21/what-are-web-standards-a-comprehensive-explanation-of-what-is-comprised-in-the-term/)

#### W3C

Learn what W3C are doing and how they are moving the web forward.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3.org%2Fstandards%2Fabout.html" alt="Logo" /> W3C - About](https://www.w3.org/standards/about.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3.org%2Fstandards%2F" alt="Logo" /> W3C - Standards](https://www.w3.org/standards/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fwebdiy.org%2Fw3c%2F" alt="Logo" /> W3C - Process](http://webdiy.org/w3c/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.smashingmagazine.com%2F2019%2F01%2Fweb-standards-guide%2F" alt="Logo" /> Web Standards Guide](https://www.smashingmagazine.com/2019/01/web-standards-guide/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3.org%2Fcommunity%2Fgroups%2F" alt="Logo" /> W3C - Groups](https://www.w3.org/community/groups/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.smashingmagazine.com%2F2019%2F10%2Fhappy-birthday-w3c%2F" alt="Logo" /> The W3C At Twenty-Five](https://www.smashingmagazine.com/2019/10/happy-birthday-w3c/)

#### TC39

Learn what TC39 are doing and how they are moving the web forward.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2F2ality.com%2F2015%2F11%2Ftc39-process.html" alt="Logo" /> The TC39 process for ECMAScript features](https://2ality.com/2015/11/tc39-process.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com%2Ftc39" alt="Logo" /> Github - TC39](https://github.com/tc39)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.ecma-international.org%2Fmemento%2Ftc39.htm" alt="Logo" /> Ecma International - Programme of work](https://www.ecma-international.org/memento/tc39.htm)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FEcma_International" alt="Logo" /> Wikipedia - Ecma International](https://en.wikipedia.org/wiki/Ecma_International)

#### WHATWG

Learn what WHATWG are doing and how they are moving the web forward.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwhatwg.org%2Ffaq" alt="Logo" /> WHATWG - FAQ](https://whatwg.org/faq)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fspec.whatwg.org%2F" alt="Logo" /> WHATWG - Standards](https://spec.whatwg.org/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FGlossary%2FWHATWG" alt="Logo" /> Mozilla - WHATWG](https://developer.mozilla.org/en-US/docs/Glossary/WHATWG)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdzone.com%2Farticles%2Fw3c-vs-whatwg-html5-specs" alt="Logo" /> W3C vs. WHATWG HTML5 Specs](https://dzone.com/articles/w3c-vs-whatwg-html5-specs)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fhtml.spec.whatwg.org%2F" alt="Logo" /> WHATWG - HTML](https://html.spec.whatwg.org/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FWHATWG" alt="Logo" /> Wikipedia - WHATWG](https://en.wikipedia.org/wiki/WHATWG)

#### Specifications

Learn how to read specifications developed by the standards committees.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Ftimothygu.me%2Fes-howto%2F" alt="Logo" /> How to Read the ECMAScript Specification](https://timothygu.me/es-howto/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Falistapart.com%2Farticle%2Freadspec%2F" alt="Logo" /> How to Read W3C Specs](https://alistapart.com/article/readspec/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.chenhuijing.com%2Fblog%2Flearning-css-by-reading-specifications%2F" alt="Logo" /> Learning CSS by reading specs](https://www.chenhuijing.com/blog/learning-css-by-reading-specifications/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3.org%2FStyle%2FCSS%2Fread.en.html" alt="Logo" /> Understanding the CSS Specifications](https://www.w3.org/Style/CSS/read.en.html)

### Browser Engines

Learn what a browser engine is and get an overview of the browser landscape and market share.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40jonbiro%2Fbrowser-engines-chromium-v8-blink-gecko-webkit-98d6b0490968" alt="Logo" /> Medium - Browser Engines](https://medium.com/@jonbiro/browser-engines-chromium-v8-blink-gecko-webkit-98d6b0490968)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FComparison_of_browser_engines" alt="Logo" /> Wikipedia - Comparison](https://en.wikipedia.org/wiki/Comparison_of_browser_engines)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.html5rocks.com%2Fen%2Ftutorials%2Finternals%2Fhowbrowserswork%2F" alt="Logo" /> HTML5 Rocks - How Browsers Work](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/)

#### Webkit

Learn about the Webkit browser engine.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebkit.org%2F" alt="Logo" /> Webkit](https://webkit.org/)

#### Blink

Learn about the Blink browser engine.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBlink_(browser_engine)" alt="Logo" /> Blink](https://en.wikipedia.org/wiki/Blink_(browser_engine))

#### Gecko

Learn about the Gecko browser engine.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGecko_(software)" alt="Logo" /> Gecko](https://en.wikipedia.org/wiki/Gecko_(software))

#### Servo

Learn about the Servo browser engine.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fresearch.mozilla.org%2Fservo-engines%2F" alt="Logo" /> Servo](https://research.mozilla.org/servo-engines/)

### HTTP

Learn how data is distributed through the HTTP protocol.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FHTTP" alt="Logo" /> Mozilla - HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FGlossary%2FHTTP" alt="Logo" /> Mozilla - HTTP Glossary](https://developer.mozilla.org/en-US/docs/Glossary/HTTP)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FHTTP%2FOverview" alt="Logo" /> Mozilla - An overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHypertext_Transfer_Protocol" alt="Logo" /> Wikipedia - Hypertext Transfer Protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)

### The Internet

Learn the basics of how the internet works.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FLearn%2FCommon_questions%2FHow_does_the_Internet_work" alt="Logo" /> Mozilla - How does the Internet work?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D7_LPdttKXPc" alt="Logo" /> Youtube - How the Internet Works in 5 Minutes](https://www.youtube.com/watch?v=7_LPdttKXPc)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.explainthatstuff.com%2Finternet.html" alt="Logo" /> Explain That Stuff - Internet](https://www.explainthatstuff.com/internet.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.stanford.edu%2Fclass%2Fmsande91si%2Fwww-spr04%2Freadings%2Fweek1%2FInternetWhitepaper.htm" alt="Logo" /> Stanford - How Does the Internet Work?](https://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fblog.hubspot.com%2Fmarketing%2Fhow-the-internet-works" alt="Logo" /> How the Internet Works](https://blog.hubspot.com/marketing/how-the-internet-works)

### Polyfills

Learn how it is possible to use polyfills to increase the browser support for your website.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FGlossary%2FPolyfill" alt="Logo" /> Mozilla - Polyfill](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Fbeginners-guide-to-mobile-web-development%2Fintroduction-to-polyfills-their-usage-9cd6db4b1923" alt="Logo" /> Introduction To Polyfills & Their Usage](https://medium.com/beginners-guide-to-mobile-web-development/introduction-to-polyfills-their-usage-9cd6db4b1923)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3.org%2F2001%2Ftag%2Fdoc%2Fpolyfills%2F" alt="Logo" /> W3C - Polyfills and the evolution of the Web](https://www.w3.org/2001/tag/doc/polyfills/)

### Debugging

Learn about the basics concepts of debugging.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ftools%2Fchrome-devtools%2Finspect-styles%2F" alt="Logo" /> Google Devs - Inspect and Edit Pages and Styles](https://developers.google.com/web/tools/chrome-devtools/inspect-styles/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FLearn%2FTools_and_testing%2FCross_browser_testing" alt="Logo" /> Mozilla - Cross browser testing](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Fdev-bits%2F5-things-to-remember-for-better-debugging-of-your-code-94b9bc3fb3df" alt="Logo" /> 5 things to remember for better debugging of your code](https://medium.com/dev-bits/5-things-to-remember-for-better-debugging-of-your-code-94b9bc3fb3df)

#### Developer console

Learn how to use the developer console of your favorite browser.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FConsole" alt="Logo" /> Mozilla - Console](https://developer.mozilla.org/en-US/docs/Web/API/Console)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ftools%2Fchrome-devtools%2Fconsole%2Fapi" alt="Logo" /> Google Devs - Console API Reference](https://developers.google.com/web/tools/chrome-devtools/console/api)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ftools%2Fchrome-devtools%2Fjavascript" alt="Logo" /> Google Devs - Get Started with Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/javascript)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ftools%2Fchrome-devtools%2Fconsole%2Futilities" alt="Logo" /> Google Devs - Console Utilities API Reference](https://developers.google.com/web/tools/chrome-devtools/console/utilities)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FLearn%2FCSS%2FBuilding_blocks%2FDebugging_CSS" alt="Logo" /> Mozilla - Debugging CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FLearn%2FHTML%2FIntroduction_to_HTML%2FDebugging_HTML" alt="Logo" /> Mozilla - Debugging HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fjavascript.info%2Fdebugging-chrome" alt="Logo" /> javascript.info - Debugging in Chrome](https://javascript.info/debugging-chrome)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fraygun.com%2Fjavascript-debugging-tips" alt="Logo" /> 14 JavaScript debugging tips](https://raygun.com/javascript-debugging-tips)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fflaviocopes.com%2Fjavascript-debugging%2F" alt="Logo" /> The definitive guide to debugging JavaScript](https://flaviocopes.com/javascript-debugging/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DH0XScE08hy8" alt="Logo" /> Youtube - Chrome DevTools 101](https://www.youtube.com/watch?v=H0XScE08hy8)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Fupdates%2F2015%2F05%2Fquickly-monitor-events-from-the-console-panel" alt="Logo" /> Chrome Devs - Quickly monitor events](https://developers.google.com/web/updates/2015/05/quickly-monitor-events-from-the-console-panel)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DxkzDaKwinA8" alt="Logo" /> Youtube - 14 Must Know Chrome Dev Tools Tricks](https://www.youtube.com/watch?v=xkzDaKwinA8)



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#accessibility)

## ➤ Accessibility

### The why

Learn what accessibility is and why it is important.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Faccessibility%2F" alt="Logo" /> Google Devs - Accessibility Fundamentals](https://developers.google.com/web/fundamentals/accessibility/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fplaylist%3Flist%3DPLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g" alt="Logo" /> A11ycasts with Rob Dodson](https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fudacity.github.io%2Fud891%2Flesson3-semantics-built-in%2F02-chromevox-lite%2F" alt="Logo" /> Udacity - Chromevox Lite](http://udacity.github.io/ud891/lesson3-semantics-built-in/02-chromevox-lite/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to%2Flhoffmanwg1%2Fwhy-accessibility-matters-39nl" alt="Logo" /> Dev.to - Why Accessibility Matters](https://dev.to/lhoffmanwg1/why-accessibility-matters-39nl)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.abilitynet.org.uk%2Fwhy-accessibility-matters" alt="Logo" /> Abilitynet - Why Accessibility Matters](https://www.abilitynet.org.uk/why-accessibility-matters)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.udacity.com%2Fcourse%2Fweb-accessibility--ud891" alt="Logo" /> Udacity - Web Accessibility](https://www.udacity.com/course/web-accessibility--ud891)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DHE2R86EZPMA" alt="Logo" /> Youtube - Headings, Landmarks, and Tabs](https://www.youtube.com/watch?v=HE2R86EZPMA)

### Screen Readers

Learn about assistive technology such as screen readers that reads sections of the page aloud based on the current focus.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fa11yproject.com%2Fposts%2Fpeople-who-use-screen-readers-dont-use-javascript%2F" alt="Logo" /> The A11Y Project - Screen Reader Myths](https://a11yproject.com/posts/people-who-use-screen-readers-dont-use-javascript/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fa11yproject.com%2Fposts%2Fgetting-started-with-nvda%2F" alt="Logo" /> The A11Y Project - NVDA Screen Reader](https://a11yproject.com/posts/getting-started-with-nvda/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fa11yproject.com%2Fposts%2Fgetting-started-with-voiceover%2F" alt="Logo" /> The A11Y Project - OS X Voiceover](https://a11yproject.com/posts/getting-started-with-voiceover/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org%2Fprojects%2Fscreenreadersurvey7%2F" alt="Logo" /> Webaim - Screen Reader Survey](https://webaim.org/projects/screenreadersurvey7/)

### Accessibility tree

Learn about the accessibility tree and how assistive technology uses it.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Faccessibility%2Fsemantics-builtin%2Fthe-accessibility-tree" alt="Logo" /> Google Devs - The Accessibility Tree](https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/the-accessibility-tree)

#### ARIA

Learn how to use ARIA descriptions an labels to help assstive technology understanding your website.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Faccessibility%2Fsemantics-aria%2Faria-labels-and-relationships" alt="Logo" /> Google Devs - ARIA Labels](https://developers.google.com/web/fundamentals/accessibility/semantics-aria/aria-labels-and-relationships)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Faccessibility%2Fsemantics-aria%2Fhiding-and-updating-content" alt="Logo" /> Google Devs - Hiding and updating content](https://developers.google.com/web/fundamentals/accessibility/semantics-aria/hiding-and-updating-content)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fa11yproject.com%2Fposts%2FARIA-states%2F" alt="Logo" /> The A11Y Project - ARIA States](https://a11yproject.com/posts/ARIA-states/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fa11yproject.com%2Fposts%2FARIA-properties%2F" alt="Logo" /> The A11Y Project - ARIA Properties](https://a11yproject.com/posts/ARIA-properties/)

#### Accessible HTML

Learn how to write HTML in such as way that assistive technology better understands it.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Faccessibility%2Fsemantics-builtin%2F" alt="Logo" /> Google Devs - Introduction to Semantics](https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FLearn%2FAccessibility%2FHTML" alt="Logo" /> Mozilla - Accessibility HTML](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org%2Ftechniques%2Fskipnav%2F" alt="Logo" /> Webaim - Skip navigation](https://webaim.org/techniques/skipnav/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3.org%2FWAI%2Ftutorials%2Fpage-structure%2Fheadings%2F" alt="Logo" /> w3c - Headings](https://www.w3.org/WAI/tutorials/page-structure/headings/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fguide.freecodecamp.org%2Fhtml%2Fhtml5-semantic-elements%2F" alt="Logo" /> Freecodecamp - Semantic Elements](https://guide.freecodecamp.org/html/html5-semantic-elements/)

##### Alt text

Learn how to use the alt attribute to provide a useful text alternative to this image.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Faccessibility%2Fsemantics-builtin%2Ftext-alternatives-for-images" alt="Logo" /> Google Devs - Text Alternatives for Images](https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/text-alternatives-for-images)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org%2Ftechniques%2Fimages%2F" alt="Logo" /> Webaim - Accessible Images](https://webaim.org/techniques/images/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org%2Ftechniques%2Falttext%2F" alt="Logo" /> Webaim - Alternative text](https://webaim.org/techniques/alttext/)

#### Accessible CSS

Learn how to write CSS in such as way that assistive technology better understands it.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org%2Ftechniques%2Fcss%2F" alt="Logo" /> Webaim - CSS](https://webaim.org/techniques/css/)

### Accessible forms

Learn how to build accessible forms that makes it usable to as many people as possible.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org%2Ftechniques%2Fforms%2F" alt="Logo" /> Webaim - Forms](https://webaim.org/techniques/forms/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fitnext.io%2Fform-accessibility-a-practical-guide-4062b7e2dd14" alt="Logo" /> Itnext - Form Accessibility Gudie](https://itnext.io/form-accessibility-a-practical-guide-4062b7e2dd14)

### UI States

Learn how to make the state of each UI element clear.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Faccessibility%2Faccessible-styles" alt="Logo" /> Google Devs - Accessible Styles](https://developers.google.com/web/fundamentals/accessibility/accessible-styles)

### Keyboard Accessibility

Learn how to make it easy for keyboard users to navigate your site.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org%2Ftechniques%2Fkeyboard%2F" alt="Logo" /> Webaim - Keyboard](https://webaim.org/techniques/keyboard/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.smashingmagazine.com%2F2018%2F07%2Fweb-with-just-a-keyboard%2F" alt="Logo" /> Smashing Magazine - Web with just a keyboard](https://www.smashingmagazine.com/2018/07/web-with-just-a-keyboard/)

#### Focus

Learn how to create a sensible tab order and how to make it easy for the users to locate the currently focused element.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Faccessibility%2Ffocus%2F" alt="Logo" /> Google Devs - Focus](https://developers.google.com/web/fundamentals/accessibility/focus/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Faccessibility%2Ffocus%2Fdom-order-matters" alt="Logo" /> Google Devs - Dom Order Matters](https://developers.google.com/web/fundamentals/accessibility/focus/dom-order-matters)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Faccessibility%2Ffocus%2Fusing-tabindex" alt="Logo" /> Google Devs - Using Tabindex](https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ftools%2Fchrome-devtools%2Faccessibility%2Ffocus" alt="Logo" /> Google Devs - Track Focus](https://developers.google.com/web/tools/chrome-devtools/accessibility/focus)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdrafts.csswg.org%2Fselectors-4%2F%23the-focus-visible-pseudo" alt="Logo" /> W3C - :focus-visible](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo)

### Accessible Colors

Learn how to select colors in such a way that users, including those with visual disabilities, can perceive the content on the page.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org%2Farticles%2Fcontrast%2F" alt="Logo" /> Webaim - Contrast and Color](https://webaim.org/articles/contrast/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fa11yproject.com%2Fposts%2Fcheck-contrast-with-mobile-device%2F" alt="Logo" /> The A11Y Project - Check contrast](https://a11yproject.com/posts/check-contrast-with-mobile-device/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fa11yproject.com%2Fposts%2Fwhat-is-color-contrast%2F" alt="Logo" /> The A11Y Project - What is color contrast?](https://a11yproject.com/posts/what-is-color-contrast/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fstripe.com%2Fen-dk%2Fblog%2Faccessible-color-systems" alt="Logo" /> Designing accessible color systems](https://stripe.com/en-dk/blog/accessible-color-systems)

### Laws & Policies

Learn about the governmental policies related to web accessibility.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3.org%2FWAI%2Fpolicies%2F" alt="Logo" /> W3C - Laws & Policies](https://www.w3.org/WAI/policies/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org%2Farticles%2Flaws%2Fworld%2F" alt="Logo" /> Webaim - Laws around the world](https://webaim.org/articles/laws/world/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org%2Fstandards%2F508%2Fchecklist" alt="Logo" /> Webaim - Section 508](https://webaim.org/standards/508/checklist)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org%2Fstandards%2Fwcag%2Fchecklist" alt="Logo" /> Webaim - WCAG 2 Checklist](https://webaim.org/standards/wcag/checklist)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fa11y.dev%2F470-digital-accessibility-cases-were-filed-in-q3-2018%2F" alt="Logo" /> A11Y.dev - Lawsuits](https://a11y.dev/470-digital-accessibility-cases-were-filed-in-q3-2018/)

#### Audits

Learn how to conduct an accessibility review to improve the overall experience of using your site. Remember, good accessibility equals good UX!

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev%2Flighthouse-accessibility" alt="Logo" /> web.dev - Accessibility audits](https://web.dev/lighthouse-accessibility)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Faccessibility%2Fhow-to-review" alt="Logo" /> Google Devs - How to review](https://developers.google.com/web/fundamentals/accessibility/how-to-review)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org%2Farticles%2Ftools%2F" alt="Logo" /> Webaim - Accessibility Tools](https://webaim.org/articles/tools/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ftools%2Fchrome-devtools%2Faccessibility%2Freference" alt="Logo" /> Google Devs - Accessibility Reference](https://developers.google.com/web/tools/chrome-devtools/accessibility/reference)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fwave.webaim.org%2F" alt="Logo" /> Webaim - Wave](http://wave.webaim.org/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fchrome.google.com%2Fwebstore%2Fdetail%2Fnocoffee%2Fjjeeggmbnhckmgdhmgdckeigabjfbddl" alt="Logo" /> Google Chrome - NoCoffee Extension](https://chrome.google.com/webstore/detail/nocoffee/jjeeggmbnhckmgdhmgdckeigabjfbddl)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.digitala11y.com%2Faccessibility-plug-ins-ie-chrome-firefox-browsers%2F" alt="Logo" /> Digital A11Y - Accessibility Plugins](https://www.digitala11y.com/accessibility-plug-ins-ie-chrome-firefox-browsers/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Faccessibility%2Fa11y-for-teams" alt="Logo" /> Google Devs - Accessibility for teams](https://developers.google.com/web/fundamentals/accessibility/a11y-for-teams)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.wuhcag.com%2Fwcag-checklist%2F" alt="Logo" /> WCAG 2.0 checklists](https://www.wuhcag.com/wcag-checklist/)



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#web-components)

## ➤ Web Components

### Custom Elements

Learn how to create new HTML tags with custom elements.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fweb-components%2Fcustomelements" alt="Logo" /> Google Devs - Custom Elements](https://developers.google.com/web/fundamentals/web-components/customelements)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FWeb_Components%2FUsing_custom_elements" alt="Logo" /> Mozilla - Using Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com%2Fcreating-a-custom-element-from-scratch%2F" alt="Logo" /> CSS Tricks - Creating a Custom Element from Scratch](https://css-tricks.com/creating-a-custom-element-from-scratch/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fjavascript.info%2Fcustom-elements" alt="Logo" /> Javascript.info - Custom Elements](https://javascript.info/custom-elements)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to%2Fjamesrweb%2Fan-introduction-to-custom-elements-5327" alt="Logo" /> dev.to - An introduction to Custom Elements](https://dev.to/jamesrweb/an-introduction-to-custom-elements-5327)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fitnext.io%2Fintroduction-to-web-components-part-i-custom-elements-4de6713cef9d" alt="Logo" /> itnext - Introduction to Web Components](https://itnext.io/introduction-to-web-components-part-i-custom-elements-4de6713cef9d)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev%2Fweb-components-io-2019%2F" alt="Logo" /> web.dev - Web Components](https://web.dev/web-components-io-2019/)

### HTML Templates

Learn how to use HTML templates to create a flexible template that can then be used to populate the shadow DOM.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FWeb_Components%2FUsing_templates_and_slots" alt="Logo" /> Mozilla - Using Templates & Slots](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fjavascript.info%2Ftemplate-element" alt="Logo" /> Javascript.info - Template Element](https://javascript.info/template-element)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FHTML%2FElement%2Ftemplate" alt="Logo" /> Mozilla - The Content Template element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)

### Shadow DOM

Learn how to encapsulate your CSS using shadow dom.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fweb-components%2Fshadowdom" alt="Logo" /> Google Devs - Shadow DOM](https://developers.google.com/web/fundamentals/web-components/shadowdom)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FWeb_Components%2FUsing_shadow_DOM" alt="Logo" /> Mozilla - Using Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FGlossary%2FShadow_tree" alt="Logo" /> Mozilla - Shadow Tree](https://developer.mozilla.org/en-US/docs/Glossary/Shadow_tree)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com%2Fencapsulating-style-and-structure-with-shadow-dom%2F" alt="Logo" /> CSS Tricks - Encapsulating Style and Structure](https://css-tricks.com/encapsulating-style-and-structure-with-shadow-dom/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fitnext.io%2Fintroduction-to-web-components-part-ii-shadow-dom-8d1d8e126332" alt="Logo" /> itnext - Introduction to Web Components](https://itnext.io/introduction-to-web-components-part-ii-shadow-dom-8d1d8e126332)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmeowni.ca%2Fposts%2Fshadow-dom%2F" alt="Logo" /> Monica - Shadow DOM: fast and encapsulated styles](https://meowni.ca/posts/shadow-dom/)

#### Shadow Parts

Learn how to style the inside of a shadow tree from outside of that shadow tree by using shadow parts.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com%2Ffergald%2Fdocs%2Fblob%2Fmaster%2Fexplainers%2Fcss-shadow-parts-1.md" alt="Logo" /> Fergald - CSS Shadow ::part and ::theme](https://github.com/fergald/docs/blob/master/explainers/css-shadow-parts-1.md)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FCSS%2F%3A%3Apart" alt="Logo" /> Mozilla - ::part](https://developer.mozilla.org/en-US/docs/Web/CSS/::part)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3.org%2FTR%2Fcss-shadow-parts-1%2F" alt="Logo" /> W3C - CSS Shadow Parts](https://www.w3.org/TR/css-shadow-parts-1/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmeowni.ca%2Fposts%2Fpart-theme-explainer%2F" alt="Logo" /> Monica - ::part and ::theme, an explainer](https://meowni.ca/posts/part-theme-explainer/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DyVrvOueeb3s" alt="Logo" /> Youtube - CSS Shadow Parts](https://www.youtube.com/watch?v=yVrvOueeb3s)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.chromestatus.com%2Ffeatures%2F5763933658939392" alt="Logo" /> Chrome Status - ::part and ::theme](https://www.chromestatus.com/features/5763933658939392)

#### Slots

Learn how to compose custom elements by using slots.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Falligator.io%2Fweb-components%2Fcomposing-slots-named-slots%2F" alt="Logo" /> Alligator.io - Composing Custom Elements](https://alligator.io/web-components/composing-slots-named-slots/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fjavascript.info%2Fslots-composition" alt="Logo" /> Javascript.info - Slots Composition](https://javascript.info/slots-composition)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FHTML%2FElement%2Fslot" alt="Logo" /> Mozilla - HTML <slot> element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcomponent.kitchen%2Fblog%2Fposts%2Fa-history-of-the-html-slot-element" alt="Logo" /> Component.kitchen - A history of the HTML slot element](https://component.kitchen/blog/posts/a-history-of-the-html-slot-element)

### Constructible Stylesheets

Learn how to use constructible stylesheets to create reusable styles when using shadow dom.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Fupdates%2F2019%2F02%2Fconstructable-stylesheets" alt="Logo" /> Google Devs - Constructable Stylesheets](https://developers.google.com/web/updates/2019/02/constructable-stylesheets)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwicg.github.io%2Fconstruct-stylesheets%2F" alt="Logo" /> W3C - Constructable Stylesheet Objects](https://wicg.github.io/construct-stylesheets/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to%2Fwestbrook%2Fwhy-would-anyone-use-constructible-stylesheets-anyways-19ng" alt="Logo" /> dev.to - Why Would Anyone Use Constructible Stylesheets](https://dev.to/westbrook/why-would-anyone-use-constructible-stylesheets-anyways-19ng)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Fswlh%2Fadopt-a-design-system-inside-your-web-components-with-constructable-stylesheets-dd24649261e" alt="Logo" /> Benjamin Farrel - Adopt a Design System](https://medium.com/swlh/adopt-a-design-system-inside-your-web-components-with-constructable-stylesheets-dd24649261e)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com%2FWICG%2Fconstruct-stylesheets%2Fblob%2Fgh-pages%2Fexplainer.md" alt="Logo" /> WICG - Constructable Stylesheet Objects](https://github.com/WICG/construct-stylesheets/blob/gh-pages/explainer.md)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.chromestatus.com%2Ffeature%2F5394843094220800" alt="Logo" /> Chrome Status - Constructible Stylesheets](https://www.chromestatus.com/feature/5394843094220800)

### Best practices

Get familiar with best practices when it comes to building web components.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fweb-components%2Fbest-practices" alt="Logo" /> Google Devs - Custom Element Best Practices](https://developers.google.com/web/fundamentals/web-components/best-practices)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.webcomponents.org%2Fcommunity%2Farticles%2Fweb-components-best-practices" alt="Logo" /> Webcomponents.org - Web Components Best Practices](https://www.webcomponents.org/community/articles/web-components-best-practices)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com%2Fmateusortiz%2Fwebcomponents-the-right-way" alt="Logo" /> mateusortiz - Web Components the Right Way](https://github.com/mateusortiz/webcomponents-the-right-way)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to%2Fequinusocio%2Fmaking-web-components-for-different-contexts-25ed" alt="Logo" /> dev.to - Making Web Components for Different Contexts](https://dev.to/equinusocio/making-web-components-for-different-contexts-25ed)

### Form Participation

Learn how the form participation API proposal enables elements, other than built-in form control elements, to participate in form submission and validation.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com%2Fdocument%2Fd%2F1JO8puctCSpW-ZYGU8lF-h4FWRIDQNDVexzHoOQ2iQmY%2Fedit" alt="Logo" /> Form Participation API Explained](https://docs.google.com/document/d/1JO8puctCSpW-ZYGU8lF-h4FWRIDQNDVexzHoOQ2iQmY/edit)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.chromestatus.com%2Ffeatures%2F4708990554472448" alt="Logo" /> Chrome Status - Form-associated custom elements](https://www.chromestatus.com/features/4708990554472448)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com%2Fweb-platform-tests%2Fwpt%2Ftree%2Fmaster%2Fcustom-elements%2Fform-associated" alt="Logo" /> web-platform-tests - Form Participation](https://github.com/web-platform-tests/wpt/tree/master/custom-elements/form-associated)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Fupdates%2F2019%2F09%2Fnic77%23form-associated_custom_elements" alt="Logo" /> Google Devs - Form-associated custom elements](https://developers.google.com/web/updates/2019/09/nic77#form-associated_custom_elements)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev%2Fmore-capable-form-controls%2F" alt="Logo" /> web.dev - More capable form controls](https://web.dev/more-capable-form-controls/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fhtml.spec.whatwg.org%2Fmultipage%2Fcustom-elements.html%23custom-elements-face-example" alt="Logo" /> W3C - Creating a form-associated custom element](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements-face-example)



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#progressive-webapps)

## ➤ Progressive Webapps

### API's

### Storage

Learn how to store data for your web app.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FStorage_API" alt="Logo" /> Mozilla - Storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FWeb_Storage_API" alt="Logo" /> Mozilla - Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FHTTP%2FCookies" alt="Logo" /> Mozilla - Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FIndexedDB_API" alt="Logo" /> Mozilla - IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ftools%2Fchrome-devtools%2Fstorage%2Flocalstorage" alt="Logo" /> Google Devs - View And Edit Local Storage](https://developers.google.com/web/tools/chrome-devtools/storage/localstorage)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FLearn%2FJavaScript%2FClient-side_web_APIs%2FClient-side_storage" alt="Logo" /> Mozilla - Client-side storage](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)

### Routing

Learn what routing means in single page applications.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fblog.pshrmn.com%2Fhow-single-page-applications-work%2F" alt="Logo" /> How Single-Page Applications Work](https://blog.pshrmn.com/how-single-page-applications-work/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fstaticapps.org%2Farticles%2Frouting-urls-in-static-apps%2F" alt="Logo" /> Static Apps - Routing URLs in Static Web Apps](https://staticapps.org/articles/routing-urls-in-static-apps/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fpennyforyourcode.com%2Ftldr-routing-with-single-page-applications-or-client-side-routing-327626cdc5dd" alt="Logo" /> Routing With Single Page Applications or Client Side Routing](https://pennyforyourcode.com/tldr-routing-with-single-page-applications-or-client-side-routing-327626cdc5dd)

#### History API

Learn how to use the history API to add single page applicaiton routing to your web app.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FHistory_API%2FWorking_with_the_History_API" alt="Logo" /> Mozilla - Working with the History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API/Working_with_the_History_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FHistory_API" alt="Logo" /> Mozilla - History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40george.norberg%2Fhistory-api-getting-started-36bfc82ddefc" alt="Logo" /> Single-page application routing in vanilla JavaScript](https://medium.com/@george.norberg/history-api-getting-started-36bfc82ddefc)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com%2Fusing-the-html5-history-api%2F" alt="Logo" /> CSS Tricks - Using the HTML5 History API](https://css-tricks.com/using-the-html5-history-api/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fflaviocopes.com%2Fhistory-api%2F" alt="Logo" /> The History API](https://flaviocopes.com/history-api/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Fupdates%2F2015%2F09%2Fhistory-api-scroll-restoration" alt="Logo" /> Google Devs - History API: Scroll Restoration](https://developers.google.com/web/updates/2015/09/history-api-scroll-restoration)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FHTML%2FElement%2Fbase" alt="Logo" /> Mozilla - The Document Base URL element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base)

### Service Workers

Learn how to register a service worker to provide a rich native-like experience.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fprimers%2Fservice-workers" alt="Logo" /> Google Devs - Service Workers: an Introduction](https://developers.google.com/web/fundamentals/primers/service-workers)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fprimers%2Fservice-workers%2Flifecycle" alt="Logo" /> Google Devs - The Service Worker Lifecycle](https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fprimers%2Fservice-workers%2Fregistration" alt="Logo" /> Google Devs - Service Worker Registration](https://developers.google.com/web/fundamentals/primers/service-workers/registration)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FService_Worker_API%2FUsing_Service_Workers" alt="Logo" /> Mozilla - Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fprimers%2Fservice-workers%2Fhigh-performance-loading" alt="Logo" /> Google Devs - High-performance service worker loading](https://developers.google.com/web/fundamentals/primers/service-workers/high-performance-loading)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcodelabs.developers.google.com%2Fcodelabs%2Fpwa-scripting-the-service-worker%2Findex.html%3Findex%3D..%252F..dev-pwa-training%230" alt="Logo" /> Codelabs - Scripting the service worker](https://codelabs.developers.google.com/codelabs/pwa-scripting-the-service-worker/index.html?index=..%2F..dev-pwa-training#0)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcodelabs.developers.google.com%2Fcodelabs%2Fpwa-caching-service-worker%2Findex.html%3Findex%3D..%252F..dev-pwa-training%230" alt="Logo" /> Codelabs - Caching files with the service worker](https://codelabs.developers.google.com/codelabs/pwa-caching-service-worker/index.html?index=..%2F..dev-pwa-training#0)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fcodelabs%2Foffline" alt="Logo" /> Codelabs - Adding a Service Worker](https://developers.google.com/web/fundamentals/codelabs/offline)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fcodelabs%2Fdebugging-service-workers" alt="Logo" /> Google Devs - Debugging Service Workers](https://developers.google.com/web/fundamentals/codelabs/debugging-service-workers)

#### Offline first

Learn how to make your web app working offline with an offline first approach.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Finstant-and-offline%2Foffline-cookbook" alt="Logo" /> Google Devs - The Offline Cookbook](https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fofflinefirst.org%2F" alt="Logo" /> Offline First](http://offlinefirst.org/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Finstant-and-offline%2Foffline-ux" alt="Logo" /> Google Devs - Offline UX Considerations](https://developers.google.com/web/fundamentals/instant-and-offline/offline-ux)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Finstant-and-offline%2Fweb-storage%2Foffline-for-pwa" alt="Logo" /> Google Devs - Offline Storage for Progressive Web Apps](https://developers.google.com/web/fundamentals/instant-and-offline/web-storage/offline-for-pwa)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcodelabs.developers.google.com%2Fcodelabs%2Fpwa-offline-quickstart%2Findex.html%3Findex%3D..%252F..dev-pwa-training%230" alt="Logo" /> Codelabs - Offline quickstart](https://codelabs.developers.google.com/codelabs/pwa-offline-quickstart/index.html?index=..%2F..dev-pwa-training#0)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcodelabs.developers.google.com%2Fcodelabs%2Foffline%2Findex.html%3Findex%3D..%252F..%252Findex%230" alt="Logo" /> Codelabs - Adding a Service Worker and Offline into your Web App](https://codelabs.developers.google.com/codelabs/offline/index.html?index=..%2F..%2Findex#0)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D7fnpsF9tMXc" alt="Logo" /> Supercharged - Offline Links](https://www.youtube.com/watch?v=7fnpsF9tMXc)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FNavigatorOnLine%2FOnline_and_offline_events" alt="Logo" /> Mozilla - Online and offline events](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/Online_and_offline_events)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FProgressive_web_apps%2FOffline_Service_workers" alt="Logo" /> Mozilla - Making PWAs work offline](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Offline_Service_workers)

#### Push notifications

Learn how to add push notifications to your web app.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fcodelabs%2Fpush-notifications%2F" alt="Logo" /> Google Devs - Adding Push Notifications to a Web App](https://developers.google.com/web/fundamentals/codelabs/push-notifications/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FProgressive_web_apps%2FRe-engageable_Notifications_Push" alt="Logo" /> Mozilla - How to make PWAs re-engageable](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Re-engageable_Notifications_Push)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FNotifications_API" alt="Logo" /> Mozilla - Notifications API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API)

### Web App manifest

Learn how to tell the browser about your web app and how it should behave when 'installed' by creating a web app manifest.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fweb-app-manifest%2F" alt="Logo" /> Google Devs - Web App Manifest](https://developers.google.com/web/fundamentals/web-app-manifest/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3.org%2FTR%2Fappmanifest%2F" alt="Logo" /> W3C - Web App Manifest](https://www.w3.org/TR/appmanifest/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FProgressive_web_apps%2FInstallable_PWAs" alt="Logo" /> Mozilla - How to make PWAs installable](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Installable_PWAs)

### Add to homescreen

Learn how to make your web app installable.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev%2Finstallable" alt="Logo" /> web.dev - Installable](https://web.dev/installable)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fapp-install-banners%2F" alt="Logo" /> Google Devs - App Install Banners](https://developers.google.com/web/fundamentals/app-install-banners/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FProgressive_web_apps%2FAdd_to_home_screen" alt="Logo" /> Mozilla - Add to Home screen](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Add_to_home_screen)

### Touch Events

Learn how to respond to touch gestures in intuitive ways.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fdesign-and-ux%2Finput%2Ftouch" alt="Logo" /> Google Devs - Add Touch to Your Site](https://developers.google.com/web/fundamentals/design-and-ux/input/touch)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FTouch_events" alt="Logo" /> Mozilla - Touch Events](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FPointer_events" alt="Logo" /> Mozilla - Pointer Events](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Fupdates%2F2016%2F10%2Ftouch-action" alt="Logo" /> Google Devs - Touch Action Options](https://developers.google.com/web/updates/2016/10/touch-action)


### Loading Performance

### App shell

Learn how to use an app shell to provide an instant and reliable experience to users on repeat visits

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Farchitecture%2Fapp-shell" alt="Logo" /> Google Devs - The App Shell Model](https://developers.google.com/web/fundamentals/architecture/app-shell)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FProgressive_web_apps%2FApp_structure" alt="Logo" /> Mozilla - Architecture of an app](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/App_structure)

### Render-Blocking Resources

Learn about render-blocking resources and why they are bad for the user-experience.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FProgressive_web_apps%2FLoading%23Render-blocking_resources" alt="Logo" /> Mozilla - Render-blocking resources](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Loading#Render-blocking_resources)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ftools%2Flighthouse%2Faudits%2Fblocking-resources" alt="Logo" /> Google Devs - Render-Blocking Resources](https://developers.google.com/web/tools/lighthouse/audits/blocking-resources)

### Compression

Learn how to minimize the overall download size by optimizing and compressing resources.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fperformance%2Foptimizing-content-efficiency%2Foptimize-encoding-and-transfer" alt="Logo" /> Google Devs - Optimizing Encoding and Transfer Size](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fperformance%2Foptimizing-content-efficiency%2Freplace-animated-gifs-with-video%2F" alt="Logo" /> Google Devs - Replace Animated GIFs with Video](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/replace-animated-gifs-with-video/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fsquoosh.app%2F" alt="Logo" /> Squoosh](https://squoosh.app/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fperformance%2Fget-started%2Ftextcontent-3" alt="Logo" /> Google Devs - Text Content](https://developers.google.com/web/fundamentals/performance/get-started/textcontent-3)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ftools%2Flighthouse%2Faudits%2Foptimize-images" alt="Logo" /> Google Devs - Optimize Images](https://developers.google.com/web/tools/lighthouse/audits/optimize-images)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev%2Fbootup-time%2F" alt="Logo" /> web.dev - Reduce JavaScript execution time](https://web.dev/bootup-time/)

### Performance metrics

Learn why it is important to measure performance and which metrics you should prioritize.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fperformance%2Fuser-centric-performance-metrics" alt="Logo" /> Google Devs - User-centric Performance Metrics](https://developers.google.com/web/fundamentals/performance/user-centric-performance-metrics)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.udacity.com%2Fcourse%2Fwebsite-performance-optimization--ud884" alt="Logo" /> Udacity - Website Performance Optimization](https://www.udacity.com/course/website-performance-optimization--ud884)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.udacity.com%2Fcourse%2Fbrowser-rendering-optimization--ud860" alt="Logo" /> Udacity - Browser Rendering Optimization](https://www.udacity.com/course/browser-rendering-optimization--ud860)

#### First meaningful paint

Learn about the first meaningful paint and how it impacts the overall performance.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev%2Ffirst-meaningful-paint%2F" alt="Logo" /> web.dev - First Meaningful Paint](https://web.dev/first-meaningful-paint/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FProgressive_web_apps%2FLoading%23First_meaningful_paint" alt="Logo" /> Mozilla - First meaningful paint](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Loading#First_meaningful_paint)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ftools%2Flighthouse%2Faudits%2Ffirst-meaningful-paint" alt="Logo" /> Google Devs - First Meaningful Paint](https://developers.google.com/web/tools/lighthouse/audits/first-meaningful-paint)

#### First CPU idle

Learn about the first CPU idle and how it impacts the overall performance.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev%2Ffirst-cpu-idle" alt="Logo" /> web.dev - First CPU Idle](https://web.dev/first-cpu-idle)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ftools%2Flighthouse%2Faudits%2Ffirst-cpu-idle" alt="Logo" /> Google Devs - First CPU Idle](https://developers.google.com/web/tools/lighthouse/audits/first-cpu-idle)

#### Time to interactive

Learn about time to interactive and how it impacts the overall performance.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev%2Finteractive%2F" alt="Logo" /> web.dev - Time to Interactive](https://web.dev/interactive/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ftools%2Flighthouse%2Faudits%2Ftime-to-interactive" alt="Logo" /> Google Devs - Time to Interactive](https://developers.google.com/web/tools/lighthouse/audits/time-to-interactive)

### Lazy Loading

Learn how to use lazy loading to lower the initial page payload and load time.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fperformance%2Flazy-loading-guidance%2Fimages-and-video" alt="Logo" /> Google Devs - Lazy Loading Images and Video](https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Faddyosmani.com%2Fblog%2Flazy-loading%2F" alt="Logo" /> Addy Osmani - Lazy Loading Images](https://addyosmani.com/blog/lazy-loading/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev%2Fnative-lazy-loading%2F" alt="Logo" /> web.dev - Native lazy-loading for the web](https://web.dev/native-lazy-loading/)

#### Dynamic Import

Learn how to use dynamic import to lazy load javascript.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fv8.dev%2Ffeatures%2Fdynamic-import" alt="Logo" /> V8 - Dynamic import()](https://v8.dev/features/dynamic-import)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40WebReflection%2Fjavascript-dynamic-import-export-b0e8775a59d4" alt="Logo" /> JavaScript dynamic import() & export](https://medium.com/@WebReflection/javascript-dynamic-import-export-b0e8775a59d4)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FStatements%2Fimport%23Dynamic_Imports" alt="Logo" /> Mozilla - Dynamic Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#Dynamic_Imports)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com%2Ftc39%2Fproposal-dynamic-import" alt="Logo" /> TC39 - proposal-dynamic-import](https://github.com/tc39/proposal-dynamic-import)

#### Offscreen images

Learn why offscreen images increases the load time and how to avoid them by lazy loading images.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev%2Foffscreen-images%2F" alt="Logo" /> web.dev - Defer offscreen images](https://web.dev/offscreen-images/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ftools%2Flighthouse%2Faudits%2Foversized-images" alt="Logo" /> Google Devs - Properly Size Images](https://developers.google.com/web/tools/lighthouse/audits/oversized-images)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev%2Fnative-lazy-loading" alt="Logo" /> web.dev - Native lazy-loading for the web](https://web.dev/native-lazy-loading)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Faddyosmani.com%2Fblog%2Flazy-loading%2F" alt="Logo" /> Addy Osmani - Native image lazy-loading for the web!](https://addyosmani.com/blog/lazy-loading/)

### Critical Request Chains

Learn about the critical request chains and how to find them in your web app.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ftools%2Flighthouse%2Faudits%2Fcritical-request-chains" alt="Logo" /> Google Devs - Critical Request Chains](https://developers.google.com/web/tools/lighthouse/audits/critical-request-chains)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev%2Fcritical-request-chains" alt="Logo" /> web.dev - Minimize critical requests depth](https://web.dev/critical-request-chains)

### Tree shaking

Learn how to use tree shaking to eliminate dead code.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fperformance%2Foptimizing-javascript%2Ftree-shaking" alt="Logo" /> Google Devs - Reduce JavaScript Payloads](https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.keycdn.com%2Fblog%2Ftree-shaking" alt="Logo" /> How to Clean Up Your JavaScript](https://www.keycdn.com/blog/tree-shaking)

### Codesplitting

Learn about codesplitting an how dividing your code into multiple chunks makes your web app faster.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fperformance%2Foptimizing-javascript%2Fcode-splitting" alt="Logo" /> Google Devs - Reduce JavaScript Payloads](https://developers.google.com/web/fundamentals/performance/optimizing-javascript/code-splitting)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.creativebloq.com%2Fhow-to%2Fall-you-need-to-know-about-javascript-code-splitting" alt="Logo" /> All you need to know about JavaScript code splitting](https://www.creativebloq.com/how-to/all-you-need-to-know-about-javascript-code-splitting)

### PRPL Pattern

Learn how to use the PRPL pattern to make web apps more performant.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fperformance%2Fprpl-pattern%2F" alt="Logo" /> Google Devs - The PRPL Pattern](https://developers.google.com/web/fundamentals/performance/prpl-pattern/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fperformance%2Foptimizing-content-efficiency%2Fjavascript-startup-optimization" alt="Logo" /> Google Devs - JavaScript Start-up Optimization](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/javascript-startup-optimization)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fbuilding.calibreapp.com%2Fbeyond-the-bubble-real-world-performance-9c991dcd5342%3Fgi%3D76804aa8f46e" alt="Logo" /> Ben Schwarz - Real world performance](https://building.calibreapp.com/beyond-the-bubble-real-world-performance-9c991dcd5342?gi=76804aa8f46e)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40addyosmani%2Fthe-cost-of-javascript-in-2018-7d8950fbb5d4" alt="Logo" /> The Cost of Javascript](https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4)

### Resource Prioritization

Learn about resource prioritization and how to inform the browser about the importance of a resource.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fperformance%2Fresource-prioritization" alt="Logo" /> Google Devs - Resource Prioritization](https://developers.google.com/web/fundamentals/performance/resource-prioritization)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.igvita.com%2F2015%2F08%2F17%2Feliminating-roundtrips-with-preconnect%2F" alt="Logo" /> Eliminating Roundtrips with Preconnect](https://www.igvita.com/2015/08/17/eliminating-roundtrips-with-preconnect/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Freloading%2Fpreload-prefetch-and-priorities-in-chrome-776165961bbf" alt="Logo" /> Addy Osmani - Preload, Prefetch And Priorities in Chrome](https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev%2Fuses-rel-preconnect%2F" alt="Logo" /> web.dev - Preconnect to required origins](https://web.dev/uses-rel-preconnect/)

### Caching

Learn about caching and how it can be uses to make web apps load faster.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fperformance%2Fget-started%2Fhttpcaching-6" alt="Logo" /> Google Devs - HTTP Caching](https://developers.google.com/web/fundamentals/performance/get-started/httpcaching-6)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FHTTP%2FCaching" alt="Logo" /> Mozilla - HTTP caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching)


### Rendering Performance

### Rendering

Learn about rendering, how a page is rendered and why it is important to keep your web app interactive and smooth running.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fperformance%2Fcritical-rendering-path%2Fconstructing-the-object-model" alt="Logo" /> Google Devs - Constructing the Object Model](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/constructing-the-object-model)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fperformance%2Frendering" alt="Logo" /> Google Devs - Rendering Performance](https://developers.google.com/web/fundamentals/performance/rendering)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fperformance%2Fcritical-rendering-path%2Frender-tree-construction" alt="Logo" /> Google Devs - Render-tree Construction](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fperformance%2Fcritical-rendering-path%2Frender-blocking-css" alt="Logo" /> Google Devs - Render Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css)

### Event loop

Learn about the event loop and how Javascript simulate like it’s running our commands in a multi-thread environment.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fyoutu.be%2FcCOL7MC4Pl0" alt="Logo" /> Youtube - Jake Archibald: In The Loop](https://youtu.be/cCOL7MC4Pl0)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40muratcatal%2Funderstanding-javascript-heap-stack-event-loops-and-callback-queue-6fdec3cfe32e" alt="Logo" /> Understanding JavaScript](https://medium.com/@muratcatal/understanding-javascript-heap-stack-event-loops-and-callback-queue-6fdec3cfe32e)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Ffront-end-weekly%2Fjavascript-event-loop-explained-4cd26af121d4" alt="Logo" /> JavaScript Event Loop Explained](https://medium.com/front-end-weekly/javascript-event-loop-explained-4cd26af121d4)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D8aGhZQkoFbQ" alt="Logo" /> Youtube - What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fflaviocopes.com%2Fjavascript-event-loop%2F" alt="Logo" /> The JavaScript Event Loop](https://flaviocopes.com/javascript-event-loop/)

#### Microtask

Learn about microtasks and the microtask queue.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fjakearchibald.com%2F2015%2Ftasks-microtasks-queues-and-schedules%2F" alt="Logo" /> Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FHTML_DOM_API%2FMicrotask_guide" alt="Logo" /> Mozilla - Using microtasks in JavaScript](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fjavascript.info%2Fevent-loop" alt="Logo" /> javascript.info - Microtasks and macrotasks](https://javascript.info/event-loop)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fjavascript.info%2Fmicrotask-queue" alt="Logo" /> javascript.info - Microtasks](https://javascript.info/microtask-queue)

#### Stack

Learn about the stack and how to investigate the staack trace when debugging.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.scalyr.com%2Fblog%2Fjavascript-stack-trace-understanding-it-and-using-it-to-debug%2F" alt="Logo" /> Javascript Stack Trade - Using it to debug](https://www.scalyr.com/blog/javascript-stack-trace-understanding-it-and-using-it-to-debug/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FConsole%2Ftrace" alt="Logo" /> Mozilla - console.trace()](https://developer.mozilla.org/en-US/docs/Web/API/Console/trace)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fv8.dev%2Fdocs%2Fstack-trace-api" alt="Logo" /> V8 - Stack trace API](https://v8.dev/docs/stack-trace-api)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Ffhinkel%2Fconfused-about-stack-and-heap-2cf3e6adb771" alt="Logo" /> Confused about Stack and Heap?](https://medium.com/fhinkel/confused-about-stack-and-heap-2cf3e6adb771)

#### Heap

Learn about the heap and how to investigate the heap snapshots when debugging.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ftools%2Fchrome-devtools%2Fmemory-problems%2F" alt="Logo" /> Google Devs - Memory Problems](https://developers.google.com/web/tools/chrome-devtools/memory-problems/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ftools%2Fchrome-devtools%2Fmemory-problems%2Fmemory-101" alt="Logo" /> Google Devs - Memory Terminology](https://developers.google.com/web/tools/chrome-devtools/memory-problems/memory-101)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ftools%2Fchrome-devtools%2Fmemory-problems%2Fheap-snapshots" alt="Logo" /> Google Devs - How to Record Heap Snapshots](https://developers.google.com/web/tools/chrome-devtools/memory-problems/heap-snapshots)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Ffhinkel%2Fconfused-about-stack-and-heap-2cf3e6adb771" alt="Logo" /> Confused about Stack and Heap?](https://medium.com/fhinkel/confused-about-stack-and-heap-2cf3e6adb771)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ftools%2Fchrome-devtools%2Fmemory-problems%2Fallocation-profiler" alt="Logo" /> Google Devs - How to Use the Allocation Profiler Tool](https://developers.google.com/web/tools/chrome-devtools/memory-problems/allocation-profiler)

### RAIL Model

Learn how to use the RAIL model to ensure a good user experience.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fperformance%2Frail" alt="Logo" /> Google Devs - RAIL](https://developers.google.com/web/fundamentals/performance/rail)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fperformance%2Fwhy-performance-matters%2F" alt="Logo" /> Google Devs - Why Performance Matters](https://developers.google.com/web/fundamentals/performance/why-performance-matters/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ftools%2Fchrome-devtools%2Fevaluate-performance%2F" alt="Logo" /> Google Devs - Get Started With Analyzing](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fdesign-and-ux%2Fanimations%2Fanimations-and-performance" alt="Logo" /> Google Devs - Animations and Performance](https://developers.google.com/web/fundamentals/design-and-ux/animations/animations-and-performance)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fdesign-and-ux%2Fanimations%2Fcss-vs-javascript" alt="Logo" /> Google Devs - CSS Versus JavaScript Animations](https://developers.google.com/web/fundamentals/design-and-ux/animations/css-vs-javascript)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fdesign-and-ux%2Fanimations%2Fchoosing-the-right-easing" alt="Logo" /> Google Devs - Choosing the Right Easing](https://developers.google.com/web/fundamentals/design-and-ux/animations/choosing-the-right-easing)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fdesign-and-ux%2Fanimations%2Fanimating-modal-views" alt="Logo" /> Google Devs - Animating Modal Views](https://developers.google.com/web/fundamentals/design-and-ux/animations/animating-modal-views)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FPerformance%2FCSS_JavaScript_animation_performance" alt="Logo" /> Mozilla - CSS and JavaScript animation performance](https://developer.mozilla.org/en-US/docs/Web/Performance/CSS_JavaScript_animation_performance)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FPerformance%2FFundamentals" alt="Logo" /> Mozilla - Performance fundamentals](https://developer.mozilla.org/en-US/docs/Web/Performance/Fundamentals)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D_srJ7eHS3IM" alt="Logo" /> Youtube - Fast By Default](https://www.youtube.com/watch?v=_srJ7eHS3IM)

#### requestAnimationFrame

Learn how to use the requestAnimationFrame API to create butter-smooth animations.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fperformance%2Frendering%2Foptimize-javascript-execution" alt="Logo" /> Google Devs - Optimize JavaScript Execution](https://developers.google.com/web/fundamentals/performance/rendering/optimize-javascript-execution)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2Fwindow%2FrequestAnimationFrame" alt="Logo" /> Mozilla - requestAnimationFrame()](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)

#### requestIdleCallback

Learn how to use the requestIdleCallback to defer heavy tasks.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FBackground_Tasks_API" alt="Logo" /> Mozilla - Background Tasks API](https://developer.mozilla.org/en-US/docs/Web/API/Background_Tasks_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Fupdates%2F2015%2F08%2Fusing-requestidlecallback%3Fhl%3Den" alt="Logo" /> Google Dev - requestIdleCallback](https://developers.google.com/web/updates/2015/08/using-requestidlecallback?hl=en)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FWindow%2FrequestIdleCallback" alt="Logo" /> Mozilla - requestIdleCallback()](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback)

### Critical Rendering Path

Learn about the critical rendering path and how to identify it.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fperformance%2Fcritical-rendering-path%2F" alt="Logo" /> Google Devs - Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FPerformance%2FCritical_rendering_path" alt="Logo" /> Mozilla - Critical Rendering Path](https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40luisvieira_gmr%2Funderstanding-the-critical-rendering-path-rendering-pages-in-1-second-735c6e45b47a" alt="Logo" /> Understanding the critical rendering path](https://medium.com/@luisvieira_gmr/understanding-the-critical-rendering-path-rendering-pages-in-1-second-735c6e45b47a)

### The Pixel Pipeline

Learn about the five key points in the pixels-to-screen pipeline.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fperformance%2Frendering%23the_pixel_pipeline" alt="Logo" /> Google Devs - The pixel pipeline](https://developers.google.com/web/fundamentals/performance/rendering#the_pixel_pipeline)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Faerotwist.com%2Fblog%2Fpixels-are-expensive%2F" alt="Logo" /> Pixels are expensive](https://aerotwist.com/blog/pixels-are-expensive/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DRCFQu0hK6bU" alt="Logo" /> Google Devs - The Applied Science of Runtime Performance](https://www.youtube.com/watch?v=RCFQu0hK6bU)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcsstriggers.com%2F" alt="Logo" /> CSS Triggers](https://csstriggers.com/)

#### Style calculations

Learn how to optimize your CSS to avoid heavy style calculations.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fperformance%2Frendering%2Freduce-the-scope-and-complexity-of-style-calculations" alt="Logo" /> Google Devs - Style Calculations](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations)

#### Transforms

Learn about transforms and how it is possible to avoid both layout and paint.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fperformance%2Frendering%2Fstick-to-compositor-only-properties-and-manage-layer-count%23use_transform_and_opacity_changes_for_animations" alt="Logo" /> Google Devs - Use transform and opacity for animations](https://developers.google.com/web/fundamentals/performance/rendering/stick-to-compositor-only-properties-and-manage-layer-count#use_transform_and_opacity_changes_for_animations)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Foutsystems-experts%2Fhow-to-achieve-60-fps-animations-with-css3-db7b98610108" alt="Logo" /> Achieving 60 FPS Animations with CSS3](https://medium.com/outsystems-experts/how-to-achieve-60-fps-animations-with-css3-db7b98610108)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.html5rocks.com%2Fen%2Ftutorials%2Fspeed%2Fhigh-performance-animations%2F" alt="Logo" /> HTML5 Rocks - High Performance Animations](https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/)

#### Paint areas

Learn about paint areas and how it is possible to reduce them.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fperformance%2Frendering%2Fsimplify-paint-complexity-and-reduce-paint-areas" alt="Logo" /> Google Devs - Paint Areas](https://developers.google.com/web/fundamentals/performance/rendering/simplify-paint-complexity-and-reduce-paint-areas)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com%2Fbrowser-painting-and-considerations-for-web-performance%2F" alt="Logo" /> CSS Tricks - Browser painting](https://css-tricks.com/browser-painting-and-considerations-for-web-performance/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.html5rocks.com%2Fen%2Ftutorials%2Fspeed%2Funnecessary-paints%2F" alt="Logo" /> HTML5 Rocks - Avoiding Unnecessary Paints](https://www.html5rocks.com/en/tutorials/speed/unnecessary-paints/)

#### Layout Trashing

Learn about layout trashing and how to avoid it.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fperformance%2Frendering%2Favoid-large-complex-layouts-and-layout-thrashing" alt="Logo" /> Google Devs - Layout Thrashing](https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fblog.idrsolutions.com%2F2014%2F08%2Fbeware-javascript-layout-thrashing%2F" alt="Logo" /> Beware JavaScript Layout Thrashing!](https://blog.idrsolutions.com/2014/08/beware-javascript-layout-thrashing/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevhints.io%2Flayout-thrashing" alt="Logo" /> Layout thrashing cheatsheet](https://devhints.io/layout-thrashing)

#### Layers

Learn about layers and how to promote an element to another layer.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fperformance%2Frendering%2Fstick-to-compositor-only-properties-and-manage-layer-count" alt="Logo" /> Google Devs - Manage Layer Count](https://developers.google.com/web/fundamentals/performance/rendering/stick-to-compositor-only-properties-and-manage-layer-count)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.html5rocks.com%2Fen%2Ftutorials%2Fspeed%2Flayers%2F" alt="Logo" /> HTML5 Rocks - Accelerated Rendering in Chrome](https://www.html5rocks.com/en/tutorials/speed/layers/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdassur.ma%2Fthings%2Fforcing-layers%2F" alt="Logo" /> Layers and how to force them](https://dassur.ma/things/forcing-layers/)

#### Debounce

Learn how to debounce computationally expensive code to avoid blocking the UI.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fperformance%2Frendering%2Fdebounce-your-input-handlers" alt="Logo" /> Google Devs - Debounce Your Input Handlers](https://developers.google.com/web/fundamentals/performance/rendering/debounce-your-input-handlers)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40jamischarles%2Fwhat-is-debouncing-2505c0648ff1" alt="Logo" /> What is Debouncing?](https://medium.com/@jamischarles/what-is-debouncing-2505c0648ff1)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Flevelup.gitconnected.com%2Fdebounce-in-javascript-improve-your-applications-performance-5b01855e086" alt="Logo" /> Level Up - Debounce in JavaScript](https://levelup.gitconnected.com/debounce-in-javascript-improve-your-applications-performance-5b01855e086)

### CSS Containment

Learn how to use CSS containment to improve the performance of your web app.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Fupdates%2F2016%2F06%2Fcss-containment" alt="Logo" /> Google Devs - CSS Containment](https://developers.google.com/web/updates/2016/06/css-containment)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3.org%2FTR%2Fcss-contain-1%2F" alt="Logo" /> W3C - CSS Containment Module](https://www.w3.org/TR/css-contain-1/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fblogs.igalia.com%2Fmrego%2F2019%2F01%2F11%2Fan-introduction-to-css-containment%2F" alt="Logo" /> An introduction to CSS Containment](https://blogs.igalia.com/mrego/2019/01/11/an-introduction-to-css-containment/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FCSS%2Fcontain" alt="Logo" /> Mozilla - Contain](https://developer.mozilla.org/en-US/docs/Web/CSS/contain)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com%2Fcss-containment%2F" alt="Logo" /> CSS Tricks - CSS containment](https://css-tricks.com/css-containment/)

### Web Workers

Learn how to use web workers to run a script operation in a background thread separate from the main execution thread.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FWeb_Workers_API" alt="Logo" /> Mozilla - Web Workers API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.html5rocks.com%2Fen%2Ftutorials%2Fworkers%2Fbasics%2F" alt="Logo" /> HTML5 Rocks - The Basics of Web Workers](https://www.html5rocks.com/en/tutorials/workers/basics/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdassur.ma%2Fthings%2Fwhen-workers%2F" alt="Logo" /> When should you be using Web Workers?](https://dassur.ma/things/when-workers/)


### Security

### HTTPS

Learn about HTTPS and why a website should always be protected with HTTPS.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fsecurity%2Fencrypt-in-transit%2Fwhy-https" alt="Logo" /> Google Devs - Why HTTPS Matters](https://developers.google.com/web/fundamentals/security/encrypt-in-transit/why-https)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fsecurity%2Fencrypt-in-transit%2Fenable-https" alt="Logo" /> Google Devs - Enabling HTTPS on Your Servers](https://developers.google.com/web/fundamentals/security/encrypt-in-transit/enable-https)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fsecurity%2Fprevent-mixed-content%2Fwhat-is-mixed-content" alt="Logo" /> Google Devs - Mixed Content](https://developers.google.com/web/fundamentals/security/prevent-mixed-content/what-is-mixed-content)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DGoXgl9r0Kjk" alt="Logo" /> Youtube - Stories from the field](https://www.youtube.com/watch?v=GoXgl9r0Kjk)

### Browser Sandbox

Learn about the sandbox security mechanism and how it restricts the execution environment.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev%2Fbrowser-sandbox%2F" alt="Logo" /> web.dev - Browser sandbox](https://web.dev/browser-sandbox/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSandbox_(computer_security)" alt="Logo" /> Wikipedia - Sandbox (computer security)](https://en.wikipedia.org/wiki/Sandbox_(computer_security))
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.howtogeek.com%2F169139%2Fsandboxes-explained-how-theyre-already-protecting-you-and-how-to-sandbox-any-program%2F" alt="Logo" /> Howtogeek - Sandboxes Explained](https://www.howtogeek.com/169139/sandboxes-explained-how-theyre-already-protecting-you-and-how-to-sandbox-any-program/)

### OWASP

Learn about the OWASP organization and how they help with web application security.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FOWASP" alt="Logo" /> Wikipedia - OWASP](https://en.wikipedia.org/wiki/OWASP)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.owasp.org%2Findex.php%2FAbout_The_Open_Web_Application_Security_Project" alt="Logo" /> OWASP - About](https://www.owasp.org/index.php/About_The_Open_Web_Application_Security_Project)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.owasp.org%2Fimages%2F7%2F72%2FOWASP_Top_10-2017_%2528en%2529.pdf.pdf" alt="Logo" /> OWASP - OWASP Top 10](https://www.owasp.org/images/7/72/OWASP_Top_10-2017_%28en%29.pdf.pdf)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcheatsheetseries.owasp.org%2F" alt="Logo" /> OWASP - Cheatsheets](https://cheatsheetseries.owasp.org/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fuser%2FOWASPGLOBAL" alt="Logo" /> Youtube - OWASP](https://www.youtube.com/user/OWASPGLOBAL)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fblog.sucuri.net%2F2018%2F10%2Fowasp-top-10-security-risks-part-i.html" alt="Logo" /> OWASP Top 10 Security Risks](https://blog.sucuri.net/2018/10/owasp-top-10-security-risks-part-i.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FWeb_application_security" alt="Logo" /> Wikipedia - Web application security](https://en.wikipedia.org/wiki/Web_application_security)

#### Cross-Site Scripting

Learn about cross-site scripting and how it is possible mitigate these kind of attacks.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FGlossary%2FCross-site_scripting" alt="Logo" /> Mozilla - Cross-site scripting](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.owasp.org%2Findex.php%2FCross-site_Scripting_(XSS)" alt="Logo" /> OWASP - Cross-site Scripting (XSS)](https://www.owasp.org/index.php/Cross-site_Scripting_(XSS))
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcheatsheetseries.owasp.org%2Fcheatsheets%2FCross_Site_Scripting_Prevention_Cheat_Sheet.html" alt="Logo" /> OWASP - XSS Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fexcess-xss.com%2F" alt="Logo" /> Excess XSS](https://excess-xss.com/)

#### Clickjacking

Learn about clickjacking and how it is possible to mitigate these kind of attacks.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.owasp.org%2Findex.php%2FClickjacking" alt="Logo" /> OWASP - Clickjacking](https://www.owasp.org/index.php/Clickjacking)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FClickjacking" alt="Logo" /> Wikipedia - Clickjacking](https://en.wikipedia.org/wiki/Clickjacking)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev%2Fsame-origin-policy%2F%23how-to-prevent-clickjacking" alt="Logo" /> web.dev - Same-origin policy](https://web.dev/same-origin-policy/#how-to-prevent-clickjacking)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcheatsheetseries.owasp.org%2Fcheatsheets%2FClickjacking_Defense_Cheat_Sheet.html" alt="Logo" /> OWASP - Clickjacking Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html)

### Content Security Policy

Learn about content security policy and how it can help to detect and mitigate certain types of attacks.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FHTTP%2FCSP" alt="Logo" /> Mozilla - Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fsecurity%2Fcsp" alt="Logo" /> Google Devs - CSP](https://developers.google.com/web/fundamentals/security/csp)


### Audits

### Performance budgets

Learn about performance budgets and how you can create one for your web app.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev%2Fperformance-budgets-101" alt="Logo" /> web.dev - Performance Budgets](https://web.dev/performance-budgets-101)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ftools%2Flighthouse%2Faudits%2Fbudgets" alt="Logo" /> Google Devs - Performance Budget](https://developers.google.com/web/tools/lighthouse/audits/budgets)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Faddyosmani.com%2Fblog%2Fperformance-budgets%2F" alt="Logo" /> Addy Osmani - Start Performance Budgeting](https://addyosmani.com/blog/performance-budgets/)

### Lighthouse

Learn about lighthouse and how it can be used to audit your web app.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ftools%2Flighthouse%2F" alt="Logo" /> Google Devs - Lighthouse](https://developers.google.com/web/tools/lighthouse/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DNoRYn6gOtVo" alt="Logo" /> Youtube - Staying off the Rocks](https://www.youtube.com/watch?v=NoRYn6gOtVo)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev%2Fmeasure" alt="Logo" /> web.dev - Measure](https://web.dev/measure)

### Chrome DevTools

Learn about the Chrome DevTools and how it can be used to audit your web app.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ftools%2Fchrome-devtools" alt="Logo" /> Google Devs - Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ftools%2Fchrome-devtools%2Finspect-styles%2Fanimations" alt="Logo" /> Google Devs - Inspect animations](https://developers.google.com/web/tools/chrome-devtools/inspect-styles/animations)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcalibreapp.com%2Fblog%2Finvestigate-animation-performance-with-devtools%2F" alt="Logo" /> Investigate animation performance with DevTools](https://calibreapp.com/blog/investigate-animation-performance-with-devtools/)



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#build-tools)

## ➤ Build tools

### Package Managers

Learn about package managers and how they make managing dependencies easier.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Fjavascript-package-managers-101-9afd926add0a%2F" alt="Logo" /> Freecodecamp - How JavaScript package managers work](https://www.freecodecamp.org/news/javascript-package-managers-101-9afd926add0a/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.javascriptstuff.com%2Fjavascript-frontend-package-managers%2F" alt="Logo" /> Guide to JavaScript frontend package managers](https://www.javascriptstuff.com/javascript-frontend-package-managers/)

#### NPM

Learn about NPM and how it can be used to manage dependencies.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.npmjs.com%2Fabout-npm%2F" alt="Logo" /> npmjs - About npm](https://docs.npmjs.com/about-npm/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.npmjs.com%2Fgetting-started%2F" alt="Logo" /> npmjs - Getting started](https://docs.npmjs.com/getting-started/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Fbeginners-guide-to-mobile-web-development%2Fintroduction-to-npm-and-basic-npm-commands-18aa16f69f6b" alt="Logo" /> Introduction to npm and basic npm commands](https://medium.com/beginners-guide-to-mobile-web-development/introduction-to-npm-and-basic-npm-commands-18aa16f69f6b)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fnodesource.com%2Fblog%2Fan-absolute-beginners-guide-to-using-npm%2F" alt="Logo" /> An Absolute Beginner's Guide to Using npm](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)

#### Yarn

Learn about Yarn and how it can be used to manage dependencies.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fyarnpkg.com%2Fen%2Fdocs%2Fgetting-started" alt="Logo" /> Yarnpkg - Getting Started](https://yarnpkg.com/en/docs/getting-started)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fengineering.fb.com%2Fweb%2Fyarn-a-new-package-manager-for-javascript%2F" alt="Logo" /> Facebook Engineering - Yarn](https://engineering.fb.com/web/yarn-a-new-package-manager-for-javascript/)

### Module Bundlers

Learn about module bundler and how they can help bundling your code.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to%2Ftanhauhau%2Fwhat-is-module-bundler-and-how-does-it-work-3gp2" alt="Logo" /> dev.to - What is a module bundler?](https://dev.to/tanhauhau/what-is-module-bundler-and-how-does-it-work-3gp2)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Flets-learn-how-module-bundlers-work-and-then-write-one-ourselves-b2e3fe6c88ae%2F" alt="Logo" /> Freecodecamp - Let’s learn how module bundlers work](https://www.freecodecamp.org/news/lets-learn-how-module-bundlers-work-and-then-write-one-ourselves-b2e3fe6c88ae/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40ajmeyghani%2Fjavascript-bundlers-a-comparison-e63f01f2a364" alt="Logo" /> JavaScript Bundlers, a Comparison](https://medium.com/@ajmeyghani/javascript-bundlers-a-comparison-e63f01f2a364)

#### Rollup

Learn how you can use Rollup to bundle your code.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Frollupjs.org%2Fguide%2Fen%2F" alt="Logo" /> Rollup - Introduction](https://rollupjs.org/guide/en/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Flengstorf.com%2Flearn-rollup-js%2F" alt="Logo" /> How to Bundle JavaScript With Rollup](https://lengstorf.com/learn-rollup-js/)

#### Webpack

Learn how you can use Webpack to bundle your code.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebpack.js.org%2Fguides%2Fgetting-started%2F" alt="Logo" /> Webpack - Getting Started](https://webpack.js.org/guides/getting-started/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fauth0.com%2Fblog%2Fwebpack-a-gentle-introduction%2F" alt="Logo" /> Webpack: A Gentle Introduction to the Module Bundler](https://auth0.com/blog/webpack-a-gentle-introduction/)

#### Parcel

Learn how you can use Parcel to bundle your code.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fparceljs.org%2Fgetting_started.html" alt="Logo" /> Parcel - Getting Started](https://parceljs.org/getting_started.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fflaviocopes.com%2Fparcel%2F" alt="Logo" /> Parcel, a simpler webpack](https://flaviocopes.com/parcel/)

#### Pika

Learn how you can use Pika instead of a bundler.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.pika.dev%2Fabout%2F" alt="Logo" /> Pika - About](https://www.pika.dev/about/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.pika.dev%2Fblog%2Fintroducing-pika-pack%2F" alt="Logo" /> Introducing: @pika/pack](https://www.pika.dev/blog/introducing-pika-pack/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.pika.dev%2Fblog%2Fpika-web-a-future-without-webpack%2F" alt="Logo" /> A Future Without Webpack](https://www.pika.dev/blog/pika-web-a-future-without-webpack/)

### Linters and formatters

Learn how you can improve your code quality with linters and formatters.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.gistia.com%2Fjavascript-linters-formatter-prettier-eslint%2F" alt="Logo" /> Improve Your JavaScript Code Quality With Linters](https://www.gistia.com/javascript-linters-formatter-prettier-eslint/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Fdailyjs%2Fwhy-you-should-always-use-a-linter-and-or-pretty-formatter-bb5471115a76" alt="Logo" /> Why you should always use a Linter](https://medium.com/dailyjs/why-you-should-always-use-a-linter-and-or-pretty-formatter-bb5471115a76)

#### Prettier

Learn how you can use Prettier to format your code.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fprettier.io%2Fdocs%2Fen%2Findex.html" alt="Logo" /> Prettier - What is Prettier?](https://prettier.io/docs/en/index.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fblog.bitsrc.io%2Flet-the-computer-do-the-formatting-ddb799e8a068" alt="Logo" /> Let the computer do the formatting](https://blog.bitsrc.io/let-the-computer-do-the-formatting-ddb799e8a068)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fprettier.io%2Fplayground%2F" alt="Logo" /> Prettier - Playground](https://prettier.io/playground/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fprettier.io%2Fdocs%2Fen%2Fintegrating-with-linters.html" alt="Logo" /> Prettier - Integrating with Linters](https://prettier.io/docs/en/integrating-with-linters.html)

#### ESLint

Learn how you can use ESLint to lint your code.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Feslint.org%2Fdocs%2Fuser-guide%2Fgetting-started" alt="Logo" /> Eslint - Getting Started](https://eslint.org/docs/user-guide/getting-started)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Fjavascript-scene%2Fstreamline-code-reviews-with-eslint-prettier-6fb817a6b51d" alt="Logo" /> Streamline Code Reviews with ESLint + Prettier](https://medium.com/javascript-scene/streamline-code-reviews-with-eslint-prettier-6fb817a6b51d)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.futurehosting.com%2Fblog%2Fprettier-vs-eslint-whats-the-difference%2F" alt="Logo" /> Prettier vs ESLint: What’s The Difference?](https://www.futurehosting.com/blog/prettier-vs-eslint-whats-the-difference/)

### Task Runners

Learn about task runners and how you can automate code execution.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.dbswebsite.com%2Fblog%2Fthe-advantages-of-using-task-runners%2F" alt="Logo" /> The Advantages of Using Task Runners](https://www.dbswebsite.com/blog/the-advantages-of-using-task-runners/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.smashingmagazine.com%2F2016%2F06%2Fharness-machines-productive-task-runners%2F" alt="Logo" /> Being Productive With Task Runners](https://www.smashingmagazine.com/2016/06/harness-machines-productive-task-runners/)

#### NPM Scripts

Learn about NPM scripts and how you can run your own.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com%2Fwhy-npm-scripts%2F" alt="Logo" /> CSS Tricks - Why npm Scripts?](https://css-tricks.com/why-npm-scripts/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmichael-kuehnel.de%2Ftooling%2F2018%2F03%2F22%2Fhelpers-and-tips-for-npm-run-scripts.html" alt="Logo" /> Helpers and tips for npm run scripts](https://michael-kuehnel.de/tooling/2018/03/22/helpers-and-tips-for-npm-run-scripts.html)

### Transpilers

Learn what transpilers are and why we need them.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fscotch.io%2Ftutorials%2Fjavascript-transpilers-what-they-are-why-we-need-them" alt="Logo" /> Scotch - Javascript Transpilers](https://scotch.io/tutorials/javascript-transpilers-what-they-are-why-we-need-them)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fthenewstack.io%2Fjavascript-transpilers-need-know%2F" alt="Logo" /> What JavaScript Programmers Need to Know about Transpilers](https://thenewstack.io/javascript-transpilers-need-know/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSource-to-source_compiler" alt="Logo" /> Wikipedia - Source-to-source compiler](https://en.wikipedia.org/wiki/Source-to-source_compiler)

#### Babel

Learn about Babel and how you can use it to transpile your code.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40onlykiosk%2Fcomplete-babel-7-guide-for-beginners-in-2019-7dd78214c464" alt="Logo" /> Complete Babel 7 Guide for Beginners](https://medium.com/@onlykiosk/complete-babel-7-guide-for-beginners-in-2019-7dd78214c464)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fbabeljs.io%2Fdocs%2Fen%2F" alt="Logo" /> Babel - What is Babel?](https://babeljs.io/docs/en/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fbabeljs.io%2Fdocs%2Fen%2Fusage" alt="Logo" /> Babel - Usage Guide](https://babeljs.io/docs/en/usage)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.sitepoint.com%2Fbabel-beginners-guide%2F" alt="Logo" /> A Beginner’s Guide to Babel](https://www.sitepoint.com/babel-beginners-guide/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fhackernoon.com%2Fmoving-to-es6-babel-and-transpilers-337921c025b1" alt="Logo" /> Moving to ES6 — Babel and Transpilers](https://hackernoon.com/moving-to-es6-babel-and-transpilers-337921c025b1)

#### Typescript

Learn how to use Typescript and how it can help making your code typesafe.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fwww.typescriptlang.org%2Fdocs%2Fhome.html" alt="Logo" /> Typescript - Documentation](http://www.typescriptlang.org/docs/home.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Ftech-tajawal%2Ftypescript-why-should-one-use-it-a539faa92010" alt="Logo" /> Typescript: Why should one use i?](https://medium.com/tech-tajawal/typescript-why-should-one-use-it-a539faa92010)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40jtomaszewski%2Fwhy-typescript-is-the-best-way-to-write-front-end-in-2019-feb855f9b164" alt="Logo" /> Why TypeScript is the best way to write Front-end in 2019](https://medium.com/@jtomaszewski/why-typescript-is-the-best-way-to-write-front-end-in-2019-feb855f9b164)

### CSS Pre-processors

Learn about CSS pre-processors and why we need them.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FGlossary%2FCSS_preprocessor" alt="Logo" /> Mozilla - CSS preprocessor](https://developer.mozilla.org/en-US/docs/Glossary/CSS_preprocessor)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Fswlh%2Fadvantages-of-using-a-preprocessor-sass-in-css-eb7310179944" alt="Logo" /> Advantages of Using a Preprocessor](https://medium.com/swlh/advantages-of-using-a-preprocessor-sass-in-css-eb7310179944)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40ddprrt%2Fdeconfusing-pre-and-post-processing-d68e3bd078a3" alt="Logo" /> Deconfusing Pre- and Post-processing](https://medium.com/@ddprrt/deconfusing-pre-and-post-processing-d68e3bd078a3)

#### SASS

Learn about SASS and how you can use it to simplify your styles.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fsass-lang.com%2Fguide" alt="Logo" /> SASS - Guide](https://sass-lang.com/guide)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fraygun.com%2Fblog%2F10-reasons-css-preprocessor%2F" alt="Logo" /> 10 Reasons to Use a CSS Preprocessor in 2018](https://raygun.com/blog/10-reasons-css-preprocessor/)

#### PostCSS

Learn about PostCSS and how you can use its ecosystem of plugins to extend your CSS build pipeline.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fpostcss.org%2F" alt="Logo" /> PostCSS](https://postcss.org/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.sitepoint.com%2Fan-introduction-to-postcss%2F" alt="Logo" /> What is PostCSS?](https://www.sitepoint.com/an-introduction-to-postcss/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fflaviocopes.com%2Fpostcss%2F" alt="Logo" /> Introduction to PostCSS](https://flaviocopes.com/postcss/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fblog.logrocket.com%2Fgetting-started-with-postcss-in-2019-484262a4d725%2F" alt="Logo" /> Getting started with PostCSS in 2019](https://blog.logrocket.com/getting-started-with-postcss-in-2019-484262a4d725/)

### Node.js

Learn how to use Node.js.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fnodejs.org" alt="Logo" /> Node.js](https://nodejs.org)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fnodejs.dev%2F" alt="Logo" /> Introduction to Node.js](https://nodejs.dev/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fnodejs.org%2Fen%2Fdocs%2Fguides%2F" alt="Logo" /> Node.js - Guides](https://nodejs.org/en/docs/guides/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3schools.com%2Fnodejs%2F" alt="Logo" /> w3schools - Node.js tutorial](https://www.w3schools.com/nodejs/)



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#frameworks--libraries)

## ➤ Frameworks & Libraries

### lit-element

Learn how to use lit-element for creating fast, lightweight web components.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Flit-element.polymer-project.org%2F" alt="Logo" /> lit-element](https://lit-element.polymer-project.org/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Fupdates%2F2019%2F02%2Flit-element-and-lit-html" alt="Logo" /> Google Devs - Lightning-fast templates](https://developers.google.com/web/updates/2019/02/lit-element-and-lit-html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fvaadin.com%2Ftutorials%2Flit-element%2Fstarting-a-lit-element-project" alt="Logo" /> Vaadin - Creating a LitElement project](https://vaadin.com/tutorials/lit-element/starting-a-lit-element-project)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to%2Fthepassle%2Fweb-components-from-zero-to-hero-part-three-3c5h" alt="Logo" /> dev.to - Web Components: from zero to hero, part three](https://dev.to/thepassle/web-components-from-zero-to-hero-part-three-3c5h)

### Vue

Learn about Vue and how you can use it for building web apps.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fvuejs.org%2F" alt="Logo" /> Vue](https://vuejs.org/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcli.vuejs.org%2F" alt="Logo" /> Vue - CLI](https://cli.vuejs.org/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.taniarascia.com%2Fgetting-started-with-vue%2F" alt="Logo" /> Getting Started with Vue](https://www.taniarascia.com/getting-started-with-vue/)

### React

Learn about React and how you can use it for building web apps.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Freactjs.org%2F" alt="Logo" /> React](https://reactjs.org/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev%2Freact" alt="Logo" /> web.dev - React](https://web.dev/react)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.taniarascia.com%2Fgetting-started-with-react%2F" alt="Logo" /> Getting Started with React](https://www.taniarascia.com/getting-started-with-react/)

### Angular

Learn about Angular and how you can use it for building web apps.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fangular.io%2F" alt="Logo" /> Angular](https://angular.io/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev%2Fangular" alt="Logo" /> web.dev - Angular](https://web.dev/angular)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcli.angular.io%2F" alt="Logo" /> Angular - CLI](https://cli.angular.io/)

### Svelte

Learn about Svelte and how it can convert your component into highly efficient imperative code.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fsvelte.dev%2F" alt="Logo" /> Svelte](https://svelte.dev/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com%2Fsveltejs%2Fsvelte%2Fwiki%2FFAQ" alt="Logo" /> Github - Svelte FAQ](https://github.com/sveltejs/svelte/wiki/FAQ)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fsvelte.dev%2Fblog%2Fsvelte-3-rethinking-reactivity" alt="Logo" /> Svelte - Rethinking reactivity](https://svelte.dev/blog/svelte-3-rethinking-reactivity)

### Stencil

Learn how Stencil can be used for generating small, fast web components.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fstenciljs.com%2F" alt="Logo" /> Stencil](https://stenciljs.com/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Falligator.io%2Fstencil%2Fgetting-started%2F" alt="Logo" /> Alligator - Getting Started With Stencil](https://alligator.io/stencil/getting-started/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcodeburst.io%2Fhow-to-build-web-components-using-stenciljs-afacc5451c2d" alt="Logo" /> How to Build Reusable Web Components Using Stenciljs](https://codeburst.io/how-to-build-web-components-using-stenciljs-afacc5451c2d)



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#testing)

## ➤ Testing

### Testing Methodologies

Learn about various software testing methodologies and why it is important to test your code.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSoftware_testing" alt="Logo" /> Wikipedia - Software testing](https://en.wikipedia.org/wiki/Software_testing)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fsmartbear.com%2Flearn%2Fautomated-testing%2Fsoftware-testing-methodologies%2F" alt="Logo" /> Software Testing Methodologies](https://smartbear.com/learn/automated-testing/software-testing-methodologies/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.inflectra.com%2Fideas%2Ftopic%2Ftesting-methodologies.aspx" alt="Logo" /> Learn The Methods & Tools](https://www.inflectra.com/ideas/topic/testing-methodologies.aspx)

#### Unit Testing

Learn about unit testing and how it can be used to test individual units of code.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.guru99.com%2Funit-testing-guide.html" alt="Logo" /> Unit Testing Tutorial](https://www.guru99.com/unit-testing-guide.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FUnit_testing" alt="Logo" /> Wikipedia - Unit testing](https://en.wikipedia.org/wiki/Unit_testing)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.tutorialspoint.com%2Fsoftware_testing_dictionary%2Funit_testing.htm" alt="Logo" /> What is Unit Testing?](https://www.tutorialspoint.com/software_testing_dictionary/unit_testing.htm)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40pjbgf%2Ftitle-testing-code-ocd-and-the-aaa-pattern-df453975ab80" alt="Logo" /> The Arrange, Act and Assert (AAA) Pattern](https://medium.com/@pjbgf/title-testing-code-ocd-and-the-aaa-pattern-df453975ab80)

#### Integration Testing

Learn about integration testing and how it can be used to test modules as a group.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.guru99.com%2Fintegration-testing.html" alt="Logo" /> Integration Testing Tutorial](https://www.guru99.com/integration-testing.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.tutorialspoint.com%2Fsoftware_testing_dictionary%2Fintegration_testing.htm" alt="Logo" /> What is Integration Testing?](https://www.tutorialspoint.com/software_testing_dictionary/integration_testing.htm)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fsoftwaretestingfundamentals.com%2Fintegration-testing%2F" alt="Logo" /> Integration Testing](http://softwaretestingfundamentals.com/integration-testing/)

#### System Testing

Learn about system testing and how it can be used to test the fully integrated software product.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.guru99.com%2Fsystem-testing.html" alt="Logo" /> System Testing Tutorial](https://www.guru99.com/system-testing.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.tutorialspoint.com%2Fsoftware_testing_dictionary%2Fsystem_testing.htm" alt="Logo" /> What is System Testing?](https://www.tutorialspoint.com/software_testing_dictionary/system_testing.htm)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fsoftwaretestingfundamentals.com%2Fsystem-testing%2F" alt="Logo" /> System Testing](http://softwaretestingfundamentals.com/system-testing/)

#### Acceptance Testing

Learn about acceptance testing and how it can be used to test the software for acceptability

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.guru99.com%2Fuser-acceptance-testing.html" alt="Logo" /> What is User Acceptance Testing?](https://www.guru99.com/user-acceptance-testing.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fsoftwaretestingfundamentals.com%2Facceptance-testing%2F" alt="Logo" /> Acceptance Testing](http://softwaretestingfundamentals.com/acceptance-testing/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.tutorialspoint.com%2Fsoftware_testing_dictionary%2Facceptance_testing.htm" alt="Logo" /> What is Acceptance Testing?](https://www.tutorialspoint.com/software_testing_dictionary/acceptance_testing.htm)

#### Smoke Testing

Learn about smoke testing and how it can be used to ensure that critical functionalities of the program are working fine.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.guru99.com%2Fsmoke-sanity-testing.html" alt="Logo" /> Sanity Testing Vs Smoke Testing](https://www.guru99.com/smoke-sanity-testing.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fsoftwaretestingfundamentals.com%2Fsmoke-testing%2F" alt="Logo" /> Smoke Testing](http://softwaretestingfundamentals.com/smoke-testing/)

#### Performance Testing

Learn about performance testing and how it can be used to determine the responsiveness and stability of a program.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.guru99.com%2Fperformance-testing.html" alt="Logo" /> Performance Testing Tutorial](https://www.guru99.com/performance-testing.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fsoftwaretestingfundamentals.com%2Fperformance-testing%2F" alt="Logo" /> Performance Testing](http://softwaretestingfundamentals.com/performance-testing/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSoftware_performance_testing" alt="Logo" /> Wikipedia - Software performance testing](https://en.wikipedia.org/wiki/Software_performance_testing)

#### Usability Testing

Learn about usability testing and how it can be used to determine if the system is easily usable for the end-user.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.guru99.com%2Fusability-testing.html" alt="Logo" /> What is Usability Testing?](https://www.guru99.com/usability-testing.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fsoftwaretestingfundamentals.com%2Fusability-testing%2F" alt="Logo" /> Usability Testing](http://softwaretestingfundamentals.com/usability-testing/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FUsability_testing" alt="Logo" /> Wikipedia - Usability testing](https://en.wikipedia.org/wiki/Usability_testing)

#### White Box Testing

Learn about white box testing and how it can be used to test the software's internal structure, design, and coding.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.guru99.com%2Fwhite-box-testing.html" alt="Logo" /> What is White Box Testing?](https://www.guru99.com/white-box-testing.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fsoftwaretestingfundamentals.com%2Fwhite-box-testing%2F" alt="Logo" /> White Box Testing](http://softwaretestingfundamentals.com/white-box-testing/)

#### Black Box Testing

Learn about black box testing and how a test can be carried out without looking at the internal code.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.guru99.com%2Fblack-box-testing.html" alt="Logo" /> What is Black Box Testing?](https://www.guru99.com/black-box-testing.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fsoftwaretestingfundamentals.com%2Fblack-box-testing%2F" alt="Logo" /> Black Box Testing](http://softwaretestingfundamentals.com/black-box-testing/)

#### Automated Testing

Learn about automated testing and when it should be applied.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fsmartbear.com%2Flearn%2Fautomated-testing%2Fwhat-is-automated-testing%2F" alt="Logo" /> What is Automated Testing?](https://smartbear.com/learn/automated-testing/what-is-automated-testing/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.guru99.com%2Fautomation-testing.html" alt="Logo" /> Automated Testing Tutorial](https://www.guru99.com/automation-testing.html)

#### Manual Testing

Learn about manual testing and when it should be applied.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.guru99.com%2Fmanual-testing.html" alt="Logo" /> Manual Testing Tutorial](https://www.guru99.com/manual-testing.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FManual_testing" alt="Logo" /> Wikipedia - Manual Testing](https://en.wikipedia.org/wiki/Manual_testing)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.tutorialspoint.com%2Fsoftware_testing_dictionary%2Fmanual_testing.htm" alt="Logo" /> What is Manual Testing?](https://www.tutorialspoint.com/software_testing_dictionary/manual_testing.htm)

### Continuous integration

Learn about continuous integration and it can enable iterative software development.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to%2Fmarkoa%2Fcontinuous-integration-explained-59f9" alt="Logo" /> dev.to - Continuous Integration Explained](https://dev.to/markoa/continuous-integration-explained-59f9)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.tutorialspoint.com%2Fcontinuous_integration%2Findex.htm" alt="Logo" /> Continuous Integration Tutorial](https://www.tutorialspoint.com/continuous_integration/index.htm)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FContinuous_integration" alt="Logo" /> Wikipedia - Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration)

### A/B Testing

Learn about A/B testing and how it can be used to optimize your web app.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to%2Fice_lenor%2Fab-testing-introduction-3jpd" alt="Logo" /> dev.to - A/B testing: introduction](https://dev.to/ice_lenor/ab-testing-introduction-3jpd)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to%2Fice_lenor%2Fwhen-not-to-ab-test-4cc7" alt="Logo" /> dev.to - When Not To A/B Test](https://dev.to/ice_lenor/when-not-to-ab-test-4cc7)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.optimizely.com%2Foptimization-glossary%2Fab-testing%2F" alt="Logo" /> A/B Testing](https://www.optimizely.com/optimization-glossary/ab-testing/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FA%2FB_testing" alt="Logo" /> Wikipedia - A/B testing](https://en.wikipedia.org/wiki/A/B_testing)

### Test Runners

Learn about test runners and how they can help running tests.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Famzotti.github.io%2Ftesting%2F2015%2F03%2F16%2Fwhat-is-the-difference-between-a-test-runner-testing-framework-assertion-library-and-a-testing-plugin%2F" alt="Logo" /> Classifications of Testing Software](https://amzotti.github.io/testing/2015/03/16/what-is-the-difference-between-a-test-runner-testing-framework-assertion-library-and-a-testing-plugin/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.udacity.com%2Fcourse%2Fjavascript-testing--ud549" alt="Logo" /> Udacity - Javascript Testing](https://www.udacity.com/course/javascript-testing--ud549)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.guru99.com%2Fjavascript-unit-testing-frameworks.html" alt="Logo" /> JavaScript Unit Testing Frameworks](https://www.guru99.com/javascript-unit-testing-frameworks.html)

#### Karma

Learn about the Karma test runner.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fkarma-runner.github.io%2Flatest%2Findex.html" alt="Logo" /> Karma](https://karma-runner.github.io/latest/index.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40jazcodes%2Fgetting-started-with-karma-and-mocha-for-automated-browser-tests-5ebb6cd02edf" alt="Logo" /> Getting started with Karma and Mocha](https://medium.com/@jazcodes/getting-started-with-karma-and-mocha-for-automated-browser-tests-5ebb6cd02edf)

#### Mocha

Learn about the Mocha testing framework.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmochajs.org%2F" alt="Logo" /> Mocha](https://mochajs.org/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fblog.logrocket.com%2Fa-quick-and-complete-guide-to-mocha-testing-d0e0ea09f09d%2F" alt="Logo" /> A quick and complete guide to Mocha testing](https://blog.logrocket.com/a-quick-and-complete-guide-to-mocha-testing-d0e0ea09f09d/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcodeburst.io%2Fhow-to-test-javascript-with-mocha-the-basics-80132324752e" alt="Logo" /> How to test JavaScript with Mocha](https://codeburst.io/how-to-test-javascript-with-mocha-the-basics-80132324752e)

#### Jasmine

Learn about the Jasmine testing frameworks.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fjasmine.github.io%2F" alt="Logo" /> Jasmine](https://jasmine.github.io/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Fbb-tutorials-and-thoughts%2Fjavascript-how-to-set-up-a-testing-environment-with-jasmine-and-karma-58591dd39734" alt="Logo" /> How to set up a testing environment with Jasmine and karma](https://medium.com/bb-tutorials-and-thoughts/javascript-how-to-set-up-a-testing-environment-with-jasmine-and-karma-58591dd39734)

#### Cypress

Learn how to use Cypress for end-to-end-testing.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.cypress.io%2F" alt="Logo" /> Cypress](https://www.cypress.io/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebdevstudios.com%2F2018%2F11%2F13%2Fend-to-end-testing-with-cypress-io%2F" alt="Logo" /> End-to-End Testing with Cypress](https://webdevstudios.com/2018/11/13/end-to-end-testing-with-cypress-io/)

#### Ava

Learn about the Ava test runner.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com%2Favajs%2Fava" alt="Logo" /> Github - Ava](https://github.com/avajs/ava)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fpusher.com%2Fsessions%2Fmeetup%2Fthe-js-roundabout%2Fava-test-runner-a-fresh-take-on-javascript-testing-and-growing-an-open-source-project" alt="Logo" /> A Fresh Take On JavaScript Testing](https://pusher.com/sessions/meetup/the-js-roundabout/ava-test-runner-a-fresh-take-on-javascript-testing-and-growing-an-open-source-project)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Ftesting-your-nodejs-applications-with-ava-js-99e806a226a7%2F" alt="Logo" /> Freecodecamp - How you can test your Node.js applications](https://www.freecodecamp.org/news/testing-your-nodejs-applications-with-ava-js-99e806a226a7/)

### Best Practices

Learn about the best practices when it comes to testing.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com%2Fgoldbergyoni%2Fjavascript-testing-best-practices" alt="Logo" /> Javascript Testing Best Practices](https://github.com/goldbergyoni/javascript-testing-best-practices)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.quora.com%2FWhat-are-the-best-practices-in-software-Testing" alt="Logo" /> What are the best practices in software Testing?](https://www.quora.com/What-are-the-best-practices-in-software-Testing)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.qasymphony.com%2Fblog%2F7-software-testing-best-practices%2F" alt="Logo" /> 7 Software Testing Best Practices](https://www.qasymphony.com/blog/7-software-testing-best-practices/)



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#architecture--paradigms)

## ➤ Architecture & paradigms

### Paradigms

### Programming Paradigms

Learn how programming languages can be categoried into different paraigmes based on their features.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FProgramming_paradigm" alt="Logo" /> Wikipedia - Programming paradigm](https://en.wikipedia.org/wiki/Programming_paradigm)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.geeksforgeeks.org%2Fintroduction-of-programming-paradigms%2F" alt="Logo" /> Introduction of Programming Paradigms](https://www.geeksforgeeks.org/introduction-of-programming-paradigms/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Fjavascript-in-plain-english%2Fwhat-are-javascript-programming-paradigms-3ef0f576dfdb" alt="Logo" /> What Are JavaScript Programming Paradigms?](https://medium.com/javascript-in-plain-english/what-are-javascript-programming-paradigms-3ef0f576dfdb)

### Object Oriented Programming

Learn about object oriented programming and how objects can make your code easier to read and debug.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FLearn%2FJavaScript%2FObjects%2FObject-oriented_JS" alt="Logo" /> Mozilla - Object-oriented JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Fan-introduction-to-object-oriented-programming-in-javascript-8900124e316a%2F" alt="Logo" /> Freecodecamp - An introduction to Object-Oriented Programming](https://www.freecodecamp.org/news/an-introduction-to-object-oriented-programming-in-javascript-8900124e316a/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.geeksforgeeks.org%2Fintroduction-object-oriented-programming-javascript%2F" alt="Logo" /> Introduction to Object Oriented Programming in JavaScript](https://www.geeksforgeeks.org/introduction-object-oriented-programming-javascript/)

#### S.O.L.I.D

Learn about the SOLID design pricinples that can make your code more understandable, flexible and maintainable.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSOLID" alt="Logo" /> Wikipedia - SOLID](https://en.wikipedia.org/wiki/SOLID)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fscotch.io%2Fbar-talk%2Fs-o-l-i-d-the-first-five-principles-of-object-oriented-design" alt="Logo" /> S.O.L.I.D: The First 5 Principles of Object Oriented Design](https://scotch.io/bar-talk/s-o-l-i-d-the-first-five-principles-of-object-oriented-design)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40cramirez92%2Fs-o-l-i-d-the-first-5-priciples-of-object-oriented-design-with-javascript-790f6ac9b9fa" alt="Logo" /> S.O.L.I.D The first 5 principles of Object Oriented Design with JavaScript](https://medium.com/@cramirez92/s-o-l-i-d-the-first-5-priciples-of-object-oriented-design-with-javascript-790f6ac9b9fa)

### Functional programming

Learn about functional programming and how it can make your code easier to read and debug.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fopensource.com%2Farticle%2F17%2F6%2Ffunctional-javascript" alt="Logo" /> An introduction to functional programming in JavaScript](https://opensource.com/article/17/6/functional-javascript)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcodeburst.io%2Ffunctional-programming-in-javascript-e57e7e28c0e5" alt="Logo" /> Functional Programming in JavaScript](https://codeburst.io/functional-programming-in-javascript-e57e7e28c0e5)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fitnext.io%2Fthe-power-of-functional-programming-in-javascript-cc9797a42b60" alt="Logo" /> The power of functional programming in Javascript](https://itnext.io/the-power-of-functional-programming-in-javascript-cc9797a42b60)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fflaviocopes.com%2Fjavascript-functional-programming%2F" alt="Logo" /> An introduction to Functional Programming](https://flaviocopes.com/javascript-functional-programming/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to%2Fnestedsoftware%2Fbasic-functional-programming-patterns-in-javascript-49p2" alt="Logo" /> dev.to - Basic Functional Programming Patterns in JavaScript](https://dev.to/nestedsoftware/basic-functional-programming-patterns-in-javascript-49p2)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40bluepnume%2Ffunctional-ish-javascript-205c05d0ed08" alt="Logo" /> Functional-ish JavaScript](https://medium.com/@bluepnume/functional-ish-javascript-205c05d0ed08)

#### Recursion

Learn about recursion and when it can be used to make your code more readable.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcodeburst.io%2Flearn-and-understand-recursion-in-javascript-b588218e87ea" alt="Logo" /> Learn and Understand Recursion in JavaScript](https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40zfrisch%2Funderstanding-recursion-in-javascript-992e96449e03" alt="Logo" /> Understanding Recursion in JavaScript](https://medium.com/@zfrisch/understanding-recursion-in-javascript-992e96449e03)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Frecursion-in-javascript-1608032c7a1f%2F" alt="Logo" /> Freecodecamp - Recursion in JavaScript](https://www.freecodecamp.org/news/recursion-in-javascript-1608032c7a1f/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fjavascript.info%2Frecursion" alt="Logo" /> javascript.info - Recursion and stack](https://javascript.info/recursion)

#### Higher-Order Functions

Learn about higher-order functions and when it can be used to make your code more readable.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.sitepoint.com%2Fhigher-order-functions-javascript%2F" alt="Logo" /> Higher-Order Functions](https://www.sitepoint.com/higher-order-functions-javascript/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Fa-quick-intro-to-higher-order-functions-in-javascript-1a014f89c6b%2F" alt="Logo" /> Freecodecamp - A quick intro to Higher-Order Functions](https://www.freecodecamp.org/news/a-quick-intro-to-higher-order-functions-in-javascript-1a014f89c6b/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHigher-order_function" alt="Logo" /> Wikipedia - Higher-Order function](https://en.wikipedia.org/wiki/Higher-order_function)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fblog.bitsrc.io%2Funderstanding-higher-order-functions-in-javascript-75461803bad" alt="Logo" /> Understanding Higher-Order Functions in JavaScript](https://blog.bitsrc.io/understanding-higher-order-functions-in-javascript-75461803bad)

#### Currying

Learn about currying and when it can be used to make your code more readable.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to%2Fbettercodingacademy%2Ffunctional-programming-all-you-need-to-know-about-currying-5k7" alt="Logo" /> dev.to - All you need to know about currying](https://dev.to/bettercodingacademy/functional-programming-all-you-need-to-know-about-currying-5k7)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgideonpyzer.dev%2Fblog%2F2017%2F01%2F14%2Fjavascript-currying-and-partial-application%2F" alt="Logo" /> JavaScript: Currying and Partial Application](https://gideonpyzer.dev/blog/2017/01/14/javascript-currying-and-partial-application/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Fjavascript-scene%2Fcurry-and-function-composition-2c208d774983" alt="Logo" /> Curry and Function Composition](https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FCurrying" alt="Logo" /> Wikipedia - Currying](https://en.wikipedia.org/wiki/Currying)

#### Monads

Learn about monads and when it can be used to make your code more readable.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D9QveBbn7t_c" alt="Logo" /> Youtube - Monad, FunFunFunction](https://www.youtube.com/watch?v=9QveBbn7t_c)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DYLIH8TKbAh4" alt="Logo" /> Youtube - Functors, FunFunFunction ](https://www.youtube.com/watch?v=YLIH8TKbAh4)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to%2Fjoelnet%2Ffunctional-javascript---functors-monads-and-promises-1pol" alt="Logo" /> Functional JavaScript - Functors, Monads, and Promises](https://dev.to/joelnet/functional-javascript---functors-monads-and-promises-1pol)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMonad_(functional_programming)" alt="Logo" /> Wikipedia - Monad](https://en.wikipedia.org/wiki/Monad_(functional_programming))
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Fjavascript-scene%2Fjavascript-monads-made-simple-7856be57bfe8" alt="Logo" /> JavaScript Monads Made Simple](https://medium.com/javascript-scene/javascript-monads-made-simple-7856be57bfe8)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Ffront-end-weekly%2Fimplementing-javascript-functors-and-monads-a87b6a4b4d9a" alt="Logo" /> Implementing JavaScript Functors and Monads](https://medium.com/front-end-weekly/implementing-javascript-functors-and-monads-a87b6a4b4d9a)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FArray%2FflatMap" alt="Logo" /> Mozilla - Array.prototype.flatMap()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)


### Architecture

### Design Patterns

Learn how commonly occurring problems can be solved using design patterns.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSoftware_design_pattern" alt="Logo" /> Wikipedia - Software design pattern](https://en.wikipedia.org/wiki/Software_design_pattern)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Feducative%2Fthe-7-most-important-software-design-patterns-d60e546afb0e" alt="Logo" /> The 7 Most Important Software Design Patterns](https://medium.com/educative/the-7-most-important-software-design-patterns-d60e546afb0e)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.geeksforgeeks.org%2Fsoftware-design-patterns%2F" alt="Logo" /> Software Design Patterns](https://www.geeksforgeeks.org/software-design-patterns/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Frefactoring.guru%2Fdesign-patterns" alt="Logo" /> Design Patterns](https://refactoring.guru/design-patterns)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.dofactory.com%2Fjavascript%2Fdesign-patterns" alt="Logo" /> JavaScript Design Patterns](https://www.dofactory.com/javascript/design-patterns)

#### Singleton

Learn about the singleton design pattern and when it should be used.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Frefactoring.guru%2Fdesign-patterns%2Fsingleton" alt="Logo" /> Singleton Pattern](https://refactoring.guru/design-patterns/singleton)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.dofactory.com%2Fjavascript%2Fsingleton-design-pattern" alt="Logo" /> Singleton Example](https://www.dofactory.com/javascript/singleton-design-pattern)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSingleton_pattern" alt="Logo" /> Wikipedia - Singleton Pattern](https://en.wikipedia.org/wiki/Singleton_pattern)

#### Observer

Learn about the observer design pattern and when it should be used.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Frefactoring.guru%2Fdesign-patterns%2Fobserver" alt="Logo" /> Observer Pattern](https://refactoring.guru/design-patterns/observer)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.dofactory.com%2Fjavascript%2Fobserver-design-pattern" alt="Logo" /> Observer Example](https://www.dofactory.com/javascript/observer-design-pattern)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FObserver_pattern" alt="Logo" /> Wikipedia - Observer Pattern](https://en.wikipedia.org/wiki/Observer_pattern)

#### Prototype

Learn about the prototype design pattern and when it should be used.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Frefactoring.guru%2Fdesign-patterns%2Fprototype" alt="Logo" /> Prototype Pattern](https://refactoring.guru/design-patterns/prototype)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.dofactory.com%2Fjavascript%2Fprototype-design-pattern" alt="Logo" /> Prototype Example](https://www.dofactory.com/javascript/prototype-design-pattern)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FPrototype_pattern" alt="Logo" /> Wikipedia - Prototype pattern](https://en.wikipedia.org/wiki/Prototype_pattern)

#### Bridge

Learn about the bridge design pattern and when it should be used.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Frefactoring.guru%2Fdesign-patterns%2Fbridge" alt="Logo" /> Bridge Pattern](https://refactoring.guru/design-patterns/bridge)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.dofactory.com%2Fjavascript%2Fbridge-design-pattern" alt="Logo" /> Bridge Example](https://www.dofactory.com/javascript/bridge-design-pattern)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBridge_pattern" alt="Logo" /> Wikipedia - Bridge pattern](https://en.wikipedia.org/wiki/Bridge_pattern)

#### Proxy

Learn about the proxy design pattern and when it should be used.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Frefactoring.guru%2Fdesign-patterns%2Fproxy" alt="Logo" /> Proxy Pattern](https://refactoring.guru/design-patterns/proxy)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.dofactory.com%2Fjavascript%2Fproxy-design-pattern" alt="Logo" /> Proxy Example](https://www.dofactory.com/javascript/proxy-design-pattern)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FProxy_pattern" alt="Logo" /> Wikipedia - Proxy pattern](https://en.wikipedia.org/wiki/Proxy_pattern)

#### Chain of responsibility

Learn about the chain of responsibility design pattern and when it should be used.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Frefactoring.guru%2Fdesign-patterns%2Fchain-of-responsibility" alt="Logo" /> Chain of Responsibility Pattern](https://refactoring.guru/design-patterns/chain-of-responsibility)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.dofactory.com%2Fjavascript%2Fchain-of-responsibility-design-pattern" alt="Logo" /> Chain of Responsibility Example](https://www.dofactory.com/javascript/chain-of-responsibility-design-pattern)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FChain-of-responsibility_pattern" alt="Logo" /> Wikipedia - Chain of responsibility](https://en.wikipedia.org/wiki/Chain-of-responsibility_pattern)

#### Constructor

Learn about the constructor design pattern and when it should be used.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.oreilly.com%2Flibrary%2Fview%2Flearning-javascript-design%2F9781449334840%2Fch09s01.html" alt="Logo" /> The Constructor Pattern](https://www.oreilly.com/library/view/learning-javascript-design/9781449334840/ch09s01.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40severinperez%2Fjavascript-weekly-fundamental-object-design-patterns-31453f68427f" alt="Logo" /> Fundamental Object Design Patterns in JavaScript](https://medium.com/@severinperez/javascript-weekly-fundamental-object-design-patterns-31453f68427f)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F35057827%2Fdifference-between-constructor-pattern-and-prototype-pattern" alt="Logo" /> Difference between Constructor pattern and Prototype pattern](https://stackoverflow.com/questions/35057827/difference-between-constructor-pattern-and-prototype-pattern)

### CSS Methodologies

Learn how CSS can be structured using CSS methodologies.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.webfx.com%2Fblog%2Fweb-design%2Fcss-methodologies%2F" alt="Logo" /> A Look at Some CSS Methodologies](https://www.webfx.com/blog/web-design/css-methodologies/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.creativebloq.com%2Ffeatures%2Fa-web-designers-guide-to-css-methodologies" alt="Logo" /> A web designer's guide to CSS methodologies](https://www.creativebloq.com/features/a-web-designers-guide-to-css-methodologies)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.hongkiat.com%2Fblog%2Fcss-writing-methodologies%2F" alt="Logo" /> Understanding CSS Writing Methodologies](https://www.hongkiat.com/blog/css-writing-methodologies/)

#### BEM

Learn about the BEM methodology and when it should be used.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fgetbem.com%2F" alt="Logo" /> Get BEM](http://getbem.com/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com%2Fbem-101%2F" alt="Logo" /> CSS Tricks - BEM 101](https://css-tricks.com/bem-101/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40dannyhuang_75970%2Fwhat-is-bem-and-why-you-should-use-it-in-your-project-ab37c6d10b79" alt="Logo" /> What is BEM? And Why you should use it in your project.](https://medium.com/@dannyhuang_75970/what-is-bem-and-why-you-should-use-it-in-your-project-ab37c6d10b79)

#### SMACSS

Learn about the SMACSS methodology and when it should be used.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fsmacss.com%2F" alt="Logo" /> SMACSS](http://smacss.com/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.sitepoint.com%2Fbem-smacss-advice-from-developers%2F" alt="Logo" /> BEM vs SMACSS](https://www.sitepoint.com/bem-smacss-advice-from-developers/)

#### OOCSS

Learn about the OOCSS methodology and when it should be used.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com%2Fstubbornella%2Foocss%2Fwiki" alt="Logo" /> OOCSS](https://github.com/stubbornella/oocss/wiki)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.smashingmagazine.com%2F2011%2F12%2Fan-introduction-to-object-oriented-css-oocss%2F" alt="Logo" /> An Introduction To Object Oriented CSS](https://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.keycdn.com%2Fblog%2Foocss" alt="Logo" /> The Future of Writing CSS](https://www.keycdn.com/blog/oocss)



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#team-collaboration)

## ➤ Team Collaboration

### Version Control

### Git

Learn about git and how it is used for version control.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Flearngitbranching.js.org%2F" alt="Logo" /> Learn Git Branching](https://learngitbranching.js.org/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fguides.github.com%2Fintroduction%2Fgit-handbook%2F" alt="Logo" /> Git Handbook](https://guides.github.com/introduction/git-handbook/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.github.com%2Ftraining-kit%2Fdownloads%2Fgithub-git-cheat-sheet%2F" alt="Logo" /> Github Cheatsheet](https://github.github.com/training-kit/downloads/github-git-cheat-sheet/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fgit-school.github.io%2Fvisualizing-git%2F" alt="Logo" /> Visualizing Git](http://git-school.github.io/visualizing-git/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.codecademy.com%2Flearn%2Flearn-git" alt="Logo" /> Codecademy - Learn Gitthis](https://www.codecademy.com/learn/learn-git)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgit-hint.netlify.com%2F" alt="Logo" /> Git Hint](https://git-hint.netlify.com/)

#### Github

Learn how to use Github.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fguides.github.com%2Factivities%2Fhello-world%2F" alt="Logo" /> What is GitHub?](https://guides.github.com/activities/hello-world/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Flab.github.com%2F" alt="Logo" /> GitHub Learning Lab](https://lab.github.com/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGithub" alt="Logo" /> Wikipedia - Github](https://en.wikipedia.org/wiki/Github)

#### Bitbucket

Learn how to use Bitbucket.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBitbucket" alt="Logo" /> Wikipedia - Bitbucket](https://en.wikipedia.org/wiki/Bitbucket)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fconfluence.atlassian.com%2Fbitbucket%2Ftutorial-learn-bitbucket-with-git-759857287.html" alt="Logo" /> Tutorial: Learn Bitbucket with Git](https://confluence.atlassian.com/bitbucket/tutorial-learn-bitbucket-with-git-759857287.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.tecmint.com%2Fbitbucket-for-version-control%2F" alt="Logo" /> Getting Started with Bitbucket for Version Control](https://www.tecmint.com/bitbucket-for-version-control/)


### Management

### Agile Development

Learn about agile development and when to use it.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FAgile_software_development" alt="Logo" /> Wikipedia - Agile software development](https://en.wikipedia.org/wiki/Agile_software_development)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.infoworld.com%2Farticle%2F3237508%2Fwhat-is-agile-methodology-modern-software-development-explained.html" alt="Logo" /> What is agile methodology?](https://www.infoworld.com/article/3237508/what-is-agile-methodology-modern-software-development-explained.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.visual-paradigm.com%2Fscrum%2Fwhat-is-agile-software-development%2F" alt="Logo" /> What is Agile Software Development?](https://www.visual-paradigm.com/scrum/what-is-agile-software-development/)

#### Scrum

Learn about scrum and when to use it.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.knowledgehut.com%2Ftutorials%2Fscrum-tutorial" alt="Logo" /> Scrum Tutorial](https://www.knowledgehut.com/tutorials/scrum-tutorial)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.tutorialspoint.com%2Fscrum%2Fscrum_overview.htm" alt="Logo" /> Scrum - Overview](https://www.tutorialspoint.com/scrum/scrum_overview.htm)

#### Kanban

Learn about kanban and when to use it.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.tutorialspoint.com%2Fkanban%2Fkanban_introduction.htm" alt="Logo" /> Kanban Tutorial](https://www.tutorialspoint.com/kanban/kanban_introduction.htm)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.atlassian.com%2Fagile%2Fkanban" alt="Logo" /> What is kanban?](https://www.atlassian.com/agile/kanban)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.scrumhub.com%2Fkanban-fundamentals%2F" alt="Logo" /> Kanban Fundamentals](https://www.scrumhub.com/kanban-fundamentals/)

### Waterfall Development

Learn about waterfall development and when to use it.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.tutorialspoint.com%2Fsdlc%2Fsdlc_waterfall_model.htm" alt="Logo" /> Waterfall Model](https://www.tutorialspoint.com/sdlc/sdlc_waterfall_model.htm)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.seguetech.com%2Fwaterfall-vs-agile-methodology%2F" alt="Logo" /> Waterfall vs. Agile](https://www.seguetech.com/waterfall-vs-agile-methodology/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fairbrake.io%2Fblog%2Fsdlc%2Fwaterfall-model" alt="Logo" /> Waterfall Model: What and when](https://airbrake.io/blog/sdlc/waterfall-model)

### Test Driven Development

Learn about test driven development and when to use it.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTest-driven_development" alt="Logo" /> Wikipedia - Test-driven development](https://en.wikipedia.org/wiki/Test-driven_development)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.codecademy.com%2Farticles%2Ftdd-red-green-refactor" alt="Logo" /> Red, Green, Refactor](https://www.codecademy.com/articles/tdd-red-green-refactor)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Ftest-driven-development-what-it-is-and-what-it-is-not-41fa6bca02a2%2F" alt="Logo" /> Freecodecamp - Test Driven Development](https://www.freecodecamp.org/news/test-driven-development-what-it-is-and-what-it-is-not-41fa6bca02a2/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Fjavascript-scene%2Ftdd-changed-my-life-5af0ce099f80" alt="Logo" /> TDD Changed My Life](https://medium.com/javascript-scene/tdd-changed-my-life-5af0ce099f80)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to%2Ftomekbuszewski%2Ftest-driven-development-in-javascript-olg" alt="Logo" /> dev.to - Test-driven development in JavaScript](https://dev.to/tomekbuszewski/test-driven-development-in-javascript-olg)



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#design--ux)

## ➤ Design & UX

### Color Theory

Learn about color theory and how you can make your own color schemes.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fuxdesign.cc%2Fall-you-need-to-know-about-colors-in-ui-design-theory-practice-235179712522" alt="Logo" /> All you need to know about colors in UI Design](https://uxdesign.cc/all-you-need-to-know-about-colors-in-ui-design-theory-practice-235179712522)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.toptal.com%2Fdesigners%2Fux%2Fcolor-in-ux" alt="Logo" /> The Role of Color in UX](https://www.toptal.com/designers/ux/color-in-ux)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.muz.li%2F10-questions-of-color-theory-that-will-make-you-a-better-ux-designer-b5244c1341a6" alt="Logo" /> 10 Questions of Color Theory](https://medium.muz.li/10-questions-of-color-theory-that-will-make-you-a-better-ux-designer-b5244c1341a6)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FColor_theory" alt="Logo" /> Wikipedia - Color Theory](https://en.wikipedia.org/wiki/Color_theory)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.smashingmagazine.com%2F2010%2F01%2Fcolor-theory-for-designers-part-1-the-meaning-of-color%2F" alt="Logo" /> The Meaning of Color](https://www.smashingmagazine.com/2010/01/color-theory-for-designers-part-1-the-meaning-of-color/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fvisme.co%2Fblog%2Fwebsite-color-schemes%2F" alt="Logo" /> 50 Gorgeous Color Schemes](https://visme.co/blog/website-color-schemes/)

#### Color Wheel

Learn how to use the color wheel when making a color scheme.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fuxplanet.org%2Fcolor-theory-brief-guide-for-designers-76e11c57eaa" alt="Logo" /> Color Theory: Brief Guide For Designers](https://uxplanet.org/color-theory-brief-guide-for-designers-76e11c57eaa)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.canva.com%2Fcolors%2Fcolor-wheel%2F" alt="Logo" /> Color theory and the color wheel](https://www.canva.com/colors/color-wheel/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2F99designs.dk%2Fblog%2Ftips%2Fthe-7-step-guide-to-understanding-color-theory%2F" alt="Logo" /> The fundamentals of understanding color theory](https://99designs.dk/blog/tips/the-7-step-guide-to-understanding-color-theory/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcolor.adobe.com%2F" alt="Logo" /> Adobe - Color wheel](https://color.adobe.com/)

### Typography

Learn about typography and how to describe fonts.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmaterial.io%2Fdesign%2Ftypography%2Funderstanding-typography.html%23type-classification" alt="Logo" /> Google - Understanding typography](https://material.io/design/typography/understanding-typography.html#type-classification)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.howtogeek.com%2Fhowto%2F30065%2Fhow-to-understand-typography-like-a-professional-designer%2F" alt="Logo" /> How to Understand Typography](https://www.howtogeek.com/howto/30065/how-to-understand-typography-like-a-professional-designer/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Fgravitdesigner%2Ftypography-elements-everyone-needs-to-understand-5fdea82f470d" alt="Logo" /> Typography Elements Everyone Needs to Understand](https://medium.com/gravitdesigner/typography-elements-everyone-needs-to-understand-5fdea82f470d)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DQrNi9FmdlxY" alt="Logo" /> Youtube - 10 rules to help you rule type](https://www.youtube.com/watch?v=QrNi9FmdlxY)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.canva.com%2Flearn%2Ffont-design%2F" alt="Logo" /> Font Design](https://www.canva.com/learn/font-design/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fblog.hubspot.com%2Fmarketing%2Ftypography-terms-introduction" alt="Logo" /> Typography Tutorial for Beginners](https://blog.hubspot.com/marketing/typography-terms-introduction)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.jotform.com%2Fblog%2Fa-crash-course-in-typography-the-basics-of-type%2F" alt="Logo" /> A Crash Course in Typography](https://www.jotform.com/blog/a-crash-course-in-typography-the-basics-of-type/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.fonts.com%2Fcontent%2Flearning%2Ffontology%2Flevel-1%2Ftype-anatomy%2Ftype-classifications" alt="Logo" /> Type Classifications](https://www.fonts.com/content/learning/fontology/level-1/type-anatomy/type-classifications)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Ffonts.google.com%2F" alt="Logo" /> Google Fonts](https://fonts.google.com/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fuxdesign.cc%2F7-web-typography-rules-27de68c60f6" alt="Logo" /> 7 web typography rules](https://uxdesign.cc/7-web-typography-rules-27de68c60f6)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.muz.li%2Ftypography-in-mobile-design-15-best-practices-to-excellent-ui-5eaf18280ad" alt="Logo" /> 15 Best Practices To Excellent UI](https://medium.muz.li/typography-in-mobile-design-15-best-practices-to-excellent-ui-5eaf18280ad)

#### Font Size

Learn about font sizes and how to choose the right one.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Ftype-scale.com%2F" alt="Logo" /> Type scale](https://type-scale.com/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.cardinalpath.com%2Fthe-importance-of-font-size%2F" alt="Logo" /> The importance of font size](https://www.cardinalpath.com/the-importance-of-font-size/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.liveseysolar.com%2Fwebsite-font-size-size-does-matter%2F" alt="Logo" /> Website font size: Size does matter](https://www.liveseysolar.com/website-font-size-size-does-matter/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com%2Falmanac%2Fproperties%2Ff%2Ffont-size%2F" alt="Logo" /> CSS Tricks - font-size](https://css-tricks.com/almanac/properties/f/font-size/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com%2Fsnippets%2Fcss%2Ffluid-typography%2F" alt="Logo" /> CSS Tricks - Fluid Typography](https://css-tricks.com/snippets/css/fluid-typography/)

#### Line Spacing

Learn about line spacing and how to choose the right one.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.justinmind.com%2Fblog%2Fbest-ux-practices-for-line-spacing%2F" alt="Logo" /> Best UX practices for line spacing](https://www.justinmind.com/blog/best-ux-practices-for-line-spacing/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fpracticaltypography.com%2Fline-spacing.html" alt="Logo" /> Line spacing](https://practicaltypography.com/line-spacing.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.invisionapp.com%2Finside-design%2Fline-spacing%2F" alt="Logo" /> Why you should go big with line spacing](https://www.invisionapp.com/inside-design/line-spacing/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com%2Falmanac%2Fproperties%2Fl%2Fline-height%2F" alt="Logo" /> CSS Tricks - line-height](https://css-tricks.com/almanac/properties/l/line-height/)

### C.R.A.P

Learn how the C.R.A.P. design principles can help you point out the qualities (or flaws) in a design.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fvwo.com%2Fblog%2Fcrap-design-principles%2F" alt="Logo" /> Build Better User Experience](https://vwo.com/blog/crap-design-principles/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.instructables.com%2Fid%2FCRAP-principles%2F" alt="Logo" /> CRAP Principles](https://www.instructables.com/id/CRAP-principles/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.amazon.com%2FNon-Designers-Design-Book-4th%2Fdp%2F0133966151" alt="Logo" /> The Non-Designer's Design Book](https://www.amazon.com/Non-Designers-Design-Book-4th/dp/0133966151)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DNZ3ryLUR8CI" alt="Logo" /> Youtube - The Non-Designers Design Book](https://www.youtube.com/watch?v=NZ3ryLUR8CI)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcreativemarket.com%2Fblog%2Fhow-crap-will-make-you-a-better-designer" alt="Logo" /> How CRAP Will Make You a Better Designer](https://creativemarket.com/blog/how-crap-will-make-you-a-better-designer)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.presentationzen.com%2Fchapter6_spread.pdf" alt="Logo" /> The Big Four: Contrast, Repetition, Alignment, Proximity](https://www.presentationzen.com/chapter6_spread.pdf)

#### Contrast

Learn how the principles of contrast can help you when designing.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.canva.com%2Flearn%2Fcontrasting-colors%2F" alt="Logo" /> Designing with contrast: 20 tips from a designer](https://www.canva.com/learn/contrasting-colors/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dr0SAPEw0ru4" alt="Logo" /> Contrast Design principle of Graphic Design](https://www.youtube.com/watch?v=r0SAPEw0ru4)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.designcontest.com%2Fblog%2Fcontrast-in-design%2F" alt="Logo" /> Contrast In Design](https://www.designcontest.com/blog/contrast-in-design/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.webdesignerdepot.com%2F2010%2F09%2Ffully-understanding-contrast-in-design%2F" alt="Logo" /> Fully understanding contrast in design](https://www.webdesignerdepot.com/2010/09/fully-understanding-contrast-in-design/)

#### Repetition

Learn how the principles of repetition can help you when designing.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Du55BW6WBqVU" alt="Logo" /> Repetition Design principle of Graphic Design](https://www.youtube.com/watch?v=u55BW6WBqVU)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2F254-online.com%2Frepetition-principle-of-design%2F" alt="Logo" /> Repetition Principle of Design](https://254-online.com/repetition-principle-of-design/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.interaction-design.org%2Fliterature%2Farticle%2Frepetition-pattern-and-rhythm" alt="Logo" /> Repetition, Pattern, and Rhythm](https://www.interaction-design.org/literature/article/repetition-pattern-and-rhythm)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.johnlovett.com%2Frepetition" alt="Logo" /> Repetition, principles of design](https://www.johnlovett.com/repetition)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.edgee.net%2Fthe-principles-of-graphic-design-how-to-use-repetition-effectively%2F" alt="Logo" /> How to Use Repetition Effectively](https://www.edgee.net/the-principles-of-graphic-design-how-to-use-repetition-effectively/)

#### Alignment

Learn how the principles of alignment can help you when designing.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D2kokQi9vb6E" alt="Logo" /> Alignment Design principle of Graphic Design](https://www.youtube.com/watch?v=2kokQi9vb6E)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2F254-online.com%2Falignment-principle-design%2F" alt="Logo" /> Alignment Principle Of Design](https://254-online.com/alignment-principle-design/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.designmantic.com%2Fblog%2Fart-of-alignment-graphic-design%2F" alt="Logo" /> The Art Of Alignment In Graphic Design](https://www.designmantic.com/blog/art-of-alignment-graphic-design/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fuxengineer.com%2Fprinciples-of-design%2Falignment%2F" alt="Logo" /> Introduction to Alignment](https://uxengineer.com/principles-of-design/alignment/)

#### Proximity

Learn how the principles of proximity can help you when designing.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DxUdqSiI_G8Y" alt="Logo" /> Proximity Design principle of Graphic Design](https://www.youtube.com/watch?v=xUdqSiI_G8Y)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.edgee.net%2Fthe-principles-of-graphic-design-how-to-use-proximity-effectively%2F" alt="Logo" /> How to Use Proximity Effectively](https://www.edgee.net/the-principles-of-graphic-design-how-to-use-proximity-effectively/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2F254-online.com%2Fproximity-principle-design%2F" alt="Logo" /> Proximity Principle Of Design](https://254-online.com/proximity-principle-design/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fuxplanet.org%2Fgestalt-theory-for-ux-design-principle-of-proximity-e56b136d52d1" alt="Logo" /> Gestalt Theory for UX Design: Principle of Proximity](https://uxplanet.org/gestalt-theory-for-ux-design-principle-of-proximity-e56b136d52d1)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.sitepoint.com%2Fprinciples-of-design-proximity%2F" alt="Logo" /> Principles of Design: Proximity](https://www.sitepoint.com/principles-of-design-proximity/)

### Consistency

Learn why consistency is one of the most important building-blocks in a design.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fuxdesign.cc%2Fdesign-principle-consistency-6b0cf7e7339f" alt="Logo" /> Design principle: Consistency](https://uxdesign.cc/design-principle-consistency-6b0cf7e7339f)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fblog.prototypr.io%2Fconsistency-a-key-design-principle-5d125469da8e" alt="Logo" /> Consistency, A Key Design Principle](https://blog.prototypr.io/consistency-a-key-design-principle-5d125469da8e)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.interaction-design.org%2Fliterature%2Farticle%2Fconsistency-more-than-what-you-think" alt="Logo" /> Consistency: MORE than what you think](https://www.interaction-design.org/literature/article/consistency-more-than-what-you-think)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.interaction-design.org%2Fliterature%2Farticle%2Fprinciple-of-consistency-and-standards-in-user-interface-design" alt="Logo" /> Principle of Consistency in User Interface Design](https://www.interaction-design.org/literature/article/principle-of-consistency-and-standards-in-user-interface-design)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.invisionapp.com%2Finside-design%2Fconsistent-design%2F" alt="Logo" /> The value of consistent design](https://www.invisionapp.com/inside-design/consistent-design/)

### Spacing

Learn how to use space in your design.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Feightshapes-llc%2Fspace-in-design-systems-188bcbae0d62" alt="Logo" /> Space in Design Systems](https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fvisme.co%2Fblog%2Fhow-to-properly-use-margins-and-spacing-in-design%2F" alt="Logo" /> How to use spacing margin and spacing in design](https://visme.co/blog/how-to-properly-use-margins-and-spacing-in-design/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fvanseodesign.com%2Fweb-design%2Fdesign-space%2F" alt="Logo" /> How To Use Space In Design](https://vanseodesign.com/web-design/design-space/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fblog.prototypr.io%2Fimportance-of-white-space-in-design-5a40c0e65bfd" alt="Logo" /> Importance of White Space in Design](https://blog.prototypr.io/importance-of-white-space-in-design-5a40c0e65bfd)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Ftubikstudio.com%2Fnegative-space-in-design-tips-and-best-practices-2%2F" alt="Logo" /> Negative Space in Design](https://tubikstudio.com/negative-space-in-design-tips-and-best-practices-2/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.shutterstock.com%2Fsupport%2Farticle%2Fhow-to-change-line-spacing-in-indesign" alt="Logo" /> How to Change Line Spacing in InDesign](https://www.shutterstock.com/support/article/how-to-change-line-spacing-in-indesign)

### Error Handling

Learn how to improve the user experience by handling errors in an intuitive way.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Flattice-product-development%2Fdesign-an-error-handling-system-before-you-structure-your-app-or-software-project-part-i-efe6a1674628" alt="Logo" /> Design an Error Handling System before you structure your App](https://medium.com/lattice-product-development/design-an-error-handling-system-before-you-structure-your-app-or-software-project-part-i-efe6a1674628)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fuimovement.com%2Ftag%2Ferror-handling%2F" alt="Logo" /> UI Error Handling](https://uimovement.com/tag/error-handling/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fuxdesign.cc%2Fcreating-error-messages-best-practice-in-ux-design-cda3be0f5e16" alt="Logo" /> Creating Error Messages](https://uxdesign.cc/creating-error-messages-best-practice-in-ux-design-cda3be0f5e16)

### Loading

Learn how a loading state can improve the user experience.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fuxdesign.cc%2Fwhat-you-should-know-about-skeleton-screens-a820c45a571a" alt="Logo" /> Everything you need to know about skeleton screens](https://uxdesign.cc/what-you-should-know-about-skeleton-screens-a820c45a571a)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fuxdesign.cc%2Fengaging-users-with-progressive-loading-in-skeleton-screen-335a4e287a55" alt="Logo" /> Engaging users with progressive loading in skeleton screen](https://uxdesign.cc/engaging-users-with-progressive-loading-in-skeleton-screen-335a4e287a55)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmarinaaisa.com%2Fblog%2Fdesign-and-code-skeletons-screens%2F" alt="Logo" /> Design and code responsive Skeleton Screens](https://marinaaisa.com/blog/design-and-code-skeletons-screens/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.sitepoint.com%2Fhow-to-speed-up-your-ux-with-skeleton-screens%2F" alt="Logo" /> How to Speed Up Your UX with Skeleton Screens](https://www.sitepoint.com/how-to-speed-up-your-ux-with-skeleton-screens/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.viget.com%2Farticles%2Fa-bone-to-pick-with-skeleton-screens%2F" alt="Logo" /> A Bone to Pick with Skeleton Screens](https://www.viget.com/articles/a-bone-to-pick-with-skeleton-screens/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fuxdesign.cc%2Fwhen-to-use-loaders-empty-states-ebd23cecc7d6" alt="Logo" /> When to use loaders & empty states](https://uxdesign.cc/when-to-use-loaders-empty-states-ebd23cecc7d6)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.uisources.com%2Fpattern%2Fempty-loading-state" alt="Logo" /> Empty/Loading State](https://www.uisources.com/pattern/empty-loading-state)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fuxmovement.com%2Fbuttons%2Fwhen-you-need-to-show-a-buttons-loading-state%2F" alt="Logo" /> When You Need to Show a Button’s Loading State](https://uxmovement.com/buttons/when-you-need-to-show-a-buttons-loading-state/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fblog.iamsuleiman.com%2Fstop-using-loading-spinner-theres-something-better%2F" alt="Logo" /> Stop Using Loading Spinner](https://blog.iamsuleiman.com/stop-using-loading-spinner-theres-something-better/)

### The Golden Ratio

Learn how the golden ratio can help you when choose measurements for your design.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdesignshack.net%2Farticles%2Flayouts%2Fgolden-ratio-in-design%2F" alt="Logo" /> The Golden Ratio in Design](https://designshack.net/articles/layouts/golden-ratio-in-design/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.invisionapp.com%2Finside-design%2Fgolden-ratio-designers%2F" alt="Logo" /> A guide to the Golden Ratio for designers](https://www.invisionapp.com/inside-design/golden-ratio-designers/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.canva.com%2Flearn%2Fwhat-is-the-golden-ratio%2F" alt="Logo" /> What is the golden ratio](https://www.canva.com/learn/what-is-the-golden-ratio/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.creativebloq.com%2Fdesign%2Fdesigners-guide-golden-ratio-12121546" alt="Logo" /> The Golden Ratio: A designer's guide](https://www.creativebloq.com/design/designers-guide-golden-ratio-12121546)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fblog.prototypr.io%2Fgolden-ratio-what-it-is-and-why-should-you-use-it-in-design-7c3f43bcf98" alt="Logo" /> Golden Ratio: What It Is And Why Should You Use It In Design](https://blog.prototypr.io/golden-ratio-what-it-is-and-why-should-you-use-it-in-design-7c3f43bcf98)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgrtcalculator.com%2F" alt="Logo" /> Golden Ratio Typography (GRT) Calculator](https://grtcalculator.com/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.companyfolders.com%2Fblog%2Fgolden-ratio-design-examples" alt="Logo" /> How to Use the Golden Ratio](https://www.companyfolders.com/blog/golden-ratio-design-examples)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwpamelia.com%2Fgolden-ratio%2F" alt="Logo" /> Golden Ratio in Design](https://wpamelia.com/golden-ratio/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.format.com%2Fmagazine%2Fresources%2Fdesign%2Fgolden-ratio-in-design" alt="Logo" /> How To Use The Golden Ratio In Design](https://www.format.com/magazine/resources/design/golden-ratio-in-design)

### Mobile First

Learn about designing for mobile first and why it is important.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.justinmind.com%2Fblog%2Fcomplete-guide-to-mobile-first-design%2F" alt="Logo" /> Complete guide to mobile first design](https://www.justinmind.com/blog/complete-guide-to-mobile-first-design/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40Vincentxia77%2Fwhat-is-mobile-first-design-why-its-important-how-to-make-it-7d3cf2e29d00" alt="Logo" /> What is Mobile First Design?](https://medium.com/@Vincentxia77/what-is-mobile-first-design-why-its-important-how-to-make-it-7d3cf2e29d00)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.uxpin.com%2Fstudio%2Fblog%2Fa-hands-on-guide-to-mobile-first-design%2F" alt="Logo" /> A Hands-On Guide to Mobile-First Responsive Design](https://www.uxpin.com/studio/blog/a-hands-on-guide-to-mobile-first-design/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdesignshack.net%2Farticles%2Fmobile%2Fmobilefirst%2F" alt="Logo" /> Mobile First Design](https://designshack.net/articles/mobile/mobilefirst/)

#### Hit Targets

Learn about hit targets can why they should not be neglected.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.smashingmagazine.com%2F2012%2F02%2Ffinger-friendly-design-ideal-mobile-touchscreen-target-sizes%2F" alt="Logo" /> Finger-Friendly Design](https://www.smashingmagazine.com/2012/02/finger-friendly-design-ideal-mobile-touchscreen-target-sizes/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40zacdicko%2Fsize-matters-accessibility-and-touch-targets-56e942adc0cc" alt="Logo" /> Size matters! Accessibility and Touch Targets](https://medium.com/@zacdicko/size-matters-accessibility-and-touch-targets-56e942adc0cc)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fuxmovement.com%2Fmobile%2Foptimal-size-and-spacing-for-mobile-buttons%2F" alt="Logo" /> Optimal Size and Spacing for Mobile Buttons](https://uxmovement.com/mobile/optimal-size-and-spacing-for-mobile-buttons/)

### Design Systems

Learn what design systems are and get familiar with some.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.invisionapp.com%2Finside-design%2Fguide-to-design-systems%2F" alt="Logo" /> A comprehensive guide to design systems](https://www.invisionapp.com/inside-design/guide-to-design-systems/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fuxdesign.cc%2Fwhat-the-heck-is-a-design-system-c89a8ea73b0d" alt="Logo" /> What the heck is a design system?](https://uxdesign.cc/what-the-heck-is-a-design-system-c89a8ea73b0d)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fuxdesign.cc%2Feverything-you-need-to-know-about-design-systems-54b109851969" alt="Logo" /> Everything you need to know about Design Systems](https://uxdesign.cc/everything-you-need-to-know-about-design-systems-54b109851969)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.muz.li%2Fwhat-is-a-design-system-1e43d19e7696" alt="Logo" /> What is a Design System?](https://medium.muz.li/what-is-a-design-system-1e43d19e7696)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to%2Fgraphqleditor%2Fwhat-s-design-system-and-why-you-need-one-31fh" alt="Logo" /> What's a Design System](https://dev.to/graphqleditor/what-s-design-system-and-why-you-need-one-31fh)

#### Material Design

Learn about material design and get familiar with the core principles.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmaterial.io%2Fdesign%2F" alt="Logo" /> Google - Material Design](https://material.io/design/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmaterial.io%2Fcomponents%2F" alt="Logo" /> Google - Material Components](https://material.io/components/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmaterial.io%2Fdevelop%2Fweb%2F" alt="Logo" /> Google - Material Develop](https://material.io/develop/web/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmaterial.io%2Fcollections%2Fdeveloper-tutorials%2F%23web" alt="Logo" /> Google - Material Tutorial](https://material.io/collections/developer-tutorials/#web)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMaterial_Design" alt="Logo" /> Wikipedia - Material Design](https://en.wikipedia.org/wiki/Material_Design)

#### Fluent Design

Learn about fluent design and get familiar with the core principles.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.microsoft.com%2Fdesign%2Ffluent%2F%23%2Fweb" alt="Logo" /> Microsoft - Fluent Design System](https://www.microsoft.com/design/fluent/#/web)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.microsoft.com%2Fdesign%2Ffluent%2Ftoolkits%2F" alt="Logo" /> Microsoft - Fluent UI Toolkit](https://www.microsoft.com/design/fluent/toolkits/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFluent_Design_System" alt="Logo" /> Wikipedia - Fluent Design System](https://en.wikipedia.org/wiki/Fluent_Design_System)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Fmicrosoft-design%2Ffluent-design-behind-the-design-973028062fcc" alt="Logo" /> Fluent: Design Behind the Design](https://medium.com/microsoft-design/fluent-design-behind-the-design-973028062fcc)

### Accessibility

Learn how and why it is important to design for accessibility.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.smashingmagazine.com%2F2018%2F04%2Fdesigning-accessibility-inclusion%2F" alt="Logo" /> Designing For Accessibility And Inclusion](https://www.smashingmagazine.com/2018/04/designing-accessibility-inclusion/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fuxdesign.cc%2Fdesigning-for-accessibility-is-not-that-hard-c04cc4779d94" alt="Logo" /> Designing for accessibility is not that hard](https://uxdesign.cc/designing-for-accessibility-is-not-that-hard-c04cc4779d94)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Ftheblog.adobe.com%2Faccessibility-design-at-scale%2F" alt="Logo" /> Designing Accessible Experiences at Scale](https://theblog.adobe.com/accessibility-design-at-scale/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmaterial.io%2Fdesign%2Fusability%2Faccessibility.html%23" alt="Logo" /> Material Design - Accessibility](https://material.io/design/usability/accessibility.html#)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3.org%2FWAI%2Ftips%2Fdesigning%2F" alt="Logo" /> W3C - Designing for Web Accessibility](https://www.w3.org/WAI/tips/designing/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Faccessibility.blog.gov.uk%2F2016%2F09%2F02%2Fdos-and-donts-on-designing-for-accessibility%2F" alt="Logo" /> Accessibility in government](https://accessibility.blog.gov.uk/2016/09/02/dos-and-donts-on-designing-for-accessibility/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3.org%2FTR%2FUNDERSTANDING-WCAG20%2Fvisual-audio-contrast-visual-presentation.html" alt="Logo" /> W3C - Visual Presentation](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

### Best Practices

Learn about some of the best practices when designing.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.quicksprout.com%2Fwebsite-design-best-practices%2F" alt="Logo" /> 13 Website Design Best Practices For 2019](https://www.quicksprout.com/website-design-best-practices/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Fthinking-design%2Fdesign-best-practices%2Fhome" alt="Logo" /> Design Best Practices](https://medium.com/thinking-design/design-best-practices/home)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Frefactoringui.com%2F" alt="Logo" /> Refactoring UI](https://refactoringui.com/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D7Z9rrryIOC4" alt="Logo" /> Refactoring UI | CSS Day 2019](https://www.youtube.com/watch?v=7Z9rrryIOC4)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.3pillarglobal.com%2Finsights%2Fdieter-rams-10-principles-good-design" alt="Logo" /> Dieter Ram' 10 principles for good design](https://www.3pillarglobal.com/insights/dieter-rams-10-principles-good-design)



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#the-modern-web)

## ➤ The Modern Web

### Streams

Learn about streams and how they can help you effeciently transporting data.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FStreams_API" alt="Logo" /> Mozilla - Streams](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FStreams_API%2FConcepts" alt="Logo" /> Mozilla - Streams API concepts](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API/Concepts)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeanhume.com%2Fexperimenting-with-the-streams-api%2F" alt="Logo" /> Experimenting with the Streams API](https://deanhume.com/experimenting-with-the-streams-api/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fstreams.spec.whatwg.org%2F" alt="Logo" /> WHATWG - Streams](https://streams.spec.whatwg.org/)

#### Media Streams

Learn about media streams and how it is possible to get a stream to device specific hardware such as the camera or microphone.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FMedia_Streams_API" alt="Logo" /> Mozilla - Media Streams API](https://developer.mozilla.org/en-US/docs/Web/API/Media_Streams_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FMediaStream_Image_Capture_API" alt="Logo" /> Mozilla - Image Capture API](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Image_Capture_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FMediaDevices%2FgetUserMedia" alt="Logo" /> Mozilla - mediaDevices.getUserMedia()](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fw3c.github.io%2Fmediacapture-main%2F%23dom-mediastream" alt="Logo" /> W3C - Media Capture and Streams](https://w3c.github.io/mediacapture-main/#dom-mediastream)

#### Media Recorder

Learn how to use the media recorder API to record media streams.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FMediaStream_Recording_API" alt="Logo" /> Mozilla - MediaStream Recording API](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Faddpipe.com%2Fmedia-recorder-api-demo%2F" alt="Logo" /> Media Recorder API Demo](https://addpipe.com/media-recorder-api-demo/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3.org%2FTR%2Fmediastream-recording%2F" alt="Logo" /> WTC - MediaStream Recording](https://www.w3.org/TR/mediastream-recording/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwhatwebcando.today%2Frecording.html" alt="Logo" /> What Web Can Do Today - Recording Media](https://whatwebcando.today/recording.html)

#### Web RTC

Learn how to use Web RTC for establishing real-time communication.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FWebRTC_API" alt="Logo" /> Mozilla - WebRTC API](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebrtc.org%2Fstart%2F" alt="Logo" /> WebRTC - Getting Started](https://webrtc.org/start/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebrtc.github.io%2Fsamples%2F" alt="Logo" /> WebRTC samples](https://webrtc.github.io/samples/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FWebRTC" alt="Logo" /> Wikipedia - WebRTC](https://en.wikipedia.org/wiki/WebRTC)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwhatwebcando.today%2Frealtime.html" alt="Logo" /> What Web Can Do Today - WebRTC](https://whatwebcando.today/realtime.html)

#### Screen Capture

Learn how to use the Screen Capture API for recording the screen.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FScreen_Capture_API" alt="Logo" /> Mozilla - Screen Capture API](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to%2Fal_khovansky%2Fintro-to-screen-capture-api-scanning-qr-codes-bgi" alt="Logo" /> dev.to - Intro to Screen Capture API](https://dev.to/al_khovansky/intro-to-screen-capture-api-scanning-qr-codes-bgi)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3.org%2FTR%2Fscreen-capture%2F" alt="Logo" /> W3C - Screen Capture](https://www.w3.org/TR/screen-capture/)

#### Generators

Learn how generators can be used creating streams.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fblog.jeremyfairbank.com%2Fjavascript%2Ffunctional-javascript-streams-2%2F" alt="Logo" /> Functional JavaScript - Streams](https://blog.jeremyfairbank.com/javascript/functional-javascript-streams-2/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcodeburst.io%2Funderstanding-generators-in-es6-javascript-with-examples-6728834016d5" alt="Logo" /> Understanding Generators with Examples](https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FStatements%2Ffunction*" alt="Logo" /> Mozilla - function*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FGuide%2FIterators_and_Generators" alt="Logo" /> Mozilla - Iterators and generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FOperators%2Fyield*" alt="Logo" /> Mozilla - yield*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield*)

### Speech Synthesis

Learn how the speech synthesis API can help you converting text to speech.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Fupdates%2F2014%2F01%2FWeb-apps-that-talk-Introduction-to-the-Speech-Synthesis-API" alt="Logo" /> Google Devs - Web apps that talk](https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FWindow%2FspeechSynthesis" alt="Logo" /> Mozilla - window.speechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/Window/speechSynthesis)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FSpeechSynthesis" alt="Logo" /> Mozilla - SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fw3c.github.io%2Fspeech-api" alt="Logo" /> W3C - Web Speech API](https://w3c.github.io/speech-api)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fflaviocopes.com%2Fspeech-synthesis-api%2F" alt="Logo" /> The Speech Synthesis API](https://flaviocopes.com/speech-synthesis-api/)

### Web Sockets

Learn about web sockets and how you can push data to your web app.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FWebsockets_API" alt="Logo" /> Mozilla - Websockets API](https://developer.mozilla.org/en-US/docs/Web/API/Websockets_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40dominik.t%2Fwhat-are-web-sockets-what-about-rest-apis-b9c15fd72aac" alt="Logo" /> What are Web Sockets?](https://medium.com/@dominik.t/what-are-web-sockets-what-about-rest-apis-b9c15fd72aac)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.html5rocks.com%2Fen%2Ftutorials%2Fwebsockets%2Fbasics%2F" alt="Logo" /> HTML5 Rocks - Introducing WebSockets](https://www.html5rocks.com/en/tutorials/websockets/basics/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fhtml.spec.whatwg.org%2Fmultipage%2Fweb-sockets.html" alt="Logo" /> WHATWG - Web sockets](https://html.spec.whatwg.org/multipage/web-sockets.html)

### Geolocation

Learn how to ask the user for permission to the location.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FGeolocation_API" alt="Logo" /> Mozilla - Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Falligator.io%2Fjs%2Fgeolocation-api%2F" alt="Logo" /> Alligrator - Using the Geolocation API](https://alligator.io/js/geolocation-api/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fmaps%2Fdocumentation%2Fjavascript%2Fgeolocation" alt="Logo" /> Google Maps Platform - Displaying User Position on Maps](https://developers.google.com/maps/documentation/javascript/geolocation)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwhatwebcando.today%2Fgeolocation.html" alt="Logo" /> What Web Can Do Today - Geolocation](https://whatwebcando.today/geolocation.html)

### Device orientation & motion

Learn how to measure the orientation and motion of the device.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FDetecting_device_orientation" alt="Logo" /> Mozilla - Detecting device orientation](https://developer.mozilla.org/en-US/docs/Web/API/Detecting_device_orientation)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3.org%2FTR%2Forientation-event%2F" alt="Logo" /> W3C - DeviceOrientation Event Specification](https://www.w3.org/TR/orientation-event/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.html5rocks.com%2Fen%2Ftutorials%2Fdevice%2Forientation%2Findex.html" alt="Logo" /> HTML5 Rocks - Introduction](https://www.html5rocks.com/en/tutorials/device/orientation/index.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwhatwebcando.today%2Fdevice-position.html" alt="Logo" /> What Web Can Do Today - Device Position](https://whatwebcando.today/device-position.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3.org%2FTR%2Fgeneric-sensor%2F" alt="Logo" /> W3C - Generic Sensor API](https://www.w3.org/TR/generic-sensor/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FSensor_APIs" alt="Logo" /> Mozilla - Sensor APIs](https://developer.mozilla.org/en-US/docs/Web/API/Sensor_APIs)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Fupdates%2F2017%2F09%2Fsensors-for-the-web" alt="Logo" /> Google Devs - Sensors For The Web](https://developers.google.com/web/updates/2017/09/sensors-for-the-web)

### Fullscreen

Learn how to use the fullscreen API to give the user a more immersive experience when needed.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FFullscreen_API" alt="Logo" /> Mozilla - Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Fupdates%2F2011%2F10%2FLet-Your-Content-Do-the-Talking-Fullscreen-API" alt="Logo" /> Google Devs - Let Your Content Do the Talking](https://developers.google.com/web/updates/2011/10/Let-Your-Content-Do-the-Talking-Fullscreen-API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdavidwalsh.name%2Ffullscreen" alt="Logo" /> David Walsh - Fullscreen API](https://davidwalsh.name/fullscreen)

### Variable Fonts

Learn how to use variable fonts and how it is possible to customize fonts without the need for loading more.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fv-fonts.com%2F" alt="Logo" /> v-fonts](https://v-fonts.com/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FCSS%2FCSS_Fonts%2FVariable_Fonts_Guide" alt="Logo" /> Mozilla - Variable fonts guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fdesign-and-ux%2Ftypography%2Fvariable-fonts" alt="Logo" /> Google Devs - Introduction to variable fonts](https://developers.google.com/web/fundamentals/design-and-ux/typography/variable-fonts)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DB42rUMdcB7c" alt="Logo" /> Supercharged - Variable Fonts](https://www.youtube.com/watch?v=B42rUMdcB7c)

### Web XR

Learn how to use Web XR for virtual- and augmented reality experiences.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FWebXR_Device_API" alt="Logo" /> Mozilla - WebXR Device API](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Fupdates%2F2018%2F05%2Fwelcome-to-immersive" alt="Logo" /> Google Devs - Welcome to the immersive web](https://developers.google.com/web/updates/2018/05/welcome-to-immersive)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fhacks.mozilla.org%2F2018%2F09%2Fwebxr%2F" alt="Logo" /> New API to Bring Augmented Reality to the Web](https://hacks.mozilla.org/2018/09/webxr/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fimmersive-web.github.io%2Fwebxr%2F" alt="Logo" /> W3C - WebXR Device API](https://immersive-web.github.io/webxr/)

### HTTP/2

Learn about the faster and more convenient HTTP/2 protocol.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fperformance%2Fhttp2%2F" alt="Logo" /> Google Devs - Introduction to HTTP/2](https://developers.google.com/web/fundamentals/performance/http2/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHTTP%2F2" alt="Logo" /> Wikipedia - HTTP/2](https://en.wikipedia.org/wiki/HTTP/2)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40factoryhr%2Fhttp-2-the-difference-between-http-1-1-benefits-and-how-to-use-it-38094fa0e95b" alt="Logo" /> HTTP/2: the difference between HTTP/1.1](https://medium.com/@factoryhr/http-2-the-difference-between-http-1-1-benefits-and-how-to-use-it-38094fa0e95b)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fhttp2.github.io%2Ffaq%2F" alt="Logo" /> HTTP/2 - FAQ](https://http2.github.io/faq/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.lucidchart.com%2Ftechblog%2F2019%2F04%2F10%2Fwhy-turning-on-http2-was-a-mistake%2F" alt="Logo" /> Why turning on HTTP/2 was a mistake](https://www.lucidchart.com/techblog/2019/04/10/why-turning-on-http2-was-a-mistake/)

### Payment Request API

Learn about the payment request API and how it can help monetize your web app.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FPayment_Request_API" alt="Logo" /> Mozilla - Payment Request API](https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fcodelabs%2Fpayment-request-api" alt="Logo" /> Codelabs - Payment Request API](https://developers.google.com/web/fundamentals/codelabs/payment-request-api)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwhatwebcando.today%2Fpayments.html" alt="Logo" /> What Web Can Do Today - Payments](https://whatwebcando.today/payments.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3.org%2FTR%2Fpayment-request%2F" alt="Logo" /> W3C - Payment Request API](https://www.w3.org/TR/payment-request/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Filt%2Fpwa%2Fintroduction-to-the-payment-request-api" alt="Logo" /> Google Devs - Introduction to the Payment Request API](https://developers.google.com/web/ilt/pwa/introduction-to-the-payment-request-api)

### Web Audio

Learn how to use the Web Audio API to add audio to your web app.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FWeb_Audio_API%2FUsing_Web_Audio_API" alt="Logo" /> Mozilla - Using the Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FWeb_Audio_API" alt="Logo" /> Mozilla - Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3.org%2FTR%2Fwebaudio%2F" alt="Logo" /> W3C - Web Audio API](https://www.w3.org/TR/webaudio/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.html5rocks.com%2Fen%2Ftutorials%2Fwebaudio%2Fintro%2F" alt="Logo" /> HTML5 Rocks - Getting Started with Web Audio API](https://www.html5rocks.com/en/tutorials/webaudio/intro/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Fbetter-programming%2Fall-you-need-to-know-about-the-web-audio-api-3df170559378" alt="Logo" /> All You Need to Know About the Web Audio API](https://medium.com/better-programming/all-you-need-to-know-about-the-web-audio-api-3df170559378)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Falligator.io%2Fjs%2Ffirst-steps-web-audio-api%2F" alt="Logo" /> Alligator - Your First Steps with the Web Audio API](https://alligator.io/js/first-steps-web-audio-api/)

### Web Bluetooth

Learn how to use the Web Bluetooth API to connect with nearby devices.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FWeb_Bluetooth_API" alt="Logo" /> Mozilla - Web Bluetooth API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Fupdates%2F2015%2F07%2Finteract-with-ble-devices-on-the-web" alt="Logo" /> Google Devs - Interact with Bluetooth devices](https://developers.google.com/web/updates/2015/07/interact-with-ble-devices-on-the-web)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwhatwebcando.today%2Fbluetooth.html" alt="Logo" /> What Web Can Do Today -	Bluetooth](https://whatwebcando.today/bluetooth.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebbluetoothcg.github.io%2Fweb-bluetooth%2F" alt="Logo" /> W3C - Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgooglechrome.github.io%2Fsamples%2Fweb-bluetooth%2F" alt="Logo" /> Web Bluetooth Samples](https://googlechrome.github.io/samples/web-bluetooth/)

### Web USB

Learn how to use the Web USB API to connect with hardware through a cable.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FUSB" alt="Logo" /> Mozilla - USB](https://developer.mozilla.org/en-US/docs/Web/API/USB)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com%2FWICG%2Fwebusb" alt="Logo" /> WICG - Web USB](https://github.com/WICG/webusb)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Fupdates%2F2016%2F03%2Faccess-usb-devices-on-the-web" alt="Logo" /> Google Devs - Access USB Devices on the Web](https://developers.google.com/web/updates/2016/03/access-usb-devices-on-the-web)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwhatwebcando.today%2Fusb.html" alt="Logo" /> What Web Can Do Today -	Web USB](https://whatwebcando.today/usb.html)

### Credentials Manager API

Learn about the Credentials Manager API and how it can help you authenticating users.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FCredential_Management_API" alt="Logo" /> Mozilla - Credential Management API](https://developer.mozilla.org/en-US/docs/Web/API/Credential_Management_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fsecurity%2Fcredential-management" alt="Logo" /> Google Devs - The Credential Management API](https://developers.google.com/web/fundamentals/security/credential-management)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fsecurity%2Fcredential-management%2Fretrieve-credentials" alt="Logo" /> Google Devs - Sign in Users](https://developers.google.com/web/fundamentals/security/credential-management/retrieve-credentials)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fsecurity%2Fcredential-management%2Fsave-forms" alt="Logo" /> Google Devs - Save Credentials from Forms](https://developers.google.com/web/fundamentals/security/credential-management/save-forms)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwhatwebcando.today%2Fcredentials.html" alt="Logo" /> What Web Can Do Today - Credentials](https://whatwebcando.today/credentials.html)

### Houdini

Learn about the Houdini project and get excited about the future of CSS.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Fupdates%2F2016%2F05%2Fhoudini" alt="Logo" /> Google Devs - Houdini, Demystifying CSS](https://developers.google.com/web/updates/2016/05/houdini)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev%2Fcss-props-and-vals%2F" alt="Logo" /> web.dev - Smarter custom properties](https://web.dev/css-props-and-vals/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-houdini.rocks%2F" alt="Logo" /> CSS Houdini Experiments](https://css-houdini.rocks/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fhoudini.glitch.me%2F" alt="Logo" /> Interactive Introduction to CSS Houdini](http://houdini.glitch.me/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com%2Fw3c%2Fcss-houdini-drafts%2Fwiki" alt="Logo" /> W3C - CSS Houdini Wiki](https://github.com/w3c/css-houdini-drafts/wiki)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Fupdates%2F2018%2F10%2Fanimation-worklet" alt="Logo" /> Google Devs - Houdini's Animation Worklet](https://developers.google.com/web/updates/2018/10/animation-worklet)

### Project Fugu

Learn about Project Fugu project and get excited about the future of the web.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fblog.chromium.org%2F2018%2F11%2Four-commitment-to-more-capable-web.html" alt="Logo" /> Our commitment to a more capable web](https://blog.chromium.org/2018/11/our-commitment-to-more-capable-web.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.chromium.org%2Fteams%2Fweb-capabilities-fugu" alt="Logo" /> Web Capabilities (Fugu)](https://www.chromium.org/teams/web-capabilities-fugu)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fbugs.chromium.org%2Fp%2Fchromium%2Fissues%2Flist%3Fq%3Dproj-fugu" alt="Logo" /> Chromium Bugs - Fugu](https://bugs.chromium.org/p/chromium/issues/list?q=proj-fugu)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Fupdates%2Fcapabilities" alt="Logo" /> Google Devs - Unlocking new capabilities for the web](https://developers.google.com/web/updates/capabilities)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DGSiUzuB-PoI" alt="Logo" /> Youtube - Unlocking New Capabilities for the Web](https://www.youtube.com/watch?v=GSiUzuB-PoI)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fchromium.googlesource.com%2Fchromium%2Fsrc%2F%2B%2Ff384207e04ad27f58287e972907f17ad66acc115%2Fdocs%2Fsecurity%2Fpermissions-for-powerful-web-platform-features.md" alt="Logo" /> Controlling Access to Powerful Web Platform Features](https://chromium.googlesource.com/chromium/src/+/f384207e04ad27f58287e972907f17ad66acc115/docs/security/permissions-for-powerful-web-platform-features.md)

### Observers

Learn about the observer pattern and get comfortable concepts such as subjects and observers.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fchromatichq.com%2Fblog%2Fjavascript-observers-and-you" alt="Logo" /> Javascript Observers and You](https://chromatichq.com/blog/javascript-observers-and-you)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebdevstudios.com%2F2019%2F02%2F19%2Fobservable-pattern-in-javascript%2F" alt="Logo" /> How to Use the Observable Pattern in JavaScript](https://webdevstudios.com/2019/02/19/observable-pattern-in-javascript/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FPublish%25E2%2580%2593subscribe_pattern" alt="Logo" /> Wikipedia - Publish–subscribe pattern](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40patrickackerman%2Fthe-observer-pattern-with-vanilla-javascript-8f85ea05eaa8" alt="Logo" /> The Observer Pattern with Vanilla JavaScript](https://medium.com/@patrickackerman/the-observer-pattern-with-vanilla-javascript-8f85ea05eaa8)

#### Mutation Observer

Learn how to use the Mutation Observer API to get informed about changes to the DOM.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FMutationObserver" alt="Logo" /> Mozilla - MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40abbeal%2Flistening-to-the-dom-changes-with-mutationobserver-b53a068a58d2" alt="Logo" /> Listening to the DOM changes with MutationObserver](https://medium.com/@abbeal/listening-to-the-dom-changes-with-mutationobserver-b53a068a58d2)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdavidwalsh.name%2Fmutationobserver-api" alt="Logo" /> David Walsh - MutationObserver API](https://davidwalsh.name/mutationobserver-api)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fjavascript.info%2Fmutation-observer" alt="Logo" /> javascript.info - Mutation observer](https://javascript.info/mutation-observer)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdom.spec.whatwg.org%2F%23mutation-observers" alt="Logo" /> WHATWG - Mutation observers](https://dom.spec.whatwg.org/#mutation-observers)

#### Intersection Observer

Learn how to use the Intersection Observer API can help you detect when an element is visible on the screen.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FIntersection_Observer_API" alt="Logo" /> Mozilla - Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3.org%2FTR%2Fintersection-observer%2F" alt="Logo" /> W3C - Intersection Observer](https://www.w3.org/TR/intersection-observer/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Fupdates%2F2019%2F02%2Fintersectionobserver-v2" alt="Logo" /> Google Devs - Trust is Good, Observation is Better](https://developers.google.com/web/updates/2019/02/intersectionobserver-v2)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com%2Fan-explanation-of-how-the-intersection-observer-watches%2F" alt="Logo" /> CSS Tricks - An Explanation of Intersection Observers](https://css-tricks.com/an-explanation-of-how-the-intersection-observer-watches/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Fbetter-programming%2Funderstanding-intersection-observer-api-in-javascript-bb1bf04b8081" alt="Logo" /> Understanding the Intersection Observer API in JavaScript](https://medium.com/better-programming/understanding-intersection-observer-api-in-javascript-bb1bf04b8081)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com%2Fa-few-functional-uses-for-intersection-observer-to-know-when-an-element-is-in-view%2F" alt="Logo" /> CSS Tricks - A Few Functional Uses for Intersection Observer](https://css-tricks.com/a-few-functional-uses-for-intersection-observer-to-know-when-an-element-is-in-view/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Fupdates%2F2017%2F09%2Fsticky-headers" alt="Logo" /> google Devs - An event for CSS position:sticky](https://developers.google.com/web/updates/2017/09/sticky-headers)

#### Resize Observer

Learn how to use the Resize Observer API to get informed when the element resizes.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FResize_Observer_API" alt="Logo" /> Mozilla - Resize Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Fupdates%2F2016%2F10%2Fresizeobserver" alt="Logo" /> Google Devs - It’s Like document.onresize for Elements](https://developers.google.com/web/updates/2016/10/resizeobserver)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Falligator.io%2Fjs%2Fresize-observer%2F" alt="Logo" /> Alligator - A Look at the Resize Observer JavaScript API](https://alligator.io/js/resize-observer/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdavidwalsh.name%2Fresize-observer" alt="Logo" /> David Walsh - Resize Observer](https://davidwalsh.name/resize-observer)

#### Performance Observer

Learn how the Performance Observer API can help you get information about the performance of your web app.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FLong_Tasks_API" alt="Logo" /> Mozilla - Long Tasks API](https://developer.mozilla.org/en-US/docs/Web/API/Long_Tasks_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FPerformanceObserver" alt="Logo" /> Mozilla - PerformanceObserver](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Fupdates%2F2016%2F06%2Fperformance-observer" alt="Logo" /> Google Devs - Efficient Access to Performance Data](https://developers.google.com/web/updates/2016/06/performance-observer)

### Scrollsnapping

Learn about the Scrollsnapping API and how it can help you provide an intuitive experience when scrolling.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com%2Fpractical-css-scroll-snapping%2F" alt="Logo" /> CSS Tricks - Practical CSS Scroll Snapping](https://css-tricks.com/practical-css-scroll-snapping/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com%2Fintroducing-css-scroll-snap-points%2F" alt="Logo" /> CSS Tricks - Introducing CSS Scroll Snap Points](https://css-tricks.com/introducing-css-scroll-snap-points/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Fupdates%2F2018%2F07%2Fcss-scroll-snap" alt="Logo" /> Google Devs - Well-Controlled Scrolling with CSS Scroll Snap](https://developers.google.com/web/updates/2018/07/css-scroll-snap)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FCSS%2FCSS_Scroll_Snap" alt="Logo" /> Mozilla - CSS Scroll Snap](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebkit.org%2Fdemos%2Fscroll-snap%2Findex.html" alt="Logo" /> The scroll-snap-* Properties](https://webkit.org/demos/scroll-snap/index.html)

### Web Assembly

Learn about Web Assembly and how it opens up the playing field for new types of web apps.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWebAssembly%2FConcepts" alt="Logo" /> Mozilla - WebAssembly Concepts](https://developer.mozilla.org/en-US/docs/WebAssembly/Concepts)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWebAssembly" alt="Logo" /> Mozilla - WebAssembly](https://developer.mozilla.org/en-US/docs/WebAssembly)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to%2Fcaptainsafia%2Fwhy-the-heck-is-everyone-talking-about-webassembly-455a" alt="Logo" /> dev.to - Why the heck is everyone talking about WebAssembly?](https://dev.to/captainsafia/why-the-heck-is-everyone-talking-about-webassembly-455a)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Fbeginners-guide-to-mobile-web-development%2Fintroduction-to-web-assembly-6cb6466a3478" alt="Logo" /> Introduction to Web Assembly](https://medium.com/beginners-guide-to-mobile-web-development/introduction-to-web-assembly-6cb6466a3478)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcodelabs.developers.google.com%2Fcodelabs%2Fweb-assembly-intro%2Findex.html%230" alt="Logo" /> Google Codelabs - An Introduction to Web Assembly](https://codelabs.developers.google.com/codelabs/web-assembly-intro/index.html#0)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.smashingmagazine.com%2F2019%2F04%2Fwebassembly-speed-web-app%2F" alt="Logo" /> How We Used WebAssembly To Speed Up Our Web App By 20X](https://www.smashingmagazine.com/2019/04/webassembly-speed-web-app/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Fupdates%2F2019%2F02%2Fhotpath-with-wasm" alt="Logo" /> Google Devs - WebAssembly](https://developers.google.com/web/updates/2019/02/hotpath-with-wasm)

### Beacon

Learn how the Beacon API can help you send data to endpoints before the user closes the page.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FNavigator%2FsendBeacon" alt="Logo" /> Mozilla - sendBeacon](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FBeacon_API%2FUsing_the_Beacon_API" alt="Logo" /> Mozilla - Using the Beacon API](https://developer.mozilla.org/en-US/docs/Web/API/Beacon_API/Using_the_Beacon_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.smashingmagazine.com%2F2018%2F07%2Flogging-activity-web-beacon-api%2F" alt="Logo" /> Logging Activity With The Web Beacon API](https://www.smashingmagazine.com/2018/07/logging-activity-web-beacon-api/)

### Clipboard

Learn about the Clipboard API and how it can help you copy and paste data.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FNavigator%2Fclipboard" alt="Logo" /> Mozilla - Clipboard](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwhatwebcando.today%2Fclipboard.html" alt="Logo" /> What Web Can Do Today - Clipboard (Copy & Paste)](https://whatwebcando.today/clipboard.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Fupdates%2F2019%2F07%2Fimage-support-for-async-clipboard" alt="Logo" /> Google Devs - Image Support for the Async Clipboard API](https://developers.google.com/web/updates/2019/07/image-support-for-async-clipboard)

### Share

Learn how the Web Share API can help users sharing your web app.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FNavigator%2Fshare" alt="Logo" /> Mozilla - Share](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Fupdates%2F2016%2F09%2Fnavigator-share" alt="Logo" /> Google Devs - Introducing the Web Share API](https://developers.google.com/web/updates/2016/09/navigator-share)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Fupdates%2F2018%2F12%2Fweb-share-target" alt="Logo" /> Google Devs - Registering as a Share Target](https://developers.google.com/web/updates/2018/12/web-share-target)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com%2Fhow-to-use-the-web-share-api%2F" alt="Logo" /> CSS Tricks - How to Use the Web Share API](https://css-tricks.com/how-to-use-the-web-share-api/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fblog.arnellebalane.com%2Fthe-web-share-api-2cbb3e6cf007" alt="Logo" /> The Web Share API](https://blog.arnellebalane.com/the-web-share-api-2cbb3e6cf007)

### Performance API

Learn about the Performance API and how it can help you monitor the performance of the device.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FPerformance" alt="Logo" /> Mozilla - Performance](https://developer.mozilla.org/en-US/docs/Web/API/Performance)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FPerformance%2Fmeasure" alt="Logo" /> Mozilla - performance.measure()](https://developer.mozilla.org/en-US/docs/Web/API/Performance/measure)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com%2Fbreaking-performance-api%2F" alt="Logo" /> CSS Tricks - Breaking Down the Performance API](https://css-tricks.com/breaking-performance-api/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fperformance%2Fnavigation-and-resource-timing%2F" alt="Logo" /> Google Devs - Assessing Loading Performance](https://developers.google.com/web/fundamentals/performance/navigation-and-resource-timing/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FPerformance_API%23Specifications" alt="Logo" /> Mozilla - Performance Specifications](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API#Specifications)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FPerformance_Timeline" alt="Logo" /> Mozilla - Performance Timeline](https://developer.mozilla.org/en-US/docs/Web/API/Performance_Timeline)

### Gamepad API

Learn how the Gamepad API can help you integrate with various controllers such as an x-box or playstation controller

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FGamepad_API%2FUsing_the_Gamepad_API" alt="Logo" /> Mozilla - Using the Gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FGamepad_API" alt="Logo" /> Mozilla - Gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fluser.github.io%2Fgamepadtest%2F" alt="Logo" /> luser - Gamepad Test](http://luser.github.io/gamepadtest/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FGames%2FTechniques%2FControls_Gamepad_API" alt="Logo" /> Mozilla - Implementing controls using the Gamepad API](https://developer.mozilla.org/en-US/docs/Games/Techniques/Controls_Gamepad_API)

### Network Information API

Learn how the Network Information API can give you information about the state of the network of your users.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FNetwork_Information_API" alt="Logo" /> Mozilla - Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Faddyosmani.com%2Fblog%2Fadaptive-serving%2F" alt="Logo" /> Addy Osmani - Adaptive Serving](https://addyosmani.com/blog/adaptive-serving/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwicg.github.io%2Fnetinfo%2F" alt="Logo" /> W3C - Network Information API](https://wicg.github.io/netinfo/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgooglechrome.github.io%2Fsamples%2Fnetwork-information%2F" alt="Logo" /> Network Information API Sample](https://googlechrome.github.io/samples/network-information/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwhatwebcando.today%2Fnetwork-type-speed.html" alt="Logo" /> What Web Can Do Today - Network Type & Speed](https://whatwebcando.today/network-type-speed.html)

### Speech Recognition

Learn how to use the Speech Recognition API to analyze speech.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FWeb_Speech_API%2FUsing_the_Web_Speech_API" alt="Logo" /> Mozilla - Using the Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdavidwalsh.name%2Fspeech-recognition" alt="Logo" /> David Walsh - JavaScript Speech Recognition](https://davidwalsh.name/speech-recognition)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FSpeechRecognition" alt="Logo" /> Mozilla - SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FWeb_Speech_API" alt="Logo" /> Mozilla - Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com%2Fmdn%2Fweb-speech-api%2F" alt="Logo" /> Github - web-speech-api](https://github.com/mdn/web-speech-api/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwhatwebcando.today%2Fspeech-recognition.html" alt="Logo" /> What Web Can Do Today - Speech Recognition](https://whatwebcando.today/speech-recognition.html)

### Interaction Media Queries

Learn how to use Interaction Media Queries to optimize the user experience for the specific type of device.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40rossbulat%2Fintroducing-css-interaction-media-queries-38eea48f4221" alt="Logo" /> Introducing CSS Interaction Media Queries](https://medium.com/@rossbulat/introducing-css-interaction-media-queries-38eea48f4221)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FCSS%2FMedia_Queries%2FUsing_media_queries%23Media_features" alt="Logo" /> Mozilla - Media features](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com%2Ftouch-devices-not-judged-size%2F" alt="Logo" /> Touch Devices Should Not Be Judged By Their Size](https://css-tricks.com/touch-devices-not-judged-size/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.opera.com%2Farticles%2Fmedia-features%2F" alt="Logo" /> Interaction Media Features and their potential](https://dev.opera.com/articles/media-features/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3.org%2FTR%2Fmediaqueries-4%2F%23mf-interaction" alt="Logo" /> W3C - Interaction Media Features](https://www.w3.org/TR/mediaqueries-4/#mf-interaction)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwhatwebcando.today%2Fpointer-adaptation.html" alt="Logo" /> What Web Can Do Today - Pointing Device Adaptation](https://whatwebcando.today/pointer-adaptation.html)

### Presentation

Learn how to use the Presentation API to allow your web app to use the presentation display mode in the browser or at an external display device.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FPresentation_API" alt="Logo" /> Mozilla - Presentation API](https://developer.mozilla.org/en-US/docs/Web/API/Presentation_API)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwhatwebcando.today%2Fpresentation.html" alt="Logo" /> What Web Can Do Today - Presentation Features](https://whatwebcando.today/presentation.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Fupdates%2F2018%2F04%2Fpresent-web-pages-to-secondary-attached-displays" alt="Logo" /> Google Devs - Present web pages to secondary attached displays](https://developers.google.com/web/updates/2018/04/present-web-pages-to-secondary-attached-displays)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fw3c.github.io%2Fpresentation-api" alt="Logo" /> W3C - Presentation API](https://w3c.github.io/presentation-api)

### Native File System

Learn how to use the Native File System API to interact with files on the user's local device.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Fupdates%2F2019%2F08%2Fnative-file-system" alt="Logo" /> Google Devs - The Native File System API](https://developers.google.com/web/updates/2019/08/native-file-system)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com%2FWICG%2Fnative-file-system%2Fblob%2Fmaster%2FEXPLAINER.md" alt="Logo" /> Github - Native File System](https://github.com/WICG/native-file-system/blob/master/EXPLAINER.md)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwicg.github.io%2Fnative-file-system%2F" alt="Logo" /> W3C - Native File System](https://wicg.github.io/native-file-system/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com%2Fdocument%2Fd%2F1NJFd-EWdUlQ7wVzjqcgXewqC5nzv_qII4OvlDtK6SE8%2Fedit%23heading%3Dh.7nki9mck5t64" alt="Logo" /> Native File System Web API - Chromium Security Model](https://docs.google.com/document/d/1NJFd-EWdUlQ7wVzjqcgXewqC5nzv_qII4OvlDtK6SE8/edit#heading=h.7nki9mck5t64)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.chromestatus.com%2Ffeature%2F6284708426022912" alt="Logo" /> Chromestatus - Native File System](https://www.chromestatus.com/feature/6284708426022912)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fw3c.github.io%2FFileAPI%2F" alt="Logo" /> W3C - File API](https://w3c.github.io/FileAPI/)

### Browser Extensions

Learn how to build browser extensions to enhance the functionality of your browser.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FMozilla%2FAdd-ons%2FWebExtensions" alt="Logo" /> Mozilla - Browser Extensions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.chrome.com%2Fextensions" alt="Logo" /> Chrome - What are extensions?](https://developer.chrome.com/extensions)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.chrome.com%2Fextensions%2Fgetstarted" alt="Logo" /> Chrome - Getting Started with Extensions](https://developer.chrome.com/extensions/getstarted)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fview_play_list%3Fp%3DCA101D6A85FE9D4B" alt="Logo" /> Youtube - Google Chrome Extensions](https://www.youtube.com/view_play_list?p=CA101D6A85FE9D4B)

### Shape Detection

Learn how to use the Shape Detection API to detect shapes such as faces or barcodes in pictures.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwicg.github.io%2Fshape-detection-api%2F" alt="Logo" /> W3C - Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Fupdates%2F2019%2F01%2Fshape-detection" alt="Logo" /> Google Devs - A Picture is Worth a Thousand Words](https://developers.google.com/web/updates/2019/01/shape-detection)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com%2FWICG%2Fshape-detection-api" alt="Logo" /> Github - Shape Detection API Specification](https://github.com/WICG/shape-detection-api)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fblog.arnellebalane.com%2Fintroduction-to-the-shape-detection-api-e07425396861" alt="Logo" /> Introduction to the Shape Detection API](https://blog.arnellebalane.com/introduction-to-the-shape-detection-api-e07425396861)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fpaul.kinlan.me%2Fface-detection%2F" alt="Logo" /> Face detection using Shape Detection API](https://paul.kinlan.me/face-detection/)



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#algorithms--data-structures)

## ➤ Algorithms & Data structures

### Data structures

### Arrays

Learn how and when arrays should be used.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fjavascript.info%2Farray" alt="Logo" /> javascript.info - Arrays](https://javascript.info/array)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Fdata-structures-101-arrays-a-visual-introduction-for-beginners-7f013bcc355a%2F" alt="Logo" /> Freecodecamp - Arrays, A Visual Introduction for Beginners](https://www.freecodecamp.org/news/data-structures-101-arrays-a-visual-introduction-for-beginners-7f013bcc355a/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FArray_data_structure" alt="Logo" /> Wikipedia - Array data structure](https://en.wikipedia.org/wiki/Array_data_structure)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FArray" alt="Logo" /> Mozilla - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Queues & Stacks

Learn how and when queues and stacks should be used.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.cs.cmu.edu%2F~adamchik%2F15-121%2Flectures%2FStacks%2520and%2520Queues%2FStacks%2520and%2520Queues.html" alt="Logo" /> Stacks and Queues](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Stacks%20and%20Queues/Stacks%20and%20Queues.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.geeksforgeeks.org%2Fdifference-between-stack-and-queue-data-structures%2F" alt="Logo" /> Difference between Stack and Queue Data Structures](https://www.geeksforgeeks.org/difference-between-stack-and-queue-data-structures/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40hitherejoe%2Fdata-structures-stacks-queues-a3b3591c8cb0" alt="Logo" /> Data Structures: Stacks & Queues](https://medium.com/@hitherejoe/data-structures-stacks-queues-a3b3591c8cb0)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to%2Femmawedekind%2Fstacks-vs-queues-in-javascript-4d1o" alt="Logo" /> Stacks vs. Queues In JavaScript](https://dev.to/emmawedekind/stacks-vs-queues-in-javascript-4d1o)

### Trees

Learn how and when trees should be used.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTree_(data_structure)" alt="Logo" /> Wikipedia - Tree (data structure)](https://en.wikipedia.org/wiki/Tree_(data_structure))
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Fall-you-need-to-know-about-tree-data-structures-bceacb85490c%2F" alt="Logo" /> Freecodecamp - Everything you need to know about tree data structure](https://www.freecodecamp.org/news/all-you-need-to-know-about-tree-data-structures-bceacb85490c/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.tutorialspoint.com%2Fdata_structures_algorithms%2Ftree_data_structure.htm" alt="Logo" /> Data Structure and Algorithms - Tree](https://www.tutorialspoint.com/data_structures_algorithms/tree_data_structure.htm)

#### Binary Indexed Tree

Learn how and when binary indexed trees should be used.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFenwick_tree" alt="Logo" /> Wikipedia - Fenwick tree](https://en.wikipedia.org/wiki/Fenwick_tree)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcs.stackexchange.com%2Fquestions%2F10538%2Fbit-what-is-the-intuition-behind-a-binary-indexed-tree-and-how-was-it-thought-a" alt="Logo" /> What is the intuition behind a binary indexed tree?](https://cs.stackexchange.com/questions/10538/bit-what-is-the-intuition-behind-a-binary-indexed-tree-and-how-was-it-thought-a)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.geeksforgeeks.org%2Fbinary-indexed-tree-or-fenwick-tree-2%2F" alt="Logo" /> Binary Indexed Tree or Fenwick Tree](https://www.geeksforgeeks.org/binary-indexed-tree-or-fenwick-tree-2/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com%2Ftrekhleb%2Fjavascript-algorithms%2Ftree%2Fmaster%2Fsrc%2Fdata-structures%2Ftree%2Ffenwick-tree" alt="Logo" /> Fenwick Tree / Binary Indexed Tree](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree/fenwick-tree)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DCWDQJGaN1gY%26index%3D18%26t%3D0s%26list%3DPLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8" alt="Logo" /> Youtube - Binary Indexed Tree](https://www.youtube.com/watch?v=CWDQJGaN1gY&index=18&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com%2Fmicrosoft%2Ffast-binary-indexed-tree-js" alt="Logo" /> Github - fast-binary-indexed-tree-js](https://github.com/microsoft/fast-binary-indexed-tree-js)

#### Heap

Learn how and when heaps should be used.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHeap_(data_structure)" alt="Logo" /> Wikipedia - Heap (data structure)](https://en.wikipedia.org/wiki/Heap_(data_structure))
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.tutorialspoint.com%2Fdata_structures_algorithms%2Fheap_data_structure.htm" alt="Logo" /> Tutorialspoint - Heap Data Structure](https://www.tutorialspoint.com/data_structures_algorithms/heap_data_structure.htm)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Fbasecs%2Flearning-to-love-heaps-cef2b273a238" alt="Logo" /> Learning to Love Heaps](https://medium.com/basecs/learning-to-love-heaps-cef2b273a238)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Freactgo.com%2Fjavascript-heap-datastructure%2F" alt="Logo" /> How to implement Heap Data structure in JavaScript](https://reactgo.com/javascript-heap-datastructure/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dt0Cq6tVNRBA%26list%3DPLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8%26index%3D5" alt="Logo" /> Youtube - Data Structures: Heaps](https://www.youtube.com/watch?v=t0Cq6tVNRBA&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=5)

#### Red-black Tree

Learn how and when red-black trees should be used.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FRed%25E2%2580%2593black_tree" alt="Logo" /> Wikipedia - Red–black tree](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to%2Fvaidehijoshi%2Fpainting-nodes-black-with-red-black-trees" alt="Logo" /> Painting Nodes Black With Red-Black Trees](https://dev.to/vaidehijoshi/painting-nodes-black-with-red-black-trees)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.geeksforgeeks.org%2Fred-black-tree-set-1-introduction-2%2F" alt="Logo" /> Red-Black Tree](https://www.geeksforgeeks.org/red-black-tree-set-1-introduction-2/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40julianknodt%2Fred-black-trees-in-javascript-c20eec1d5d1c" alt="Logo" /> Red Black Trees in JavaScript](https://medium.com/@julianknodt/red-black-trees-in-javascript-c20eec1d5d1c)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com%2Ftrekhleb%2Fjavascript-algorithms%2Ftree%2Fmaster%2Fsrc%2Fdata-structures%2Ftree%2Fred-black-tree" alt="Logo" /> Github - Red–Black Tree](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree/red-black-tree)

#### Trie

Learn how and when tries should be used.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTrie" alt="Logo" /> Wikipedia - Trie](https://en.wikipedia.org/wiki/Trie)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.geeksforgeeks.org%2Ftrie-insert-and-search%2F" alt="Logo" /> Trie (Insert and Search)](https://www.geeksforgeeks.org/trie-insert-and-search/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Fbasecs%2Ftrying-to-understand-tries-3ec6bede0014" alt="Logo" /> Trying to Understand Tries](https://medium.com/basecs/trying-to-understand-tries-3ec6bede0014)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.interviewcake.com%2Fconcept%2Fjava%2Ftrie" alt="Logo" /> Trie, Datastructure](https://www.interviewcake.com/concept/java/trie)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DzIjfhVPRZCg%26list%3DPLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8%26index%3D7" alt="Logo" /> Youtube - Data Structures: Tries](https://www.youtube.com/watch?v=zIjfhVPRZCg&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=7)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fhackernoon.com%2Fpractical-data-structures-for-frontend-applications-when-to-use-tries-5428a565eba4" alt="Logo" /> Practical Data Structures: Tries](https://hackernoon.com/practical-data-structures-for-frontend-applications-when-to-use-tries-5428a565eba4)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.cs.usfca.edu%2F~galles%2Fvisualization%2FTrie.html" alt="Logo" /> Trie, visualization](https://www.cs.usfca.edu/~galles/visualization/Trie.html)

#### K-D Tree

Learn how and when K-D trees should be used.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FK-d_tree" alt="Logo" /> Wikipedia - k-d tree](https://en.wikipedia.org/wiki/K-d_tree)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com%2Fubilabs%2Fkd-tree-javascript" alt="Logo" /> Github - k-d Tree JavaScript Library](https://github.com/ubilabs/kd-tree-javascript)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.cs.cmu.edu%2F~ckingsf%2Fbioinfo-lectures%2Fkdtrees.pdf" alt="Logo" /> kd-Trees](https://www.cs.cmu.edu/~ckingsf/bioinfo-lectures/kdtrees.pdf)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DTLxWtXEbtFE" alt="Logo" /> Youtube - KD Tree Algorithm](https://www.youtube.com/watch?v=TLxWtXEbtFE)

### Hash Tables

Learn how and when hash tables should be used.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHash_table" alt="Logo" /> Wikipedia - Hash table](https://en.wikipedia.org/wiki/Hash_table)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fyourbasic.org%2Falgorithms%2Fhash-tables-explained%2F" alt="Logo" /> Hash tables explained](https://yourbasic.org/algorithms/hash-tables-explained/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.hackerearth.com%2Fpractice%2Fdata-structures%2Fhash-tables%2Fbasics-of-hash-tables%2Ftutorial%2F" alt="Logo" /> Basics of Hash Tables](https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40yanganif%2Fjavascript-hash-table-8878afceecbc" alt="Logo" /> Javascript Hash Table](https://medium.com/@yanganif/javascript-hash-table-8878afceecbc)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcodeburst.io%2Fobjects-and-hash-tables-in-javascript-a472ad1940d9" alt="Logo" /> Objects and Hash Tables in Javascript](https://codeburst.io/objects-and-hash-tables-in-javascript-a472ad1940d9)

### Linked Lists

Learn how and when linked lists should be used.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FLinked_list" alt="Logo" /> Wikipedia - Linked list](https://en.wikipedia.org/wiki/Linked_list)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.studytonight.com%2Fdata-structures%2Fintroduction-to-linked-list" alt="Logo" /> Introduction to Linked Lists](https://www.studytonight.com/data-structures/introduction-to-linked-list)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcodeburst.io%2Flinked-lists-in-javascript-es6-code-part-1-6dd349c3dcc3" alt="Logo" /> Linked Lists in JavaScript](https://codeburst.io/linked-lists-in-javascript-es6-code-part-1-6dd349c3dcc3)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fhackernoon.com%2Fthe-little-guide-of-linked-list-in-javascript-9daf89b63b54" alt="Logo" /> The Little Guide of Linked List in JavaScript](https://hackernoon.com/the-little-guide-of-linked-list-in-javascript-9daf89b63b54)

### Graphs

Learn how and when graphs should be used.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGraph_theory" alt="Logo" /> Wikipedia - Graph theory](https://en.wikipedia.org/wiki/Graph_theory)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.geeksforgeeks.org%2Fimplementation-graph-javascript%2F" alt="Logo" /> Implementation of Graph in JavaScript](https://www.geeksforgeeks.org/implementation-graph-javascript/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Frunestone.academy%2Frunestone%2Fbooks%2Fpublished%2Fpythonds%2FGraphs%2FObjectives.html" alt="Logo" /> Graphs and Graph Algorithms](https://runestone.academy/runestone/books/published/pythonds/Graphs/Objectives.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fhackernoon.com%2Fthe-javascript-developers-guide-to-graphs-and-detecting-cycles-in-them-96f4f619d563" alt="Logo" /> The Javascript Developer’s Guide to Graphs](https://hackernoon.com/the-javascript-developers-guide-to-graphs-and-detecting-cycles-in-them-96f4f619d563)


### Analysis

### Time complexity

Learn about time complexity and how it can be used to analyze an algorithm.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTime_complexity" alt="Logo" /> Wikipedia - Time complexity](https://en.wikipedia.org/wiki/Time_complexity)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.studytonight.com%2Fdata-structures%2Ftime-complexity-of-algorithms" alt="Logo" /> Time Complexity of Algorithms](https://www.studytonight.com/data-structures/time-complexity-of-algorithms)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Ftime-complexity-of-algorithms%2F" alt="Logo" /> Freecodecamp - An Introduction to Time Complexity](https://www.freecodecamp.org/news/time-complexity-of-algorithms/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fadrianmejia.com%2Fmost-popular-algorithms-time-complexity-every-programmer-should-know-free-online-tutorial-course%2F" alt="Logo" /> 8 time complexities that every programmer should know](https://adrianmejia.com/most-popular-algorithms-time-complexity-every-programmer-should-know-free-online-tutorial-course/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.jenniferbland.com%2Ftime-complexity-analysis-in-javascript%2F" alt="Logo" /> Time Complexity Analysis in JavaScript](https://www.jenniferbland.com/time-complexity-analysis-in-javascript/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcodeburst.io%2Falgorithms-i-searching-and-sorting-algorithms-56497dbaef20" alt="Logo" /> An intro to Algorithms](https://codeburst.io/algorithms-i-searching-and-sorting-algorithms-56497dbaef20)

#### Cost model

Learn how to setup a cost model for an algorithm.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FAnalysis_of_algorithms" alt="Logo" /> Wikipedia - Analysis of algorithms](https://en.wikipedia.org/wiki/Analysis_of_algorithms)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Faofa.cs.princeton.edu%2F10analysis%2F" alt="Logo" /> Analysis of Algorithms](https://aofa.cs.princeton.edu/10analysis/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fv8.dev%2Fblog%2Fcost-of-javascript-2019" alt="Logo" /> The cost of JavaScript in 2019](https://v8.dev/blog/cost-of-javascript-2019)

#### Order of Growth

Learn how to make an order-of-growth classification to classify the cost model.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.quora.com%2FWhat-is-the-meaning-of-order-of-growth-in-algorithm-analysis-and-how-can-we-find-the-order-of-growth-of-given-algorithm" alt="Logo" /> Quora - What is the meaning of 'order of growth'](https://www.quora.com/What-is-the-meaning-of-order-of-growth-in-algorithm-analysis-and-how-can-we-find-the-order-of-growth-of-given-algorithm)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fwww.ccs.neu.edu%2Fhome%2Fjaa%2FCS7800.12F%2FInformation%2FHandouts%2Forder.html" alt="Logo" /> Orders of Growth](http://www.ccs.neu.edu/home/jaa/CS7800.12F/Information/Handouts/order.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.coursera.org%2Flecture%2Falgorithms-part1%2Forder-of-growth-classifications-Xk03a" alt="Logo" /> Coursera - Order-of-Growth Classifications](https://www.coursera.org/lecture/algorithms-part1/order-of-growth-classifications-Xk03a)

#### Big O notation

Learn how to use Big O notation to classify the time complexity of an algorithm.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBig_O_notation" alt="Logo" /> Wikipedia - Big O notation](https://en.wikipedia.org/wiki/Big_O_notation)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Fjavascript-scene%2Ftime-complexity-big-o-notation-1a4310c3ee4b" alt="Logo" /> Time Complexity/Big O Notation](https://medium.com/javascript-scene/time-complexity-big-o-notation-1a4310c3ee4b)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Fcesars-tech-insights%2Fbig-o-notation-javascript-25c79f50b19b" alt="Logo" /> Big O Notation in JavaScript](https://medium.com/cesars-tech-insights/big-o-notation-javascript-25c79f50b19b)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Ffront-end-weekly%2Fbig-o-in-js-the-basic-that-you-need-to-know-a5abb45570fa" alt="Logo" /> Big O in JS: The basic that you need to know](https://medium.com/front-end-weekly/big-o-in-js-the-basic-that-you-need-to-know-a5abb45570fa)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40gmedina229%2Fbig-o-in-javascript-36ff67766051" alt="Logo" /> Big O in JavaScript](https://medium.com/@gmedina229/big-o-in-javascript-36ff67766051)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to%2Fmattdmccarley%2Fwhat-is-big-o-notation-and-why-is-it-useful-2b7l" alt="Logo" /> dev.to - What is Big O Notation, and Why is it Useful?](https://dev.to/mattdmccarley/what-is-big-o-notation-and-why-is-it-useful-2b7l)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to%2Fyashwanthambati%2Fbig-o-notation-complete-guide-226h" alt="Logo" /> dev.to - Big-O Notation Useful guide](https://dev.to/yashwanthambati/big-o-notation-complete-guide-226h)

### Space Complexity

Learn about space complexity and how it can be used to analyze an algorithm.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.studytonight.com%2Fdata-structures%2Fspace-complexity-of-algorithms" alt="Logo" /> Space Complexity of Algorithms](https://www.studytonight.com/data-structures/space-complexity-of-algorithms)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ftools%2Fchrome-devtools%2Fmemory-problems" alt="Logo" /> Google Devs - Fix Memory Problems](https://developers.google.com/web/tools/chrome-devtools/memory-problems)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ftools%2Fchrome-devtools%2Fmemory-problems%2Fmemory-101" alt="Logo" /> Google Devs - Memory Terminology](https://developers.google.com/web/tools/chrome-devtools/memory-problems/memory-101)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ftools%2Fchrome-devtools%2Fmemory-problems%2Fheap-snapshots" alt="Logo" /> Google Devs - How to Record Heap Snapshots](https://developers.google.com/web/tools/chrome-devtools/memory-problems/heap-snapshots)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40sarahelson81%2Fdebugging-memory-leaks-in-javascript-ed6d0fa84b40" alt="Logo" /> Debugging Memory Leaks in JavaScript](https://medium.com/@sarahelson81/debugging-memory-leaks-in-javascript-ed6d0fa84b40)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSpace_complexity" alt="Logo" /> Wikipedia - Space complexity](https://en.wikipedia.org/wiki/Space_complexity)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fexploreshaifali.github.io%2F2014%2F02%2F13%2FSpace-Complexity%2F" alt="Logo" /> Space Complexity](http://exploreshaifali.github.io/2014/02/13/Space-Complexity/)


### Algorithms

### Sorting

Learn about the most important sorting algorithms and figure out what challenges there are involved with implementing one.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fblog.bitsrc.io%2Fa-guide-to-sorting-algorithms-in-javascript-5b32da4eae1e" alt="Logo" /> A Guide To Sorting Algorithms in JavaScript](https://blog.bitsrc.io/a-guide-to-sorting-algorithms-in-javascript-5b32da4eae1e)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to%2Fwangonya%2Fsorting-algorithms-with-javascript-part-1-4aca" alt="Logo" /> dev.to - Sorting Algorithms with Javascript](https://dev.to/wangonya/sorting-algorithms-with-javascript-part-1-4aca)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.studytonight.com%2Fdata-structures%2Fintroduction-to-sorting" alt="Logo" /> Introduction to Sorting](https://www.studytonight.com/data-structures/introduction-to-sorting)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40rwillt%2Fimplementing-sorting-algorithms-in-javascript-b08504cdf4a9" alt="Logo" /> Implementing Sorting Algorithms in JavaScript](https://medium.com/@rwillt/implementing-sorting-algorithms-in-javascript-b08504cdf4a9)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fnotlaura.com%2Fday-6-algorithms-sorting-algorithms-in-javascript%2F" alt="Logo" /> Algorithms – Sorting Algorithms in JavaScript](https://notlaura.com/day-6-algorithms-sorting-algorithms-in-javascript/)

#### Insertion Sort

Learn about the insertion sort algorithm.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FInsertion_sort" alt="Logo" /> Wikipedia - Insertion sort](https://en.wikipedia.org/wiki/Insertion_sort)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.geeksforgeeks.org%2Finsertion-sort%2F" alt="Logo" /> Insertion Sort](https://www.geeksforgeeks.org/insertion-sort/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.interviewbit.com%2Ftutorial%2Finsertion-sort-algorithm%2F" alt="Logo" /> Insertion Sort Algorithm](https://www.interviewbit.com/tutorial/insertion-sort-algorithm/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to%2Fryan_dunton%2Finsertion-sorting-for-beginners-in-js------fkg" alt="Logo" /> Insertion Sorting for Beginners in JS](https://dev.to/ryan_dunton/insertion-sorting-for-beginners-in-js------fkg)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Fdailyjs%2Finsertion-sort-in-javascript-9c077844717a" alt="Logo" /> Algorithms: Insertion Sort in JavaScript](https://medium.com/dailyjs/insertion-sort-in-javascript-9c077844717a)

#### Quicksort

Learn about the quicksort algorithm.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FQuicksort" alt="Logo" /> Wikipedia - Quicksort](https://en.wikipedia.org/wiki/Quicksort)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Fkaruna-sehgal%2Fa-quick-explanation-of-quick-sort-7d8e2563629b" alt="Logo" /> A Quick Explanation of Quick Sort](https://medium.com/karuna-sehgal/a-quick-explanation-of-quick-sort-7d8e2563629b)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.geeksforgeeks.org%2Fquick-sort%2F" alt="Logo" /> QuickSort](https://www.geeksforgeeks.org/quick-sort/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40Charles_Stover%2Fimplementing-quicksort-in-javascript-8044a8e2bf39" alt="Logo" /> Implementing Quicksort in JavaScript](https://medium.com/@Charles_Stover/implementing-quicksort-in-javascript-8044a8e2bf39)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fhumanwhocodes.com%2Fblog%2F2012%2F11%2F27%2Fcomputer-science-in-javascript-quicksort%2F" alt="Logo" /> Computer science in JavaScript: Quicksort](https://humanwhocodes.com/blog/2012/11/27/computer-science-in-javascript-quicksort/)

#### Mergesort

Learn about the mergesort algorithm.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMerge_sort" alt="Logo" /> Wikipedia - Merge sort](https://en.wikipedia.org/wiki/Merge_sort)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Fjavascript-in-plain-english%2Fjavascript-merge-sort-3205891ac060" alt="Logo" /> Merge Sort Algorithm in JavaScript](https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Fkaruna-sehgal%2Fa-simplified-explanation-of-merge-sort-77089fe03bb2" alt="Logo" /> A Simplified Explanation of Merge Sort](https://medium.com/karuna-sehgal/a-simplified-explanation-of-merge-sort-77089fe03bb2)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.khanacademy.org%2Fcomputing%2Fcomputer-science%2Falgorithms%2Fmerge-sort%2Fa%2Foverview-of-merge-sort" alt="Logo" /> Overview of merge sort](https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/overview-of-merge-sort)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.freecodecamp.org%2Fforum%2Ft%2Fthe-merge-sort-algorithm-explained%2F16104" alt="Logo" /> Freecodecamp - The Merge Sort Algorithm Explained](https://www.freecodecamp.org/forum/t/the-merge-sort-algorithm-explained/16104)

#### Heapsort

Learn about the heapsort algorithm.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHeapsort" alt="Logo" /> Wikipedia - Heapsort](https://en.wikipedia.org/wiki/Heapsort)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Fbasecs%2Fheapify-all-the-things-with-heap-sort-55ee1c93af82" alt="Logo" /> Heapify All The Things With Heap Sort](https://medium.com/basecs/heapify-all-the-things-with-heap-sort-55ee1c93af82)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.studytonight.com%2Fdata-structures%2Fheap-sort" alt="Logo" /> Heap Sort Algorithm](https://www.studytonight.com/data-structures/heap-sort)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.interviewcake.com%2Fconcept%2Fjava%2Fheapsort" alt="Logo" /> Heapsort Algorithm](https://www.interviewcake.com/concept/java/heapsort)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fbrilliant.org%2Fwiki%2Fheap-sort%2F" alt="Logo" /> Heap Sort](https://brilliant.org/wiki/heap-sort/)

### Searching

Learn about the most important searching algorithms and figure out what challenges there are involved with implementing one.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSearch_algorithm" alt="Logo" /> Wikipedia - Search algorithm](https://en.wikipedia.org/wiki/Search_algorithm)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com%2FCrizstian%2Fdata-structure-and-algorithms-with-ES6%2Ftree%2Fmaster%2F13-chapter-Searching-Algorithms" alt="Logo" /> Search Algorithms with ES6](https://github.com/Crizstian/data-structure-and-algorithms-with-ES6/tree/master/13-chapter-Searching-Algorithms)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.studytonight.com%2Fdata-structures%2Fsearch-algorithms" alt="Logo" /> Introduction to Searching Algorithms](https://www.studytonight.com/data-structures/search-algorithms)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Femploybl%2Fimplement-linear-and-binary-search-algorithms-with-javascript-2149997588f0" alt="Logo" /> Implement linear and binary search algorithms with Javascript](https://medium.com/employbl/implement-linear-and-binary-search-algorithms-with-javascript-2149997588f0)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.scriptonitejs.com%2Fjavascript-searching-algorithms%2F" alt="Logo" /> Searching Algorithms In Javascript](https://www.scriptonitejs.com/javascript-searching-algorithms/)

#### Binary Search

Learn about the binary search algorithm.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBinary_search_algorithm" alt="Logo" /> Wikipedia - Binary search algorithm](https://en.wikipedia.org/wiki/Binary_search_algorithm)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Freactgo.com%2Fbinary-search-algorithm-javascript%2F" alt="Logo" /> How to implement a Binary search algorithm](https://reactgo.com/binary-search-algorithm-javascript/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.interviewbit.com%2Fcourses%2Fprogramming%2Ftopics%2Fbinary-search%2F" alt="Logo" /> Binary Search](https://www.interviewbit.com/courses/programming/topics/binary-search/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40jeffrey.allen.lewis%2Fjavascript-algorithms-explained-binary-search-25064b896470" alt="Logo" /> What Is Binary Search, A Detailed Step-By-Step](https://medium.com/@jeffrey.allen.lewis/javascript-algorithms-explained-binary-search-25064b896470)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fhackernoon.com%2Fprogramming-with-js-binary-search-aaf86cef9cb3" alt="Logo" /> Programming with JS: Binary Search](https://hackernoon.com/programming-with-js-binary-search-aaf86cef9cb3)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.geeksforgeeks.org%2Fbinary-search-in-javascript%2F" alt="Logo" /> Binary Search In JavaScript](https://www.geeksforgeeks.org/binary-search-in-javascript/)

#### Breadth First Search

Learn about the breadth first search algorithm.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBreadth-first_search" alt="Logo" /> Wikipedia - Breadth-first search](https://en.wikipedia.org/wiki/Breadth-first_search)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Fbasecs%2Fbreaking-down-breadth-first-search-cebe696709d9" alt="Logo" /> Breaking Down Breadth-First Search](https://medium.com/basecs/breaking-down-breadth-first-search-cebe696709d9)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Fdailyjs%2Fbreadth-first-search-in-javascript-e655cd824fa4" alt="Logo" /> Breadth First Search in JavaScript](https://medium.com/dailyjs/breadth-first-search-in-javascript-e655cd824fa4)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com%2Ftrekhleb%2Fjavascript-algorithms%2Ftree%2Fmaster%2Fsrc%2Falgorithms%2Fgraph%2Fbreadth-first-search" alt="Logo" /> Github - Breadth-First Search (BFS)](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/breadth-first-search)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Flevelup.gitconnected.com%2Fthe-magicians-guide-to-algorithms-part-4-the-breadth-first-search-b800aec8ccf8" alt="Logo" /> The Magician’s Guide to Algorithms](https://levelup.gitconnected.com/the-magicians-guide-to-algorithms-part-4-the-breadth-first-search-b800aec8ccf8)

#### Depth First Search

Learn about the depth first search algorithm.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FDepth-first_search" alt="Logo" /> Wikipedia - Depth-first search](https://en.wikipedia.org/wiki/Depth-first_search)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fedgy.app%2Fdepth-first-search-algorithm-what-it-is-and-how-it-works" alt="Logo" /> Depth First Search Algorithm](https://edgy.app/depth-first-search-algorithm-what-it-is-and-how-it-works)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Femploybl%2Fdepth-first-and-breadth-first-search-on-trees-in-javascript-58dcd6ff8de1" alt="Logo" /> Depth first and breadth first search on trees](https://medium.com/employbl/depth-first-and-breadth-first-search-on-trees-in-javascript-58dcd6ff8de1)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40kenny.hom27%2Fbreadth-first-vs-depth-first-tree-traversal-in-javascript-48df2ebfc6d1" alt="Logo" /> Breadth-first vs Depth-first Tree Traversal](https://medium.com/@kenny.hom27/breadth-first-vs-depth-first-tree-traversal-in-javascript-48df2ebfc6d1)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com%2Ftrekhleb%2Fjavascript-algorithms%2Ftree%2Fmaster%2Fsrc%2Falgorithms%2Fgraph%2Fdepth-first-search" alt="Logo" /> Github - Depth-First Search (DFS)](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/depth-first-search)

#### Dijkstra's Algorithm

Learn about dijkstra's algorithm.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FDijkstra%2527s_algorithm" alt="Logo" /> Wikipedia - Dijkstra's algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcourses.cs.washington.edu%2Fcourses%2Fcse373%2F16su%2Flectures%2Flecture15.pdf" alt="Logo" /> Dijkstra’s algorithm](https://courses.cs.washington.edu/courses/cse373/16su/lectures/lecture15.pdf)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fhackernoon.com%2Fhow-to-implement-dijkstras-algorithm-in-javascript-abdfd1702d04" alt="Logo" /> How to implement Dijkstra’s Algorithm](https://hackernoon.com/how-to-implement-dijkstras-algorithm-in-javascript-abdfd1702d04)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40adriennetjohnson%2Fa-walkthrough-of-dijkstras-algorithm-in-javascript-e94b74192026" alt="Logo" /> A Walkthrough of Dijkstra’s Algorithm](https://medium.com/@adriennetjohnson/a-walkthrough-of-dijkstras-algorithm-in-javascript-e94b74192026)

#### String Search

Learn about various algorithms for searching in strings.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FString-searching_algorithm" alt="Logo" /> Wikipedia - String-searching algorithm](https://en.wikipedia.org/wiki/String-searching_algorithm)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fongspxm.github.io%2Fblog%2F2017%2F05%2Fboyer-moore-search%2F" alt="Logo" /> Boyer Moore String Search](https://ongspxm.github.io/blog/2017/05/boyer-moore-search/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBoyer%25E2%2580%2593Moore_string-search_algorithm" alt="Logo" /> Boyer–Moore string-search algorithm](https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_string-search_algorithm)

### Hashing

Learn about hashing algorithms.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHash_function" alt="Logo" /> Wikipedia - Hash function](https://en.wikipedia.org/wiki/Hash_function)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcomputer.howstuffworks.com%2Fencryption5.htm" alt="Logo" /> How Encryption Works](https://computer.howstuffworks.com/encryption5.htm)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40promentol%2Fcryptography-for-javascript-node-js-developers-part-1-hash-function-86d119c7304" alt="Logo" /> Cryptography for JavaScript: Hash Function](https://medium.com/@promentol/cryptography-for-javascript-node-js-developers-part-1-hash-function-86d119c7304)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgist.github.com%2Fiperelivskiy%2F4110988" alt="Logo" /> Github - hash.js](https://gist.github.com/iperelivskiy/4110988)



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#databases--servers)

## ➤ Databases & Servers

### Databases

### Relational Databases

Learn about relational databases and how to use them.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FRelational_database" alt="Logo" /> Wikipedia - Relational database](https://en.wikipedia.org/wiki/Relational_database)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fsearchdatamanagement.techtarget.com%2Fdefinition%2Frelational-database" alt="Logo" /> Relational database](https://searchdatamanagement.techtarget.com/definition/relational-database)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to%2Flmolivera%2Feverything-you-need-to-know-about-relational-databases-3ejl" alt="Logo" /> Everything you need to know about (Relational) Databases](https://dev.to/lmolivera/everything-you-need-to-know-about-relational-databases-3ejl)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcomputer.howstuffworks.com%2Fquestion599.htm" alt="Logo" /> What are relational databases?](https://computer.howstuffworks.com/question599.htm)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.codecademy.com%2Farticles%2Fwhat-is-rdbms-sql" alt="Logo" /> What is a Relational Database Management System?](https://www.codecademy.com/articles/what-is-rdbms-sql)

#### SQL

Learn how to write SQL statements to communicate with a database.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.codecademy.com%2Flearn%2Flearn-sql" alt="Logo" /> Learn SQL](https://www.codecademy.com/learn/learn-sql)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSQL" alt="Logo" /> Wikipedia - SQL](https://en.wikipedia.org/wiki/SQL)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Flearntocodewith.me%2Fposts%2Fsql-guide%2F" alt="Logo" /> A beginners guide to SQL](https://learntocodewith.me/posts/sql-guide/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Fbetter-programming%2Fthe-last-sql-guide-for-data-analysis-youll-ever-need-17ae10fa4a6f" alt="Logo" /> The Last SQL Guide for Data Analysis You’ll Ever Need](https://medium.com/better-programming/the-last-sql-guide-for-data-analysis-youll-ever-need-17ae10fa4a6f)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.tutorialrepublic.com%2Fsql-tutorial%2F" alt="Logo" /> SQL Tutorial](https://www.tutorialrepublic.com/sql-tutorial/)

#### MySQL

Learn about the open-source relational database management system called MySQL.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.mysql.com%2F" alt="Logo" /> MySQL](https://www.mysql.com/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMySQL" alt="Logo" /> Wikipedia - MySQL](https://en.wikipedia.org/wiki/MySQL)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.tutorialspoint.com%2Fmysql%2Findex.htm" alt="Logo" /> Tutorialspoint - MySQL Tutorial](https://www.tutorialspoint.com/mysql/index.htm)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fsearchoracle.techtarget.com%2Fdefinition%2FMySQL" alt="Logo" /> MySQL Definition](https://searchoracle.techtarget.com/definition/MySQL)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fwww.mysqltutorial.org%2Fgetting-started-with-mysql%2F" alt="Logo" /> Getting Started with MySQL](http://www.mysqltutorial.org/getting-started-with-mysql/)

#### PostgreSQL

Learn about the open-source relational database management system called PostgreSQL.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.postgresql.org%2F" alt="Logo" /> PostgreSQL](https://www.postgresql.org/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FPostgreSQL" alt="Logo" /> Wikipedia - PostgreSQL](https://en.wikipedia.org/wiki/PostgreSQL)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fwww.postgresqltutorial.com%2F" alt="Logo" /> PostgreSQL Tutorial](http://www.postgresqltutorial.com/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fpostgresguide.com%2F" alt="Logo" /> Postgres Guide](http://postgresguide.com/)

### Non-relational Databases

Learn about non-relational databases and how to use them.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.mongodb.com%2Fscale%2Fwhat-is-a-non-relational-database" alt="Logo" /> What Is A Non Relational Database](https://www.mongodb.com/scale/what-is-a-non-relational-database)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FNoSQL" alt="Logo" /> Wikipedia - NoSQL](https://en.wikipedia.org/wiki/NoSQL)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to%2Ftrevoirwilliams%2Frelational-sql-vs-non-relational-nosql-databases-hi5" alt="Logo" /> dev.to - Relational SQL vs. Non-Relational NoSQL Databases](https://dev.to/trevoirwilliams/relational-sql-vs-non-relational-nosql-databases-hi5)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.microsoft.com%2Fen-us%2Fazure%2Farchitecture%2Fdata-guide%2Fbig-data%2Fnon-relational-data" alt="Logo" /> Non-relational data and NoSQL](https://docs.microsoft.com/en-us/azure/architecture/data-guide/big-data/non-relational-data)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.techopedia.com%2Fdefinition%2F25218%2Fnon-relational-database" alt="Logo" /> Non-Relational Database](https://www.techopedia.com/definition/25218/non-relational-database)

#### Redis

Learn about the open-source non-relational database management system called Redis.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fredis.io%2F" alt="Logo" /> Redis](https://redis.io/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Ftry.redis.io%2F" alt="Logo" /> Try Redis](http://try.redis.io/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FRedis" alt="Logo" /> Wikipedia - Redis](https://en.wikipedia.org/wiki/Redis)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fredis.io%2Ftopics%2Fdata-types-intro" alt="Logo" /> An introduction to Redis data types and abstractions](https://redis.io/topics/data-types-intro)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fredis.io%2Fdocumentation" alt="Logo" /> Redis - Documentation](https://redis.io/documentation)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcodeburst.io%2Fredis-what-and-why-d52b6829813" alt="Logo" /> Redis: What and Why?](https://codeburst.io/redis-what-and-why-d52b6829813)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.tutorialspoint.com%2Fredis%2Findex.htm" alt="Logo" /> Tutorialspoint - Redis Tutorial](https://www.tutorialspoint.com/redis/index.htm)

#### MongoDB

Learn about the open-source non-relational database management system called MongoDB.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.mongodb.com%2F" alt="Logo" /> MongoDB](https://www.mongodb.com/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.mongodb.com%2F" alt="Logo" /> MongoDB - Documentation](https://docs.mongodb.com/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Funiversity.mongodb.com%2F" alt="Logo" /> MongoDB - University](https://university.mongodb.com/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.tutorialspoint.com%2Fmongodb%2Findex.htm" alt="Logo" /> Tutorialspoint - MongoDB Tutorial](https://www.tutorialspoint.com/mongodb/index.htm)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DpWbMrx5rVBE" alt="Logo" /> Youtube - MongoDB In 30 Minutes](https://www.youtube.com/watch?v=pWbMrx5rVBE)

### Data Modelling

Learn how data modelling can help your database design.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fopentextbc.ca%2Fdbdesign01%2Fchapter%2Fchapter-5-data-modelling%2F" alt="Logo" /> Chapter 5 Data Modelling](https://opentextbc.ca/dbdesign01/chapter/chapter-5-data-modelling/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FDatabase_model" alt="Logo" /> Wikipedia - Database Model](https://en.wikipedia.org/wiki/Database_model)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FData_modeling" alt="Logo" /> Wikipedia - Database Modelling](https://en.wikipedia.org/wiki/Data_modeling)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.guru99.com%2Fdata-modelling-conceptual-logical.html" alt="Logo" /> What is Data Modelling?](https://www.guru99.com/data-modelling-conceptual-logical.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fsearchdatamanagement.techtarget.com%2Fdefinition%2Fdata-modeling" alt="Logo" /> Data Modeling Definition](https://searchdatamanagement.techtarget.com/definition/data-modeling)

#### ER Diagram

Learn how to model your data using ER diagrams.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.tutorialspoint.com%2Fdbms%2Fdbms_data_models.htm" alt="Logo" /> Tutorialspoint - DBMS, Data Models](https://www.tutorialspoint.com/dbms/dbms_data_models.htm)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.smartdraw.com%2Fentity-relationship-diagram%2F" alt="Logo" /> Entity Relationship Diagram](https://www.smartdraw.com/entity-relationship-diagram/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DQpdhBUYk7Kk" alt="Logo" /> Youtube - Entity Relationship Diagram Tutorial](https://www.youtube.com/watch?v=QpdhBUYk7Kk)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FEntity%25E2%2580%2593relationship_model" alt="Logo" /> Wikipedia - Entity–relationship model](https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fbeginnersbook.com%2F2015%2F04%2Fe-r-model-in-dbms%2F" alt="Logo" /> Entity Relationship Diagram](https://beginnersbook.com/2015/04/e-r-model-in-dbms/)

#### Keys

Learn how to figure out what types of keys to use and where to use them.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.studytonight.com%2Fdbms%2Fdatabase-key.php" alt="Logo" /> Introduction to Database Keys](https://www.studytonight.com/dbms/database-key.php)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.csestack.org%2Fdifferent-types-database-keys-example%2F" alt="Logo" /> 7 Different Types of Database Keys](https://www.csestack.org/different-types-database-keys-example/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdatabasemanagement.fandom.com%2Fwiki%2FRelational_Database%3A_Keys" alt="Logo" /> Database Management: Keys](https://databasemanagement.fandom.com/wiki/Relational_Database:_Keys)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.tutorialcup.com%2Fdbms%2Fkeys.htm" alt="Logo" /> Database Keys](https://www.tutorialcup.com/dbms/keys.htm)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DyMYH0zP1m8U" alt="Logo" /> Youtube - Database Keys](https://www.youtube.com/watch?v=yMYH0zP1m8U)

### Indexing

Learn how to use indexing to speed up your database.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.geeksforgeeks.org%2Findexing-in-databases-set-1%2F" alt="Logo" /> Indexing in Databases](https://www.geeksforgeeks.org/indexing-in-databases-set-1/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FDatabase_index" alt="Logo" /> Wikipedia - Database index](https://en.wikipedia.org/wiki/Database_index)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.essentialsql.com%2Fwhat-is-a-database-index%2F" alt="Logo" /> Database Indexes Explained](https://www.essentialsql.com/what-is-a-database-index/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.guru99.com%2Findexing-in-database.html" alt="Logo" /> Indexing in Databases with EXAMPLES](https://www.guru99.com/indexing-in-database.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fchartio.com%2Flearn%2Fdatabases%2Fhow-does-indexing-work%2F" alt="Logo" /> What Does Indexing Do?](https://chartio.com/learn/databases/how-does-indexing-work/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Fdatabase-indexing-at-a-glance-bb50809d48bd%2F" alt="Logo" /> An in-depth look at Database Indexing](https://www.freecodecamp.org/news/database-indexing-at-a-glance-bb50809d48bd/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2Ffaun%2Fexplained-indexing-your-database-data-the-easy-way-3c7127ed36a" alt="Logo" /> Indexing your database data — the easy way](https://medium.com/faun/explained-indexing-your-database-data-the-easy-way-3c7127ed36a)

### Data Integrity

Learn how to assure the accuracy and consistency of data.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FData_integrity" alt="Logo" /> Wikipedia - Data Integrity](https://en.wikipedia.org/wiki/Data_integrity)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.talend.com%2Fresources%2Fwhat-is-data-integrity%2F" alt="Logo" /> What is Data Integrity and Why Is It Important?](https://www.talend.com/resources/what-is-data-integrity/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdigitalguardian.com%2Fblog%2Fwhat-data-integrity-data-protection-101" alt="Logo" /> hat is Data Integrity?](https://digitalguardian.com/blog/what-data-integrity-data-protection-101)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdatabase.guide%2Fwhat-is-data-integrity%2F" alt="Logo" /> What is Data Integrity?](https://database.guide/what-is-data-integrity/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.tutorialcup.com%2Fdbms%2Fintegrity.htm" alt="Logo" /> Data Integrity](https://www.tutorialcup.com/dbms/integrity.htm)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1D_h-yFtQVo" alt="Logo" /> Youtube - Database Design, Data Integrity](https://www.youtube.com/watch?v=1D_h-yFtQVo)

### Normalization

Learn how data normalization can help you decrease data redundancy and improve data integrity in your database.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FDatabase_normalization" alt="Logo" /> Wikipedia - Database normalization](https://en.wikipedia.org/wiki/Database_normalization)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.essentialsql.com%2Fget-ready-to-learn-sql-database-normalization-explained-in-simple-english%2F" alt="Logo" /> Database Normalization (Explained in Simple English)](https://www.essentialsql.com/get-ready-to-learn-sql-database-normalization-explained-in-simple-english/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.guru99.com%2Fdatabase-normalization.html" alt="Logo" /> What is Normalization?](https://www.guru99.com/database-normalization.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.geeksforgeeks.org%2Fnormal-forms-in-dbms%2F" alt="Logo" /> Normal Forms in DBMS](https://www.geeksforgeeks.org/normal-forms-in-dbms/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fsearchsqlserver.techtarget.com%2Fdefinition%2Fnormalization" alt="Logo" /> Database normalization](https://searchsqlserver.techtarget.com/definition/normalization)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Ftowardsdatascience.com%2Fdatabase-normalization-explained-53e60a494495" alt="Logo" /> Database Normalization Explained](https://towardsdatascience.com/database-normalization-explained-53e60a494495)

#### Functional Dependencies

Learn how to find functional dependencies to improve your database design.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.lifewire.com%2Ffull-functional-dependency-1019753" alt="Logo" /> Full Functional Dependency in Database Normalization](https://www.lifewire.com/full-functional-dependency-1019753)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F4199444%2Ffunctional-dependency-and-normalization" alt="Logo" /> Stackoverflow - Functional dependency and normalization](https://stackoverflow.com/questions/4199444/functional-dependency-and-normalization)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.tutorialspoint.com%2Fdbms%2Fdatabase_normalization.htm" alt="Logo" /> Tutorialspoint - DBMS, Normalization](https://www.tutorialspoint.com/dbms/database_normalization.htm)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fwww.ict.griffith.edu.au%2F~jw%2Fnormalization%2Fassets%2FFunctional%2520Dependencies%2520and%2520Normalization.pdf" alt="Logo" /> Functional Dependencies and Normalization](http://www.ict.griffith.edu.au/~jw/normalization/assets/Functional%20Dependencies%20and%20Normalization.pdf)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.guru99.com%2Fdbms-functional-dependency.html" alt="Logo" /> DBMS Functional Dependency](https://www.guru99.com/dbms-functional-dependency.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FArmstrong%2527s_axioms" alt="Logo" /> Wikipedia - Armstrong's axioms](https://en.wikipedia.org/wiki/Armstrong%27s_axioms)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.includehelp.com%2Fdbms%2Farmstrongs-axioms-in-functional-dependency.aspx" alt="Logo" /> Armstrong's Axioms in Functional Dependency](https://www.includehelp.com/dbms/armstrongs-axioms-in-functional-dependency.aspx)

#### Normal Forms

Learn how normal forms can help you normalize your database.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FDatabase_normalization%23Normal_forms" alt="Logo" /> Wikipedia - Normal forms](https://en.wikipedia.org/wiki/Database_normalization#Normal_forms)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fbeginnersbook.com%2F2015%2F05%2Fnormalization-in-dbms%2F" alt="Logo" /> 1NF, 2NF, 3NF and BCNF in Database](https://beginnersbook.com/2015/05/normalization-in-dbms/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fopentextbc.ca%2Fdbdesign01%2Fchapter%2Fchapter-12-normalization%2F" alt="Logo" /> Chapter 12 Normalization](https://opentextbc.ca/dbdesign01/chapter/chapter-12-normalization/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBoyce%25E2%2580%2593Codd_normal_form" alt="Logo" /> Wikipedia - Boyce–Codd normal form](https://en.wikipedia.org/wiki/Boyce%E2%80%93Codd_normal_form)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.geeksforgeeks.org%2Fboyce-codd-normal-form-bcnf%2F" alt="Logo" /> Boyce-Codd Normal Form (BCNF)](https://www.geeksforgeeks.org/boyce-codd-normal-form-bcnf/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FThird_normal_form" alt="Logo" /> Wikipedia - Third normal form](https://en.wikipedia.org/wiki/Third_normal_form)

### Transactions

Learn how transactions can group a set of database tasks into a single execution unit.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FDatabase_transaction" alt="Logo" /> Wikipedia - Database transaction](https://en.wikipedia.org/wiki/Database_transaction)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F974596%2Fwhat-is-a-database-transaction" alt="Logo" /> Stackoverflow - What is a database transaction?](https://stackoverflow.com/questions/974596/what-is-a-database-transaction)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.tutorialspoint.com%2Fdbms%2Fdbms_transaction.htm" alt="Logo" /> Tutorialspoint - DBMS, Transaction](https://www.tutorialspoint.com/dbms/dbms_transaction.htm)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fdb4beginners.com%2Fblog%2Frelationaldb-transaction%2F" alt="Logo" /> Why do you need to know transactions?](http://db4beginners.com/blog/relationaldb-transaction/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.geeksforgeeks.org%2Fsql-transactions%2F" alt="Logo" /> SQL Transactions](https://www.geeksforgeeks.org/sql-transactions/)

#### ACID

Learn about the ACID properties of transactions.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fvladmihalcea.com%2Fa-beginners-guide-to-acid-and-database-transactions%2F" alt="Logo" /> A beginner’s guide to ACID](https://vladmihalcea.com/a-beginners-guide-to-acid-and-database-transactions/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.guru99.com%2Fdbms-transaction-management.html" alt="Logo" /> DBMS Transaction Management: ACID Properties](https://www.guru99.com/dbms-transaction-management.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.geeksforgeeks.org%2Facid-properties-in-dbms%2F" alt="Logo" /> ACID Properties in DBMS](https://www.geeksforgeeks.org/acid-properties-in-dbms/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FACID" alt="Logo" /> Wikipedia - ACID](https://en.wikipedia.org/wiki/ACID)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.ibm.com%2Fsupport%2Fknowledgecenter%2Fen%2FSSGMCP_5.4.0%2Fproduct-overview%2Facid.html" alt="Logo" /> ACID properties of transactions](https://www.ibm.com/support/knowledgecenter/en/SSGMCP_5.4.0/product-overview/acid.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fblog.yugabyte.com%2Fa-primer-on-acid-transactions%2F" alt="Logo" /> A Primer on ACID Transactions](https://blog.yugabyte.com/a-primer-on-acid-transactions/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F3740280%2Fhow-do-acid-and-database-transactions-work" alt="Logo" /> Stackoverflow - How do ACID and database transactions work?](https://stackoverflow.com/questions/3740280/how-do-acid-and-database-transactions-work)

#### Serializability

Learn how to determine whether a schedule is serializable and leaves the database in a consistent state.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSerializability" alt="Logo" /> Wikipedia - Serializability](https://en.wikipedia.org/wiki/Serializability)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.tutorialcup.com%2Fdbms%2Ftransaction-serializability.htm" alt="Logo" /> Transaction Serializability in DBMS](https://www.tutorialcup.com/dbms/transaction-serializability.htm)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fbeginnersbook.com%2F2018%2F12%2Fdbms-serializability%2F" alt="Logo" /> DBMS Serializability](https://beginnersbook.com/2018/12/dbms-serializability/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.geeksforgeeks.org%2Fview-serializability-in-dbms-transactions%2F" alt="Logo" /> View Serializability in DBMS Transactions](https://www.geeksforgeeks.org/view-serializability-in-dbms-transactions/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.geeksforgeeks.org%2Fconflict-serializability-in-dbms%2F" alt="Logo" /> Conflict Serializability in DBMS](https://www.geeksforgeeks.org/conflict-serializability-in-dbms/)

#### Locks

Learn about locks and when they should be used.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FRecord_locking" alt="Logo" /> Wikipedia - Record locking](https://en.wikipedia.org/wiki/Record_locking)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fwww.methodsandtools.com%2Farchive%2Farchive.php%3Fid%3D83" alt="Logo" /> Database Locking: What, why and how?](http://www.methodsandtools.com/archive/archive.php?id=83)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fvladmihalcea.com%2Fa-beginners-guide-to-database-locking-and-the-lost-update-phenomena%2F" alt="Logo" /> A beginner’s guide to locking and lost updates](https://vladmihalcea.com/a-beginners-guide-to-database-locking-and-the-lost-update-phenomena/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.microsoft.com%2Fen-us%2Fdynamics365%2Fbusiness-central%2Fdev-itpro%2Fadministration%2Fmonitor-database-locks" alt="Logo" /> Monitoring SQL Database Locks](https://docs.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/monitor-database-locks)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.geeksforgeeks.org%2Fimplementation-of-locking-in-dbms%2F" alt="Logo" /> Implementation of Locking in DBMS](https://www.geeksforgeeks.org/implementation-of-locking-in-dbms/)

##### Deadlocks

Learn about deadlocks and why they should be avoided.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.geeksforgeeks.org%2Fdeadlock-in-dbms%2F" alt="Logo" /> Deadlock in DBMS](https://www.geeksforgeeks.org/deadlock-in-dbms/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FDeadlock" alt="Logo" /> Wikipedia - Deadlock](https://en.wikipedia.org/wiki/Deadlock)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.studytonight.com%2Foperating-system%2Fdeadlocks" alt="Logo" /> What is a Deadlock?](https://www.studytonight.com/operating-system/deadlocks)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.oracle.com%2Fjavadb%2F10.8.3.0%2Fdevguide%2Fcdevconcepts28436.html" alt="Logo" /> Oracle - Deadlocks](https://docs.oracle.com/javadb/10.8.3.0/devguide/cdevconcepts28436.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwhatis.techtarget.com%2Fdefinition%2Fdeadlock" alt="Logo" /> Deadlock Definition](https://whatis.techtarget.com/definition/deadlock)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.javatpoint.com%2Fos-deadlocks-introduction" alt="Logo" /> Introduction to Deadlock](https://www.javatpoint.com/os-deadlocks-introduction)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to%2Fintegerman%2Funderstanding-sql-server-deadlocks-2ej6" alt="Logo" /> dev.to - Understanding SQL Server Deadlocks](https://dev.to/integerman/understanding-sql-server-deadlocks-2ej6)

#### Precedence graph

Learn how to create a precedence graph to test for conflict serializability of a schedule.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FPrecedence_graph" alt="Logo" /> Wikipedia - Precedence graph](https://en.wikipedia.org/wiki/Precedence_graph)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DU3SHusK80q0" alt="Logo" /> Youtube - How to draw a precedence graph](https://www.youtube.com/watch?v=U3SHusK80q0)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fashutoshtripathi.com%2F2017%2F04%2F15%2Fhow-to-check-conflict-serializability-using-precedence-graph-algorithm%2F" alt="Logo" /> Precedence Graph to check Conflict Serializable Schedule](https://ashutoshtripathi.com/2017/04/15/how-to-check-conflict-serializability-using-precedence-graph-algorithm/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fwww.exploredatabase.com%2F2017%2F11%2Ftesting-for-conflict-serializablity-using-precedence-graph.html" alt="Logo" /> Testing for conflict serializablity](http://www.exploredatabase.com/2017/11/testing-for-conflict-serializablity-using-precedence-graph.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.includehelp.com%2Fdbms%2Fprecedence-graph.aspx" alt="Logo" /> Precedence Graph, DBMS](https://www.includehelp.com/dbms/precedence-graph.aspx)


### Servers

### Architectural Models

Learn about the fundamental architectural server models.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.techopedia.com%2Fdefinition%2F30262%2Fserver-architecture" alt="Logo" /> Server Architecture](https://www.techopedia.com/definition/30262/server-architecture)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DSKtR7NVxYFA" alt="Logo" /> Youtube - Architectural model](https://www.youtube.com/watch?v=SKtR7NVxYFA)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.sciencedirect.com%2Ftopics%2Fcomputer-science%2Farchitectural-model" alt="Logo" /> Architectural Model](https://www.sciencedirect.com/topics/computer-science/architectural-model)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fwww2.imm.dtu.dk%2Fcourses%2F02220%2F2018%2FL3%2FModels.pdf" alt="Logo" /> Distributed Systems: Models and Design](http://www2.imm.dtu.dk/courses/02220/2018/L3/Models.pdf)

#### Client-Server

Learn about the client-server model.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FClient%25E2%2580%2593server_model" alt="Logo" /> Wikipedia - Client-server model](https://en.wikipedia.org/wiki/Client%E2%80%93server_model)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcio-wiki.org%2Fwiki%2FClient_Server_Architecture" alt="Logo" /> Client Server Architecture](https://cio-wiki.org/wiki/Client_Server_Architecture)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Ffreefeast.info%2Fgeneral-it-articles%2Fclient-server-architecture%2F" alt="Logo" /> Understanding What Client Server Architecture Is All About](https://freefeast.info/general-it-articles/client-server-architecture/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fsimple.wikipedia.org%2Fwiki%2FClient-server" alt="Logo" /> Wikipedia - Client-server](https://simple.wikipedia.org/wiki/Client-server)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fsearchnetworking.techtarget.com%2Fdefinition%2Fclient-server" alt="Logo" /> Client-server model (client-server architecture)](https://searchnetworking.techtarget.com/definition/client-server)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.techopedia.com%2Fdefinition%2F18321%2Fclient-server-model" alt="Logo" /> Client-Server Model](https://www.techopedia.com/definition/18321/client-server-model)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.sciencedirect.com%2Ftopics%2Fcomputer-science%2Fclient-server-model" alt="Logo" /> Learn more about Client-Server Model](https://www.sciencedirect.com/topics/computer-science/client-server-model)

#### Proxy Server

Learn about the proxy-server model.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FProxy_server" alt="Logo" /> Wikipedia - Proxy Server](https://en.wikipedia.org/wiki/Proxy_server)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D5cPIukqXe5w" alt="Logo" /> Youtube - What is a Proxy Server?](https://www.youtube.com/watch?v=5cPIukqXe5w)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.varonis.com%2Fblog%2Fwhat-is-a-proxy-server%2F" alt="Logo" /> What is a Proxy Server and How Does it Work?](https://www.varonis.com/blog/what-is-a-proxy-server/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwhatis.techtarget.com%2Fdefinition%2Fproxy-server" alt="Logo" /> Proxy Server Definition](https://whatis.techtarget.com/definition/proxy-server)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.itpro.co.uk%2Fserver-storage%2F30246%2Fwhat-is-a-proxy-server" alt="Logo" /> What is a proxy server?](https://www.itpro.co.uk/server-storage/30246/what-is-a-proxy-server)

#### Peer-To-Peer

Learn about the peer-to-peer model.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FPeer-to-peer" alt="Logo" /> Wikipedia - Peer-to-peer](https://en.wikipedia.org/wiki/Peer-to-peer)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Die-qRQIQT4I" alt="Logo" /> Youtube - What is a Peer to Peer Network? ](https://www.youtube.com/watch?v=ie-qRQIQT4I)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.computerworld.com%2Farticle%2F2588287%2Fnetworking-peer-to-peer-network.html" alt="Logo" /> What's a Peer-to-Peer (P2P) Network?](https://www.computerworld.com/article/2588287/networking-peer-to-peer-network.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fsearchnetworking.techtarget.com%2Fdefinition%2Fpeer-to-peer" alt="Logo" /> Peer-to-peer (P2P)](https://searchnetworking.techtarget.com/definition/peer-to-peer)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to%2Fcarloslfu%2Fmake-a-p2p-connection-in-10-minutes-4b32" alt="Logo" /> Make a P2P connection in 10 minutes](https://dev.to/carloslfu/make-a-p2p-connection-in-10-minutes-4b32)

### Middleware

Learn about middleware.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMiddleware" alt="Logo" /> Wikipedia - Middleware](https://en.wikipedia.org/wiki/Middleware)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fsearchapparchitecture.techtarget.com%2Fdefinition%2Fmiddleware" alt="Logo" /> Middleware Definition](https://searchapparchitecture.techtarget.com/definition/middleware)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.quora.com%2FWhy-is-Middleware-important" alt="Logo" /> Quora - Why is Middleware important?](https://www.quora.com/Why-is-Middleware-important)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.redhat.com%2Fen%2Ftopics%2Fmiddleware%2Fwhat-is-middleware" alt="Logo" /> What is middleware?](https://www.redhat.com/en/topics/middleware/what-is-middleware)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.talend.com%2Fresources%2Fwhat-is-middleware%2F" alt="Logo" /> What is Middleware? Technology’s Go-to Middleman](https://www.talend.com/resources/what-is-middleware/)

### Request-Reply Protocol

Learn how computers communicate with eachother using the request-reply protocol.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FRequest%25E2%2580%2593response" alt="Logo" /> Wikipedia - Request Response](https://en.wikipedia.org/wiki/Request%E2%80%93response)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D3bxAm3XIFmk" alt="Logo" /> Youtube - Event-Driven Architecture](https://www.youtube.com/watch?v=3bxAm3XIFmk)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fsolace.com%2Fsamples%2Fsolace-samples-jms%2Frequest-reply%2F" alt="Logo" /> Request/Reply](https://solace.com/samples/solace-samples-jms/request-reply/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fwww.informit.com%2Farticles%2Farticle.aspx%3Fp%3D1398616%26seqNum%3D4" alt="Logo" /> Enterprise Integration - Request-Reply](http://www.informit.com/articles/article.aspx?p=1398616&seqNum=4)

#### UDP

Learn about the UDP transport layer protocol.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fsearchnetworking.techtarget.com%2Fdefinition%2FUDP-User-Datagram-Protocol" alt="Logo" /> UDP (User Datagram Protocol)](https://searchnetworking.techtarget.com/definition/UDP-User-Datagram-Protocol)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FUser_Datagram_Protocol" alt="Logo" /> Wikipedia - User Datagram Protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.techopedia.com%2Fdefinition%2F13460%2Fuser-datagram-protocol-udp" alt="Logo" /> User Datagram Protocol (UDP)](https://www.techopedia.com/definition/13460/user-datagram-protocol-udp)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1LYqtkgtSPU" alt="Logo" /> Youtube - Explained! UDP and TCP](https://www.youtube.com/watch?v=1LYqtkgtSPU)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.geeksforgeeks.org%2Fuser-datagram-protocol-udp%2F" alt="Logo" /> User Datagram Protocol](https://www.geeksforgeeks.org/user-datagram-protocol-udp/)

#### TCP

Learn about the TCP transport layer protocol.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fsearchnetworking.techtarget.com%2Fdefinition%2FTCP" alt="Logo" /> TCP (Transmission Control Protocol)](https://searchnetworking.techtarget.com/definition/TCP)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTransmission_Control_Protocol" alt="Logo" /> Wikipedia - Transmission Control Protocol](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fsearchnetworking.techtarget.com%2Fdefinition%2FTCP-IP" alt="Logo" /> TCP/IP (Transmission Control Protocol/Internet Protocol)](https://searchnetworking.techtarget.com/definition/TCP-IP)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.geeksforgeeks.org%2Fservices-and-segment-structure-in-tcp%2F" alt="Logo" /> Services and Segment structure in TCP](https://www.geeksforgeeks.org/services-and-segment-structure-in-tcp/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.geeksforgeeks.org%2Ftcp-and-udp-in-transport-layer%2F" alt="Logo" /> TCP and UDP in Transport Layer](https://www.geeksforgeeks.org/tcp-and-udp-in-transport-layer/)

### REST API

Learn how an API can be designed to be RESTful.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FRepresentational_state_transfer" alt="Logo" /> Wikipeia - Representational state transfer](https://en.wikipedia.org/wiki/Representational_state_transfer)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.restapitutorial.com%2F" alt="Logo" /> Learn REST: A RESTful Tutorial](https://www.restapitutorial.com/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D7YcW25PHnAA" alt="Logo" /> Youtube - REST API concepts and examples](https://www.youtube.com/watch?v=7YcW25PHnAA)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Frestfulapi.net%2F" alt="Logo" /> REST API Tutorial](https://restfulapi.net/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.mulesoft.com%2Fresources%2Fapi%2Fwhat-is-rest-api-design" alt="Logo" /> What is a REST API?](https://www.mulesoft.com/resources/api/what-is-rest-api-design)

#### CRUD

Learn about the CRUD operations.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FCreate%2C_read%2C_update_and_delete" alt="Logo" /> Wikipedia - Create, read, update and delete](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.codecademy.com%2Farticles%2Fwhat-is-crud" alt="Logo" /> Codecademy - What is CRUD?](https://www.codecademy.com/articles/what-is-crud)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.bmc.com%2Fblogs%2Frest-vs-crud-whats-the-difference%2F" alt="Logo" /> What is the Difference between REST and CRUD?](https://www.bmc.com/blogs/rest-vs-crud-whats-the-difference/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLyi8SoVdkhM" alt="Logo" /> Youtube - Introduction to CRUD Operations](https://www.youtube.com/watch?v=Lyi8SoVdkhM)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Ftyk.io%2Frest-never-crud%2F" alt="Logo" /> REST was NEVER about CRUD](https://tyk.io/rest-never-crud/)

### Express

Learn about the Node.js web application framework called Express.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fexpressjs.com%2F" alt="Logo" /> Express](https://expressjs.com/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.tutorialspoint.com%2Fnodejs%2Fnodejs_express_framework.htm" alt="Logo" /> Tutorialspoint - Express Framework](https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DG8uL0lFFoN0" alt="Logo" /> Youtube - Express.js & Node.js Course for Beginners](https://www.youtube.com/watch?v=G8uL0lFFoN0)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com%2F%40LindaVivah%2Fthe-beginners-guide-understanding-node-js-express-js-fundamentals-e15493462be1" alt="Logo" /> Understanding Node.js & Express.js fundamentals](https://medium.com/@LindaVivah/the-beginners-guide-understanding-node-js-express-js-fundamentals-e15493462be1)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FExpress.js" alt="Logo" /> Wikipedia - Express.js](https://en.wikipedia.org/wiki/Express.js)

### GraphQL

Learn how to use the GraphQL query language.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgraphql.org%2F" alt="Logo" /> GraphQL](https://graphql.org/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DY0lDGjwRYKw" alt="Logo" /> Youtube - Introduction to GraphQL](https://www.youtube.com/watch?v=Y0lDGjwRYKw)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com%2Fgraphql%2Fgraphql-spec" alt="Logo" /> Github - GraphQL Specification](https://github.com/graphql/graphql-spec)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.howtographql.com%2F" alt="Logo" /> The Fullstack Tutorial for GraphQL](https://www.howtographql.com/)

### GNU/Linux

Learn about the GNU/Linux operating system

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.gnu.org%2Fgnu%2Flinux-and-gnu.en.html" alt="Logo" /> Linux and the GNU System](https://www.gnu.org/gnu/linux-and-gnu.en.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGNU%2FLinux_naming_controversy" alt="Logo" /> Wikipedia - GNU/Linux naming controversy](https://en.wikipedia.org/wiki/GNU/Linux_naming_controversy)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.debian.org%2Freleases%2Fstable%2Famd64%2Fch01s02.en.html" alt="Logo" /> What is GNU/Linux?](https://www.debian.org/releases/stable/amd64/ch01s02.en.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fsearchdatacenter.techtarget.com%2Fdefinition%2FGNU-Linux" alt="Logo" /> GNU Linux](https://searchdatacenter.techtarget.com/definition/GNU-Linux)

### Docker

Learn how to use Docker.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.docker.com%2F" alt="Logo" /> Docker](https://www.docker.com/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FDocker_(software)" alt="Logo" /> Wikipedia - Docker (software)](https://en.wikipedia.org/wiki/Docker_(software))
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocker-curriculum.com%2F" alt="Logo" /> Docker for beginners](https://docker-curriculum.com/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fopensource.com%2Fresources%2Fwhat-docker" alt="Logo" /> What is Docker?](https://opensource.com/resources/what-docker)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.docker.com%2Fget-started%2F" alt="Logo" /> Get Started, Part 1: Orientation and setup](https://docs.docker.com/get-started/)

### SSH

Learn how to use SSH and learn how to connect to a device using an SSH client.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSecure_Shell" alt="Logo" /> Wikipedia - Secure Shell](https://en.wikipedia.org/wiki/Secure_Shell)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fsearchsecurity.techtarget.com%2Fdefinition%2FSecure-Shell" alt="Logo" /> Secure Shell (SSH)](https://searchsecurity.techtarget.com/definition/Secure-Shell)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.geeksforgeeks.org%2Fssh-command-in-linux-with-examples%2F" alt="Logo" /> SSH command in Linux with Examples](https://www.geeksforgeeks.org/ssh-command-in-linux-with-examples/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fhelp.ubnt.com%2Fhc%2Fen-us%2Farticles%2F218850057-Intro-to-Networking-How-to-Establish-a-Connection-Using-SSH" alt="Logo" /> How to Establish a Connection Using SSH](https://help.ubnt.com/hc/en-us/articles/218850057-Intro-to-Networking-How-to-Establish-a-Connection-Using-SSH)


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#contributors)

## ➤ Contributors
	

| [<img alt="Andreas Mehlsen" src="https://avatars1.githubusercontent.com/u/6267397?s=460&v=4" width="100">](https://twitter.com/andreasmehlsen) | [<img alt="You?" src="https://joeschmoe.io/api/v1/random" width="100">](https://github.com/andreasbm/readme/blob/master/CONTRIBUTING.md) |
|:--------------------------------------------------:|:--------------------------------------------------:|
| [Andreas Mehlsen](https://twitter.com/andreasmehlsen) | [You?](https://github.com/andreasbm/readme/blob/master/CONTRIBUTING.md) |
| 🔥                                               |                                                  |


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#license)

## ➤ License
	
Licensed under [MIT](https://opensource.org/licenses/MIT).