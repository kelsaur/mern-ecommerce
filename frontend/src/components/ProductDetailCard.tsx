import { useState } from "react";
import type { Product } from "../types/product";
import { useEffect } from "react";

type ProductDetailCardProps = {
	id: string;
};

type ProductResponse = {
	product: Product;
};

const ProductDetailCard = ({ id }: ProductDetailCardProps) => {
	const [product, setProduct] = useState<Product | null>(null);

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const res = await fetch(`http://localhost:4000/api/products/${id}`);
				if (!res.ok) {
					throw new Error(`HTTP error! status: ${res.status}`);
				}
				const data: ProductResponse = await res.json();
				setProduct(data.product);
			} catch (error) {
				console.error("Failed to fetch prodcut: ", error);
			}
		};
		fetchProduct();
	}, [id]);

	if (!product) {
		return <p>Loading</p>;
	}

	return (
		<div>
			<img src={product.image} alt={product.title} />
			<h1>{product.title}</h1>
			<p>{product.description}</p>
			<p>{product.price} SEK</p>
		</div>
	);
};

export default ProductDetailCard;
