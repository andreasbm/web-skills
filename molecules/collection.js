import { css, html, LitElement } from "https://unpkg.com/lit-element/lit-element.js?module";
import {repeat} from "https://unpkg.com/lit-html/directives/repeat.js?module";
import "./area.js";

export class Collection extends LitElement {
	static get properties () {
		return {
			collection: {
				type: Object
			},
			index: {
				type: Number
			}
		}
	}
	static get styles () {
		return [
			css`
				:host {
					display: inline-block;
					padding: 80px;
					border-radius: 40px;
					background: var(--foreground);
					color: var(--background);
				}

				#title {
					font-weight: 100;
    			letter-spacing: 2px;
					text-transform: uppercase;
					margin: 0 0 40px;
				}

				#areas {
					display: flex;
				}

				.area:not(:last-child) {
					margin: 0 40px 0 0;
				}
			`
		];
	}

	render () {
		return html`
			<h1 id="title">${this.index != null ? `${this.index}. ` : undefined}${this.collection.name}</h1>
			<div id="areas">
				${repeat(this.collection.areas || [], area => html`
					<st-area class="area" .area="${area}" .collection="${this.collection}"></st-area>
				`)}
			</div>
		`;
	}
}

customElements.define("st-collection", Collection);