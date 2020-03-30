import "./atoms/blur.js";
import "./atoms/button.js";
import "./atoms/compact-switch.js";
import "./atoms/icon-button.js";
import {defaultCompactPx, gaMeasurementId, getShareConfig} from "./config.js";
import {collections} from "./data.js";
import {auth, AuthEvents} from "./firebase/auth.js";
import {initFirebase} from "./firebase/init-firebase.js";
import "./molecules/collection.js";
import {sharedStyles} from "./styles/shared.js";
import {githubIconTemplate, helpIconTeplate, shareIconTeplate} from "./util/icons.js";
import {dispatchCloseAllDescriptionsEvent, loadIsCompact, setIsCompact, trackLinkClicked, copyToClipboard} from "./util/util.js";
import {css, html, LitElement} from "./web_modules/lit-element.js";
import {repeat} from "./web_modules/lit-html/directives/repeat.js";

// Initialize firebase
initFirebase().then();

/**
 * The main entry for the application.
 */
export class App extends LitElement {

	static get properties () {
		return {
			compact: {
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
				}
				
				#collections {
					padding: 0 var(--spacing-xxxl) var(--spacing-l);
					display: flex;
    			    flex-direction: column;
    			    align-items: flex-start;
				}

				.collection:not(:last-child) {
					margin: 0 0 var(--spacing-xxl);
				}

				#toolbar-bottom {
					padding: 0 var(--spacing-xxxl) var(--spacing-xxxl) var(--spacing-xxxl);
				}
				
