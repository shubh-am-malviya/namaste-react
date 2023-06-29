import React from "react";

class UserClass extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			userInfo: {
				name: "Dummy",
				location: "Dummy",
			},
		};
	}

	async componentDidMount() {
		// console.log("Child componentDidMount");
		const data = await fetch("https://api.github.com/users/akshaymarch7");
		const dataJSON = await data.json();

		this.setState({
			...this.state,
			userInfo: dataJSON,
		});
	}

	render() {
		// console.log("Child Render");

		const { name, location, avatar_url } = this.state.userInfo;

		return (
			<div className="user-card">
				<img src={avatar_url} alt="Avatar-Image" />
				<h2>Name: {name}</h2>
				<h3>Location: {location}</h3>
				<h4>Contact: @akshaymarch7</h4>
			</div>
		);
	}
}

export default UserClass;
