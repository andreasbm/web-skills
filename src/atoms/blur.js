import {sharedStyles} from "../styles/shared.js";
import {css, html, LitElement} from "../../web_modules/lit-element.js";

/**
 * An element that gives blur to the right and left of the screen.
 */
export class Blur extends LitElement {

	static get properties () {
		return {}
	}

	static get styles () {
		return [
			sharedStyles,
			css`
				:host {
					display: block;
					position: fixed;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					pointer-events: none;
					z-index: 1234567;
					background: linear-gradient(90deg, var(--background) 0%, transparent 1%, transparent 99%, var(--background) 100%);
				}
			`
		];
	}

	render () {
		return html``;
	}
}

customElements.define("ws-blur", Blur);