import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import MOCK_DATA from "../mocks/restaurantListMock.json";
import Body from "../Body";

global.fetch = jest.fn(() => {
	return Promise.resolve({
		json: () => {
			return Promise.resolve(MOCK_DATA);
		},
	});
});

it("Should render 2 restaurant cards for search text pizza", async () => {
	await act(async () =>
		render(
			<BrowserRouter>
				<Body />
			</BrowserRouter>
		)
	);

	const cardsBeforeSearch = screen.getAllByTestId("res-card");

	const searchInputBox = screen.getByTestId("search-res");
	fireEvent.change(searchInputBox, { target: { value: "pizza" } });

	const searchButton = screen.getByRole("button", { name: "Search" });
	fireEvent.click(searchButton);

	const cardsAfterSearch = screen.getAllByTestId("res-card");

	expect(cardsBeforeSearch.length - cardsAfterSearch.length).toBe(7);
});
