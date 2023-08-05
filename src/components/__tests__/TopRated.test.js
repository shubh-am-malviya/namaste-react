import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import Body from "../Body";
import MOCK_DATA from "../mocks/restaurantListMock.json";

global.fetch = jest.fn(() => {
	return Promise.resolve({
		json: () => {
			return Promise.resolve(MOCK_DATA);
		},
	});
});

it("Should render 4 restaurants when clicked top rated restaurants button", async () => {
	await act(async () =>
		render(
			<BrowserRouter>
				<Body />
			</BrowserRouter>
		)
	);

	const resCardsBeforeTopRatedClick = screen.getAllByTestId("res-card");

	const topRatedButton = screen.getByRole("button", {
		name: "Top Rated Restaurants",
	});
	fireEvent.click(topRatedButton);

	const resCardsAfterTopRatedClick = screen.getAllByTestId("res-card");

	expect(resCardsAfterTopRatedClick.length).toBe(3);
});
