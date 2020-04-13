import {html, render} from "../../web_modules/lit-html.js";
import {repeat} from "../../web_modules/lit-html/directives/repeat.js";
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
function renderShareOption ([name, share, id]) {
	return html`
		<button class="option" @click="${() => {
		measureShareLink(name);
		share();
	}}">
			<img class="img" src="social/${(id || name).toLowerCase().replace(" ", "")}.svg" />
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
	const {openDialog} = await import("../../web_modules/web-dialog.js");
	const safeTitle = encodeURIComponent(title);
	const safeText = encodeURIComponent(text);
	const safeUrl = encodeURIComponent(url);
	const img = `https://andreasbm.github.io/web-skills/www/og-image.jpg`;
	const safeImg = encodeURIComponent(img);

	const shareOptions = [
		["Copy", () => copyToClipboard(url)],
		["WhatsApp", () => openShareUrl(`https://wa.me/?text=${encodeURIComponent(`${title}. ${text}. Find it here ${url}`)}`)],
		["Facebook", () => openShareUrl(`https://www.facebook.com/sharer/sharer.php?u=${safeUrl}`)],
		["Twitter", () => openShareUrl(`https://twitter.com/intent/tweet?&url=${safeUrl}&text=${safeText}`)],
		["LinkedIn", () => openShareUrl(`https://www.linkedin.com/shareArticle?mini=true&url=${safeUrl}&title=${safeTitle}&summary=${safeText}`)],
		["Reddit", () => openShareUrl(`https://www.reddit.com/submit?url=${safeUrl}&title=${safeText}`)],
		["Email", () => openShareUrl(`mailto:?subject=${safeTitle}&body=${encodeURIComponent(`${text}. Find it here ${url}`)}`)],
		["Hacker News", () => openShareUrl(`https://news.ycombinator.com/submitlink?u=${safeUrl}&t=${safeText}`)],
		["Blogger", () => openShareUrl(`https://www.blogger.com/blog-this.g?n=${safeTitle}&b=${encodeURIComponent(`${text}. Find it <a href="${url}">here</a>.<br/><br/><img width="400" src="${img}" />`)}`)],
		["Tumblr", () => openShareUrl(`https://www.tumblr.com/widgets/share/tool/preview?url=${safeUrl}`)],
		["Pinterest", () => openShareUrl(`https://www.pinterest.dk/pin/create/button/?url=${safeUrl}&description=${safeText}&media=${safeImg}`)],
		["ВКонтакте", () => openShareUrl(`https://vk.com/share.php?url=${safeUrl}&title=${safeTitle}&description=${safeText}&image=${safeImg}`), "vk"],
		["Одноклассники", () => openShareUrl(`https://connect.ok.ru/offer?url=${safeUrl}&title=${safeTitle}&imageUrl=${safeImg}`), "ok"],
		["Mix", () => openShareUrl(`https://mix.com/add?url=${safeUrl}`)]
	];

	// https://www.pinterest.dk/pin/create/button/?url=https://andreasbm.github.io/web-skills&description=A%20visual%20overview%20blah%20blah&media=https://andreasbm.github.io/web-skills/www/og-image.jpg

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