import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
	const [listOfRestaurants, setListOfRestaurants] = useState([]);

	useEffect(() => {
		fetchResData();
	}, []);

	const fetchResData = async () => {
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5408295&lng=73.9337007&page_type=DESKTOP_WEB_LISTING"
		);
		const jsonData = await data.json();

		setListOfRestaurants(
			jsonData?.data?.cards.find((c) => c?.cardType === "seeAllRestaurants")
				?.data?.data?.cards
		);
	};

	const filterTopRatedRestaurants = () => {
		const filteredRestaurants = listOfRestaurants.filter(
			(res) => res.data.avgRating > 4
		);
		setListOfRestaurants(filteredRestaurants);
	};

	return listOfRestaurants?.length === 0 ? (
		<Shimmer />
	) : (
		<div className="body">
			<div className="filter">
				<button className="filter-btn" onClick={filterTopRatedRestaurants}>
					Top Rated Restaurants
				</button>
			</div>
			<div className="res-container">
				{listOfRestaurants?.map((restaurant) => (
					<RestaurantCard key={restaurant.data.id} resData={restaurant} />
				))}
			</div>
		</div>
	);
};

export default Body;
