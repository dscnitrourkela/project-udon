import { getAuth, sendSignInLinkToEmail, signOut } from 'firebase/auth';
import { query, where, getDocs, collection } from 'firebase/firestore';
import { db, app } from './firebaseConfig';

export const auth = getAuth(app);

export const signInWithEmailLink = async email => {
	try {
		await sendSignInLinkToEmail(auth, email, {
			url: window.location.href,
			handleCodeInApp: true,
		});
		window.localStorage.setItem('emailForSignIn', email);
		return true;
	} catch (error) {
		console.error('Error sending email link:', error);
		return false;
	}
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
