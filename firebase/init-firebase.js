import {auth, AuthEvents,CollectionNames} from "./auth.js";
import {firebaseConfig} from "./../config.js";

export async function initFirebase () {
	await firebase.initializeApp(firebaseConfig);

	// Get database
	const db = firebase.firestore();
	auth.setDb(db);

	// Get auth from firebase
	const firebaseAuth = firebase.auth();

	// Listen for auth changes
	let usersCollectionUnsubscriber = null;
	firebaseAuth.onAuthStateChanged(user => {

		// Unsubscribe from previous collection
		if (usersCollectionUnsubscriber != null) {
			usersCollectionUnsubscriber();
			usersCollectionUnsubscriber = null;
		}

		// Subscribe to new collection
		if (user != null) {
			usersCollectionUnsubscriber = db.collection(CollectionNames.users).doc(user.uid).onSnapshot(doc => {
				const data = doc.data() || {};
				auth.setCompletedSkills("completedSkills" in data ? data.completedSkills : []);
			});

		} else {
			auth.setCompletedSkills([]);
		}

		auth.setUser(user);
	});
}