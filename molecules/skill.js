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
					--arrow-offset-y: -20px;
					--arrow-z-index: 123456;
					--arrow-width: 6px;
					--skill-img-size: 70px;

					display: flex;
   				flex-direction: column;
    			align-items: center;
				}

				#skill {
					display: flex;
					flex-direction: column;
					align-items: center;
					text-align: center;
					position: relative;
					margin: 0 0 30px;
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

				#skill:hover #description, #skill:focus-within #description {
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

				.arrow, .arrow-connection {
					box-shadow: var(--shadow);
					background: var(--shade-900);
					left: 50%;
					transform: translate(-50%, var(--arrow-offset-y));
					position: absolute;
				}
				

				.arrow {
					box-shadow: 0 2px 2px var(--shadow);
					width: var(--arrow-width);
					height: 30px;
					top: 0;
					z-index: var(--arrow-z-index);
				}

				.arrow-connection {
					box-shadow: 0 -1px 2px var(--shadow);
					z-index: calc(var(--arrow-z-index) + 1);
					height: var(--arrow-width);
					width: calc(100% - var(--skill-img-size) + var(--arrow-width));
				}

			`
		];
	}

	render () {
		const {skill, collection, area} = this;
		const {description, name, skills} = skill;
		return html`
			<div id="skill">
				<img id="img" src="${constructImagePathPrefix(collection, area, skill)}" />
				<h6 id="title">${name}</h6>
				${description != null && (description.text != null || description.links != null) ? html`
					<div id="description">
						<p class="text">${description.text}</p>
						${description.links != null && description.links.length > 0 ? html`
							<ul class="links">
								${repeat(description.links, link => html`
									<li class="link">
										<a href="${Array.isArray(link) ? link[1] : link}" target="_blank">${Array.isArray(link) ? link[0] : link}</a>
									</li>
								`)}
							</ul>
						` : undefined}
					</div>
				` : undefined}
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