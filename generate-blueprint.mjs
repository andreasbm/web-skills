import {collections} from "./data.js";
import {writeFileSync} from "fs";

const LINE_BREAK = `\r\n`;
const PARAGRAPH_BREAK = `${LINE_BREAK}${LINE_BREAK}`;
const INITIAL_TITLE_LEVEL = 2;
const FILE_NAME = `blueprint.md`;

function generateMarkdownHeading (text, level) {
	return `${Array(Math.min(level, 6)).fill("#").join("")} ${text}`;
}

function generateLinksMarkdown (links) {
	const parts = links.map(([name, url]) => `* [${name}](${url})`);
	return parts.join(LINE_BREAK);
}

function generateSkillMarkdown (skill, area, collection, level) {
	const {name, description, skills} = skill;
	let markdown = `${generateMarkdownHeading(name, level)}${PARAGRAPH_BREAK}${description != null ? `${description.text != null ? `${description.text}${PARAGRAPH_BREAK}` : ""}${generateLinksMarkdown(description.links || [])}` : ""}${LINE_BREAK}`;
	if (skills != null) {
		markdown = `${markdown}${LINE_BREAK}${generateSkillsMarkdown(skills, area, collection, level + 1)}`
	}

	return markdown;
}

function generateSkillsMarkdown (skills, area, collection, level) {
	const parts = skills.map(skill => generateSkillMarkdown(skill, area, collection, level));
	return parts.join(LINE_BREAK);
}

function generateAreaMarkdown (area, collection, level) {
	return `${area.name != null ? `${generateMarkdownHeading(area.name, level)}${PARAGRAPH_BREAK}`: ""}${generateSkillsMarkdown(area.skills, area, collection, level)}`
}

function generateCollectionMarkdown (collection, level) {
	const parts = collection.areas.map(area => generateAreaMarkdown(area, collection, level + 1));
	return `${generateMarkdownHeading(collection.name, level)}${PARAGRAPH_BREAK}${parts.join(PARAGRAPH_BREAK)}`;
}

function generateMarkdown (collections) {
	const parts = collections.map(collection => generateCollectionMarkdown(collection, INITIAL_TITLE_LEVEL));
	return parts.join(PARAGRAPH_BREAK);
}

const markdown = generateMarkdown(collections);
writeFileSync(FILE_NAME, `{{ template:title }}
{{ template:toc }}
${markdown}
{{ template:contributors }}
{{ template:license }}`);

// TODO: https://thecodebarbarian.com/nodejs-12-imports