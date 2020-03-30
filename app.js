import "./atoms/blur.js";
import "./atoms/button.js";
import "./atoms/compact-switch.js";
import "./atoms/icon.js";
import {defaultCompactPx, getShareConfig} from "./config.js";
import {collections} from "./data.js";
import {auth, AuthEvents} from "./firebase/auth.js";
import {initFirebase} from "./firebase/init-firebase.js";
import "./molecules/collection.js";
import {sharedStyles} from "./styles/shared.js";
import {githubIconTemplate, helpIconTeplate, shareIconTeplate} from "./util/icons.js";
import {
	measureException,
	measureOpenHelp,
	measureOpenShare,
	measurePageView,
	measureShareLink,
	measureToggleCompact,
	measureUserTiming
} from "./util/measure.js";
import {
	copyToClipboard,
	dispatchCloseAllDescriptionsEvent,
	loadIsCompact,
	measureLinkClick,
	setIsCompact
} from "./util/util.js";
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
				
				#header {
					padding: var(--spacing-m) var(--spacing-l);
				}
				
				#collections {
					padding: 0 var(--spacing-xxxl);
					display: flex;
    			    flex-direction: column;
    			    align-items: flex-start;
				}
				
				#footer {
					padding: var(--spacing-l) var(--spacing-xxxl);
				}

				.collection:not(:last-child) {
					margin: 0 0 var(--spacing-xxl);
				}
				
				#header, #footer {
					justify-content: space-between;
				}
				
				#header, #header > div, #footer, #footer > div{
					display: flex;
					align-items: center;
				}
				
				#header > div > :not(:last-child),
				#footer > div > :not(:last-child) {
					margin: 0 var(--spacing-l) 0 0;
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
					border: 2px solid currentColor;
					margin: 0 var(--spacing-m) 0 0;
				}

				:host([compact]) #collections {
					padding: 0 var(--spacing-l) var(--spacing-s);
				}
				
				:host([compact]) #footer {
					padding: var(--spacing-xxl) var(--spacing-l) var(--spacing-l);
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
				
				:host(:not([compact])) #header {
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
				
				a {
					color: var(--foreground);
					text-decoration: none;
				}
				
				@media (max-width: 800px) {
					#toggle-compact {
						display: none;
					}
					
					#footer > div {
						flex-wrap: wrap;
						flex-grow: 1;
						justify-content: stretch;
						align-items: center;
					}
					
					#footer > div > * {
						padding: var(--spacing-m);
						width: 100%;
						border: 2px solid currentColor;
						margin: 0 0 var(--spacing-m) !important;
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

		// Measure page view (we only have this one page)
		measurePageView();

		// Measure the performance
		measureUserTiming(`App was connected`, `initial_load`, performance.now());
	}

	/**
	 * Sets up listeners.
	 */
	setupListeners () {

		// Each time the auth changes we want to re-render
		auth.addEventListener(AuthEvents.authStateChanged, () => {
			this.requestUpdate().then();
		});

		// Measure all exceptions
		window.addEventListener("error", e => {
			const {message, filename, lineno, colno, error} = e;
			const description = `${error.name} - ${message} (${filename}:[${lineno}, ${colno}])`;
			measureException(description);
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
		window.addEventListener("click", measureLinkClick);
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
		measureToggleCompact(compact);

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

		measureOpenShare();

		const config = getShareConfig();
		try {
			await navigator.share(config);
			measureShareLink(`Native Share`);

		} catch (err) {

			// If the user cancelled the share we abort
			// This was the best cross-browser solution..
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
			}
		}
	}

	/**
	 * Opens the help dialog.
	 * @returns {Promise<void>}
	 */
	async openHelp () {
		measureOpenHelp();
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
			<header id="header">
				<div>
					<a href="https://github.com/andreasbm/web-skills" target="_blank" rel="noopener" aria-label="Open Github">
						<ws-icon hoverable .template="${githubIconTemplate}"></ws-icon>
					</a>
					${user != null ? html`
						<div id="avatar">
							<img class="img" src="${user.photoURL}" />
							<span class="text">${user.displayName || user.email}</span>
						</div>
					` : undefined}
				</div>
				<div>
					<div id="toggle-compact">
						<ws-compact-switch @toggle="${this.toggleCompact}" ?checked="${this.compact}"></ws-compact-switch>
					</div>
					<ws-button aria-label="Open help" @click="${this.openHelp}">
						<ws-icon .template="${helpIconTeplate}" ></ws-icon>
					</ws-button>
					<ws-button aria-label="Share website" @click="${this.share}">
						<ws-icon .template="${shareIconTeplate}"></ws-icon>
					</ws-button>
				</div>
			</header>
			<main id="collections">
				${repeat(collections, (collection, i) => html`
					<ws-collection class="collection" index="${i + 1}" .collection="${collection}" ?compact="${this.compact}"></ws-collection>
				`)}
			</main>
			<footer id="footer">
				<div>
					${user != null ? html`
						<ws-button @click="${signOut}">🔓 Sign out</ws-button>
					` : html`
						<ws-button @click="${signIn}">🔒 Sign in with Google</ws-button>
					`}
					<a href="https://github.com/andreasbm/web-skills/stargazers" target="_blank" aria-label="Become a stargazer">
						<ws-button>⭐️ Become a stargazer</ws-button>
					</a>
					<a href="https://twitter.com/AndreasMehlsen" target="_blank" aria-label="Find on Twitter">
						<ws-button>🐦 Find me on Twitter</ws-button>
					</a>
					<a href="https://www.buymeacoffee.com/AndreasMehlsen" target="_blank" aria-label="Buy coffee">
						<ws-button>☕️ Buy me a cup of coffee</ws-button>
					</a>
				</div>
			</footer>
			<ws-blur id="blur"></ws-blur>
		`;
	}
}

customElements.define("ws-app", App);