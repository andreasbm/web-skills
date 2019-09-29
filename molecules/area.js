import { css, html, LitElement } from "https://unpkg.com/lit-element/lit-element.js?module";
import {repeat} from "https://unpkg.com/lit-html/directives/repeat.js?module";
import "./skill.js";

export class Area extends LitElement {
	static get properties () {
		return {
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

				#title {
					margin: 0 0 20px;
    			font-weight: 700;
				}

				#skills {
					display: flex;
				}

				.skill:not(:last-child) {
					margin: 0 20px 0 0;
				}
			`
		];
	}

	render () {
		return html`
			<h4 id="title">${this.area.name}</h1>
			<div id="skills">
				${repeat(this.area.skills, skill => html`
					<st-skill class="skill" .skill="${skill}" .collection="${this.collection}" .area="${this.area}"></st-skill>
				`)}
			</div>
		`;
	}
}

customElements.define("st-area", Area);