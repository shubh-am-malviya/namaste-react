import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import Header from "../Header";
import appStore from "../../utils/appStore";

describe("Test cases for Header component", () => {
	it("Should render Header component with login button", () => {
		render(
			<BrowserRouter>
				<Provider store={appStore}>
					<Header />
				</Provider>
			</BrowserRouter>
		);

		const loginButton = screen.getByRole("button", { name: "Login" });
		expect(loginButton).toBeInTheDocument();
	});

	it("Should render Header component with 0 Cart items", () => {
		render(
			<BrowserRouter>
				<Provider store={appStore}>
					<Header />
				</Provider>
			</BrowserRouter>
		);

		const cart = screen.getByText("Cart - 0 items");

		expect(cart).toBeInTheDocument();
	});

	it("Should change the login button to logout on click", () => {
		render(
			<BrowserRouter>
				<Provider store={appStore}>
					<Header />
				</Provider>
			</BrowserRouter>
		);

		const loginButton = screen.getByRole("button", { name: "Login" });

		fireEvent.click(loginButton);

		const logoutButton = screen.getByRole("button", { name: "Logout" });

		expect(logoutButton).toBeInTheDocument();
	});
});
