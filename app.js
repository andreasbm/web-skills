import { css, html, LitElement } from "https://unpkg.com/lit-element/lit-element.js?module";
import {collections} from "./data.js";
import {repeat} from "https://unpkg.com/lit-html/directives/repeat.js?module";
import "./molecules/collection.js";

export class App extends LitElement {

	static get styles () {
		return [
			css`
				:host {
					display: block;
				}
				
				#collections {
					padding: 80px;
				}

				.collection:not(:last-child) {
					margin: 0 0 40px;
				}


			`
		];
	}

	render () {
		return html`
			<div id="collections">
				${repeat(collections, (collection, i) => html`
					<st-collection class="collection" index="${i + 1}" .collection="${collection}"></st-collection>
				`)}
			</div>
		`;
	}
}

customElements.define("st-app", App);