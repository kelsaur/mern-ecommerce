import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const Home = () => {
	return (
		<div>
			<Navbar />
			<main className="flex gap-8 mx-auto">
				<Hero />
			</main>
			<Footer />
		</div>
	);
};

export default Home;
