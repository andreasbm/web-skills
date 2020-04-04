import {sharedStyles} from "../styles/shared.js";
import {css, html, LitElement} from "../../web_modules/lit-element.js";

/**
 * An element that presents a snackbar.
 */
export class Snackbar extends LitElement {

	static get properties () {
		return {}
	}

	static get styles () {
		return [
			sharedStyles,
			css`
				:host {
					max-width: 23rem;
					width: 100%;
					background: var(--background);
					color: var(--foreground);
					box-shadow: 0 2px 5px var(--shadow);
					justify-content: space-between;
					padding: var(--spacing-m);
					cursor: default;
					border-radius: var(--border-radius-s);
					margin: 0 auto;
				}
				
				:host, #buttons {
					display: flex;
					align-items: center;
				}
				
				#buttons {
					color: var(--primary-500);
				}
				
				::slotted([slot="button"]:not(:last-child)) {
					margin: 0 var(--spacing-m) 0 0;
				}
			`
		];
	}

	render () {
		return html`
			<slot></slot>
			<div id="buttons">
				<slot name="button"></slot>
			</div>
		`;
	}
}

customElements.define("ws-snackbar", Snackbar);