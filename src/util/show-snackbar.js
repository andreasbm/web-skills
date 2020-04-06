import {html} from "./../../web_modules/lit-element.js";
import {render} from "./../../web_modules/lit-html.js";
import {repeat} from "./../../web_modules/lit-html/directives/repeat.js";

/**
 * Shows a snackbar.
 * @returns {Promise<void>}
 */
export function showSnackbar (message, {buttons, timeout} = {}) {
	return new Promise(async (res) => {
		await import("./../atoms/snackbar.js");

		// Ensure that we have a container
		let $container = document.querySelector("#update-container");
		if ($container == null) {
			$container = document.createElement("div");
			document.body.appendChild($container);
		}

		/**
		 * Clears the snack container and resolves.
		 */
		function clearContainer () {
			$container.innerHTML = ``;
			res();
		}

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
					<span>${message}</span>
					${repeat(buttons || [], ([text, onClick]) => html`
						<ws-button slot="button" @click="${() => {
			onClick();
			clearContainer();
		}}">${text}</ws-button>
					`)}
				</ws-snackbar>
			</div>
		`, $container);

		// Set a timeout for when we clear it
		if (timeout != null) {
			setTimeout(() => {
				clearContainer();
			}, timeout)
		}
	});
}