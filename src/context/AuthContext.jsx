import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const [token,setToken] = useState(''); 
	const toggleAuth = () => {
        setIsAuth(isAuth === true ? false : true);
	};
	const onLogIn = () => {
		let _data = {
			email: "eve.holt@reqres.in",
			password: "cityslicka",
		};
		fetch("https://reqres.in/api/login", {
			method: "POST",
			body: JSON.stringify(_data),
			headers: { "Content-type": "application/json; charset=UTF-8" },
		})
			.then((response) => response.json())
			.then((json) => {
				// console.log(json);
				if (json.token) {
                    setIsAuth(true);
                    setToken(json.token);
					// console.log(json.token);
				}
			})
			.catch((err) => console.log(err));
    };

	const onLogOut = () => {
        setIsAuth(false);
        setToken('')
	};
	return (
		<AuthContext.Provider value={{ isAuth, toggleAuth, onLogIn, onLogOut,token }}>
			{children}
		</AuthContext.Provider>
	);
};
