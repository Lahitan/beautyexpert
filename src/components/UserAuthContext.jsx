import { createContext, useContext } from "react";

const userAuthContext = createContext();
const UserAuthContext = () => {
	return useContext(userAuthContext);
};

export function UserAuthContextProvider({ children }) {
	const [user, setUser] = useState({});

	return (
		<userAuthContext.Provider
			value={{ user, logIn, signUp, logOut, googleSignIn }}
		>
			{children}
		</userAuthContext.Provider>
	);
}

export default UserAuthContext;
