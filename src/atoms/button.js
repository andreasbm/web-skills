import {sharedStyles} from "../styles/shared.js";
import {css, html, LitElement} from "../../web_modules/lit-element.js";

/**
 * An element that serves as a button.
 */
export class Button extends LitElement {

	static get properties () {
		return {
			ariaLabel: {
				attribute: "aria-label",
				reflect: true
			}
		}
	}

	static get styles () {
		return [
			sharedStyles,
			css`
				:host, #button {
					display: flex;
					align-items: center;
					justify-content: center;
				}
				
				#button {
					width: 100%;
					background: transparent;
					color: inherit;
					font-size: inherit;
					cursor: pointer;
					transition: opacity 120ms ease;
					opacity: 1;
					border: none;
					padding: 0;
					margin: 0;
				}
				
				:host([bordered]) #button {
					padding: var(--spacing-m) var(--spacing-l);
					border-radius: var(--border-radius-s);
					border: 1px solid currentColor;
				}

				#button:hover {
					opacity: 0.8;
				}
			`
		];
	}

	render () {
		return html`
			<button id="button" tabindex="0" aria-label="${this.ariaLabel}">
				<slot></slot>
			</button>
		`;
	}
}

customElements.define("ws-button", Button);