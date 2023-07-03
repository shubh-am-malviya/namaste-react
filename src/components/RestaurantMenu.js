import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
	const { resId } = useParams();

	const restaurantInfo = useRestaurantMenu(resId);

	if (restaurantInfo === null || restaurantInfo === undefined) {
		return <Shimmer />;
	}

	const { name, cuisines, costForTwoMessage } =
		restaurantInfo?.cards[0]?.card?.card?.info;
	const { itemCards } =
		restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
			?.card;

	return (
		<div className="menu">
			<h1>{name}</h1>
			<p>
				{cuisines?.join(", ")} - {costForTwoMessage}
			</p>
			<h2>Menu</h2>
			<ul>
				{itemCards?.map((item) => (
					<li key={item.card.info.id}>
						{item?.card?.info?.name} - ₹
						{item.card.info.price || item.card.info.defaultPrice}
					</li>
				))}
			</ul>
		</div>
	);
};

export default RestaurantMenu;
