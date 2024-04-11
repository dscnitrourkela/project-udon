import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { query, where, getDocs, collection } from 'firebase/firestore';
import { db, app } from './firebaseConfig';

export const auth = getAuth(app);
export const signInWithGoogle = async () => {
	const provider = new GoogleAuthProvider();

	return await signInWithPopup(auth, provider)
		.then(async result => {
			const user = result.user;
			const loggedUser = { name: user.displayName, email: user.email, uid: user.uid };

			const logUserRegData = await getUserData(user.uid);
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

export const signOutUser = async () => {
	const auth = getAuth(app);
	try {
		await signOut(auth);
		return [{}, {}];
	} catch (error) {
		console.error('Error signing out:', error);
		return false;
	}
};
