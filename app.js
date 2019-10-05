import { css, html, LitElement } from "https://unpkg.com/lit-element/lit-element.js?module";
import {collections} from "./data.js";
import {repeat} from "https://unpkg.com/lit-html/directives/repeat.js?module";
import "./molecules/collection.js";
import {auth, AuthEvents} from "./firebase/auth.js";

export class App extends LitElement {

	static get properties () {
		return {
			"user": {
				type: Object
			}
		}
	}

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


				#toolbar {
					padding: 0 80px 80px 80px;
				}

			`
		];
	}

	connectedCallback () {
		super.connectedCallback();

		auth.addEventListener(AuthEvents.authStateChanged, () => {
			this.user = auth.user;
		});
	}

	signIn () {
		auth.signInWithGoogle();
	}

	signOut () {
		auth.signOut();
	}

	render () {
		const {user, signIn, signOut} = this;

		return html`
			<div id="collections">
				${repeat(collections, (collection, i) => html`
					<st-collection class="collection" index="${i + 1}" .collection="${collection}"></st-collection>
				`)}
			</div>
			<div id="toolbar">
				${user != null ? html`
					<span>Signed in as ${user.displayName || user.email}</span>
					<button @click="${signOut}">Sign out</button>
				` : html`
					<button @click="${signIn}">Sign in with Google</button>
				`}
			</div>
		`;
	}
}

customElements.define("st-app", App);