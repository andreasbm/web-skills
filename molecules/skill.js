import { css, html, LitElement } from "https://unpkg.com/lit-element/lit-element.js?module";
import {repeat} from "https://unpkg.com/lit-html/directives/repeat.js?module";
import {constructImagePathPrefix} from "./../util/util.js";

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
					display: block;
				}

				#skill {
					display: flex;
					flex-direction: column;
					align-items: center;
					text-align: center;
					position: relative;
				}

				#skill:hover #img {
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
					transform: translate(-7%, 0);
					transition: 120ms ease-in opacity;

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
					margin: 0 0 12px;
				}

				#description .links {
					margin: 0;
    			padding: 0 0 0 19px;
				}

				#description .link:not(:last-child) {
					margin: 0 0 6px;
				}

				a {
					color: var(--link);
				}

				#skill:hover #description {
					opacity: 1;
					pointer-events: all;
				}

				#title {
					margin: 0 0 20px;
    			font-weight: 300;
				}

				#img {
					width: 70px;
					height: 70px;
					margin: 0 0 6px;
					transition: 120ms ease-in transform;
					user-select: none;
				}

				#subskills {
					display: flex;
				}

				.subskill:not(:last-child) {
					margin: 0 20px 0 0;
				}
			`
		];
	}

	render () {
		return html`
			<div id="skill">
				<img id="img" src="${constructImagePathPrefix(this.collection, this.area, this.skill)}" />
				<h6 id="title">${this.skill.name}</h6>
				${this.skill.description != null && (this.skill.description.text != null || this.skill.description.links != null) ? html`
					<div id="description">
						<p class="text">${this.skill.description.text}</p>
						<ul class="links">
							${repeat(this.skill.description.links, link => html`
								<li class="link">
									<a href="${link}" target="_blank">${link}</a>
								</li>
							`)}
						</ul>
					</div>
				` : undefined}
			</div>
			${this.skill.skills != null ? html`
				<div id="subskills">
					${repeat(this.skill.skills, skill => html`
						<st-skill class="subskill" .skill="${skill}" .collection="${this.collection}" .area="${this.area}"></st-skill>
					`)}
				</div>
			` : undefined}

		`;
	}
}

customElements.define("st-skill", Skill);