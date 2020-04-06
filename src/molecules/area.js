import {getId} from "../util/util.js";
import {sharedStyles} from "../styles/shared.js";
import {css, html, LitElement} from "../../web_modules/lit-element.js";
import {repeat} from "../../web_modules/lit-html/directives/repeat.js";
import "./skill.js";

/**
 * Element that renders an area.
 */
export class Area extends LitElement {
	static get properties () {
		return {
			collection: {
				type: Object
			},
			area: {
				type: Object
			},
			compact: {
				type: Boolean,
				reflect: true
			}
		}
	}

	static get styles () {
		return [
			sharedStyles,
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
				
				:host([compact]) #title {
				    padding-bottom: var(--spacing-s);
                    border-bottom: 1px dashed black;
                }
                
                :host([compact]) #skills {
                    display: grid;
					grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
					grid-gap: var(--spacing-l);
					margin: 0 0 var(--spacing-xl);
                }
                
                :host([compact]) .skill, :host([compact]) .skill:not(:last-child) {
					margin: 0;
				}
				
				@media (max-width: 800px) {
					:host([compact]) #title {
						text-align: center;
					}
				}
			`
		];
	}

	/**
	 * Renders an array of skills.
	 * @param skills
	 * @returns {f}
	 */
	renderSkills (skills) {
		const {collection, area, compact} = this;
		return html`
			${repeat(skills, skill => getId(collection, area, skill), skill => html`
				<ws-skill class="skill" .skill="${skill}" .collection="${collection}" .area="${area}" ?compact="${compact}"></ws-skill>
				${skill.skills != null && compact ? html`
					${this.renderSkills(skill.skills)}
				` : ""}
			`)}
		`;
	}

	/**
	 * Renders the element.
	 */
	render () {
		const {area} = this;
		return html`
			${this.area.name != null ? html`<h4 id="title">${area.name}</h4>` : undefined}
			<div id="skills">
				${this.renderSkills(area.skills)}
			</div>
		`;
	}
}

customElements.define("ws-area", Area);