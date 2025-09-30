import type { CartItem } from "../types/cart";
import CartItemCard from "../components/CartItemCard";

type CartProps = {
	cart: CartItem[];
	addToCart: (item: CartItem) => void;
	decrementFromCart: (id: string, size: string | number) => void;
	deleteFromCart: (id: string, size: string | number) => void;
};

const Cart = ({
	cart,
	addToCart,
	decrementFromCart,
	deleteFromCart,
}: CartProps) => {
	const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

	return (
		<div className="m-p">
			<h1 className="text-2xl font-bold mb-6">Cart</h1>
			{cart.length === 0 ? (
				<p>Your cart is empty.</p>
			) : (
				cart.map((item) => (
					<CartItemCard
						key={`${item._id}-${item.size}`}
						item={item}
						addToCart={addToCart}
						decrementFromCart={decrementFromCart}
						deleteFromCart={deleteFromCart}
					/>
				))
			)}
			<div className="flex justify-end mt-6 ">
				<p className="text-xl font-semibold">
					Total: <span className="ml-2">{total} SEK</span>
				</p>
			</div>
		</div>
	);
};

export default Cart;
