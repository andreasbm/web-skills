import {collections} from "./data.js";
import {writeFileSync} from "fs";

const LINE_BREAK = `\r\n`;
const PARAGRAPH_BREAK = `${LINE_BREAK}${LINE_BREAK}`;
const INITIAL_TITLE_LEVEL = 2;
const FILE_NAME = `blueprint.md`;
const DEFAULT_URL_ICON = "📜";
const URL_ICON_MAPPER = [
	["📹", ["youtube"]],
	["🔖", ["wikipeia"]],
	["🧪", ["codelab", "github"]],
	["⚙️", ["toolbox", "webaim", "w3c", "thinkwithgoogle", "w3"]],
	["🎓", ["course", "udacity"]],
	["📖", ["book", "amazon", "refactoringui.com"]],
	["📐", ["resource", "glitch.me", "codepen"]],
	["❓", ["quora", "stackoverflow"]],
]

function iconForUrl (url) {
	for (const [icon, keywords] of URL_ICON_MAPPER) {
		if (keywords.find(k => url.includes(k)) != null) {
			return icon;
		}
	}

	return DEFAULT_URL_ICON;
}

function logoForUrl (url) {
	return `<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=${encodeURIComponent(url)}" alt="Logo" />`;
}

function generateMarkdownHeading (text, level) {
	return `${Array(Math.min(level, 6)).fill("#").join("")} ${text}`;
}

function generateLinksMarkdown (links) {
	//const parts = links.map(([name, url]) => `* [ ] ${iconForUrl(url)} [${name}](${url}) ${logoForUrl(url)}`);
	const parts = links.map(([name, url]) => `* [ ] [${logoForUrl(url)} ${name}](${url})`);
	//const parts = links.map(([name, url]) => `* [ ] <a href="${url}" target="_blank">${logoForUrl(url)} ${name}</a>`);
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
writeFileSync(FILE_NAME, `<h1 align="center">Web Skills</h1>
Welcome to this corner of the internet! I've tried to create a comprehensive visual overview of useful skills to learn as a web developer. Keep in mind that the list is VERY opinionated. The goal has never been to create the definitive overview of what you HAVE to learn as a web developer but rather to create a visual overview of what you could learn and where you could start. Hopefully it can give you some inspiration in your own journey to learn more about web development.

Go to [http://andreasbm.github.io/web-skills](http://andreasbm.github.io/web-skills) to check out the visual overview or scroll through this readme to get the overview as a list. 

<details>
<summary>📖 Table of Contents</summary>
<br />
{{ template:toc }}
</details>

${markdown}
{{ template:contributors }}
{{ template:license }}`);

// TODO: https://thecodebarbarian.com/nodejs-12-imports