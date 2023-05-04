import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
	const [listOfRestaurants, setListOfRestaurants] = useState(resList);

	const filterTopRatedRestaurants = () => {
		const filteredRestaurants = listOfRestaurants.filter(
			(res) => res.data.avgRating > 4
		);
		setListOfRestaurants(filteredRestaurants);
	};

	return (
		<div className="body">
			<div className="filter">
				<button className="filter-btn" onClick={filterTopRatedRestaurants}>
					Top Rated Restaurants
				</button>
			</div>
			<div className="res-container">
				{listOfRestaurants.map((restaurant) => (
					<RestaurantCard key={restaurant.data.id} resData={restaurant} />
				))}
			</div>
		</div>
	);
};

export default Body;
