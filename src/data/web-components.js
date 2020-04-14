export const webcomponentsCollection = {
	name: "Web Components",
	areas: [
		{
			skills: [
				{
					name: "Custom Elements",
					description: {
						text: "Learn how to create new HTML tags with Custom Elements.",
						links: [
							["Google Devs - Custom Elements", "https://developers.google.com/web/fundamentals/web-components/customelements"],
							["MDN - Using Custom Elements", "https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements"],
							["CSS Tricks - Creating a Custom Element from Scratch", "https://css-tricks.com/creating-a-custom-element-from-scratch/"],
							["Javascript.info - Custom Elements", "https://javascript.info/custom-elements"],
							["dev.to - An introduction to Custom Elements", "https://dev.to/jamesrweb/an-introduction-to-custom-elements-5327"],
							["itnext - Introduction to Web Components", "https://itnext.io/introduction-to-web-components-part-i-custom-elements-4de6713cef9d"],
							["web.dev - Web Components", "https://web.dev/web-components-io-2019/"]
						]
					}
				},
				{
					name: "HTML Templates",
					description: {
						text: "Learn how to use HTML templates to create flexible templates that can then be used to populate the Shadow DOM.",
						links: [
							["MDN - Using Templates & Slots", "https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots"],
							["Javascript.info - Template Element", "https://javascript.info/template-element"],
							["MDN - The Content Template element", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template"]
						]
					},
				},
				{
					name: "Shadow DOM",
					description: {
						text: "Learn how to encapsulate your CSS using Shadow DOM.",
						links: [
							["Google Devs - Shadow DOM", "https://developers.google.com/web/fundamentals/web-components/shadowdom"],
							["MDN - Using Shadow DOM", "https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM"],
							["MDN - Shadow Tree", "https://developer.mozilla.org/en-US/docs/Glossary/Shadow_tree"],
							["CSS Tricks - Encapsulating Style and Structure", "https://css-tricks.com/encapsulating-style-and-structure-with-shadow-dom/"],
							["itnext - Introduction to Web Components", "https://itnext.io/introduction-to-web-components-part-ii-shadow-dom-8d1d8e126332"],
							["Monica - Shadow DOM: fast and encapsulated styles", "https://meowni.ca/posts/shadow-dom/"]

						]
					},
					skills: [
						{
							name: "Shadow Parts",
							description: {
								text: "Learn how to style the inside of a shadow tree from outside of that Shadow Tree by using Shadow Parts.",
								links: [
									["Fergald - CSS Shadow ::part and ::theme", "https://github.com/fergald/docs/blob/master/explainers/css-shadow-parts-1.md"],
									["MDN - ::part", "https://developer.mozilla.org/en-US/docs/Web/CSS/::part"],
									["W3C - CSS Shadow Parts", "https://www.w3.org/TR/css-shadow-parts-1/"],
									["Monica - ::part and ::theme, an explainer", "https://meowni.ca/posts/part-theme-explainer/"],
									["Youtube - CSS Shadow Parts", "https://www.youtube.com/watch?v=yVrvOueeb3s"],
									["Chrome Status - ::part and ::theme", "https://www.chromestatus.com/features/5763933658939392"]
								]
							}
						},
						{
							name: "Slots",
							description: {
								text: "Learn how to compose Custom Elements by using slots.",
								links: [
									["Alligator.io - Composing Custom Elements", "https://alligator.io/web-components/composing-slots-named-slots/"],
									["Javascript.info - Slots Composition", "https://javascript.info/slots-composition"],
									["MDN - HTML <slot> element", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot"],
									["Component.kitchen - A history of the HTML slot element", "https://component.kitchen/blog/posts/a-history-of-the-html-slot-element"],
								]
							}
						}
					]
				},
				{
					name: "Best practices",
					description: {
						text: "Get familiar with best practices when it comes to building Web Components.",
						links: [
							["Google Devs - Custom Element Best Practices", "https://developers.google.com/web/fundamentals/web-components/best-practices"],
							["Webcomponents.org - Web Components Best Practices", "https://www.webcomponents.org/community/articles/web-components-best-practices"],
							["mateusortiz - Web Components the Right Way", "https://github.com/mateusortiz/webcomponents-the-right-way"],
							["dev.to - Making Web Components for Different Contexts", "https://dev.to/equinusocio/making-web-components-for-different-contexts-25ed"]
						]
					}
				},
				{
					name: "Constructible Stylesheets",
					description: {
						text: "Learn how the Constructible Stylesheets proposal enables reusable styles when using shadow dom.",
						links: [
							["Google Devs - Constructable Stylesheets", "https://developers.google.com/web/updates/2019/02/constructable-stylesheets"],
							["W3C - Constructable Stylesheet Objects", "https://wicg.github.io/construct-stylesheets/"],
							["dev.to - Why Would Anyone Use Constructible Stylesheets", "https://dev.to/westbrook/why-would-anyone-use-constructible-stylesheets-anyways-19ng"],
							["Benjamin Farrel - Adopt a Design System", "https://medium.com/swlh/adopt-a-design-system-inside-your-web-components-with-constructable-stylesheets-dd24649261e"],
							["WICG - Constructable Stylesheet Objects", "https://github.com/WICG/construct-stylesheets/blob/gh-pages/explainer.md"],
							["Chrome Status - Constructible Stylesheets", "https://www.chromestatus.com/feature/5394843094220800"]
						]
					}
				},
				{
					name: "Form Participation",
					description: {
						text: "Learn how the Form Participation API proposal enables elements, other than built-in form control elements, to participate in form submission and validation.",
						links: [
							["Form Participation API Explained", "https://docs.google.com/document/d/1JO8puctCSpW-ZYGU8lF-h4FWRIDQNDVexzHoOQ2iQmY/edit"],
							["Chrome Status - Form-associated custom elements", "https://www.chromestatus.com/features/4708990554472448"],
							["web-platform-tests - Form Participation", "https://github.com/web-platform-tests/wpt/tree/master/custom-elements/form-associated"],
							["Google Devs - Form-associated custom elements", "https://developers.google.com/web/updates/2019/09/nic77#form-associated_custom_elements"],
							["web.dev - More capable form controls", "https://web.dev/more-capable-form-controls/"],
							["W3C - Creating a form-associated custom element", "https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements-face-example"],
						]
					}
				}
			]
		}
	]
}