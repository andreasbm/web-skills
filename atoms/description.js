import {googleIconTemplate, youtubeIconTemplate} from "../util/icons.js";
import "./../atoms/icon-button.js";
import {auth, AuthEvents} from "./../firebase/auth.js";
import {sharedStyles} from "./../styles/shared.js";
import {
	currentConfettiCount,
	getSkillId,
	getSkillSearchQuery,
	playAudio,
	sprayConfettiOnce,
	trackLinkClicked
} from "./../util/util.js";
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
					--icon-size: 1rem;
					position: absolute;
					top: var(--spacing-m);
					right: var(--spacing-m);
					display: flex;
					align-items: center;
				}

				#smart-search > :not(:last-child) {
					margin: 0 var(--spacing-s) 0 0;
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
						transform: translate(0) !important;
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

		this.addEventListener("click", this.onClick);
		auth.addEventListener(AuthEvents.authStateChanged, this.requestUpdate.bind(this));
		auth.addEventListener(AuthEvents.completedSkillsChanged, this.requestUpdate.bind(this));

		if (this.compact) {
			window.addEventListener("touchstart", this.checkOutsideClick);
			window.addEventListener("scroll", this.requestClose, {passive: true});
		} else {
			this.addEventListener("focusout", this.requestClose, {passive: true});
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
				<a class="url" href="${url}" target="_blank" rel="noopener" @click="${e => trackLinkClicked(e)}">${name}</a>
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
				<a id="search-google" href="https://www.google.com/search?q=${encodeURIComponent(skillSearchQuery)}" target="_blank" aria-label="Search on Google" rel="noopener" @click="${e => trackLinkClicked(e)}">
					<ws-icon-button .template="${googleIconTemplate}"></ws-icon-button>
				</a>
				<a id="search-youtube" href="https://www.youtube.com/results?search_query=${encodeURIComponent(skillSearchQuery)}" target="_blank" aria-label="Search on Youtube" rel="noopener" @click="${e => trackLinkClicked(e)}">
					<ws-icon-button .template="${youtubeIconTemplate}"></ws-icon-button>
				</a>
			</div>
			
			${isAuthenticated ? html`
				<ws-button id="complete-button" @click="${this.toggleCompleteSkill}">${isCompleted ? `Uncomplete Skill` : `Complete Skill`}</ws-button>
			` : undefined}
		`;
	}
}

customElements.define("ws-description", Description);