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
				    max-width: 24rem;
					width: 100%;
					background: var(--background);
					color: var(--foreground);
					box-shadow: var(--box-shadow); 
					justify-content: space-between;
					padding: var(--spacing-m);
					cursor: default;
					border-radius: var(--border-radius-s);
					margin: 0 auto;
					flex-wrap: wrap;
					display: flex;
					justify-content: flex-end;
					align-items: center;
					box-shadow: var(--box-shadow);
				}
				
				:host([wide]) {
					max-width: 55rem;
				}
				
				#buttons {
					display: flex;
					align-items: center;
					flex-shrink: 0;
				}
				
				#buttons {
					color: var(--primary-500);
				}
				
				::slotted([slot="text"]) {
					flex-grow: 1;
				}
				
				::slotted([slot="button"]) {
					padding: var(--spacing-s);
				}
			`
		];
	}

	render () {
		return html`
			<slot name="text"></slot>
			<div id="buttons">
				<slot name="button"></slot>
			</div>
		`;
	}
}

customElements.define("ws-snackbar", Snackbar);