import {gaMeasurementId} from "./../config.js";

export const AuthEvents = {
	authStateChanged: "authStateChanged",
	completedSkillsChanged: "completedSkillsChanged"
}

export const CollectionNames = {
	users: "users"
}

export const StorageNames = {
	sessionUser: "sessionUser",
	completedSkills: "completedSkills"
}

export class Auth extends EventTarget {

	constructor () {
		super();
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

		if (this.user != null) {
			this.trackUser(this.user);
		}
	}

	get isAuthenticated () {
		return this.user != null;
	}

	trackUser (user) {
			// Set user ID
			gtag("config", gaMeasurementId, {
				"user_id": user.uid
			});

			// Track login
			gtag("event", "login", { "method": "Google" });
	}

	setUser (user) {
		if (user != null) {
			localStorage.setItem(StorageNames.sessionUser, JSON.stringify(user));
			this.trackUser(user);
			
		} else {
			localStorage.removeItem(StorageNames.sessionUser);
			localStorage.removeItem(StorageNames.completedSkills);
		}

		this.user = user;
		auth.dispatchEvent(new CustomEvent(AuthEvents.authStateChanged, {detail: user}));
	}

	setCompletedSkills (skills) {
		skills = skills || [];
		localStorage.setItem(StorageNames.completedSkills, JSON.stringify(skills));

		this.completedSkills = skills;
		auth.dispatchEvent(new CustomEvent(AuthEvents.completedSkillsChanged, {detail: skills}));
	}

	setDb (db) {
		this.db = db;
	}

	async signInWithGoogle () {
		const provider = new firebase.auth.GoogleAuthProvider();
		return await firebase.auth().signInWithPopup(provider);
	}

	async signOut () {
		await firebase.auth().signOut();
	}

	hasCompletedSkill (skillId) {
		return this.completedSkills.includes(skillId);
	}
	
	async addCompletedSkill (skillId) {
		if (!this.hasCompletedSkill(skillId)) {
			return await this.updateCompletedSkills([...this.completedSkills, skillId]);
		}

		return false;
	}

	async removeCompletedSkill (skillId) {
		if (this.hasCompletedSkill(skillId)) {
			return await this.updateCompletedSkills(this.completedSkills.filter(id => id !== skillId));
		}

		return false;
	}

	async toggleCompleteSkill (skillId) {
		if (this.hasCompletedSkill(skillId)) {
			return this.removeCompletedSkill(skillId);

		} else {
			return this.addCompletedSkill(skillId);
		}
	}

	async updateCompletedSkills (skills) {
		if (this.user == null) {
			return false;
		}

		await this.db.collection(CollectionNames.users).doc(this.user.uid).set({completedSkills: skills});
	}
}

export const auth = new Auth();