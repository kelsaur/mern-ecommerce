import { Products } from "../components/ProductGrid";
import { Filter } from "../components/Filter";

const Home = () => {
	return (
		<main className="flex gap-8 mx-auto px-4 py-16">
			<Filter />
			<Products />
		</main>
	);
};

export default Home;
