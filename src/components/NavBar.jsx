import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Button, NavBarText, NavBarWrapper } from "./Navbar.styled";

export const NavBar = () => {
	const { toggleAuth, isAuth, onLogIn, onLogOut, token } = useContext(AuthContext);


	return (
		<>
			<NavBarWrapper>
				<NavBarText>{`NavBar: ${isAuth}`}</NavBarText>
				<Button onClick={toggleAuth}>
					{isAuth === true ? "sign out" : "sign in"}
				</Button>
				<Button
					onClick={() => {
						if (isAuth) onLogOut();
						else onLogIn();
					}}
				>
					{isAuth === true ? "Log Out" : "Log In"}
				</Button>
			</NavBarWrapper>

            <div>{token}</div>
		</>
	);
};
