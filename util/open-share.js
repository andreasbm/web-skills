import {html, render} from "./../web_modules/lit-html.js";
import {repeat} from "./../web_modules/lit-html/directives/repeat.js";
import {measureShareLink} from "./measure.js";
import {copyToClipboard} from "./util.js";

/**
 * Opens a share url.
 * @param url
 */
function openShareUrl (url) {
	window.open(url, `_blank`);
}

/**
 * Renders the share options.
 * @param name
 * @param share
 * @returns {f}
 */
function renderShareOption ([name, share]) {
	return html`
		<button class="option" @click="${() => {
		measureShareLink(name);
		share();
	}}">
			<img class="img" src="social/${name.toLowerCase().replace(" ", "")}.svg" />
			<span class="text">${name}</span>
		</button>
	`;
}

/**
 * Opens custom share dialog.
 * @param title
 * @param text
 * @param url
 * @returns {Promise<void>}
 */
export async function openShare ({title, text, url}) {
	const {openDialog} = await import("./../web_modules/web-dialog.js");

	const shareOptions = [
		["Twitter", () => openShareUrl(`https://twitter.com/intent/tweet?&url=${encodeURIComponent(url)}&text=${text}`)],
		["LinkedIn", () => openShareUrl(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(text)}`)],
		["Reddit", () => openShareUrl(`https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`)],
		["Facebook", () => openShareUrl(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`)],
		["Hacker News", () => openShareUrl(`https://news.ycombinator.com/submitlink?u=${encodeURIComponent(url)}&t=${encodeURIComponent(title)}`)],
		["WhatsApp", () => openShareUrl(`https://wa.me/?text=${encodeURIComponent(`${title}. ${text}. Find it here ${url}.`)}`)],
		["Email", () => openShareUrl(`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${text}. Find it here ${url}.`)}`)],
		["Copy", () => copyToClipboard(url)],
	];

	const {$dialog, resolver} = openDialog({
		center: true,
		$content: $dialog => render(html`
			<style>
				* {
					box-sizing: border-box;
				}
				
				#options {
					display: grid;
					grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
					grid-gap: var(--spacing-m);
				}
				
				.option {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					padding: var(--spacing-m);
					cursor: pointer;
					border: none;
					background: transparent;
					opacity: 1;
					transition: 120ms ease opacity;
				}
				
				.option:hover {
					opacity: 0.8;
				}
				
				.option .img {
					width: 4rem;
					height: 4rem;
					margin: 0 0 var(--spacing-s);
				}
				
				.option .text {
					
				}
			</style>
			
			<div tabindex="0"></div>
			<div id="options">
				${repeat(shareOptions, renderShareOption)}
			</div>

		`, $dialog)
	});

	// Flip the colors
	$dialog.style.setProperty(`--dialog-bg`, `var(--foreground)`);
	$dialog.style.setProperty(`--dialog-color`, `var(--background)`);

	return resolver;
}