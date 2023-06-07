import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
	const [restaurantInfo, setRestaurantInfo] = useState(null);
	const { resId } = useParams();

	useEffect(() => {
		fetchMenu();
	}, []);

	const fetchMenu = async () => {
		const data = await fetch(MENU_API + resId);
		const jsonData = await data.json();

		// console.log("RES_MENU", jsonData);
		setRestaurantInfo(jsonData.data);
	};

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
