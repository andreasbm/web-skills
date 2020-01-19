import { Confetti } from "../atoms/confetti.js";

const AUDIO_CACHE = new Map();
const lazyImgIntersectionObserverOptions = {
	rootMargin: '200px',
	// [0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09]
	threshold: Array(10).fill(0).map((_, i) => (i * 1) / 100)
}

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
 * @param {*} area 
 * @param {*} skill 
 */
export function getSkillId (collection, area, skill) {
	return [
		collection.name,
		area.name,
		skill.name
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
export function randomNumberInRange(from, to) {
	return Math.floor(Math.random() * (to - from + 1)) + from;
}

/**
 * Returns the current confetti count.
 */
export function currentConfettiCount () {
	return Array.from(document.querySelectorAll("st-confetti")).length;
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
	$audio.pause()
 	$audio.currentTime = 0

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
					target.setAttribute("loaded", "");
				};

				target.src = dataSrc;
				observer.unobserve(target);
			}
		});
	};

	const observer = new IntersectionObserver(callback, lazyImgIntersectionObserverOptions);
	observer.observe($elem);
}