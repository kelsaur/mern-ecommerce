import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

const Products = () => {
	return (
		<div>
			<Navbar />
			<main className="flex justify-end gap-8 mx-auto px-4 py-10">
				{/*<Filter />*/}
				<ProductGrid />
			</main>
			<Footer />
		</div>
	);
};

export default Products;
