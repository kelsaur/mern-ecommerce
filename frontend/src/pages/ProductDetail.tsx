import { useParams } from "react-router-dom";
import ProductDetailCard from "../components/ProductDetailCard";
import type { CartItem } from "../types/cart";

type ProductDetailProps = {
	addToCart: (item: CartItem) => void;
};

const ProductDetail = ({ addToCart }: ProductDetailProps) => {
	//id from URL
	const { id } = useParams<{ id: string }>();

	if (!id) {
		return (
			<div>
				<p className="text-center py-10">Product not found.</p>
			</div>
		);
	}

	return (
		<main className="m-p flex flex-row">
			<ProductDetailCard id={id} addToCart={addToCart} />
		</main>
	);
};

export default ProductDetail;
