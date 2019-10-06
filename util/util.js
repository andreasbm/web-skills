import { Confetti } from "../atoms/confetti.js";

export function pathify (name) {
	return name
		.replace(/[\s\/]/gm, `-`)
		.replace(/['\.]/gm, ``)
		.replace(/[&]/gm, `and`)
		.toLowerCase();
}

export function constructImagePathPrefix (collection, area, skill) {
	const paths = [
		"assets",
		collection.name,
		area.name,
		skill.name
	].filter(name => name != null).map(pathify);
	return `/${paths.join("/")}.png`;
}

export function getSkillId (collection, area, skill) {
	return [
		collection.name,
		area.name,
		skill.name
	].filter(name => name != null).map(pathify).join("-");
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

export function sprayConfettiOnce () {
	const $confetti = new Confetti();
	$confetti.once = true;
	$confetti.overlay = true;

	$confetti.addEventListener("stopped", () => {
		$confetti.remove();
	});

	document.body.appendChild($confetti);
	requestAnimationFrame(() => {
		$confetti.start();
	});
}