import { css, html, LitElement } from "./../web_modules/lit-element.js";

export class Button extends LitElement {

	static get properties () {
		return {
		}
	}

	static get styles () {
		return [
			css`
				:host {
					display: inline-block;
				}

				#button {
					width: 100%;
					padding: 12px;
					background: none;
					color: inherit;
					border-radius: 8px;
					font-size: inherit;
					border: 1px solid currentColor;
					cursor: pointer;
					transition: opacity 120ms ease;
					outline: none;
					opacity: 0.8;
				}

				#button:hover {
					opacity: 1;
				}
			`
		];
	}

	render () {
		return html`
			<button id="button">
				<slot></slot>
			</button>
		`;
	}
}

customElements.define("st-button", Button);