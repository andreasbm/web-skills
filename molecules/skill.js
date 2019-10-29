import { css, html, LitElement } from "https://unpkg.com/lit-element/lit-element.js?module";
import {repeat} from "https://unpkg.com/lit-html/directives/repeat.js?module";
import {constructImagePathPrefix, getSkillId, sprayConfettiOnce, playAudio, currentConfettiCount, getSkillSearchQuery} from "./../util/util.js";
import {auth, AuthEvents} from "./../firebase/auth.js";
import "./../atoms/button.js";

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
			}
		}
	}
	static get styles () {
		return [
			css`
				:host {
					--arrow-offset-y: -18px;
					--arrow-z-index: 123456;
					--arrow-height: 22px;
					--arrow-width: 6px;
					--arrow-head-size: 8px;
					--skill-img-size: 70px;

					display: flex;
					word-break: break-word;
   				flex-direction: column;
    			align-items: center;
					outline: none;
				}

				#skill {
					max-width: 100px;
					display: flex;
					flex-direction: column;
					align-items: center;
					text-align: center;
					position: relative;
					margin: 0 0 30px;
				}

				#skill:hover #img, :host(:focus-within) #img, :host(:focus) #img {
					transform: scale(1.03);
				}

				#description {
					background: var(--background);
					color: var(--foreground);
					padding: 18px;
					border-radius: 8px;
					position: absolute;
					text-align: left;
					z-index: 12345678;

					top: 50%;
    			left: 0;
					width: 300px;
					transform: translate(-7%, -5px);
					transition: 90ms ease-in opacity, 90ms ease-in transform;

					opacity: 0;
					pointer-events: none;
				}

				#description:before {
					content: "";
					border-style: solid;
					border-width: 0 8px 8px 8px;
					border-color: transparent transparent var(--background) transparent;
					position: absolute;
					bottom: 100%;
					left: 15%;
				}

				#description .text {
					margin: 0;
				}

				#description .title {
					margin: 0 0 6px 0;
				}

				#description .links {
					margin: 12px 0 0 0;
    			padding: 0 0 0 19px;
				}

				#description .link:not(:last-child) {
					margin: 0 0 6px;
				}

				a {
					color: var(--link);
					word-break: break-word;
				}

				#skill:hover #description/*, #skill:focus-within #description*/ {
					opacity: 1;
					pointer-events: all;
					transform: translate(-7%, 0);
				}

				#title {
					margin: 0;
    			font-weight: 300;
				}

				#img {
					width: var(--skill-img-size);
					height: var(--skill-img-size);
					margin: 0 0 6px;
					transition: 90ms ease-in transform;
					user-select: none;
				}

				#skill:not(.completed) #img {
					filter: grayscale(1);
					opacity: 0.5;
				}

				#subskills {
					display: flex;
					position: relative;
				}

				#subskills.wide {
					margin: 0 15px;
				}

				.subskill:not(:last-child) {
					margin: 0 20px 0 0;
				}

				.subskill {
					position: relative;
				}

				.arrow, .arrow-connection, .arrow-connection:after {
					transform: translate(-50%, var(--arrow-offset-y));
					box-shadow: var(--shadow);
					background: var(--shade-900);
					box-shadow: 0 -1px 2px var(--shadow);
					left: 50%;
					position: absolute;
					border-radius: 5px 5px 0 0;
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
					height: 10px;
					position: absolute;
					left: 50%;
					transform: translate(-50%, -100%);
				}

				#complete-button {
					margin: 24px 0 0 0;
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
					height: 15px;
				}
			`
		];
	}

	constructor () {
		super();
		this.tabIndex = 0;

		auth.addEventListener(AuthEvents.authStateChanged, () => {
			this.requestUpdate();
		});

		auth.addEventListener(AuthEvents.completedSkillsChanged, () => {
			this.requestUpdate();
		});
	}

	onKeyDown (e) {
		switch (e.code) {
			case "Escape":
				this.focus();
				break;
		}
	}

	render () {
		const {skill, collection, area} = this;
		const {description, name, skills} = skill;
		const skillId = getSkillId(collection, area, skill);
		const skillSearchQuery = getSkillSearchQuery(collection, area, skill);

		const isAuthenticated = auth.isAuthenticated;
		const isCompleted = !isAuthenticated ? true : auth.hasCompletedSkill(skillId);

		return html`
			<div id="skill" class="${isCompleted ? `completed` : ``}">
				<img id="img" loading="lazy" width="70px" height="70px" intrinsicsize="70x70" src="${constructImagePathPrefix(collection, area, skill)}" />
				<h6 id="title">${name}</h6>
				<div id="description" @keydown="${this.onKeyDown}">
					<h4 class="title">${name}</h4>
					${description != null && description.text != null ? html`<p class="text">${description.text}</p>` : undefined}
					${description != null && description.links != null && description.links.length > 0 ? html`
						<ul class="links">
								${repeat(description.links, link => html`
									<li class="link">
										<a href="${Array.isArray(link) ? link[1] : link}" target="_blank">${Array.isArray(link) ? link[0] : link}</a>
									</li>
								`)}
						</ul>
					` : undefined}
					<div id="smart-search">
						<a id="search-google" href="https://www.google.com/search?q=${encodeURIComponent(skillSearchQuery)}" target="_blank">
							<svg class="google-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.5 544.3"><path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4"/><path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853"/><path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04"/><path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335"/></svg>
						</a>
						<a id="search-youtube" href="https://www.youtube.com/results?search_query=${encodeURIComponent(skillSearchQuery)}" target="_blank">
							<svg class="youtube-logo" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="nonzero"><circle fill="#FFF" cx="40" cy="40" r="40"/><path d="M64.815 27.76a6.444 6.444 0 00-4.574-4.542C56.192 22.165 40 22.165 40 22.165s-15.896-.066-19.944.987c-2.238.592-4.378 2.402-4.97 4.607C14 31.775 14.1 40.101 14.1 40.101s-.099 8.327.987 12.342c.592 2.205 2.765 4.015 4.97 4.608 4.048 1.086 19.944.987 19.944.987s15.896.066 19.944-.987c2.238-.593 4.312-2.403 4.904-4.608 1.086-3.982 1.086-12.342 1.086-12.342s-.033-8.326-1.119-12.342z" fill="red"/><path fill="#FFF" d="M35.03 48.066L47.965 40.1 35.03 32.137z"/></g></svg>
						</a>
					</div>
					${isAuthenticated ? html`
						<st-button id="complete-button" @click="${() => {
							if (!isCompleted) {
								if (currentConfettiCount() <= 2) {
									sprayConfettiOnce();
								}

								// Add audio for lols
								requestAnimationFrame(() => {
									playAudio(`/assets/audio/party.mp3`, 0.2);
									playAudio(`/assets/audio/shot.mp3`, 0.7);
									setTimeout(() => {
										playAudio(`/assets/audio/paper.mp3`, 0.3);
									}, 150);
								});
							}

							auth.toggleCompleteSkill(skillId);
						}}">${isCompleted ? `Uncomplete Skill` : `Complete Skill`}</st-button>
					` : undefined}
				</div>
			</div>
			${skills != null ? html`
				<div id="subskills" class="${skills.length > 1 ? 'wide' : ''}">
					${skills.length > 1 ? html`
						<div class="arrow-connection"></div>
					` : undefined}
					${repeat(skills, skill => html`
						<div class="subskill">
							<div class="arrow"></div>
							<st-skill .skill="${skill}" .collection="${collection}" .area="${area}"></st-skill>
						</div>
					`)}
				</div>
			` : undefined}

		`;
	}
}

customElements.define("st-skill", Skill);