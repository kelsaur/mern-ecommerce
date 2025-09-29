import hero1 from "../assets/hero_1.png";
import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<>
			<div className="flex flex-col md:flex-row w-full">
				{/* image */}
				<div className="w-full md:w-1/2 aspect-square">
					<img src={hero1} alt="Hero" className="w-full h-full object-cover" />
				</div>
				{/* text */}
				<div className="bg-[#e7e4dd] w-full md:w-1/2 aspect-square flex flex-col items-center justify-center p-8">
					<div className="max-w-xl text-left flex flex-col gap-5">
						<h1 className=" font-serif-custom text-5xl md:text-6xl lg:text-7xl">
							Minimal Design, Nordic Soul
						</h1>
						<p>Elevated essentials in timeless design.</p>{" "}
						<Link to="/products?category=sweaters">
							<button className="button-3 rounding-1 w-fit">
								Discover New Knitwear
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
