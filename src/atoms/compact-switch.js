import {sharedStyles} from "../styles/shared.js";
import {css, html, LitElement} from "../../web_modules/lit-element.js";

/**
 * An element that serves as a switch.
 */
export class Button extends LitElement {

	static get properties () {
		return {
			checked: {
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
					--switch-knob-size: 25px;
					--switch-knob-bg: var(--foreground);
					--switch-bg: var(--shade-700);
					
					display: inline-flex;
					align-items: center;
					position: relative;
					width: calc(var(--switch-knob-size) * 2);
					height: var(--switch-knob-size);
					background: var(--switch-bg);
					border-radius: 100px;
					cursor: pointer;
				}
				
				:host(:focus-within) {
					outline: var(--focus-outline);
				}
				
				:host([checked]) {
					--switch-bg: var(--primary-500);
				}
				
				:host([checked]) #knob {
					transform: translateX(100%) scale(1.08);
				}
				
				#knob {
					border-radius: 100%;
					background: var(--switch-knob-bg);
					width: var(--switch-knob-size);
					height: var(--switch-knob-size);
					transform: scale(1.08);
					box-shadow: var(--box-shadow);
					position: relative;
                    color: var(--background);
				}
				
				.icon {
				    width: 12px;
                    height: 12px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-55%, -55%);
				}
				
				.icon path {
					fill: currentColor;
				}
				
				:host(:not([checked])) #icon-wide {
					display: none;
				}
				
				:host([checked]) #icon-compact {
					display: none;
				}
				
				#input {
					position: absolute;
					opacity: 0;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					z-index: 1234;
					cursor: pointer;
				}

			`
		];
	}

	/**
	 * Toggles the switch.
	 * @param checked
	 */
	toggleSwitch (checked) {
		this.checked = checked != null ? checked : !this.checked;
		this.dispatchEvent(new CustomEvent("toggle", {detail: this.checked}));
	}

	/**
	 * Renders the element.
	 * @returns {f}
	 */
	render () {
		return html`
			<input tabindex="0" id="input" type="checkbox" @change="${e => this.toggleSwitch(e.target.checked)}" ?checked="${this.checked}" aria-label="Toggle compact mode" />
			<div id="knob">
				<svg id="icon-compact" class="icon" preserveAspectRatio="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
				  <g fill="currentColor" fill-rule="nonzero">
					<path d="M5 0h6v6H5zM0 10h6v6H0zM10 10h6v6h-6zM8 6h1v2H8zM3 8h11v1H3z"/>
					<path d="M13 8h1v2h-1zM3 8h1v2H3z"/>
				  </g>
				</svg>
				<svg id="icon-wide" class="icon" preserveAspectRatio="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
				  <g fill="currentColor" fill-rule="nonzero">
                    <path d="M0 0h4v4H0zM6 0h4v4H6zM12 0h4v4h-4zM0 6h4v4H0zM6 6h4v4H6zM12 6h4v4h-4zM0 12h4v4H0zM6 12h4v4H6zM12 12h4v4h-4z"/>
				  </g>
				</svg>
			</div>
		`;
	}
}

customElements.define("ws-compact-switch", Button);