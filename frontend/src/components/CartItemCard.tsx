import type { CartItem } from "../types/cart";

type CartItemCardProps = {
	item: CartItem;
	addToCart: (item: CartItem) => void;
	decrementFromCart: (id: string, size: string | number) => void;
	deleteFromCart: (id: string, size: string | number) => void;
};

const CartItemCard = ({
	item,
	addToCart,
	decrementFromCart,
	deleteFromCart,
}: CartItemCardProps) => {
	return (
		<section
			key={`${item._id}-${item.size}`}
			className="flex items-center border-b py-4 gap-6"
		>
			<div className="flex w-full justify-between">
				<div className="flex w-full justify-between gap-2">
					<img src={item.image} alt={item.title} className="w-32" />
					<div className="flex w-full justify-between">
						<div className="flex flex-col">
							<p className="font-medium">{item.title}</p>
							<p className="text-sm text-gray-600">
								Size: {item.size} | {item.color}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center gap-2 md:flex-row ">
				<div className="flex items-center gap-2">
					<button
						onClick={() => decrementFromCart(item._id, item.size)}
						className="px-2 border rounded"
					>
						-
					</button>
					<span>{item.quantity}</span>
					<button
						onClick={() => addToCart({ ...item, quantity: 1 })}
						className="px-2 border rounded"
					>
						+
					</button>
				</div>
				<button
					onClick={() => deleteFromCart(item._id, item.size)}
					className="button-remove"
				>
					Remove
				</button>
			</div>
		</section>
	);
};

export default CartItemCard;
