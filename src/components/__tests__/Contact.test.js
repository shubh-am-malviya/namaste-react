import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page test cases", () => {
	// beforeAll(() => {
	// 	console.log("Before All Tests");
	// });

	// beforeEach(() => {
	// 	console.log("Before Each Tests");
	// });

	// afterEach(() => {
	// 	console.log("After Each Tests");
	// });

	// afterAll(() => {
	// 	console.log("After All Tests");
	// });

	test("Should load contact us component", () => {
		render(<Contact />);
		const heading = screen.getByRole("heading");

		expect(heading).toBeInTheDocument();
	});

	test("Should load button inside Contact Us component", () => {
		render(<Contact />);
		const button = screen.getByText("Submit");

		expect(button).toBeInTheDocument();
	});

	it("Should load input box for name inside Contact Us component", () => {
		render(<Contact />);
		const inputName = screen.getByPlaceholderText("Enter your name");

		expect(inputName).toBeInTheDocument();
	});

	it("Should load 2 input box inside Contact Us component", () => {
		render(<Contact />);
		const inputBoxes = screen.getAllByRole("textbox");

		expect(inputBoxes.length).toBe(2);
	});
});
