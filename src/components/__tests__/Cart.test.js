const { render, screen, fireEvent } = require("@testing-library/react");
const { act } = require("react-dom/test-utils");
import { Provider } from "react-redux";

import RestaurantMenu from "../RestaurantMenu";
import Cart from "../Cart";
import Header from "../Header";
import MOCK_DATA from "../mocks/RestaurantMenuMock.json";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
	Promise.resolve({
		json: () => Promise.resolve(MOCK_DATA),
	})
);

it("Should load RestaurantMenu component", async () => {
	await act(() =>
		render(
			<Provider store={appStore}>
				<BrowserRouter>
					<Header />
					<RestaurantMenu />
					<Cart />
				</BrowserRouter>
			</Provider>
		)
	);

	const vegPizzaAccordionHeader = screen.getByText("New Launches 4");
	fireEvent.click(vegPizzaAccordionHeader);

	const foodItems = screen.getAllByTestId("foodItem");
	expect(foodItems.length).toBe(4);

	expect(screen.getByText("Cart - 0 items"));

	const addButtons = screen.getAllByRole("button", { name: "Add +" });
	fireEvent.click(addButtons[0]);

	expect(screen.getByText("Cart - 1 items"));

	fireEvent.click(addButtons[1]);

	expect(screen.getByText("Cart - 2 items"));

	expect(screen.getAllByTestId("foodItem").length).toBe(6); // 2 items in Cart & 4 items in RestaurantMenu

	fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

	expect(screen.getByText("Cart is empty! Add items to the cart."));
});
