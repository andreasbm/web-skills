import {auth, AuthEvents} from "./../firebase/auth.js";
import {sharedStyles} from "./../styles/shared.js";
import {currentConfettiCount, getSkillId, getSkillSearchQuery, playAudio, sprayConfettiOnce} from "./../util/util.js";
import {css, html, LitElement} from "./../web_modules/lit-element.js";
import {repeat} from "./../web_modules/lit-html/directives/repeat.js";

/**
 * Elements that presents the description of a skill.
 */
export class Description extends LitElement {

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
			compact: {
				type: Boolean,
				reflect: true
			},
			direction: {
				type: String,
				reflect: true
			}
		}
	}

	static get styles () {
		return [
			sharedStyles,
			css`
				:host {
					background: var(--background);
					color: var(--foreground);
					padding: var(--spacing-l);
					border-radius: var(--border-radius-s);
					text-align: left;
					z-index: 123456789;
					position: absolute;
					width: 22rem;
					top: 50%;
    			    left: 0;
					transform: translate(-7%, -5px);
				}
				
				:host([direction="left"]) {
					left: unset;
					right: 0;
					transform: translate(7%, -5px);
				}
				
				:host:before {
					content: "";
					border-style: solid;
					border-width: 0 var(--spacing-sm) var(--spacing-sm) var(--spacing-sm);
					border-color: transparent transparent var(--background) transparent;
					position: absolute;
					bottom: 100%;
					left: 15%;
				}
				
				:host([direction="left"]):before {
					left: unset;
					right: 15%;
				}
				
				#text {
					margin: 0;
				}

				#title {
					margin: 0 0 var(--spacing-s) 0;
				}

				#links {
					margin: var(--spacing-m) 0 0 0;
    			    padding: 0 0 0 var(--spacing-s);
				}
				
				.link {
					display: flex;
    			    align-items: center;
				}

				.link:not(:last-child) {
					margin: 0 0 var(--spacing-s);
				}

				.link .img {
					margin: 0 var(--spacing-s) 0 0;
					width: var(--link-img-size);
					height: var(--link-img-size);
					flex-shrink: 0;
				}

				.link:not(:last-child) {
					margin: 0 0 var(--spacing-s);
				}

				a {
					color: var(--link);
					word-break: break-word;
				}
				
				.img {
					font-size: 0;
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
				
				@media (any-pointer: coarse) {
					:host {
						position: fixed;
						bottom: 0;
						left: 0;
						top: unset;
						width: 100%;
						max-height: 60vh;
						overflow-y: auto;
						overscroll-behavior: contain;
						-webkit-overflow-scrolling: touch;
						transform: translate(0);
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
		this.direction = "right";

		this.requestClose = this.requestClose.bind(this);
		this.checkOutsideClick = this.checkOutsideClick.bind(this);
		this.onClick = this.onClick.bind(this);
	}

	/**
	 * Hook up listeners when connected.
	 */
	connectedCallback () {
		super.connectedCallback();
		this.trackVisible();
		this.addEventListener("focusout", this.requestClose, {passive: true});
		this.addEventListener("click", this.onClick);
		auth.addEventListener(AuthEvents.authStateChanged, this.requestUpdate.bind(this));
		auth.addEventListener(AuthEvents.completedSkillsChanged, this.requestUpdate.bind(this));

		if (this.compact) {
			window.addEventListener("touchstart", this.checkOutsideClick);
			window.addEventListener("scroll", this.requestClose, {passive: true});
		}
	}

	firstUpdated (e) {
		super.firstUpdated(e);
		this.updateDirection();
	}

	updateDirection () {
		const {left, width} = this.getBoundingClientRect();
		this.direction = left + width + 50 >= window.innerWidth ? "left" : "right";
	}

	/**
	 * Remove listener when disconnected.
	 */
	disconnectedCallback () {
		super.disconnectedCallback();
		this.removeEventListener("focusout", this.requestClose);
		this.removeEventListener("click", this.onClick);
		window.removeEventListener("scroll", this.requestClose);
		window.removeEventListener("touchstart", this.checkOutsideClick);
	}

	/**
	 * Tracks that the description was shown.
	 */
	trackVisible () {
		const {name} = this.skill;
		gtag("event", "show_description", {
			"event_category": "Engagement",
			"event_label": `The description for "${name}" was shown`,
		});
	}

	/**
	 * Checks whether a click happened outside of the element.
	 * @param e
	 */
	checkOutsideClick (e) {
		if (!("composedPath" in e)) {
			return;
		}

		// Check if the parent is in the event path
		if (!e.composedPath().includes(this.parentElement)) {
			this.requestClose();
		}
	}

	/**
	 * Stops clicks from propagating.
	 * @param e
	 */
	onClick (e) {
		e.stopPropagation();
	}

	/**
	 * Requests closing the skill.
	 */
	requestClose () {
		this.dispatchEvent(new CustomEvent("close"));
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

	/**
	 * Toggles the completion of the skill.
	 */
	async toggleCompleteSkill () {
		const newIsCompleted = !this.isCompleted;
		auth.toggleCompleteSkill(this.skillId).then();
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

	}

	/**
	 * Renders a link.
	 * @param link
	 * @returns {f}
	 */
	renderLink (link) {
		const [name, url] = link;
		return html`
			<div class="link">
				<img class="img" loading="lazy" width="16" height="16" intrinsicsize="16x16" src="https://plus.google.com/_/favicon?domain_url=${encodeURIComponent(url)}" alt="Logo for ${name}" />
				<a class="url" href="${url}" target="_blank" rel="noopener" @click="${() => this.trackLinkClicked(link)}">${name}</a>
			</div>
		`;
	}

	/**
	 * Renders the description.
	 * @returns {f}
	 */
	render () {
		const {skill, isCompleted, isAuthenticated, skillSearchQuery} = this;
		const {description, name} = skill;

		return html`
			<h4 id="title">${name}</h4>
			${description != null && description.text != null ? html`<p id="text">${description.text}</p>` : undefined}
			${description != null && description.links != null && description.links.length > 0 ? html`
				<div id="links">${repeat(description.links, this.renderLink.bind(this))}</div>
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
				<ws-button id="complete-button" @click="${this.toggleCompleteSkill}">${isCompleted ? `Uncomplete Skill` : `Complete Skill`}</ws-button>
			` : undefined}
		`;
	}
}

customElements.define("ws-description", Description);