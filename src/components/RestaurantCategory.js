import React, { useState } from "react";
import ItemList from "./ItemList";

function RestaurantCategory({ data, showItemList, toggleShowItemList }) {
	return (
		<div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-md p-4 ">
			<div
				className="flex justify-between cursor-pointer"
				onClick={toggleShowItemList}
			>
				<span className="font-bold text-lg">
					{data.title} {data.itemCards.length}
				</span>
				<span>⬇️</span>
			</div>
			{showItemList && (
				<div>
					<ItemList items={data.itemCards} />
				</div>
			)}
		</div>
	);
}

export default RestaurantCategory;
