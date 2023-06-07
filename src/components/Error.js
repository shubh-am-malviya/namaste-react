import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
	const error = useRouteError();
	console.log("ROUTE_ERROR", error);

	return (
		<div>
			<h1>Ooopss... Someything went wrong</h1>
			<h2>Error Status: {error.statusText}</h2>
		</div>
	);
};

export default Error;
