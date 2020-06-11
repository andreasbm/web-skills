import {css, html, LitElement} from "./../web_modules/lit-element.js";
import {repeat} from "./../web_modules/lit-html/directives/repeat.js";
import "./atoms/blur.js";
import "./atoms/button.js";
import "./atoms/compact-switch.js";
import "./atoms/icon.js";
import {ALLOW_NATIVE_SHARE, DEFAULT_COMPACT_PX, getShareConfig} from "./config.js";
import {collections} from "./data.js";
import {auth, AuthEvents} from "./firebase/auth.js";
import "./molecules/collection.js";
import {sharedStyles} from "./styles/shared.js";
import {
	andreasIconTemplate,
	coffeeIconTemplate,
	githubIconTemplate,
	helpIconTemplate,
	shareIconTemplate
} from "./util/icons.js";
import {
	measureDimensions,
	measureException,
	measureInstallEvent,
	measureOpenHelp,
	measureOpenShare,
	measurePageView,
	measureShareLink,
	measureToggleCompact,
	measureUserTiming
} from "./util/measure.js";
import {
	copyToClipboard,
	currentSnackCount,
	dispatchCloseDescriptionEvent,
	getFirstVisit,
	getId,
	isDialogVisible,
	loadIsCompact,
	onClickLink,
	setFirstVisitDate,
	setIsCompact
} from "./util/util.js";

/**
 * Deferred init Firebase.
 * @returns {Promise<void>}
 */
async function deferredInitFirebase () {
	const {initFirebase} = await import("./firebase/init-firebase.js");
	await initFirebase();
}

/**
 * The main entry for the application.
 */
export class App extends LitElement {

	static get properties () {
		return {
			compact: {
				type: Boolean,
				reflect: true
			},
			dragging: {
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
				
				:host(:not([compact])) {
					cursor: grab;
				}
				
				:host(:not([compact])[dragging]) {
					cursor: grabbing;
					will-change: scroll-position;
					user-select: none;
				}
				
				#header {
					padding: var(--spacing-m) var(--spacing-l);
				}
				
				#collections {
					padding: var(--spacing-xxxl) var(--spacing-xxxl) 0;
					display: flex;
    			    flex-direction: column;
    			    align-items: flex-start;
    			    min-width: min-content;
				}
				
				#footer {
					padding: var(--spacing-l) var(--spacing-xxxl);
				}

				.collection:not(:last-child) {
					margin: 0 0 var(--spacing-xxl);
				}
				
