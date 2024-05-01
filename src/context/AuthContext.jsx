import { createContext, useState, useEffect } from 'react';
import { getUserData, auth } from '../firebase/login';
import { isSignInWithEmailLink, onAuthStateChanged, signInWithEmailLink } from 'firebase/auth';
import { toast } from 'react-toastify';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [userInfo, setUserData] = useState([{}, {}]);

	const listenForAuthChanges = () => {
		onAuthStateChanged(auth, async user => {
			if (user) {
				const userData = { name: user.displayName, email: user.email, uid: user.uid };
				const regData = await getUserData(user.uid);
				setUserData([userData, regData]);
			} else {
				setUserData([{}, {}]);
			}
		});
	};

	useEffect(() => {
		listenForAuthChanges();
	}, []);

	useEffect(() => {
		if (isSignInWithEmailLink(auth, window.location.href) && window.localStorage.getItem('emailForSignIn')) {
			const email = window.localStorage.getItem('emailForSignIn');
			signInWithEmailLink(auth, email, window.location.href)
				.then(result => {
					if (result) {
						toast.success('Email link verified. You can register now.');
						window.localStorage.removeItem('emailForSignIn');
					}
				})
				.catch(error => {
					console.error('Error signing in with email link:', error);
					toast.error('Error signing in with email link. Please try again.');
				});
		}
	}, []);

	return <AuthContext.Provider value={{ userInfo, setUserData }}>{children}</AuthContext.Provider>;
};
