import {sharedStyles} from "./../styles/shared.js";
import {css, html, LitElement} from "./../web_modules/lit-element.js";

class IconButton extends LitElement {

	static get properties () {
		return {
			template: {
				type: Object
			}
		}
	}

	static get styles () {
		return [
			sharedStyles,
			css`
				:host {
					display: flex;
					width: var(--icon-size, 2rem);
					height: var(--icon-size, 2rem);
					opacity: 1;
					transition: 120ms ease opacity;
				}
				
				:host(:hover), :host(:focus-visible) {
					opacity: 0.6;
				}
			`
		];
	}

	render () {
		return html`${this.template}`;
	}
}

customElements.define("ws-icon-button", IconButton);