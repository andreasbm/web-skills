const template = document.createElement("template");
template.innerHTML = `
	<style>
		:host {
			color: var(--background);
			background: var(--foreground);
			box-shadow: var(--shadow);
			transition: 100ms transform ease;
			user-select: none;
			border-radius: 100%;
			cursor: pointer;
			width: 2.8rem;
			height: 2.8rem;
			position: relative;
		}
		
		:host, #icon {
			display: flex;
			align-items: center;
			justify-content: center;
		}
		
		:host([size="large"]) {
			--button-icon-size: 3rem;
		}
		
		:host([flat]) {
			background: transparent;
			box-shadow: none;
			color: var(--foreground);
		}
		
		#icon {
			position: absolute;
			transition: 100ms opacity ease;
			opacity: 0.5;
		}
		
		::slotted(*) {
			width: var(--button-icon-size, 2rem);
			height: var(--button-icon-size, 2rem);;
			fill: currentColor;
		}
		
		:host(:hover) #icon, :host([active]) #icon {
			opacity: 1;
		}
		
		:host(:hover), :host([active]) {
			transform: scale(1.1);
		}
		
	</style>
	<div id="icon">
		<slot></slot>
	</div>
`;

/**
 * @attr flat
 */
export class FabButton extends HTMLElement {
	constructor () {
		super();
		const shadow = this.attachShadow({mode: "open"});
		shadow.appendChild(template.content.cloneNode(true));
	}
}

customElements.define(`rr-fab-button`, FabButton);