				#toolbar-top {
					padding: var(--spacing-m) var(--spacing-l);
					justify-content: space-between;
				}
				
				#toolbar-top, #toolbar-top > div {
					display: flex;
					align-items: center;
				}
				
				#toolbar-top > div > :not(:last-child) {
					margin: 0 var(--spacing-l) 0 0;
				}
				
				#share-button, #help-button {
					padding: 0;
					border: none;
					margin: 0;
					background: transparent;
					color: inherit;
				}
				
				#sign-out {
					display: flex;
    			    align-items: center;
				}

				#avatar {
					display: flex;
					align-items: center;
					margin: 0 0 0 var(--spacing-l);
				}

				#avatar .img {
					width: 2.14rem;
					height: 2.14rem;
					border-radius: 100%;
					border: 1px solid currentColor;
					margin: 0 var(--spacing-m) 0 0;
				}

				#github {
					color: var(--foreground);
				}

				:host([compact]) #collections, :host([compact]) #toolbar-bottom {
					padding: 0 var(--spacing-l) var(--spacing-s);
				}

				:host([compact]) .collection {
					padding: var(--spacing-xl);
					border-radius: var(--border-radius-s);
				}

				:host([compact]) .collection:not(:last-child) {
					margin: 0 0 var(--spacing-l);
				}
				
				:host([compact]) #blur {
					display: none;
				}
				
				:host(:not([compact])) #toolbar-top {
					position: fixed;
					top: 0;
					z-index: 1234567;
					width: 100%;
					background: var(--background-opaque);
				}
				
				:host(:not([compact])) #collections {
				    padding-top: var(--spacing-xxxl);
				}
				
				#toggle-compact {
					display: flex;
					align-content: center;
				}
				
				@media (max-width: 800px) {
					#toggle-compact {
						display: none;
					}
				}
			`
		];
	}

	/**
	 * Setup the element after it has been connected.
	 */
	connectedCallback () {
		super.connectedCallback();

		this.setupListeners();
		this.setupCompact();

		// Track page view (we only have this one page)
		gtag("config", gaMeasurementId, {
			"page_path": location.pathname,
			"page_location": location.href
		});
	}

	/**
	 * Sets up listeners.
	 */
	setupListeners () {

		// Each time the auth changes we want to re-render
		auth.addEventListener(AuthEvents.authStateChanged, () => {
			this.requestUpdate().then();
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

		// Close all descriptions when escape is pressed
		window.addEventListener("keydown", e => {
			switch (e.code) {
				case "Escape":
					dispatchCloseAllDescriptionsEvent();
					break;
			}
		});

		// Listen for CTA events
		window.addEventListener("click", trackLinkClicked);
	}

	/**
	 * Sets up the compact property.
	 */
	setupCompact () {

		// Check whether the compact param should be as default
		const params = new URLSearchParams(location.search);
		if (params.get("compact") != null) {
			setIsCompact(true);
		}

		// Set initial compact
		this.compact = window.innerWidth <= defaultCompactPx || loadIsCompact();
	}

	/**
	 * Signs in the user using Google.
	 */
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

	/**
	 * Signs out the user.
	 */
	signOut () {
		auth.signOut();
	}

	/**
	 * Toggles compact mode.
	 * @param e
	 */
	toggleCompact (e) {
		const compact = e.detail;
		this.compact = compact;
		setIsCompact(compact);

		gtag("event", "toggle_compact", {
			"event_category": "Engagement",
			"event_label": compact ? `Activate compact mode` : `Deactivate compact mode`
		});

		// Add the compact params to the URL
		const params = new URLSearchParams(location.search);
		if (compact) {
			params.set("compact", "true");
		} else {
			params.delete("compact");
		}

		const search = params.toString().replace(/=(true|false)$/gm, "");
		history.replaceState(null, "", search.length === 0 ? location.pathname : `${location.pathname}?${search}`);
	}

	/**
	 * Shares the website.
	 * @returns {Promise<void>}
	 */
	async share () {

		gtag("event", "open_share", {
			"event_category": "Engagement",
			"event_label": "Open share dialog"
		});

		const config = getShareConfig();
		try {
			await navigator.share(config);

		} catch (err) {

			// If the user cancelled the share we abort
			if (err.message.includes("cancellation")) {
				return;
			}

			try {
				// Open fallback share if possible
				const {openShare} = await import("./util/open-share.js");
				await openShare(config);

			} catch (err) {
				// As a last resort we just copy the link
				copyToClipboard(config.url);
				alert(`Link copied to clipboard.`);
			}
		}
	}

	/**
	 * Opens the help dialog.
	 * @returns {Promise<void>}
	 */
	async openHelp () {

		gtag("event", "open_help", {
			"event_category": "Engagement",
			"event_label": "Open help dialog"
		});

		const {openHelp} = await import("./util/open-help.js");
		await openHelp();
	}

	/**
	 * Renders the element.
	 */
	render () {
		const {signIn, signOut} = this;
		const user = auth.user;

		return html`
			<div id="toolbar-top">
				<div>
					<a id="github" href="https://github.com/andreasbm/web-skills" target="_blank" rel="noopener" aria-label="Open Github">
						<ws-icon-button .template="${githubIconTemplate}"></ws-icon-button>
					</a>
				</div>
				<div>
					<div id="toggle-compact">
						<ws-compact-switch @toggle="${this.toggleCompact}" ?checked="${this.compact}"></ws-compact-switch>
					</div>
					<button id="help-button" aria-label="Open help" tabindex="0" @click="${this.openHelp}">
						<ws-icon-button .template="${helpIconTeplate}" ></ws-icon-button>
					</button>
					<button id="share-button" aria-label="Share website" tabindex="0" @click="${this.share}">
						<ws-icon-button .template="${shareIconTeplate}"></ws-icon-button>
					</button>
				</div>
			</div>
			<div id="collections">
				${repeat(collections, (collection, i) => html`
					<ws-collection class="collection" index="${i + 1}" .collection="${collection}" ?compact="${this.compact}"></ws-collection>
				`)}
			</div>
			<div id="toolbar-bottom">
				${user != null ? html`
					<div id="sign-out">
						<ws-button @click="${signOut}">Sign out</ws-button>
						<div id="avatar">
							<img class="img" src="${user.photoURL}" />
							<span class="text">${user.displayName || user.email}</span>
						</div>
					</div>
				` : html`
					<div id="sign-in">
						<ws-button @click="${signIn}">Sign in with Google</ws-button>
					</div>
				`}
			</div>
			<ws-blur id="blur"></ws-blur>
		`;
	}
}

customElements.define("ws-app", App);