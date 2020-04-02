import {measureLogin} from "../util/measure.js";

export const AuthEvents = {
	authStateChanged: "authStateChanged",
	completedSkillsChanged: "completedSkillsChanged"
};

export const CollectionNames = {
	users: "users"
};

export const StorageNames = {
	sessionUser: "sessionUser",
	completedSkills: "completedSkills"
};

/**
 * Class controlling the auth state of the app.
 * Ideally we would like to extend EventTarget, but that doesnt work on Safari.
 * Instead we extend HTMLElement to extend the EventTarget.
 */
export class Auth extends HTMLElement {

	constructor () {
		super();
		this.setup();
	}

	/**
	 * Sets up the authentication.
	 */
	setup () {
		this.db = null;

		// Grab the skills from localstorage before firebase has loaded.
		this.completedSkills = (() => {
			try {
				return JSON.parse(localStorage.getItem(StorageNames.completedSkills));

			} catch (err) {
				return [];
			}
		})();

		// Grab the session user from localstorage before firebase has loaded.
		this.user = (() => {
			try {
				return JSON.parse(localStorage.getItem(StorageNames.sessionUser));

			} catch (err) {
				return null;
			}
		})();

		// Measure the user if one exists
		if (this.user != null) {
			measureLogin(this.user);
		}
	}

	/**
	 * Determines whether the user is authenticated.
	 */
	get isAuthenticated () {
		return this.user != null;
	}

	/**
	 * Set the firebase instance.
	 * @param firebase
	 */
	setFirebase (firebase) {
		this.firebase = firebase;
	}

	/**
	 * Sets the user and saves it to local storage.
	 * @param {*} user
	 */
	setUser (user) {
		if (user != null) {
			localStorage.setItem(StorageNames.sessionUser, JSON.stringify(user));
			measureLogin(user);

		} else {
			localStorage.removeItem(StorageNames.sessionUser);
			localStorage.removeItem(StorageNames.completedSkills);
		}

		this.user = user;
		auth.dispatchEvent(new CustomEvent(AuthEvents.authStateChanged, {detail: user}));
	}

	/**
	 * Sets the completed skills and saves it to local storage.
	 * @param {*} skills
	 */
	setCompletedSkills (skills) {
		skills = skills || [];
		localStorage.setItem(StorageNames.completedSkills, JSON.stringify(skills));

		this.completedSkills = skills;
		auth.dispatchEvent(new CustomEvent(AuthEvents.completedSkillsChanged, {detail: skills}));
	}

	/**
	 * Sets the database.
	 * @param {*} db
	 */
	setDb (db) {
		this.db = db;
	}

	/**
	 * Signs in with Google.
	 */
	async signInWithGoogle () {
		const firebase = this.firebase;
		if (firebase == null) return;
		const provider = new firebase.auth.GoogleAuthProvider();
		return await firebase.auth().signInWithPopup(provider);
	}

	/**
	 * Signs out.
	 */
	async signOut () {
		const firebase = this.firebase;
		if (firebase == null) return;
		await firebase.auth().signOut();
	}

	/**
	 * Returns whether the skill is completed.
	 * @param {*} skillId
	 */
	hasCompletedSkill (skillId) {
		return this.completedSkills.includes(skillId);
	}

	/**
	 * Adds a skill to the list of completed skills and saves it.
	 * @param {*} skillId
	 */
	async addCompletedSkill (skillId) {
		if (!this.hasCompletedSkill(skillId)) {
			return await this.updateCompletedSkills([...this.completedSkills, skillId]);
		}

		return false;
	}

	/**
	 * Removes a skill from the list of completed skills and saves it.
	 * @param {*} skillId
	 */
	async removeCompletedSkill (skillId) {
		if (this.hasCompletedSkill(skillId)) {
			return await this.updateCompletedSkills(this.completedSkills.filter(id => id !== skillId));
		}

		return false;
	}

	/**
	 * Toggles whether a skill is completed and saves it.
	 * @param {*} skillId
	 */
	async toggleCompleteSkill (skillId) {
		if (this.hasCompletedSkill(skillId)) {
			return this.removeCompletedSkill(skillId);

		} else {
			return this.addCompletedSkill(skillId);
		}
	}

	/**
	 * Updates the list of completed skills and saves it.
	 * @param {*} skills
	 */
	async updateCompletedSkills (skills) {
		if (this.user == null) {
			return false;
		}

		await this.db.collection(CollectionNames.users).doc(this.user.uid).set({completedSkills: skills});
	}
}

customElements.define("ws-auth", Auth);
export const auth = new Auth();