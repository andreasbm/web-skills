import { css, html, LitElement } from "./web_modules/lit-element.js";
import {collections} from "./data.js";
import {repeat} from "./web_modules/lit-html/directives/repeat.js";
import "./molecules/collection.js";
import {auth, AuthEvents} from "./firebase/auth.js";
import "./atoms/button.js";
import {gaMeasurementId} from "./config.js";
import "./atoms/blur.js";
import {initFirebase} from "./firebase/init-firebase.js";

initFirebase();

export class App extends LitElement {

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
				
				#collections {
					padding: 80px 80px 20px;
					display: flex;
    			flex-direction: column;
    			align-items: flex-start;
				}

				.collection:not(:last-child) {
					margin: 0 0 40px;
				}

				#toolbar {
					padding: 0 80px 80px 80px;
				}

				#sign-out {
					display: flex;
    			align-items: center;
				}

				#avatar {
					display: flex;
					align-items: center;
					margin: 0 0 0 24px;
				}

				#avatar .img {
					width: 30px;
					border-radius: 100%;
					border: 1px solid currentColor;
					margin: 0 12px 0 0;
				}

			`
		];
	}

	connectedCallback () {
		super.connectedCallback();

		auth.addEventListener(AuthEvents.authStateChanged, () => {
			this.requestUpdate().then();
		});

		// Track page view (we only have this one page)
		gtag("config", gaMeasurementId, {
			"page_path": location.pathname,
			"page_location": location.href
		});

		// Track all exceptions
		window.addEventListener("error", e => {
			const {message, filename, lineno, colno, error} = e;
			const description = `${error.name} - ${message} (${filename}:[${lineno}, ${colno}])`;  
			gtag("event", "exception", {
				description,
				"fatal": true
			});
		});
	}

	async signIn () {
		try {
			await auth.signInWithGoogle();

		} catch (err) {
			const {openDialog} = await import("./web_modules/web-dialog.js");
			const {$dialog} = openDialog({
				center: true,
				$content: document.createTextNode(err.message)
			});

			$dialog.style.setProperty("--dialog-color", "black");
			$dialog.style.setProperty("--dialog-max-width", "450px");
		}
	}

	signOut () {
		auth.signOut();
	}

	render () {
		const {signIn, signOut} = this;
		const user = auth.user;

		return html`
			<div id="collections">
				${repeat(collections, (collection, i) => html`
					<st-collection class="collection" index="${i + 1}" .collection="${collection}"></st-collection>
				`)}
			</div>
			<div id="toolbar">
				${user != null ? html`
					<div id="sign-out">
						<st-button @click="${signOut}">Sign out</st-button>
						<div id="avatar">
							<img class="img" src="${user.photoURL}" />
							<span class="text">${user.displayName || user.email}</span>
						</div>
					</div>
				` : html`
					<div id="sign-in">
						<st-button @click="${signIn}">Sign in with Google</st-button>
					</div>
				`}
			</div>
			<st-blur></st-blur>
		`;
	}
}

customElements.define("st-app", App);