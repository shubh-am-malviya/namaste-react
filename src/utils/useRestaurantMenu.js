import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
	const [restaurantInfo, setRestaurantInfo] = useState(null);

	useEffect(() => {
		fetchMenu();
	}, []);

	const fetchMenu = async () => {
		const data = await fetch(MENU_API + resId);
		const jsonData = await data.json();

		// console.log("RES_MENU", jsonData);
		setRestaurantInfo(jsonData.data);
	};

	return restaurantInfo;
};

export default useRestaurantMenu;
