import React from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
				</ul>
			</div>
		</header>
	);
};

export default Header;
