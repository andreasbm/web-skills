import {writeFileSync} from "fs";
import {collections} from "./src/data.js";

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
];

/**
 * Returns the origin of the url.
 * @param url
 * @returns {string}
 */
function getURLOrigin (url) {
	try {
		return (new URL(url)).origin;
	} catch (err) {
		return url;
	}
}

/**
 * Returns an icon for a URL.
 * @param url
 * @returns {string}
 */
function iconForUrl (url) {
	for (const [icon, keywords] of URL_ICON_MAPPER) {
		if (keywords.find(k => url.includes(k)) != null) {
			return icon;
		}
	}

	return DEFAULT_URL_ICON;
}

/**
 * Returns a logo for a URL.
 * @param url
 * @returns {string}
 */
function logoForUrl (url) {
	return `<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=${encodeURIComponent(getURLOrigin(url))}" alt="Logo" />`;
}

/**
 * Generals markdown for a heading.
 * @param text
 * @param level
 * @returns {string}
 */
function generateMarkdownHeading (text, level) {
	return `${Array(Math.min(level, 6)).fill("#").join("")} ${text}`;
}

/**
 * Generates markdown for an array of links.
 * @param links
 * @returns {string}
 */
function generateLinksMarkdown (links) {
	//const parts = links.map(([name, url]) => `* [ ] ${iconForUrl(url)} [${name}](${url}) ${logoForUrl(url)}`);
	const parts = links.map(([name, url]) => `* [ ] [${logoForUrl(url)} ${name}](${url})`);
	//const parts = links.map(([name, url]) => `* [ ] <a href="${url}" target="_blank">${logoForUrl(url)} ${name}</a>`);
	return parts.join(LINE_BREAK);
}

/**
 * Generates markdown for a skill.
 * @param skill
 * @param area
 * @param collection
 * @param level
 * @returns {string}
 */
function generateSkillMarkdown (skill, area, collection, level) {
	const {name, description, skills} = skill;
	let markdown = `${generateMarkdownHeading(name, level)}${PARAGRAPH_BREAK}${description != null ? `${description.text != null ? `${description.text}${PARAGRAPH_BREAK}` : ""}${generateLinksMarkdown(description.links || [])}` : ""}${LINE_BREAK}`;
	if (skills != null) {
		markdown = `${markdown}${LINE_BREAK}${generateSkillsMarkdown(skills, area, collection, level + 1)}`
	}

	return markdown;
}

/**
 * Generates markdown for an array of skills.
 * @param skills
 * @param area
 * @param collection
 * @param level
 * @returns {string}
 */
function generateSkillsMarkdown (skills, area, collection, level) {
	const parts = skills.map(skill => generateSkillMarkdown(skill, area, collection, level));
	return parts.join(LINE_BREAK);
}

/**
 * Generates markdown for an area.
 * @param area
 * @param collection
 * @param level
 * @returns {string}
 */
function generateAreaMarkdown (area, collection, level) {
	return `${area.name != null ? `${generateMarkdownHeading(area.name, level)}${PARAGRAPH_BREAK}` : ""}${generateSkillsMarkdown(area.skills, area, collection, level)}`
}

/**
 * Generates markdown for a collection.
 * @param collection
 * @param level
 * @returns {string}
 */
function generateCollectionMarkdown (collection, level) {
	const parts = collection.areas.map(area => generateAreaMarkdown(area, collection, level + 1));
	return `${generateMarkdownHeading(collection.name, level)}${PARAGRAPH_BREAK}${parts.join(PARAGRAPH_BREAK)}`;
}

/**
 * Generates markdown for an array of collections.
 * @param collections
 * @returns {string}
 */
function generateCollectionsMarkdown (collections) {
	const parts = collections.map(collection => generateCollectionMarkdown(collection, INITIAL_TITLE_LEVEL));
	return parts.join(PARAGRAPH_BREAK);
}

// Generate the collections markdown
const collectionsMarkdown = generateCollectionsMarkdown(collections);

