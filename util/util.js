
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