import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from './firebaseConfig';

export const signInWithGoogle = () => {
	const auth = getAuth(app);
	const provider = new GoogleAuthProvider();

	signInWithPopup(auth, provider)
		.then(result => {
			// This gives you a Google Access Token
			//const credential = GoogleAuthProvider.credentialFromResult(result);
			//const token = credential.accessToken;
			// This gives you the signed-in user
			const user = result.user;
			console.log(user);
			// You can redirect to another page or perform other actions after successful sign-in
		})
		.catch(error => {
			//const errorCode = error.code;
			const errorMessage = error.message;
			//const email = error.email;
			//const credential = error.credential;
			console.error(errorMessage);
		});
};
