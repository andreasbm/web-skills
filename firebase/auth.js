export const AuthEvents = {
	authStateChanged: "authStateChanged",
	completedSkillsChanged: "completedSkillsChanged"
}

export const CollectionNames = {
	users: "users"
}

export class Auth extends EventTarget {

	constructor () {
		super();
		this.user = null;
		this.completedSkills = [];
		this.db = null;
	}

	get isAuthenticated () {
		return this.user != null;
	}

	setUser (user) {
		console.log("SET USER", user);
		this.user = user;
		auth.dispatchEvent(new CustomEvent(AuthEvents.authStateChanged, {detail: user}));
	}

	setCompletedSkills (skills) {
		console.log("SET SKILLS", skills);
		skills = skills || [];
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