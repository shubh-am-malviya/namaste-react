import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
	const { resData } = props;

	const {
		cloudinaryImageId,
		name,
		avgRating,
		cuisines,
		costForTwo,
		deliveryTime,
	} = resData?.data;

	return (
		<div className="res-card">
			<img
				src={CDN_URL + cloudinaryImageId}
				alt="res-logo"
				className="res-logo"
			/>
			<h3>{name}</h3>
			<h3>{cuisines?.join(", ")}</h3>
			<h4>{avgRating} stars</h4>
			<h4>₹{costForTwo / 100} FOR TWO</h4>
			<h4>{deliveryTime} minutes</h4>
		</div>
	);
};

export default RestaurantCard;
