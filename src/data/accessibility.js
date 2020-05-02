export const accessibilityCollection = {
	name: "Accessibility",
	areas: [
		{
			skills: [
				{
					name: "The why",
					description: {
						text: "Learn what accessibility is and why it is important.",
						links: [
							["Google Devs - Accessibility Fundamentals", "https://developers.google.com/web/fundamentals/accessibility/"],
							["A11ycasts with Rob Dodson", "https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g"],
							["Udacity - Chromevox Lite", "http://udacity.github.io/ud891/lesson3-semantics-built-in/02-chromevox-lite/"],
							["Dev.to - Why Accessibility Matters", "https://dev.to/lhoffmanwg1/why-accessibility-matters-39nl"],
							["Abilitynet - Why Accessibility Matters", "https://www.abilitynet.org.uk/why-accessibility-matters"],
							["Udacity - Web Accessibility", "https://www.udacity.com/course/web-accessibility--ud891"],
							["Youtube - Headings, Landmarks, and Tabs", "https://www.youtube.com/watch?v=HE2R86EZPMA"],
						]
					}
				},
				{
					name: "Screen Readers",
					description: {
						text: "Learn about assistive technology such as screen readers that reads sections of the page aloud based on the current focus.",
						links: [
							["The A11Y Project - Screen Reader Myths", "https://a11yproject.com/posts/people-who-use-screen-readers-dont-use-javascript/"],
							["The A11Y Project - NVDA Screen Reader", "https://a11yproject.com/posts/getting-started-with-nvda/"],
							["The A11Y Project - OS X Voiceover", "https://a11yproject.com/posts/getting-started-with-voiceover/"],
							["Webaim - Screen Reader Survey", "https://webaim.org/projects/screenreadersurvey7/"]
						]
					}
				},
				{
					name: "Accessibility tree",
					description: {
						text: "Learn about the accessibility tree and how assistive technology uses it.",
						links: [
							["Google Devs - The Accessibility Tree", "https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/the-accessibility-tree"]
						]
					},
					skills: [
						{
							name: "ARIA",
							description: {
								text: "Learn how to use ARIA descriptions an labels to help assistive technology understanding your website.",
								links: [
									["Google Devs - ARIA Labels", "https://developers.google.com/web/fundamentals/accessibility/semantics-aria/aria-labels-and-relationships"],
									["Google Devs - Hiding and updating content", "https://developers.google.com/web/fundamentals/accessibility/semantics-aria/hiding-and-updating-content"],
									["The A11Y Project - ARIA States", "https://a11yproject.com/posts/ARIA-states/"],
									["The A11Y Project - ARIA Properties", "https://a11yproject.com/posts/ARIA-properties/"],
								]
							}
						},
						{
							name: "Accessible HTML",
							description: {
								text: "Learn how to write HTML in such as way that assistive technology better understands it.",
								links: [
									["Google Devs - Introduction to Semantics", "https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/"],
									["MDN - Accessibility HTML", "https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML"],
									["Webaim - Skip navigation", "https://webaim.org/techniques/skipnav/"],
									["w3c - Headings", "https://www.w3.org/WAI/tutorials/page-structure/headings/"],
									["Freecodecamp - Semantic Elements", "https://guide.freecodecamp.org/html/html5-semantic-elements/"]
								]
							},
							skills: [
								{
									name: "Alt text",
									description: {
										text: "Learn how to use the alt attribute to provide a useful text alternative to this image.",
										links: [
											["Google Devs - Text Alternatives for Images", "https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/text-alternatives-for-images"],
											["Webaim - Accessible Images", "https://webaim.org/techniques/images/"],
											["Webaim - Alternative text", "https://webaim.org/techniques/alttext/"],
										]
									}
								}
							]
						},
						{
							name: "Accessible CSS",
							description: {
								text: "Learn how to write CSS in such as way that assistive technology better understands it.",
								links: [
									["Webaim - CSS", "https://webaim.org/techniques/css/"]
								]
							}
						},
					]
				},
				{
					name: "Accessible forms",
					description: {
						text: "Learn how to build accessible forms that makes it usable to as many people as possible.",
						links: [
							["Webaim - Forms", "https://webaim.org/techniques/forms/"],
							["Itnext - Form Accessibility Gudie", "https://itnext.io/form-accessibility-a-practical-guide-4062b7e2dd14"]
						]
					}
				},
				{
					name: "UI States",
					description: {
						text: "Learn how to make the state of each UI element clear.",
						links: [
							["Google Devs - Accessible Styles", "https://developers.google.com/web/fundamentals/accessibility/accessible-styles"]
						]
					}
				},
				{
					name: "Keyboard Accessibility",
					description: {
						text: "Learn how to make it easy for keyboard users to navigate your site.",
						links: [
							["Webaim - Keyboard", "https://webaim.org/techniques/keyboard/"],
							["Smashing Magazine - Web with just a keyboard", "https://www.smashingmagazine.com/2018/07/web-with-just-a-keyboard/"]
						]
					},
					skills: [
						{
							name: "Focus",
							description: {
								text: "Learn how to create a sensible tab order and how to make it easy for the users to locate the currently focused element.",
								links: [
									["web.dev - Control focus with tabindex", "https://web.dev/control-focus-with-tabindex/"],
									["Google Devs - Focus", "https://developers.google.com/web/fundamentals/accessibility/focus/"],
									["Google Devs - Dom Order Matters", "https://developers.google.com/web/fundamentals/accessibility/focus/dom-order-matters"],
									["Google Devs - Using Tabindex", "https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex"],
									["Google Devs - Track Focus", "https://developers.google.com/web/tools/chrome-devtools/accessibility/focus"],
									["MDN - :focus-visible", "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible"],
									["MDN - :focus-within", "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within"]
								]
							}
						}
					]
				},
				{
					name: "Accessible Colors",
					description: {
						text: "Learn how to select colors in such a way that users, including those with visual disabilities, can perceive the content on the page.",
						links: [
							["Webaim - Contrast and Color", "https://webaim.org/articles/contrast/"],
							["The A11Y Project - Check contrast", "https://a11yproject.com/posts/check-contrast-with-mobile-device/"],
							["The A11Y Project - What is color contrast?", "https://a11yproject.com/posts/what-is-color-contrast/"],
							["Designing accessible color systems", "https://stripe.com/en-dk/blog/accessible-color-systems"],
						]
					}
				},
				{
					name: "Laws & Policies",
					description: {
						text: "Learn about the governmental policies related to web accessibility.",
						links: [
							["W3C - Laws & Policies", "https://www.w3.org/WAI/policies/"],
							["Webaim - Laws around the world", "https://webaim.org/articles/laws/world/"],
							["Webaim - Section 508", "https://webaim.org/standards/508/checklist"],
							["Webaim - WCAG 2 Checklist", "https://webaim.org/standards/wcag/checklist"],
							["A11Y.dev - Lawsuits", "https://a11y.dev/470-digital-accessibility-cases-were-filed-in-q3-2018/"],
						]
					},
					skills: [
						{
							name: "Audits",
							description: {
								text: "Learn how to conduct an accessibility review to improve the overall experience of using your site. Remember, good accessibility equals good UX!",
								links: [
									["web.dev - Accessibility audits", "https://web.dev/lighthouse-accessibility"],
									["Google Devs - How to review", "https://developers.google.com/web/fundamentals/accessibility/how-to-review"],
									["Webaim - Accessibility Tools", "https://webaim.org/articles/tools/"],
									["Google Devs - Accessibility Reference", "https://developers.google.com/web/tools/chrome-devtools/accessibility/reference"],
									["Webaim - Wave", "http://wave.webaim.org/"],
									["Google Chrome - NoCoffee Extension", "https://chrome.google.com/webstore/detail/nocoffee/jjeeggmbnhckmgdhmgdckeigabjfbddl"],
									["Digital A11Y - Accessibility Plugins", "https://www.digitala11y.com/accessibility-plug-ins-ie-chrome-firefox-browsers/"],
									["Google Devs - Accessibility for teams", "https://developers.google.com/web/fundamentals/accessibility/a11y-for-teams"],
									["WCAG 2.0 checklists", "https://www.wuhcag.com/wcag-checklist/"],
									["How to Meet WCAG (Quick Reference)", "https://www.w3.org/WAI/WCAG21/quickref/"],
								]
							}
						}
					]
				}
			]
		}
	]
};