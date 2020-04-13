import "../atoms/button.js";
import "../atoms/description.js";
import {IS_TOUCH} from "../config.js";
import {auth, AuthEvents} from "../firebase/auth.js";
import {sharedStyles} from "../styles/shared.js";
import {
	attachLazyImgIntersectionObserver,
	constructImagePathPrefix,
	dispatchCloseDescriptionEvent,
	getId
} from "../util/util.js";
import {css, html, LitElement} from "./../../web_modules/lit-element.js";
import {repeat} from "./../../web_modules/lit-html/directives/repeat.js";

/**
 * Element that renders a skill.
 */
export class Skill extends LitElement {
	static get properties () {
		return {
			collection: {
				type: Object
			},
			area: {
				type: Object
			},
			skill: {
				type: Object
			},
			compact: {
				type: Boolean,
				reflect: true,
			},
			forceShowDescription: {
				type: Boolean,
				reflect: true,
				attribute: "force-show-description"
			},
			hasMouseOver: {
				type: Boolean,
				reflect: true,
				attribute: "has-mouse-over"
			},
		}
	}

	static get styles () {
		return [
			sharedStyles,
			css`
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
					outline: none;
				}
				
				#skill:focus-visible {
					outline: var(--focus-outline);
				}

				:host([has-mouse-over]) #img-container,
				:host([force-show-description]) #img-container,
				:host:focus #img-container,
				#skill:focus #img-container {
					transform: scale(1.05);
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
					cursor: default;
				    contain: strict;
				}

				#img {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					transform: scale(1);
					transition: 120ms ease transform;
				}

				#img:not([loaded]) {
					border-radius: var(--border-radius-m);
					background: var(--shade-700);
					transform: scale(0.8);
					overflow: hidden;
				}

				#img:not([loaded]):after {
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

				#img {
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

				:host([compact]) #skill {
					margin: 0;
				}
			`
		];
	}

	get isShowingDescription () {
		return this.hasMouseOver || this.forceShowDescription;
	}

	get skillId () {
		return getId(this.collection, this.area, this.skill);
	}

	constructor () {
		super();
		this.hasMouseOver = false;
	}

	/**
	 * Setup the element after it has been connected.
	 */
	connectedCallback () {
		super.connectedCallback();

		this.completed = this.getCompleted();
		auth.addEventListener(AuthEvents.authStateChanged, this.authChanged.bind(this));
		auth.addEventListener(AuthEvents.completedSkillsChanged, this.authChanged.bind(this));
	}

	/**
	 * Handles that the auth state changed and updates the completed state.
	 */
	authChanged () {
		if (this.completed !== this.getCompleted()) {
			this.completed = this.getCompleted();
			this.requestUpdate().then();

			// Update the description as well
			const $description = this.shadowRoot.querySelector("#description");
			if ($description != null) {
				$description.requestUpdate();
			}
		}
	}

	/**
	 * Returns whether the skill is completed.
	 * @returns {boolean}
	 */
	getCompleted () {
		return !auth.isAuthenticated ? true : auth.hasCompletedSkill(this.skillId);
	}

	/**
	 * Attach observers after first update.
	 * @param {*} props
	 */
	firstUpdated (props) {
		super.firstUpdated(props);

		// Lazy load the src of the image
		const $img = this.shadowRoot.querySelector("#img");
		attachLazyImgIntersectionObserver($img);

		// Make the skill accessible
		const $skill = this.shadowRoot.querySelector("#skill");
		$skill.addEventListener("keydown", e => {
			switch (e.code) {
				case "Space":
				case "Enter":
					if (!this.isShowingDescription) {
						this.toggleForceShowDescription();
						e.preventDefault();
					}
					break;
			}
		});
	}

	/**
	 * Closes the description.
	 */
	closeDescription () {
		this.forceShowDescription = false;
		this.hasMouseOver = false;
	}

	/**
	 * Toggles force showing the description.
	 */
	toggleForceShowDescription () {
		const forceShowDescription = !this.isShowingDescription;
		dispatchCloseDescriptionEvent();
		this.forceShowDescription = forceShowDescription;
		if (!this.forceShowDescription) {
			this.closeDescription();
		}
	}

	/**
	 * Handles mouse enter event.
	 */
	onMouseEnter () {
		if (IS_TOUCH) return;
		this.hasMouseOver = true;
	}

	/**
	 * Handles mouse leave event.
	 */
	onMouseLeave () {
		if (IS_TOUCH) return;
		this.hasMouseOver = false;
		this.forceShowDescription = false;
	}

	/**
	 * Render the skill.
	 */
	render () {
		const {skill, collection, area, completed} = this;
		const {name, skills} = skill;

		return html`
			<div id="skill" aria-label="${name}" tabindex="0" class="${completed ? `completed` : ``}" @click="${this.toggleForceShowDescription}" @mouseenter="${this.onMouseEnter}" @mouseleave="${this.onMouseLeave}">
				<div id="img-container">
					<img id="img" loading="lazy" draggable="false" width="70px" height="70px" intrinsicsize="70x70" alt="${name}" role="presentation" data-src="${constructImagePathPrefix(collection, area, skill)}" />
				</div>
				<h6 id="title">${name}</h6>
				${this.isShowingDescription ? html`<ws-description id="description" .collection="${this.collection}" .area="${this.area}" .skill="${this.skill}" @close="${this.closeDescription}" ?compact="${this.compact}"></ws-description>` : undefined}
			</div>
			${skills != null && !this.compact ? html`
				<div id="subskills" class="${skills.length > 1 ? 'wide' : ''}">
					${skills.length > 1 ? html`
						<div class="arrow-connection"></div>
					` : undefined}
					${repeat(skills, skill => getId(collection, area, skill), skill => html`
						<div class="subskill">
							<div class="arrow"></div>
							<ws-skill .skill="${skill}" .collection="${collection}" .area="${area}" ?compact="${this.compact}"></ws-skill>
						</div>
					`)}
				</div>
			` : undefined}
		`;
	}
}

customElements.define("ws-skill", Skill);