				#header, #footer, #skip-navigation {
					justify-content: space-between;
				}
				
				#header, #header > div, #footer, #footer > div, #skip-navigation, #skip-navigation > div {
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
				
				#toggle-compact {
					display: flex;
					align-content: center;
				}
				
				a {
					color: var(--foreground);
					text-decoration: none;
				}
				
				kbd {
					font-family: inherit;
					background: var(--background);
					color: var(--foreground);
					padding: 0 var(--spacing-xs);
					border-radius: var(--border-radius-s);
				}
				
				#skip-navigation {
					position: fixed;
					width: 100%;
					opacity: 0;
					padding: var(--spacing-m);
					background: var(--foreground);
					color: var(--background);
					top: -9999px;
					left: -9999px;
					z-index: -12345;
					display: flex;
				}
				
				#skip-navigation:focus-within {
					outline: var(--focus-outline);
					z-index: 123456789;
					opacity: 1;
					left: 0;
					top: 0;
				}
				
				#coffee {
					position: relative;
				}
				
				#steam {
				  width: 80%;
				  position: absolute;
				  width: 40%;
				  bottom: 100%;
				  left: 50%;
				  animation: 5s linear steaming infinite;
				  filter: blur(3px);
				  color: #FFF;
				}
				
				@keyframes steaming {
				  0% {
				    opacity: 0;
					transform: translate(-50%, 100%) rotate(40deg);
				  }
				  10% {
				    opacity: 1;
				  }
				  70% {
				    opacity: 1;
				  }
				  100% {
				    opacity: 0;
					transform: translate(-50%, -10%) rotate(-10deg);
				  }
				}
				
				@media (max-width: 800px) {
					#toggle-compact {
						display: none;
					}
				}
				
				@media (max-width: 1000px) {
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
				
				@media (any-pointer: coarse) {
					#skip-navigation {
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
		this.setupDragging();

		measureDimensions();
		measurePageView();
		measureUserTiming(`App was connected`, `initial_load`, performance.now());
	}

	/**
	 * Hook up first updated.
	 * @param props
	 */
	firstUpdated (props) {
		super.firstUpdated(props);

		// Initialize Firebase if the user is logged in
		if (auth.isAuthenticated) {
			deferredInitFirebase().then();
		}

		// Delay some of the work
		setTimeout(() => {
			this.setupServiceWorker().then();
			this.hashChanged();
			setTimeout(() => {
				if (getFirstVisit() == null && currentSnackCount() === 0) {
					this.showHelpToast().then();
					setFirstVisitDate(new Date());
				}
			}, 1000);
		}, 1000);

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

		window.addEventListener("selectstart", e => {
			if (this.dragging) {
				e.preventDefault();
			}
		});

		// Close all descriptions when escape is pressed
		window.addEventListener("keydown", e => {
			switch (e.code) {
				case "Escape":
					dispatchCloseDescriptionEvent();
					break;
				case "Digit7":
					if (e.shiftKey && e.altKey) {
						this.focusNavigationSelect();
					}
					break;
			}
		});

		// Listen for CTA events
		window.addEventListener("click", onClickLink);

		// Listen for install event
		window.addEventListener("appinstalled", e => {
			measureInstallEvent();
		});

		// Listen for network changes
		window.addEventListener("online", this.networkChanged.bind(this));
		window.addEventListener("offline", this.networkChanged.bind(this));

		// Listen for hash change
		window.addEventListener("hashchange", this.hashChanged.bind(this));
	}

	/**
	 * Show message when network status changes.
	 * @returns {Promise<void>}
	 */
	async networkChanged () {
		const {showSnackbar} = await import("./util/show-snackbar.js");
		const message = navigator.onLine ? `You are online again` : `You lost connection to the internet`;
		showSnackbar(message, {
			timeout: navigator.onLine ? 4000 : null,
			important: true,
			buttons: [
				["Dismiss", () => ({})]
			]
		});
	}

	/**
	 * Handles that the hash changed.
	 */
	hashChanged () {
		if (location.hash.length > 0) {
			this.focusCollection(location.hash.slice(1));
		}
	}

	/**
	 * Setup dragging.
	 */
	setupDragging () {
		let initialPosition = null;
		let delta = null;
		let initialScroll = null;

		// Listen for drag start
		window.addEventListener("mousedown", e => {
			if (this.compact || isDialogVisible()) {
				return;
			}

			initialScroll = {
				x: window.scrollX,
				y: window.scrollY
			};

			initialPosition = {
				x: e.clientX,
				y: e.clientY
			};

			this.dragging = true;

		}, {passive: true});

		// Listen for drag end
		window.addEventListener("mouseup", e => {
			if (this.compact || isDialogVisible()) {
				return;
			}

			this.dragging = false;
			initialPosition = null;
			initialScroll = null;
			delta = null;
		}, {passive: true});

		// Listen for the dragging
		window.addEventListener("mousemove", e => {
			if (this.dragging
				&& !this.compact
				&& initialPosition != null
				&& !isDialogVisible()) {
				delta = {
					x: initialPosition.x - e.clientX,
					y: initialPosition.y - e.clientY
				};

				const scrollX = initialScroll.x + delta.x;
				const scrollY = initialScroll.y + delta.y;

				requestAnimationFrame(() => {
					window.scrollTo(scrollX, scrollY);

					// Deselect everything
					window.getSelection().removeAllRanges()
				});
			}
		}, {passive: true});
	}

	/**
	 * Shows a help toast.
	 * @returns {Promise<void>}
	 */
	async showHelpToast () {
		const {showSnackbar} = await import("./util/show-snackbar.js");
		showSnackbar(`Web Skills is an overview of useful skills to learn as a web developer`, {
			timeout: 1000 * 20,
			wide: true,
			buttons: [
				["Read More", () => this.openHelp()],
				["Dismiss", () => ({})]
			]
		});
	}

	/**
	 * Sets up the service worker.
	 * @returns {Promise<void>}
	 */
	async setupServiceWorker () {
		if (!("serviceWorker" in navigator)) return;

		// Register the service worker
		const reg = await navigator.serviceWorker.register(`sw.js`, {updateViaCache: "none"});
		if (reg == null) return;

		// Handle cases where the updatefound event was missed
		if (reg.waiting != null) {
			this.showUpdateToast();
		}

		// Reload when we get a new service worker and the user has clicked the "reload" button.
		const hasController = !!navigator.serviceWorker.controller;
		let isRefreshing = false;
		navigator.serviceWorker.addEventListener("controllerchange", async () => {
			if (!hasController && !isRefreshing) return;
			isRefreshing = true;
			location.reload();
		});

		// Show reload button when there's a new update
		reg.addEventListener("updatefound", () => {
			const newWorker = reg.installing;
			if (newWorker == null) return;
			newWorker.addEventListener("statechange", async () => {
				switch (newWorker.state) {
					case "installed":
						if (hasController) {
							this.showUpdateToast();
						}
						break;
					default:
						break;
				}
			});
		});

		// Check for update
		reg.update().then();

		// Check for updates every 10 minutes
		setInterval(() => {
			reg.update();
		}, 1000 * 60 * 10);
	};

	/**
	 * Shows an update toast.
	 * @returns {Promise<void>}
	 */
	async showUpdateToast () {
		const {showSnackbar} = await import("./util/show-snackbar.js");
		showSnackbar(`Update available`, {
			important: true,
			buttons: [
				["Reload", async () => {
					const reg = await navigator.serviceWorker.getRegistration();
					if (reg == null || reg.waiting == null) return;
					reg.waiting.postMessage({action: "skipWaiting"});
				}],
				["Dismiss", () => ({})]
			]
		});
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
		this.compact = window.innerWidth <= DEFAULT_COMPACT_PX || loadIsCompact();
	}

	/**
	 * Signs in the user using Google.
	 */
	async signIn () {
		try {
			await deferredInitFirebase();
			await auth.signInWithGoogle();

		} catch (err) {
			const {openDialog} = await import("./../web_modules/web-dialog.js");
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
	async signOut () {
		await deferredInitFirebase();
		await auth.signOut();
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

		// When navigator.share and navigator.canShare works without issues in the future we don't need this check.
		if (ALLOW_NATIVE_SHARE) {
			try {
				await navigator.share(config);
				measureShareLink(`Native Share`);
				return;

			} catch (err) {

				// If the user cancelled the share we abort. This was the best cross-browser solution.
				const errorMessage = (err.message || err.toString()).toLowerCase();
				if (errorMessage.includes("cancellation") || errorMessage.includes("share canceled") || ("canShare" in navigator && navigator.canShare())) {
					return;
				}
			}
		}

		// Use the custom share
		try {
			// Open fallback share if possible
			const {openShare} = await import("./util/open-share.js");
			await openShare(config);

		} catch (err) {
			// As a last resort we just copy the link
			await copyToClipboard(config.url);
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
	 * Selects a focus jump.
	 * @param name
	 */
	focusCollection (name) {
		const $anchor = this.shadowRoot.querySelector(`.focus-anchor[data-collection="${getId({name})}"]`);
		if ($anchor != null) {
			$anchor.focus();
			$anchor.scrollIntoView({block: "start"});
		}
	}

	/**
	 * Focuses the navigation select.
	 */
	focusNavigationSelect () {
		const $navigationSelection = this.shadowRoot.querySelector("#navigation-select");
		$navigationSelection.focus();
	}

	/**
	 * Renders the element.
	 */
	render () {
		const {signIn, signOut} = this;
		const user = auth.user;

		return html`
			<div id="skip-navigation">
				<div>
					<span>Jump to&nbsp;</span>
					<select id="navigation-select" @input="${e => this.focusCollection(e.target.value)}" aria-label="Navigation Assistant" aria-keyshortcuts="Alt + /">
						<option disabled>Select a section on the page</option>
						${repeat(collections, ({name}) => html`
							<option value="${name}">${name}</option>
						`)}
					</select>
				</div>
				<div>
					<span>Press <kbd>alt</kbd> + <kbd>/</kbd> to open this menu</span>
				</div>
			</div>
			<header id="header">
				<div>
					<a href="https://github.com/andreasbm/web-skills" target="_blank" rel="noopener" aria-label="Open Github" title="Open Github">
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
					<div id="toggle-compact" title="${this.compact ? `Disable` : `Enable`} compact layout">
						<ws-compact-switch @toggle="${this.toggleCompact}" ?checked="${this.compact}"></ws-compact-switch>
					</div>
					<ws-button aria-label="Open help" @click="${this.openHelp}" title="Open help">
						<ws-icon .template="${helpIconTemplate}"></ws-icon>
					</ws-button>
					<ws-button aria-label="Share website" @click="${this.share}" title="Open share menu">
						<ws-icon .template="${shareIconTemplate}"></ws-icon>
					</ws-button>
					<a aria-label="Open author" href="https://andreasbm.github.io" target="_blank" rel="noopener" title="Say hi">
						<ws-icon hoverable .template="${andreasIconTemplate}" ></ws-icon>
					</a>
					<a id="coffee" aria-label="Buy coffee" href="https://www.buymeacoffee.com/AndreasMehlsen" rel="noopener" title="Support me <3" target="_blank">
						<svg id="steam" viewBox="0 0 250 327" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" stroke-width="41"><path d="M119.563 265.584c-27-20.344-43.822-41.277-50.465-62.8-6.643-21.522-7.9-45.48-3.771-71.875M170.152 189.86c12.91-24.089 19.139-47.393 18.685-69.913-.453-22.52-5.297-42.502-14.53-59.947"/></g></svg>
						<ws-icon hoverable .template="${coffeeIconTemplate}"></ws-icon>
					</a>
				</div>
			</header>
			<main id="collections">
				${repeat(collections, getId, (collection, i) => html`
					<span class="focus-anchor" data-collection="${getId(collection)}" tabindex="0"></span>
					<ws-collection class="collection" index="${i}" .collection="${collection}" ?compact="${this.compact}"></ws-collection>
				`)}
			</main>
			<footer id="footer">
				<div>
					${user != null ? html`
						<ws-button @click="${signOut}">🔓 Sign out</ws-button>
					` : html`
						<ws-button @click="${signIn}">🔒 Sign in with Google</ws-button>
					`}
					<a href="https://github.com/andreasbm/web-skills/stargazers" target="_blank" aria-label="Become a stargazer" rel="noopener">
						<ws-button>⭐️ Become a stargazer</ws-button>
					</a>
					<a href="https://twitter.com/AndreasMehlsen" target="_blank" aria-label="Open Twitter" rel="noopener">
						<ws-button>🐦 Say hi on Twitter</ws-button>
					</a>
					<a href="https://www.buymeacoffee.com/AndreasMehlsen" target="_blank" aria-label="Buy coffee" rel="noopener">
						<ws-button>☕️ Support me with a cup of coffee</ws-button>
					</a>
				</div>
			</footer>
			<ws-blur id="blur"></ws-blur>
		`;
	}
}

customElements.define("ws-app", App);