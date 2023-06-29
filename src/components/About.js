import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
	constructor(props) {
		super(props);
		// console.log("Parent Constructor");
	}

	componentDidMount() {
		// console.log("Parent componentDidMount");
	}

	render() {
		// console.log("Parent Render");

		return (
			<div>
				<h1>About Class Component</h1>
				<h2>This is Namaste React Web Series</h2>
				<UserClass name={"Akshay Saini Class"} location={"Dehradun"} />
			</div>
		);
	}
}

// const About = () => {
// 	return (
// 		<div>
// 			<h1>About</h1>
// 			<UserClass name={"Akshay Saini Class"} location={"Dehradun"} />
// 		</div>
// 	);
// };

export default About;
