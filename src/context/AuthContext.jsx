import { createContext, useState } from 'react';
import { listenForAuthChanges } from '../firebase/login';
import { useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [userInfo, setUserData] = useState([{}, {}]);

	useEffect(() => {
		listenForAuthChanges();
	}, []);

	return <AuthContext.Provider value={{ userInfo, setUserData }}>{children}</AuthContext.Provider>;
};
