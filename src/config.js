export const APP_VERSION = 7;
export const IS_STAND_ALONE = ("standalone" in window.navigator && window.navigator.standalone) || window.matchMedia("(display-mode: standalone)").matches;
export const IS_TOUCH = window.matchMedia("(any-pointer: coarse)").matches;
export const DEFAULT_COMPACT_PX = 800;
export const GA_MEASUREMENT_ID = `UA-96179028-7`;
export const COMPACT_STORAGE_KEY = "compact";
export const FIRST_VISIT_DATE_STORAGE_KEY = "first_visit_date";
export const SNACK_CONTAINER_ID = "snack-container";
export const CLOSE_DESCRIPTION_EVENT = "closeDescription";

// For now we only use native share on smaller screens due to web share bug.
export const ALLOW_NATIVE_SHARE = window.innerWidth < DEFAULT_COMPACT_PX;

export const FIREBASE_CONFIG = {
	apiKey: "AIzaSyAeptLYIAEF7MtzFjKo0XYtC6i0BXbqdjI",
	authDomain: "web-skills.firebaseapp.com",
	databaseURL: "https://web-skills.firebaseio.com",
	projectId: "web-skills",
	storageBucket: "web-skills.appspot.com",
	messagingSenderId: "796050122198",
	appId: "1:796050122198:web:422fd7fee1037c3a2a3077"
};

export const LAZY_IMG_INTERSECTION_OPTIONS = {
	rootMargin: '200px',
	// [0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09]
	threshold: Array(10).fill(0).map((_, i) => i / 100)
};

export function getShareUrl () {
	const {origin, pathname} = location;
	const cleanedPathname = pathname.length > 0 ? pathname[pathname.length - 1] === "/" ? pathname.slice(0, pathname.length - 1) : pathname : "";
	return `${origin}${cleanedPathname}`
}

export const getShareConfig = () => ({
	title: "Web Skills",
	text: "A visual overview of useful skills to learn as a web developer",
	url: getShareUrl()
});