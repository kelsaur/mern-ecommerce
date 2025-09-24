import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../types/product";

type ProductsResponse = {
	products: Product[];
};

const ProductGrid = () => {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const res = await fetch("http://localhost:4000/api/products");
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
	}, []);

	return (
		<div className="bg-white">
			<div className="mx-auto max-w-full">
				{/* Product grid */}
				<div className="grid grid-cols-1 gap-x-3 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 ">
					{products.map((product) => (
						<div key={product._id} className="group relative">
							<img
								src={product.image}
								className="aspect-square w-full bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
							/>
							<div className="mt-4 flex justify-between">
								<div>
									<h3 className="text-sm text-gray-700">
										<Link to={`/products/${product._id}`}>
											<span aria-hidden="true" className="absolute inset-0" />
											{product.title}
										</Link>
									</h3>
								</div>
								<p className="text-sm font-medium text-gray-900">
									{product.price}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductGrid;
