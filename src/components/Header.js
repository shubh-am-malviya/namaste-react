import React, { useState } from "react";
import { Link } from "react-router-dom";

import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
	const [btnName, setBtnName] = useState("Login");
	const onlineStatus = useOnlineStatus();

	return (
		<header className="header">
			<div className="logo-container">
				<img src={LOGO_URL} alt="Logo" className="logo" />
			</div>
			<div className="nav-items">
				<ul>
					<li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About us</Link>
					</li>
					<li>
						<Link to="/contact">Contact us</Link>
					</li>
					<li>
						<Link to="/grocery">Grocery</Link>
					</li>
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
