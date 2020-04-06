import {sharedStyles} from "../styles/shared.js";
import {randomNumberInRange} from "../util/util.js";
import {css, html, LitElement} from "../../web_modules/lit-element.js";

/**
 * A particle is something that looks like confetti
 */
export class ConfettiParticle {
	constructor ({innerHeight, innerWidth, maxAmount, colors, context}) {
		this.x = Math.random() * innerWidth;
		this.y = Math.random() * innerHeight - innerHeight;
		this.radius = randomNumberInRange(11, 33);
		this.d = Math.random() * maxAmount + 11;
		this.color = colors[Math.floor(Math.random() * colors.length)];
		this.tilt = Math.floor(Math.random() * 33) - 11;
		this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
		this.context = context;
		this.tiltAngle = 0;
		this.tiltAngleDecremental = randomNumberInRange(0, maxAmount);
	}

	draw () {
		this.context.beginPath();
		this.context.lineWidth = this.radius / 2;
		this.context.strokeStyle = this.color;
		this.context.moveTo(this.x + this.tilt + this.radius / 3, this.y);
		this.context.lineTo(this.x + this.tilt, this.y + this.tilt + this.radius / 5);
		this.context.stroke();
	}
}

/**
 * An element that sprays confetti.
 */
export class Confetti extends LitElement {
	static get properties () {
		return {
			overlay: {
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
					display: block;
					position: relative;
					pointer-events: none;
					contain: strict;
					transform: translate3d(0);
				}

				:host([overlay]) {
					z-index: 123456789;
					position: fixed;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
				}

				canvas {
					transform: translate3d(0, 0, 0);
					backface-visibility: hidden;
					overflow-y: hidden;
					overflow-x: hidden;
					width: 100%;
					height: 100%;
					margin: 0;
					contain: strict;
				}
			`
		];
	}

	constructor () {
		super();

		this.once = true;
		this.particleStartOffset = 30;
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

		this.$canvas = this.shadowRoot.querySelector("#canvas");
	}


	/**
	 * Starts the confetti!
	 */
	start () {
		this.init();
		this.recursiveRenderToCanvas();
		this.dispatchEvent(new CustomEvent("started"));
	}

	/**
	 * Ends the confetti fun..
	 */
	stop () {
		this.reset();
		this.dispatchEvent(new CustomEvent("stopped"));
	}

	/**
	 * Initializes the particles.
	 */
	init () {
		this.reset();
		if (this.$canvas == null) return;

		// Obtain a 2D rendering context for the canvas
		this.context = this.$canvas.getContext("2d");

		// Create particles
		for (let i = 0; i < this.maxamount; i++) {
			this.particles.push(
				new ConfettiParticle({
					context: this.context,
					innerWidth: this.canvasWidth,
					innerHeight: this.canvasHeight,
					colors: this.colors,
					maxAmount: this.maxamount
				})
			);
		}
	}

	/**
	 * Recursively render the particles to the canvas.
	 */
	recursiveRenderToCanvas () {

		// Stop if there are no more particles
		if (this.particles.length === 0) {
			this.stop();
			return;
		}

		this.renderToCanvas();
		requestAnimationFrame(this.recursiveRenderToCanvas.bind(this));
	}

	/**
	 * Renders all particles to the canvas.
	 */
	renderToCanvas () {
		this.clearContext();

		// https://stackoverflow.com/questions/9882284/looping-through-array-and-removing-items-without-breaking-for-loop
		//for (let i = 0; i < this.particles.length; i++) {
		for (let i = this.particles.length - 1; i >= 0; i--) {
			const particle = this.particles[i];

			// Draw the particle
			particle.draw();

			// Compute the tilt angle
			particle.tiltAngle += particle.tiltAngleIncremental;

			// Compute its' y coordinate
			particle.y += (Math.cos(particle.d) + 3 + particle.radius / this.speedratio) / 2;
			particle.tilt = Math.sin(particle.tiltAngle - particle.tiltAngleDecremental / 3) * 15;

			// If a confetti has fluttered out of view we reset the particle and remove it if necessary.
			if (particle.x > this.canvasWidth + this.particleStartOffset || particle.x < -this.particleStartOffset || particle.y > this.canvasHeight) {

				// Reset particle
				particle.x = Math.random() * this.canvasWidth;
				particle.y = -this.particleStartOffset;
				particle.tilt = Math.floor(Math.random() * 10) - 20;

				// Remove the particle if we only spray confetti once
				if (this.once) {
					this.particles.splice(i, 1);
				}
			}
		}
	}

	/**
	 * Resets the particles and clears the context.
	 */
	reset () {
		this.particles = [];
		this.clearContext();
	}

	/**
	 * Clears the context.
	 */
	clearContext () {
		if (this.context == null) return;
		this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
	}

	render () {
		return html`
			<canvas id="canvas" width="${this.canvasWidth}" height="${this.canvasHeight}"></canvas>
		`;
	}
}

customElements.define("ws-confetti", Confetti);