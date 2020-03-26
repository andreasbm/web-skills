import "./../atoms/button.js";
import {lazyImgIntersectionObserverOptions} from "./../config.js";
import {auth, AuthEvents} from "./../firebase/auth.js";
import {
	attachLazyImgIntersectionObserver,
	constructImagePathPrefix,
	currentConfettiCount,
	dispatchCloseAllDescriptionsEvent,
	getSkillId,
	getSkillSearchQuery,
	listenForCloseAllDescriptionsEvent,
	playAudio,
	sprayConfettiOnce
} from "./../util/util.js";
import {css, html, LitElement} from "./../web_modules/lit-element.js";
import {repeat} from "./../web_modules/lit-html/directives/repeat.js";

/**
 * Element that renders a skill.
 */
export class Skill extends LitElement {
	static get properties () {
		return {
			skill: {
				type: Object
			},
			area: {
				type: Object
			},
			collection: {
				type: Object
			},
			intersecting: {
				type: Boolean,
			},
			compact: {
				type: Boolean,
				reflect: true
			},
			forceShowDescription: {
				type: Boolean,
				reflect: true
			},
			hasFocus: {
				type: Boolean,
				reflect: true
			},
			hasMouseOver: {
				type: Boolean,
				reflect: true
			},
		}
	}

