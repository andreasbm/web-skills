import {html} from "./../../web_modules/lit-element.js";
import {render} from "./../../web_modules/lit-html.js";

/**
 * Opens an update snackbar.
 * @returns {Promise<void>}
 */
export async function openUpdate () {

	/**
	 * Reloads the page and skips the waiting of the new service worker.
	 */
	async function reload () {
		const reg = await navigator.serviceWorker.getRegistration();
		if (reg == null ||reg.waiting == null) return;
		reg.waiting.postMessage({action: "skipWaiting"});
	}

	await import("./../atoms/snackbar.js");
	const $container = document.createElement("div");
	render(html`
		<style>
			#update-container {
				position: fixed;
				bottom: 0;
				left: 0;
				width: 100%;
				padding: var(--spacing-m);
				z-index: 123456789;
			}
		</style>
		<div id="update-container">
			<ws-snackbar id="update" aria-live="assertive" aria-atomic="true">
				<span>Update available</span>
				<ws-button slot="button" @click="${() => reload()}">Reload</ws-button>
				<ws-button slot="button" @click="${() => $container.innerHTML = ``}">Dismiss</ws-button>
			</ws-snackbar>
		</div>
	`, $container);

	document.body.appendChild($container);
}