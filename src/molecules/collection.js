import {getId, copyToClipboard} from "../util/util.js";
import {sharedStyles} from "../styles/shared.js";
import {getShareUrl} from "../config.js";
import {css, html, LitElement} from "../../web_modules/lit-element.js";
import {repeat} from "../../web_modules/lit-html/directives/repeat.js";
import "./area.js";

/**
 * Element that renders a collection.
 */
export class Collection extends LitElement {
	static get properties () {
		return {
			collection: {
				type: Object
			},
			index: {
				type: Number
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
					display: inline-block;
					padding: var(--spacing-xxxl);
					border-radius: var(--border-radius-l);
					background: var(--foreground);
					color: var(--background);
				}

				#title {
					font-weight: 100;
    			    letter-spacing: 2px;
					text-transform: uppercase;
					margin: 0 0 40px;
					cursor: pointer;
					position: relative;
					display: inline-block;
				}
				
				#title:hover:before {
					content: "#";
					color: var(--shade-500);
					position: absolute;
					transform: translateX(-110%);
					font-size: 80%;
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
				
				:host([compact]) {
					width: 100%;
				}
				
				:host([compact]) #areas {
					flex-direction: column;
				}
				
				:host([compact]) .area:not(:last-child) {
					margin: 0; 
				}
				
				:host([compact]) .line {
					display: none;
				}
				
				@media (max-width: 800px) {
					:host([compact]) #title {
						font-size: var(--font-size-xl);
						text-align: center;
						display: block;
					}
				}
			`
		];
	}

	/**
	 * Copy link to collection.
	 */
	copyLink () {
		location.hash = `#${getId(this.collection)}`;
		copyToClipboard(`${getShareUrl()}${location.hash}`)
	}

	/**
	 * Renders the element.
	 */
	render () {
		const {collection, index, compact} = this;

		return html`
			${collection.name != null ? html`<h1 id="title" @click="${this.copyLink}">${index != null ? `${index + 1}. ` : undefined}${collection.name}</h1>` : undefined}
			<div id="areas">
				${repeat(collection.areas || [], area => getId(collection, area), (area, i) => html`
					<div class="area">
						<ws-area .area="${area}" .collection="${collection}" ?compact="${compact}"></ws-area>
						${i < collection.areas.length - 1 ? html`
							<hr class="line" />
						` : undefined}
					</div>
				`)}
			</div>
		`;
	}
}

customElements.define("ws-collection", Collection);