	static get styles () {
		return [
			css`
				:host, * {
				    box-sizing: border-box;
				}
				
				:host {
					--skill-img-size: 70px;
					--link-img-size: 16px;

					--arrow-offset-y: -1.2rem;
					--arrow-z-index: 123456;
					--arrow-height: 1.5rem;
					--arrow-width: 0.5rem;
					--arrow-head-size: 0.5rem;

					display: flex;
					word-break: break-word;
					flex-direction: column;
					align-items: center;
					outline: none;
				}

				#skill {
					max-width: 7rem;
					display: flex;
					flex-direction: column;
					align-items: center;
					text-align: center;
					position: relative;
					margin: 0 0 var(--spacing-xl);
				}

				:host([hasMouseOver]) #img-container, :host([hasFocus]) #img-container, :host(:focus) #img-container, :host([forceShowDescription]) #img-container {
					transform: scale(1.03);
				}

				:host([hasMouseOver]) #description, :host([hasFocus]) #description, :host([forceShowDescription]) #description {
					opacity: 1;
					pointer-events: all;
					transform: translate(-7%, 0);
				}

				#description {
					background: var(--background);
					color: var(--foreground);
					padding: var(--spacing-l);
					border-radius: var(--border-radius-s);
					position: absolute;
					text-align: left;
					z-index: 12345678;
					
					top: 50%;
    			    left: 0;
					width: 21.5rem;
					transform: translate(-7%, -5px);
					transition: 90ms ease-in opacity, 90ms ease-in transform;

					opacity: 0;
					pointer-events: none;
				}

				#description:before {
					content: "";
					border-style: solid;
					border-width: 0 var(--spacing-sm) var(--spacing-sm) var(--spacing-sm);
					border-color: transparent transparent var(--background) transparent;
					position: absolute;
					bottom: 100%;
					left: 15%;
				}

				#description .text {
					margin: 0;
				}

				#description .title {
					margin: 0 0 var(--spacing-s) 0;
				}

				#description .links {
					margin: var(--spacing-m) 0 0 0;
    			    padding: 0 0 0 var(--spacing-s);
				}
				
				#description .link {
					display: flex;
    			    align-items: center;
				}

				#description .link:not(:last-child) {
					margin: 0 0 var(--spacing-s);
				}

				#description .link .img {
					margin: 0 var(--spacing-s) 0 0;
					width: var(--link-img-size);
					height: var(--link-img-size);
					flex-shrink: 0;
				}

				#description .link:not(:last-child) {
					margin: 0 0 var(--spacing-s);
				}

				a {
					color: var(--link);
					word-break: break-word;
				}

				#title {
					margin: 0;
    			    font-weight: 300;
					-webkit-hyphens: auto;
					-moz-hyphens: auto;
					-ms-hyphens: auto;
					hyphens: auto;
				}

				#img-container {
					width: var(--skill-img-size);
					height: var(--skill-img-size);
					margin: 0 0 var(--spacing-s);
					transition: 90ms ease-in transform;
					user-select: none;
					position: relative;
				}

				#img-container .img {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					transform: scale(1);
					transition: 120ms ease transform;
				}

				#img-container .img:not([loaded]) {
					border-radius: var(--border-radius-m);
					background: var(--shade-700);
					transform: scale(0.8);
					overflow: hidden;
				}

				#img-container .img:not([loaded]):after {
					background: var(--shade-700);
					content: "";
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					border-radius: inherit;
				}

				#skill:not(.completed) #img-container {
					filter: grayscale(1);
					opacity: 0.5;
				}

				#subskills {
					display: flex;
					position: relative;
				}

				#subskills.wide {
					margin: 0 var(--spacing-l);
				}

				.subskill:not(:last-child) {
					margin: 0 var(--spacing-l) 0 0;
				}

				.subskill {
					position: relative;
				}

				.img {
					font-size: 0;
				}

				.arrow, .arrow-connection, .arrow-connection:after {
					transform: translate(-50%, var(--arrow-offset-y));
					box-shadow: var(--shadow);
					background: var(--shade-900);
					box-shadow: 0 -1px 2px var(--shadow);
					left: 50%;
					position: absolute;
					border-radius: var(--border-radius-s) var(--border-radius-s) 0 0;
				}
				
				.arrow {
					width: var(--arrow-width);
					height: var(--arrow-height);
					box-shadow: 0 2px 2px var(--shadow);
					top: 0;
					z-index: var(--arrow-z-index);
				}

				.arrow:after {
					content: "";
					width: 0; 
					height: 0; 
					border-left: var(--arrow-head-size) solid transparent;
					border-right: var(--arrow-head-size) solid transparent;
					border-top: var(--arrow-head-size) solid var(--shade-900);
					position: absolute;
					left: 50%;
					top: 100%;
					transform: translate(-50%, 0);
				}

				.arrow-connection {
					z-index: calc(var(--arrow-z-index) + 1);
					height: var(--arrow-width);
					width: calc(100% - var(--skill-img-size) + var(--arrow-width));
				}

				.arrow-connection:after {
					content: "";
					width: var(--arrow-width);
					height: 0.7rem;
					position: absolute;
					left: 50%;
					transform: translate(-50%, -100%);
				}

				#complete-button {
					margin: var(--spacing-l) 0 0 0;
					width: 100%;
				}

				#smart-search {
					position: absolute;
					top: var(--spacing-m);
					right: var(--spacing-m);
					display: flex;
					align-items: center;
				}

				#smart-search > :not(:last-child) {
					margin: 0 var(--spacing-s) 0 0;
				}

				#search-google:hover, #search-youtube:hover {
					opacity: 0.8;
				}

				.google-logo, .youtube-logo {
					height: 1rem;
				}
				
				:host([compact]) #skill {
					margin: 0;
				}
				
				@media (any-pointer: coarse) {
					#description {
						position: fixed;
						bottom: 0;
						left: 0;
						top: unset;
						width: 100%;
						transform: none !important;
						max-height: 60vh;
						overflow-y: auto;
						overscroll-behavior: contain;
						-webkit-overflow-scrolling: touch;
					}
					
					.link {
					    padding: var(--spacing-m);
						border: 1px solid currentColor;
						border-radius: var(--border-radius-s);
					}
					
					.link:not(:last-child) {
						margin: 0 0 var(--spacing-m);
					}
				}
			`
		];
	}

	get skillId () {
		return getSkillId(this.collection, this.area, this.skill);
	}

	get isShowingDescription () {
		return this.hasMouseOver || this.hasFocus || this.forceShowDescription;
	}

	get isAuthenticated () {
		return auth.isAuthenticated;
	}

