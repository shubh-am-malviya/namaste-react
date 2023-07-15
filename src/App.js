import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLoayout = () => {
	const [userName, setUserName] = useState("Shubham");

	return (
		<div className="app">
			<UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
				<Header />
				<Outlet />
			</UserContext.Provider>
		</div>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLoayout />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/about",
				element: (
					<Suspense fallback={<Shimmer />}>
						<About />
					</Suspense>
				),
			},
			{
				path: "/grocery",
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<Grocery />
					</Suspense>
				),
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/restaurants/:resId",
				element: <RestaurantMenu />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
