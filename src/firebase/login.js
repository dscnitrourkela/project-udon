import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { query, where, getDocs, collection } from 'firebase/firestore';
import { db, app } from './firebaseConfig';

export var loggedUser = {};
export var logUserRegData = {};

export const signInWithGoogle = async () => {
	const auth = getAuth(app);
	const provider = new GoogleAuthProvider();

	return await signInWithPopup(auth, provider)
		.then(async result => {
			const user = result.user;
			loggedUser = { name: user.displayName, email: user.email, uid: user.uid };

			logUserRegData = await getUserData(user.uid);
			return [loggedUser, logUserRegData];
		})
		.catch(error => {
			const errorMessage = error.message;
			console.error(errorMessage);
			return [{}, {}];
		});
};

export const getUserData = async userId => {
	try {
		const userQuery = query(collection(db, 'users'), where('uid', '==', userId));
		const querySnapshot = await getDocs(userQuery);

		if (!querySnapshot.empty) {
			const userRegData = querySnapshot.docs[0].data();

			return userRegData;
		} else {
			return {};
		}
	} catch (error) {
		console.error('Error getting user data:', error);
		throw error;
	}
};

export const listenForAuthChanges = () => {
	const auth = getAuth(app);

	onAuthStateChanged(auth, async user => {
		if (user) {
			loggedUser = { name: user.displayName, email: user.email, uid: user.uid };
			logUserRegData = await getUserData(user.uid);
		} else {
			loggedUser = {};
			logUserRegData = {};
		}
	});
};
