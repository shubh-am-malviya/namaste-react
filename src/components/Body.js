import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
	const [listOfRestaurants, setListOfRestaurants] = useState([]);
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);
	const [searchtext, setSearchtext] = useState("");

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
		setFilteredRestaurants(
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
				<div className="search">
					<input
						type="text"
						className="search-box"
						onChange={(e) => setSearchtext(e.target.value)}
						value={searchtext}
					/>
					<button
						onClick={() => {
							const filteredRestaurantsList = listOfRestaurants?.filter((r) =>
								r.data.name.toLowerCase()?.includes(searchtext.toLowerCase())
							);
							setFilteredRestaurants(filteredRestaurantsList);
						}}
					>
						Search
					</button>
				</div>
				<button className="filter-btn" onClick={filterTopRatedRestaurants}>
					Top Rated Restaurants
				</button>
			</div>
			<div className="res-container">
				{filteredRestaurants?.map((restaurant) => (
					<RestaurantCard key={restaurant.data.id} resData={restaurant} />
				))}
			</div>
		</div>
	);
};

export default Body;
