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
		</div>
	);
};

export default Cart;
