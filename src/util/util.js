import {
	CLOSE_DESCRIPTION_EVENT,
	COMPACT_STORAGE_KEY,
	FIRST_VISIT_DATE_STORAGE_KEY,
	LAZY_IMG_INTERSECTION_OPTIONS,
	SNACK_CONTAINER_ID
} from "../config.js";
import {measureCopyLink, measureLinkClicked} from "./measure.js";

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
 * Attach an intersection observer that changes the data-src attribute to src on img element.
 * @param {*} $elem
 */
export function attachLazyImgIntersectionObserver ($elem) {

	const didIntersect = (target) => {
		const dataSrc = target.getAttribute("data-src");
		target.onload = () => {
			requestAnimationFrame(() => {
				target.setAttribute("loaded", "");
			});
		};

		target.src = dataSrc;
	};

	const callback = (entries, observer) => {
		entries.forEach(entry => {
			const {isIntersecting, target} = entry;
			if (isIntersecting) {
				didIntersect(target);
				observer.unobserve(target);
			}
		});
	};

	if ("IntersectionObserver" in window) {
		const observer = new IntersectionObserver(callback, LAZY_IMG_INTERSECTION_OPTIONS);
		observer.observe($elem);

	} else {
		didIntersect($elem);
	}
}

/**
 * Determines whether is compact has been stored in localstorage.
 * @returns {boolean}
 */
export function loadIsCompact () {
	return localStorage.getItem(COMPACT_STORAGE_KEY) != null;
}

/**
 * Set is compact in local storage.
 * @param compact
 */
export function setIsCompact (compact) {
	compact ? localStorage.setItem(COMPACT_STORAGE_KEY, "") : localStorage.removeItem(COMPACT_STORAGE_KEY);
}

/**
 * Dispatches a close all event.
 */
export function dispatchCloseDescriptionEvent () {
	window.dispatchEvent(new CustomEvent(CLOSE_DESCRIPTION_EVENT));
}

/**
 * Copies text to clipboard.
 * @param text
 */
export async function copyToClipboard (text) {

	// Measure the event
	measureCopyLink(text);

	// Copy link
	const $textarea = document.createElement("textarea");
	$textarea.value = text;
	$textarea.style.position = `fixed`;
	$textarea.style.opacity = `0`;
	document.body.appendChild($textarea);
	$textarea.select();
	document.execCommand("copy");
	document.body.removeChild($textarea);

	// Tell the user that the link was copied
	const {showSnackbar} = await import("./show-snackbar.js");
	showSnackbar(`Link copied to clipboard.`, {timeout: 2000});
}

/**
 * Measures a link click.
 * @param e
 */
export function onClickLink (e) {

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
 * Returns the origin of the url.
 * @param url
 * @returns {string}
 */
export function getURLOrigin (url) {
	try {
		return (new URL(url)).origin;
	} catch (err) {
		return url;
	}
}

/**
 * Returns whether this is the first visit.
 * @returns {Date | null}
 */
export function getFirstVisit () {
	const str = localStorage.getItem(FIRST_VISIT_DATE_STORAGE_KEY);
	return str != null ? new Date(str) : null;
}

/**
 * Sets first visit date.
 * @param date
 */
export function setFirstVisitDate (date) {
	localStorage.setItem(FIRST_VISIT_DATE_STORAGE_KEY, date);
}

/**
 * Returns the snack count.
 * @returns {number}
 */
export function currentSnackCount () {
	const $container = document.querySelector(`#${SNACK_CONTAINER_ID}`);
	return $container == null ? 0 : $container.children.length;
}

/**
 * Returns whether the dialog is visible.
 * @returns {boolean}
 */
export function isDialogVisible () {
	return document.documentElement.hasAttribute("data-dialog-count") && document.documentElement.getAttribute("data-dialog-count") !== "0";
}
