import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductDetailCard from "../components/ProductDetailCard";

const ProductDetail = () => {
	//id from URL
	const { id } = useParams<{ id: string }>();

	if (!id) {
		return (
			<div>
				<Navbar />
				<p className="text-center py-10">Product not found.</p>
				<Footer />
			</div>
		);
	}

	return (
		<div>
			<Navbar />
			<main className="m-p flex flex-row">
				<ProductDetailCard id={id} />
			</main>
			<Footer />
		</div>
	);
};

export default ProductDetail;
