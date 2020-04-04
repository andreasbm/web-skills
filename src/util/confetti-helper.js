import {Confetti} from "../atoms/confetti.js";
import {randomNumberInRange} from "./util.js";

const AUDIO_CACHE = new Map();

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

	$audio.play().then();

	AUDIO_CACHE.set(src, $audio);
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
export async function sprayConfettiOnce () {
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
