import { css, html, LitElement } from "./../web_modules/lit-element.js";
import {repeat} from "./../web_modules/lit-html/directives/repeat.js";
import "./skill.js";

/**
 * Element that renders an area.
 */
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
					margin: 0 0 var(--spacing-l);
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

	/**
	 * Renders the element.
	 */
	render () {
		return html`
			${this.area.name != null ? html`<h4 id="title">${this.area.name}</h4>` : undefined}
			<div id="skills">
				${repeat(this.area.skills, skill => html`
					<st-skill class="skill" .skill="${skill}" .collection="${this.collection}" .area="${this.area}"></st-skill>
				`)}
			</div>
		`;
	}
}

customElements.define("st-area", Area);