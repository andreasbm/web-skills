import {Confetti} from "../atoms/confetti.js";
import {lazyImgIntersectionObserverOptions} from "./../config.js";
import {measureCopyLink, measureLinkClicked} from "./measure.js";

const AUDIO_CACHE = new Map();

/**
 * Turns a skill name into a path.
 * @param {*} name
 */
export function pathify (name) {
	return name
		.replace(/[\s\/]/gm, `-`)
		.replace(/['\.]/gm, ``)
		.replace(/[&]/gm, `and`)
		.toLowerCase();
}

/**
 * Constructs the image path prefix for a skill.
 * @param {*} collection
 * @param {*} area
 * @param {*} skill
 */
export function constructImagePathPrefix (collection, area, skill) {
	const paths = [
		"assets",
		collection.name,
		area.name,
		skill.name
	].filter(name => name != null).map(pathify);
	return `${paths.join("/")}.svg`;
}

/**
 * Returns the skill id for a skill.
 * @param {*} collection
 * @param {*} [area]
 * @param {*} [skill]
 */
export function getId (collection, area, skill) {
	return [
		collection != null ? collection.name : null,
		area != null ? area.name : null,
		skill != null ? skill.name : null,
	].filter(name => name != null).map(pathify).join("-");
}

/**
 * Returns the search query for a skill.
 * @param {*} collection
 * @param {*} area
 * @param {*} skill
 */
export function getSkillSearchQuery (collection, area, skill) {
	return [
		collection.name,
		area.name,
		skill.name
	].filter(name => name != null).join(" ");
}

/**
 * Returns a random integer between min (include) and max (include)
 * https://stackoverflow.com/a/29246176
 * @param {*} from
 * @param {*} to
 */
export function randomNumberInRange (from, to) {
	return Math.floor(Math.random() * (to - from + 1)) + from;
}

/**
 * Returns the current confetti count.
 */
export function currentConfettiCount () {
	return Array.from(document.querySelectorAll("ws-confetti")).length;
}

/**
 * Sprays confetti oe time.
 */
export function sprayConfettiOnce () {
	const $confetti = new Confetti();
	$confetti.once = true;
	$confetti.overlay = true;
	$confetti.maxamount = randomNumberInRange(50, 150);

	$confetti.addEventListener("stopped", () => {
		$confetti.remove();
	});

	document.body.appendChild($confetti);
	requestAnimationFrame(() => {
		$confetti.start();
	});
}

/**
 * Play audio with a cache.
 * @param {*} src
 * @param {*} volume
 */
export function playAudio (src, volume = 1) {
	const $audio = AUDIO_CACHE.get(src) || document.createElement("audio");
	$audio.src = src;
	$audio.volume = volume;

	// Reset
	$audio.pause();
	$audio.currentTime = 0;

	$audio.play();

	AUDIO_CACHE.set(src, $audio);
}

/**
 * Attach an intersection observer that changes the data-src attribute to src on img element.
 * @param {*} $elem
 */
export function attachLazyImgIntersectionObserver ($elem) {
	const callback = (entries, observer) => {
		entries.forEach(entry => {
			const {isIntersecting, target} = entry;
			if (isIntersecting) {
				const dataSrc = target.getAttribute("data-src");
				target.onload = () => {
					requestAnimationFrame(() => {
						target.setAttribute("loaded", "");
					});
				};

				target.src = dataSrc;
				observer.unobserve(target);
			}
		});
	};

	const observer = new IntersectionObserver(callback, lazyImgIntersectionObserverOptions);
	observer.observe($elem);
}

/**
 * Determines whether is compact has been stored in localstorage.
 * @returns {boolean}
 */
export function loadIsCompact () {
	return localStorage.getItem("compact") != null;
}

/**
 * Set is compact in local storage.
 * @param compact
 */
export function setIsCompact (compact) {
	if (compact) {
		localStorage.setItem("compact", "");

	} else {
		localStorage.removeItem("compact");
	}
}

/**
 * Dispatches a close all event.
 */
export function dispatchCloseAllDescriptionsEvent () {
	window.dispatchEvent(new CustomEvent("closeAllDescriptions"));
}

/**
 * Listens for the close all event.
 * @param cb
 */
export function listenForCloseAllDescriptionsEvent (cb) {
	window.addEventListener("closeAllDescriptions", cb);
}

/**
 * Measures a link click.
 * @param e
 */
export function measureLinkClick (e) {

	// Find the target by using the composed path to get the element through the shadow boundaries.
	const $anchor = ("composedPath" in e) ? e.composedPath().find($elem => $elem instanceof HTMLAnchorElement) : e.target;

	// Make sure the click is an anchor
	if (!($anchor instanceof HTMLAnchorElement)) {
		return;
	}

	const name = $anchor.ariaLabel || $anchor.innerText || $anchor.href;
	measureLinkClicked(name);
}

/**
 * Copies text to clipboard.
 * @param text
 */
export function copyToClipboard (text) {

	// Measure the event
	measureCopyLink(text);

	// Copy link
	const $textarea = document.createElement("textarea");
	$textarea.value = text;
	document.body.appendChild($textarea);
	$textarea.select();
	document.execCommand("copy");
	document.body.removeChild($textarea);

	// Tell the user that the link was copied
	alert(`Link copied to clipboard.`);
}