import {GA_MEASUREMENT_ID, APP_VERSION, IS_STAND_ALONE} from "../config.js";

export function measureDimensions () {
	gtag("set", "dimension1", APP_VERSION);
	gtag("set", "dimension2", IS_STAND_ALONE);
}

export function measurePageView () {
	gtag("config", GA_MEASUREMENT_ID, {
		"page_path": location.pathname,
		"page_location": location.href
	});
}

export function measureLinkClicked (name) {
	gtag("event", "click_link", {
		"event_category": "engagement",
		"event_label": `The link "${name}" was clicked`,
	});
}

export function measureCopyLink (text) {
	gtag("event", "copy_link", {
		"event_category": "social",
		"event_label": `The link "${text}" was copied`,
	});
}

export function measureShareLink (name) {
	gtag("event", "share_link", {
		"event_category": "social",
		"event_label": `A link was shared using "${name}"`
	});
}

export function measureOpenHelp () {
	gtag("event", "open_help", {
		"event_category": "engagement",
		"event_label": "The help dialog was opened"
	});
}

export function measureException (description) {
	gtag("event", "exception", {
		description,
		"fatal": true
	});
}

export function measureToggleCompact (compact) {
	gtag("event", "toggle_compact", {
		"event_category": "engagement",
		"event_label": compact ? `Compact mode was activated` : `Compact mode was deactivated`
	});
}

export function measureOpenShare () {
	gtag("event", "open_share", {
		"event_category": "social",
		"event_label": "The share dialog was opened"
	});
}

export function measureLogin (user) {
	gtag("config", GA_MEASUREMENT_ID, {
		"user_id": user.uid
	});

	gtag("event", "login", {"method": "Google"});
}

export function measureCompleteSkill (name) {
	gtag("event", "complete_skill", {
		"event_category": "engagement",
		"event_label": `The skill "${name}" was completed`,
	});
}

export function measureShowDescription (name) {
	gtag("event", "show_description", {
		"event_category": "engagement",
		"event_label": `The description for "${name}" was shown`,
	});
}

export function measureInstallEvent () {
	gtag("event", "install", {
		"event_category": "engagement",
		"event_label": `The app was installed`,
	});
}

export function measureUserTiming (label, category,  ms) {
	gtag("event", "timing_complete", {
		"name": "load",
		"value": ms,
		"event_category": category,
		"event_label": label
	});
}
