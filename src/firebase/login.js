import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { query, where, getDocs, collection } from 'firebase/firestore';
import { db, app } from './firebaseConfig';

export var loggedUser = {}; // user data from Google Auth
export var logUserRegData = {}; // registration data from Firestore

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
			console.log('No such document!');
			return {};
		}
	} catch (error) {
		console.error('Error getting user data:', error);
		throw error;
	}
};
