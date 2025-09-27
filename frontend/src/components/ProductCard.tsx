import { Link } from "react-router-dom";
import type { Product } from "../types/product";

type ProductCardProps = {
	product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
	return (
		<Link to={`/products/${product._id}`} className="flex flex-col">
			<img
				src={product.image}
				alt={product.title}
				className="aspect-square w-full bg-gray-200 object-cover hover:opacity-75"
			/>
			<div className="flex justify-between mt-4 ">
				<h3 className="text-sm hover-2">
					<span>{product.title}</span>
				</h3>
				<p className="text-sm font-medium">SEK{product.price}</p>
			</div>
			<p className="text-xs">{product.color}</p>
		</Link>
	);
};

export default ProductCard;
