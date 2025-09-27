import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";
import Filter from "../components/Filter";
import Footer from "../components/Footer";

const Products = () => {
	return (
		<div>
			<Navbar />
			<main className="m-p flex flex-col gap-8 md:flex-row">
				<aside className="flex-shrink-0">
					<Filter />
				</aside>
				<ProductGrid />
			</main>
			<Footer />
		</div>
	);
};

export default Products;
