import {sharedStyles} from "../styles/shared.js";
import {css, html, LitElement} from "../../web_modules/lit-element.js";

/**
 * An element that presents an icon.
 */
class IconButton extends LitElement {

	static get properties () {
		return {
			template: {
				type: Object
			}
		}
	}

	constructor () {
		super();
		this.role = "presentation";
	}

	static get styles () {
		return [
			sharedStyles,
			css`
				:host {
					display: flex;
					width: var(--icon-size, 2rem);
					height: var(--icon-size, 2rem);
					align-items: center;
					justify-content: center;
					opacity: 1;
					transition: opacity 120ms ease;
				}
				
				:host([hoverable]:hover) {
					opacity: 0.8;
				}
			`
		];
	}

	render () {
		return html`${this.template}`;
	}
}

customElements.define("ws-icon", IconButton);