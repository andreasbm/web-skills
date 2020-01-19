import { css, html, LitElement } from "./../web_modules/lit-element.js";
import {repeat} from "./../web_modules/lit-html/directives/repeat.js";
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

				.area {
					position: relative;
					scroll-snap-align: center;
				}

				.area:not(:last-child) {
					margin: 0 80px 0 0;
				}

				.line {
					height: 100%;
    			border: 1px dashed currentColor;
					position: absolute;
					top: 0;
					left: calc(100% + 40px);
				}
			`
		];
	}

	render () {
		return html`
			${this.collection.name != null ? html`<h1 id="title">${this.index != null ? `${this.index}. ` : undefined}${this.collection.name}</h1>` : undefined}
			<div id="areas">
				${repeat(this.collection.areas || [], (area, i) => html`
					<div class="area">
						<st-area .area="${area}" .collection="${this.collection}"></st-area>
						${i < this.collection.areas.length - 1 ? html`
							<hr class="line"></hr>
						` : undefined}
					</div>
				`)}
			</div>
		`;
	}
}

customElements.define("st-collection", Collection);