import { createContext, useState, useEffect } from 'react';
import { getUserData, auth } from '../firebase/login';
import { onAuthStateChanged } from 'firebase/auth';

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

	return <AuthContext.Provider value={{ userInfo, setUserData }}>{children}</AuthContext.Provider>;
};
