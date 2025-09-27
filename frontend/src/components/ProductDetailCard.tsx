import { useState } from "react";
import { useEffect } from "react";
import type { Product } from "../types/product";
import SizeSelector from "./SizeSelector";

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
		<div className="flex flex-col gap-8 md:flex-row md:items-start">
			<div className="flex-1">
				<img
					src={product.image}
					alt={product.title}
					className="aspect-square object-cover w-full"
				/>
			</div>

			<div className="flex-1 flex flex-col gap-6">
				<div className="flex flex-col gap-2">
					<h1 className="text-2xl font-bold">{product.title}</h1>
					<p className="text-xl font-semibold">{product.price} SEK</p>
				</div>

				<div className="flex flex-col gap-2">
					<p>{product.description}</p>
					<div className="flex gap-2">
						<p className="font-bold">Color:</p>
						<p>{product.color}</p>
					</div>
				</div>

				<SizeSelector audience={product.audience} />

				<button className="button-4 rounded-full text-lg">Buy</button>
			</div>
		</div>
	);
};

export default ProductDetailCard;
