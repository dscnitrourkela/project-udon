import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [userInfo, setUserData] = useState([{}, {}]);

	return <AuthContext.Provider value={{ userInfo, setUserData }}>{children}</AuthContext.Provider>;
};
