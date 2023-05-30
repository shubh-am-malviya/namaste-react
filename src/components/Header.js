import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
	const [btnName, setBtnName] = useState("Login");

	return (
		<header className="header">
			<div className="logo-container">
				<img src={LOGO_URL} alt="Logo" className="logo" />
			</div>
			<div className="nav-items">
				<ul>
					<li>Home</li>
					<li>About us</li>
					<li>Contact us</li>
					<li>Cart</li>
					<button
						className="login"
						onClick={() => {
							btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
						}}
					>
						{btnName}
					</button>
				</ul>
			</div>
		</header>
	);
};

export default Header;
