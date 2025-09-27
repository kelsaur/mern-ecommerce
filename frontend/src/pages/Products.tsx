import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";
import Filter from "../components/Filter";
import Footer from "../components/Footer";

const Products = () => {
	return (
		<div>
			<Navbar />
			<main className="m-p flex justify-end gap-8">
				<Filter />
				<ProductGrid />
			</main>
			<Footer />
		</div>
	);
};

export default Products;
