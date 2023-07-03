import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
	const onlineStatus = useOnlineStatus();

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

	if (!onlineStatus) {
		return "Looks like you are not offline !!! Please check your internet connection";
	}

	return listOfRestaurants?.length === 0 ? (
		<Shimmer />
	) : (
		<div className="body">
			<div className="filter flex items-center">
				<div className="search m-4 p-4">
					<input
						type="text"
						className="border border-solid border-black"
						onChange={(e) => setSearchtext(e.target.value)}
						value={searchtext}
					/>
					<button
						className="px-4 py-1 m-4 bg-green-300 rounded-lg"
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
				<div className="m-4 p-4">
					<button
						className="px-4 py-1 bg-gray-200 rounded-lg"
						onClick={filterTopRatedRestaurants}
					>
						Top Rated Restaurants
					</button>
				</div>
			</div>
			<div className="res-container flex flex-wrap">
				{filteredRestaurants?.map((restaurant) => (
					<Link
						key={restaurant.data.id}
						to={"/restaurants/" + restaurant.data.id}
					>
						<RestaurantCard resData={restaurant} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default Body;
