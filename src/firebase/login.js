import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { query, where, getDocs, collection } from 'firebase/firestore';
import { db } from './firebaseConfig';
import { app } from './firebaseConfig';

export var loggedUser = {}; // user data from Google Auth
export var logUserRegData = {}; // registration data from Firestore

export const signInWithGoogle = () => {
	const auth = getAuth(app);
	const provider = new GoogleAuthProvider();

	signInWithPopup(auth, provider)
		.then(async result => {
			const user = result.user;
			loggedUser = { name: user.displayName, email: user.email, uid: user.uid };
			console.log('loggedUser:', loggedUser);

			logUserRegData = await getUserData(user.uid);
			console.log('User Registration Data:', logUserRegData);
		})
		.catch(error => {
			const errorMessage = error.message;
			console.error(errorMessage);
		});
};

export const getUserData = async userId => {
	try {
		const userQuery = query(collection(db, 'users'), where('uid', '==', userId));
		const querySnapshot = await getDocs(userQuery);

		if (!querySnapshot.empty) {
			const userRegData = querySnapshot.docs[0].data();

			//logUserData = userRegData;
			return userRegData;
		} else {
			console.log('No such document!');
			return null;
		}
	} catch (error) {
		console.error('Error getting user data:', error);
		throw error;
	}
};
