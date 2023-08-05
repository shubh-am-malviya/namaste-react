import React from "react";

const Contact = () => {
	return (
		<div className="text-center m-4 p-4">
			<h1 className="font-bold text-3xl">Contact Us Page</h1>

			<div className="p-4 flex flex-col place-items-center">
				<input
					className="border border-black p-2 m-2 w-6/12"
					type="text"
					name="name"
					placeholder="Enter your name"
				/>
				<input
					type="text"
					className="border border-black p-2 m-2 w-6/12"
					name="message"
					placeholder="Enter your message"
				/>
				<button className="bg-blue-400 rounded-lg m-2 p-2 w-1/6">Submit</button>
			</div>
		</div>
	);
};

export default Contact;
