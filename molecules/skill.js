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
				}

				#title {
					margin: 0 0 20px;
    			font-weight: 300;
				}

				#img {
					width: 70px;
					height: 70px;
					margin: 0 0 6px;
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
				<img id="img" src="${constructImagePathPrefix(this.collection, this.area, this.skill.img)}" />
				<h6 id="title">${this.skill.name}</h6>
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