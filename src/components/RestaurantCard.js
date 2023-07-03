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
		<div className="m-4 p-2 w-56 bg-gray-100 rounded-lg shadow-md hover:scale-105 hover:duration-200">
			<img
				src={CDN_URL + cloudinaryImageId}
				alt="res-logo"
				className="rounded-lg"
			/>
			<h3 className="font-bold my-4 text-lg">{name}</h3>
			<h3>{cuisines?.join(", ")}</h3>
			<h4>{avgRating} stars</h4>
			<h4>₹{costForTwo / 100} FOR TWO</h4>
			<h4>{deliveryTime} minutes</h4>
		</div>
	);
};

export default RestaurantCard;
