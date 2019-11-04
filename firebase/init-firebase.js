import {auth, AuthEvents,CollectionNames} from "./auth.js";

const firebaseConfig = {
	apiKey: "AIzaSyAeptLYIAEF7MtzFjKo0XYtC6i0BXbqdjI",
	authDomain: "web-skills.firebaseapp.com",
	databaseURL: "https://web-skills.firebaseio.com",
	projectId: "web-skills",
	storageBucket: "web-skills.appspot.com",
	messagingSenderId: "796050122198",
	appId: "1:796050122198:web:422fd7fee1037c3a2a3077"
};

async function setup () {
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

setup();