// Create the blueprint file.
writeFileSync(FILE_NAME, `<h1 align="center">Web Skills</h1>
<p align="center">
	Web Skills is a visual overview of useful skills to learn as a web developer. Go to <a href="https://andreasbm.github.io/web-skills" target="_blank" aria-label="Link to Web Skills">https://andreasbm.github.io/web-skills</a> to check out the visual overview or scroll through this readme to get the overview <a href="#-fundamentals" target="_blank" aria-label="Link to list of skills">as a list</a>. If you like the project you are very welcome to <a href="https://github.com/andreasbm/web-skills/stargazers" aria-label="Become stargazer link">become a stargazer 🤩</a>
</p> 
<p align="center">
	<a href="http://andreasbm.github.io/web-skills" target="_blank">
		<img src="https://raw.githubusercontent.com/andreasbm/web-skills/master/demo.gif" alt="Web Skills Demo" width="800" />
	</a>
</p>
<br />
<details>
<summary>📖 Table of Contents</summary>
<br />
{{ template:toc }}
</details>

## FAQ

### What is Web Skills?

Web Skills is a visual overview of useful skills to learn as a web developer. It is useful for people who just started learning about web development and for people who have been in the field for years and want to learn new things. As a beginner, I would encourage you not to see this website as the definitive list of what you need to know but as an example of what you can learn and where you can start. The skills are arranged in chronological order based on what learning path I recommend you to take but feel free to jump around freely.

### How did you choose the skills?
		
The skills are derived from a combination of 10 years of experience, a bachelor in software engineering and what I personally find to be the most useful to know on a day-to-day basis. Therefore, you'll notice that it's missing a lot of things. For example, I am not a PHP developer - because of this, PHP is not included. If you were a PHP developer, this overview would probably look a lot different.

### How can I support you?

I am spending my spare time building Web Skills for free because I want to help people get into web development. My motivation comes from people finding Web Skills useful, so if you like the project feel free to support me in any way you like! For example, you are more than welcome to become a [stargazer](https://github.com/andreasbm/web-skills/stargazers), share Web Skills with your friends and followers or create blog articles linking to Web Skills. If you want to, it will absolutely make my day if you [support me with a cup of coffee](https://www.buymeacoffee.com/AndreasMehlsen)! <3

### How can I get involved?

You are welcome to get involved in any way you like. If you want to, you can go to the [issues page](https://github.com/andreasbm/web-skills/issues) and help me fix the spelling, fix issues or suggest some new features. Any involvement is highly appreciated!

### How can I keep track of what skills I know?

If you scroll to the bottom of the page, you will find a button that says "Sign in with Google". If you click this button and sign in, you will be able to mark skills as completed.

### I am overwhelmed! Help me!

I totally understand if you are a bit overwhelmed by the amount of skills on the page – but I can assure you that this overview includes much, much more than most people will ever need to know. My main goal is to provide a visual overview of web development and make people hungry for learning more. One of the things I absolute love about being a developer is learning new skills. I think it is amazing to be in a field where you can do what you do for a lifetime and still learn something new! People cannot be an expert in every skill on this page so try to find what excites you the most and become really good at that.

### Why haven't you included XYZ Technology?

The skills are based on what I personally find to be the most useful on a day-to-day basis. If you think something really important is missing, you can always suggest it on the [issues page](https://github.com/andreasbm/web-skills/issues).

### What does the "experimental" banner mean?

When a skill is described as experimental, it means that the technology is immature and currently in the process of being added to the Web platform (or considered for addition). Think carefully before you start using experimental technology in any kind of production project. The definition used in Web Skills is based on the excellent definition used on [MDN](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines/Conventions_definitions#Experimental). You are very welcome to open an issue if you see a skill you believe should be marked as "experimental" or have the banner removed.

### How can I get in contact with you?

Reach out to me on Twitter at [@AndreasMehlsen](https://twitter.com/AndreasMehlsen) or take a look at [my website](https://andreasbm.github.io) if you want to learn more about what other projects I'm working on.

${collectionsMarkdown}
{{ template:contributors }}
{{ template:license }}`);