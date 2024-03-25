import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from './firebaseConfig';

export var loggedUser = {};
export const signInWithGoogle = () => {
	const auth = getAuth(app);
	const provider = new GoogleAuthProvider();

	signInWithPopup(auth, provider)
		.then(result => {
			//const credential = GoogleAuthProvider.credentialFromResult(result);
			//const token = credential.accessToken;
			const user = result.user;
			loggedUser = { name: user.displayName, email: user.email };
			console.log({ 'user Name': user.displayName, 'user Email': user.email, 'user Photo': user.photoURL });
		})
		.catch(error => {
			//const errorCode = error.code;
			const errorMessage = error.message;
			//const email = error.email;
			//const credential = error.credential;
			console.error(errorMessage);
		});
};
