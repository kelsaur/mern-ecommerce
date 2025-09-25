import { useState, useEffect } from "react";
import type { Product } from "../types/product";
import ProductCard from "./ProductCard";

type ProductsResponse = {
	products: Product[];
};

type ProductGridProps = {
	audience?: string;
	category?: string;
};

const ProductGrid = ({ audience, category }: ProductGridProps) => {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const params = new URLSearchParams();
				if (audience) params.append("audience", audience);
				if (category) params.append("category", category);

				const res = await fetch(
					`http://localhost:4000/api/products?${params.toString()}`
				);
				if (!res.ok) {
					throw new Error(`HTTP error! status: ${res.status}`);
				}
				const data: ProductsResponse = await res.json();
				setProducts(data.products);
			} catch (error) {
				console.error("Failed to fetch products: ", error);
			}
		};
		fetchProducts();
	}, [audience, category]);

	return (
		<div className="bg-white">
			<div className="mx-auto max-w-full">
				<div className="grid grid-cols-1 gap-x-3 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
					{products.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductGrid;
