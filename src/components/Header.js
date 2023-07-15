import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
	const [btnName, setBtnName] = useState("Login");
	const onlineStatus = useOnlineStatus();
	const { loggedInUser } = useContext(UserContext);

	return (
		<header className="flex justify-between mb-2 shadow-md">
			<div className="logo-container">
				<img src={LOGO_URL} alt="Logo" className="w-24" />
			</div>
			<div className="flex items-center">
				<ul className="flex p-4">
					<li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
					<li className="px-4">
						<Link to="/">Home</Link>
					</li>
					<li className="px-4">
						<Link to="/about">About us</Link>
					</li>
					<li className="px-4">
						<Link to="/contact">Contact us</Link>
					</li>
					<li className="px-4">
						<Link to="/grocery">Grocery</Link>
					</li>
					<li className="px-4">Cart</li>
					<li className="px-4">
						<b>{loggedInUser}</b>
					</li>
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
