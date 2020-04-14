import {html} from "./../../web_modules/lit-element.js";
import {render} from "./../../web_modules/lit-html.js";
import {repeat} from "./../../web_modules/lit-html/directives/repeat.js";
import {SNACK_CONTAINER_ID} from "./../config.js";

/**
 * Shows a snackbar.
 * @returns {Promise<void>}
 */
export function showSnackbar (message, {buttons, timeout, wide, important} = {}) {
	return new Promise(async (res) => {
		await import("./../atoms/snackbar.js");

		// Ensure that we have a container
		let $container = document.querySelector(`#${SNACK_CONTAINER_ID}`);
		if ($container == null) {
			$container = document.createElement("div");
			$container.id = SNACK_CONTAINER_ID;
			document.body.appendChild($container);
		}

		// Remove all children
		if (important) {
			$container.innerHTML = ``;
		}

		// Create snack
		const $snack = document.createElement("div");
		$container.appendChild($snack);

		/**
		 * Clears the snack container and resolves.
		 */
		function clearContainer () {
			$snack.remove();
			res();
		}

		render(html`
			<ws-snackbar aria-live="assertive" aria-atomic="true" ?wide="${wide}">
				<span slot="text">${message}</span>
				${repeat(buttons || [], ([text, onClick]) => html`
					<ws-button slot="button" @click="${() => {
		onClick();
		clearContainer();
	}}">${text}</ws-button>
				`)}
			</ws-snackbar>
		`, $snack);

		// Set a timeout for when we clear it
		if (timeout != null) {
			setTimeout(() => {
				clearContainer();
			}, timeout)
		}
	});
}