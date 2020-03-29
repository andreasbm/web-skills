import {css, html, LitElement} from "./../web_modules/lit-element.js";
import {sharedStyles} from "./../styles/shared.js";

/**
 * An element that serves as a button.
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
					--switch-knob-bg: var(--shade-800);
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
                    outline: 5px auto -webkit-focus-ring-color;
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
					box-shadow: 0 2px 5px var(--shadow);
					display: flex;
					align-items: center;
					justify-content: center;
                    color: var(--shade-400);
				}
				
				.icon {
				    width: 18px;
                    height: 18px;
				}
				
				.icon path {
					fill: currentColor;
				}
				
				:host(:not([checked])) #icon-unchecked {
					display: none;
				}
				
				:host([checked]) #icon-checked {
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
			<input tabindex="0" id="input" type="checkbox" @input="${e => this.toggleSwitch(e.target.checked)}" ?checked="${this.checked}" />
			<div id="knob">
				<svg id="icon-unchecked" class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				  <path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z" fill="#000" fill-rule="nonzero"/>
				</svg>
				<svg id="icon-checked" class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				  <path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z" fill="#000" fill-rule="nonzero"/>
				</svg>
			</div>
		`;
	}
}

customElements.define("ws-switch", Button);