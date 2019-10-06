import { css, html, LitElement } from "https://unpkg.com/lit-element/lit-element.js?module";

export class Confetti extends LitElement {
	static get properties () {
		return {
		}
	}

	static get styles () {
		return [
			css`
				:host {
					display: block;
				}
			`
		];
	}

	constructor () {
		super();

		this.maxamount = 150;
		this.speedratio = 7;
		this.canvasWidth = window.innerWidth;
		this.canvasHeight = window.innerHeight;
		this.particles = [];
		this.colors = [
			"DodgerBlue",
			"OliveDrab",
			"Gold",
			"Pink",
			"SlateBlue",
			"LightBlue",
			"Gold",
			"Violet",
			"PaleGreen",
			"SteelBlue",
			"SandyBrown",
			"Chocolate",
			"Crimson"
		];
	}

	firstUpdated (props) {
		super.firstUpdated(props);
	}

	init () {

	}

	dispose () {
		this.particles = [];

	}

	clearContext () {
		
	}

	render () {
		return html`
			<canvas id="canvas" width="${this.canvasWidth}" height="${this.canvasHeight}"></canvas>
		`;
	}
}

customElements.define("st-confetti", Confetti);