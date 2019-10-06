import {auth, AuthEvents,CollectionNames} from "./auth.js";

const firebaseConfig = {
	apiKey: "AIzaSyAuD16_ZdTSQvjAkJ2a8ypT7hqmKuRmINU",
	authDomain: "skill-trees.firebaseapp.com",
	databaseURL: "https://skill-trees.firebaseio.com",
	projectId: "skill-trees",
	storageBucket: "skill-trees.appspot.com",
	messagingSenderId: "1017943808637",
	appId: "1:1017943808637:web:90a5f1b6f775d40aecef14"
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

