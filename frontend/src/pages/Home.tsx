import ProductGrid from "../components/ProductGrid";

const Home = () => {
	return (
		<div className="flex flex-col">
			<main className="flex-grow">
				<ProductGrid />
			</main>
		</div>
	);
};

export default Home;
