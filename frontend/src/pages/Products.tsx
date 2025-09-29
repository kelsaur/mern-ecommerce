import ProductGrid from "../components/ProductGrid";
import Filter from "../components/Filter";

const Products = () => {
	return (
		<main className="m-p flex flex-col gap-8 md:flex-row">
			<aside className="flex-shrink-0">
				<Filter />
			</aside>
			<ProductGrid />
		</main>
	);
};

export default Products;
