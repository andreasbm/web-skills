import {collections} from "./data.js";
import {writeFileSync} from "fs";
console.log(collections);

const LINE_BREAK = `\r\n`;
const PARAGRAPH_BREAK = `${LINE_BREAK}${LINE_BREAK}`;

function generateMarkdownHeading (text, level = 1) {
	return `${Array(level).fill("#").join("")} ${text}`;
}

function generateLinksMarkdown (links) {
	console.log(links);
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

function generateAreaMarkdown (area, collection) {
	return `${area.name != null ? `${generateMarkdownHeading(area.name, 2)}${PARAGRAPH_BREAK}`: ""}${generateSkillsMarkdown(area.skills, area, collection, 2)}`
}

function generateCollectionMarkdown (collection) {
	const parts = collection.areas.map(area => generateAreaMarkdown(area, collection));
	return `${generateMarkdownHeading(collection.name, 1)}${PARAGRAPH_BREAK}${parts.join(PARAGRAPH_BREAK)}`;
}

function generateMarkdown (collections) {
	const parts = collections.map(generateCollectionMarkdown);
	return parts.join(PARAGRAPH_BREAK);
}

const markdown = generateMarkdown(collections);
//writeFileSync	
console.log(markdown);

// TODO: https://thecodebarbarian.com/nodejs-12-imports