	get isCompleted () {
		return !this.isAuthenticated ? true : auth.hasCompletedSkill(this.skillId);
	}

	get skillSearchQuery () {
		return getSkillSearchQuery(this.collection, this.area, this.skill);
	}

	constructor () {
		super();
		this.intersecting = false;
	}

	/**
	 * Setup the element after it has been connected.
	 */
	connectedCallback () {
		super.connectedCallback();
		this.tabIndex = 0;
		this.hasFocus = false;
		this.hasMouseOver = false;

		auth.addEventListener(AuthEvents.authStateChanged, () => {
			this.requestUpdate();
		});

		auth.addEventListener(AuthEvents.completedSkillsChanged, () => {
			this.requestUpdate();
		});

		listenForCloseAllDescriptionsEvent(() => {
			if (this.isShowingDescription) {
				this.closeDescription()
			}
		});

		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				const {isIntersecting, target} = entry;
				if (isIntersecting) {
					this.intersecting = true;
					observer.unobserve(target);
				}
			});
		}, lazyImgIntersectionObserverOptions);
		observer.observe(this);
	}

	/**
	 * Attach observers after first update.
	 * @param {*} props
	 */
	firstUpdated (props) {
		super.firstUpdated(props);

		// Lazy load the src of the image
		const $imgs = this.shadowRoot.querySelectorAll("#img-container .img");
		for (const $img of $imgs) {
			attachLazyImgIntersectionObserver($img);
		}
	}

	/**
	 * When the description becomes visible we lazy load the images of the description.
	 * @param {*} e
	 */
	onDescriptionVisible (e) {
		const {propertyName, target} = e;
		if (propertyName === "opacity") {

			// Lazy load the link images
			const $imgs = Array.from(this.shadowRoot.querySelectorAll("#description .img"));
			for (const $img of $imgs) {
				attachLazyImgIntersectionObserver($img);
			}

			// If the element is now visible we track it
			const isVisible = getComputedStyle(target).opacity === `1`;
			if (isVisible) {
				const {name} = this.skill;
				gtag("event", "show_description", {
					"event_category": "Engagement",
					"event_label": `The description for "${name}" was shown`,
				});
			}
		}
	}

	/**
	 * Track that a link was clicked.
	 * @param {*} link
	 */
	trackLinkClicked (link) {
		const [name, url] = link;

		// Track that the link was clicked
		gtag("event", "click_link", {
			"event_category": "Engagement",
			"event_label": `The link "${name}" was clicked`,
		});
	}

	closeDescription () {
		this.forceShowDescription = false;
		this.hasFocus = false;
		this.hasMouseOver = false;
	}

	toggleForceShowDescription () {
		const forceShowDescription = !this.forceShowDescription;
		dispatchCloseAllDescriptionsEvent();
		this.forceShowDescription = forceShowDescription;
		if (!this.forceShowDescription) {
			this.closeDescription();
		}
	}

	onFocusIn () {
		this.hasFocus = true;
	}

	onFocusOut () {
		this.hasFocus = false;
		this.forceShowDescription = false;
	}

	onMouseEnter () {
		this.hasMouseOver = true;
	}

	onMouseLeave () {
		this.hasMouseOver = false;
		this.forceShowDescription = false;
	}

	/**
	 * Renders the description.
	 */
	renderDescription () {
		const {skill, isCompleted, isAuthenticated, skillSearchQuery} = this;
		const {description, name} = skill;

		return html`
			<div id="description" @transitionend=${this.onDescriptionVisible}>
				<h4 class="title">${name}</h4>
				${description != null && description.text != null ? html`<p class="text">${description.text}</p>` : undefined}
				${description != null && description.links != null && description.links.length > 0 ? html`
					<div class="links">
							${repeat(description.links, link => {
			const [name, url] = link;
			return html`
									<div class="link">
										<img class="img" loading="lazy" width="16px" height="16px" intrinsicsize="16x16" data-src="https://plus.google.com/_/favicon?domain_url=${encodeURIComponent(url)}" alt="Logo for ${name}" />
										<a class="url" href="${url}" target="_blank" rel="noopener" @click="${() => this.trackLinkClicked(link)}">${name}</a>
									</div>
								`;
		})}
					</div>
				` : undefined}
				<div id="smart-search">
					<a id="search-google" href="https://www.google.com/search?q=${encodeURIComponent(skillSearchQuery)}" target="_blank" aria-label="Search on Google" rel="noopener">
						<svg class="google-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.5 544.3"><path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4"/><path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853"/><path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04"/><path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335"/></svg>
					</a>
					<a id="search-youtube" href="https://www.youtube.com/results?search_query=${encodeURIComponent(skillSearchQuery)}" target="_blank" aria-label="Search on Youtube" rel="noopener">
						<svg class="youtube-logo" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="nonzero"><circle fill="#FFF" cx="40" cy="40" r="40"/><path d="M64.815 27.76a6.444 6.444 0 00-4.574-4.542C56.192 22.165 40 22.165 40 22.165s-15.896-.066-19.944.987c-2.238.592-4.378 2.402-4.97 4.607C14 31.775 14.1 40.101 14.1 40.101s-.099 8.327.987 12.342c.592 2.205 2.765 4.015 4.97 4.608 4.048 1.086 19.944.987 19.944.987s15.896.066 19.944-.987c2.238-.593 4.312-2.403 4.904-4.608 1.086-3.982 1.086-12.342 1.086-12.342s-.033-8.326-1.119-12.342z" fill="red"/><path fill="#FFF" d="M35.03 48.066L47.965 40.1 35.03 32.137z"/></g></svg>
					</a>
				</div>
				${isAuthenticated ? html`
					<st-button id="complete-button" @click="${() => {
			const newIsCompleted = !isCompleted;
			if (newIsCompleted) {
				if (currentConfettiCount() <= 2) {
					sprayConfettiOnce();
				}

				// Add audio for lols
				requestAnimationFrame(() => {
					playAudio(`/audio/party.mp3`, 0.2);
					playAudio(`/audio/shot.mp3`, 0.7);
					setTimeout(() => {
						playAudio(`/audio/paper.mp3`, 0.3);
					}, 150);
				});

				// Track that the skill was completed
				gtag("event", "complete_skill", {
					"event_category": "Engagement",
					"event_label": `The skill "${name}" was completed`,
				});
			}

			auth.toggleCompleteSkill(this.skillId);
		}}">${isCompleted ? `Uncomplete Skill` : `Complete Skill`}</st-button>
				` : undefined}
			</div>
		`;
	}

	/**
	 * Render the component.
	 */
	render () {
		const {skill, collection, area, isCompleted} = this;
		const {name, skills} = skill;

		return html`
			<div id="skill" class="${isCompleted ? `completed` : ``}" @click="${this.toggleForceShowDescription}" @mouseenter="${this.onMouseEnter}" @mouseleave="${this.onMouseLeave}" @focusin="${this.onFocusIn}" @focusout="${this.onFocusOut}">
				<div id="img-container">
					<img class="img" loading="lazy" width="70px" height="70px" intrinsicsize="70x70" alt="${name}" data-src="${constructImagePathPrefix(collection, area, skill)}" />
				</div>
				<h6 id="title">${name}</h6>
				${this.intersecting ? this.renderDescription() : ""}
			</div>
			${skills != null && !this.compact ? html`
				<div id="subskills" class="${skills.length > 1 ? 'wide' : ''}">
					${skills.length > 1 ? html`
						<div class="arrow-connection"></div>
					` : undefined}
					${repeat(skills, skill => html`
						<div class="subskill">
							<div class="arrow"></div>
							<st-skill .skill="${skill}" .collection="${collection}" .area="${area}" ?compact="${this.compact}"></st-skill>
						</div>
					`)}
				</div>
			` : undefined}

		`;
	}
}

customElements.define("st-skill", Skill);