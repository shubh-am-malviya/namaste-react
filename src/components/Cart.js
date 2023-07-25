import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
	const dispatch = useDispatch();

	const cartItems = useSelector((state) => state.cart.items);

	const handleClearCart = () => {
		dispatch(clearCart());
	};

	return (
		<div className="text-center m-4 p-4">
			<h1 className="text-2xl font-bold">Cart</h1>
			<div className="w-6/12 m-auto">
				<button
					className="m-2 p-2 rounded-lg bg-red-300 cursor-pointer"
					onClick={handleClearCart}
				>
					Clear Cart
				</button>
				<br />
				<br />

				{cartItems.length === 0 && (
					<h2>Cart is empty! Add items to the cart.</h2>
				)}
				{<ItemList items={cartItems} />}
			</div>
		</div>
	);
};

export default Cart;
