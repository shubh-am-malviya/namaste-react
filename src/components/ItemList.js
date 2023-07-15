import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
	return (
		<div>
			{items.map((item) => (
				<div
					key={item.card.info.id}
					className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
				>
					<div className="w-9/12">
						<span>{item.card.info.name}</span>
						<span>
							- ₹{" "}
							{item.card.info.price
								? item.card.info.price / 100
								: item.card.info.defaultPrice / 100}
						</span>
						<p className="text-xs">{item.card.info.description}</p>
					</div>
					<div className="w-3/12 relative ml-1">
						<button className="absolute p-1 bg-white shadow-sm rounded-lg inset-x-0 bottom-0">
							Add +
						</button>
						{item.card.info.imageId && (
							<img src={CDN_URL + item.card.info.imageId} className="w-full" />
						)}
					</div>
				</div>
			))}
		</div>
	);
};

export default ItemList;
