import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import type { Product } from "../types/product";
import ProductCard from "./ProductCard";

type ProductsResponse = {
	products: Product[];
};

const ProductGrid = () => {
	const [products, setProducts] = useState<Product[]>([]);

	//read user's URL filters
	const location = useLocation();
	//console.log(location)
	const params = new URLSearchParams(location.search);

	const audience = params.get("audience");
	const categories = params.getAll("category");

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				//rebuild queryParams for API req to only send filters i want from backend
				const queryParams = new URLSearchParams();
				if (audience) queryParams.append("audience", audience);
				if (categories.length > 0) {
					categories.forEach((cat) => queryParams.append("category", cat));
				}

				const res = await fetch(
					`http://localhost:4000/api/products?${queryParams.toString()}`
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
	}, [audience, categories]);

	return (
		<div>
			<div className="mx-auto max-w-full">
				{products.length > 0 ? (
					<div className="grid grid-cols-1 gap-x-3 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{products.map((product) => (
							<ProductCard key={product._id} product={product} />
						))}
					</div>
				) : (
					<p>There are currently no products in this category.</p>
				)}
			</div>
		</div>
	);
};

export default ProductGrid;
