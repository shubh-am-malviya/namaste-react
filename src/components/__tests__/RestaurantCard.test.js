import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/RestaurantCardMock.json";

describe("Test for Restaurant card component", () => {
	it("Should render RestaurantCard component with mock data", () => {
		render(<RestaurantCard resData={MOCK_DATA} />);

		const resName = screen.getByText("Gagan Sweets");

		expect(resName).toBeInTheDocument();
	});
});
