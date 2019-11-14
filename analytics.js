import {gaMeasurementId} from "./config.js";

export function trackView () {
	gtag("config", gaMeasurementId, {
		"page_path": location.pathname,
		"page_location": location.href
	});
}