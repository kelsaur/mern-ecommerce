import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, ShoppingCartIcon } from "@heroicons/react/24/outline";

type InfoItems = string[];

const Navbar = () => {
	const infoItems: InfoItems = [
		"Find your store",
		"30 day return policy",
		"Sweden/SEK",
	];

	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			<nav className="bg-white sticky top-0 z-50">
				<div className="w-full ">
					{/* top nav with text */}
					<div className="bg-[#eeede9] flex justify-between items-center h-12 px-3">
						{infoItems.map((item) => (
							<p key={item}>{item}</p>
						))}
					</div>

					{/* main nav */}
					<div className="flex items-center justify-between h-12 px-2">
						<div className="flex gap-x-2">
							{/* hamburger menu */}
							<button onClick={() => setMenuOpen(true)}>
								<Bars3Icon className="h-10 w-10 text-gray-700" />
							</button>

							{/* Logo */}
							<div className="flex-shrink-0 flex items-center">
								<Link to="/" className="text-2xl font-bold text-gray-800">
									LUMI
								</Link>
							</div>
						</div>

						{/* Search bar */}
						<div className="flex-1 px-2">
							<div className="max-w-[180px] md:max-w-md mx-auto">
								<input
									type="text"
									placeholder="Search products..."
									className="input-1 w-full pl-3 pr-12 py-2 border rounded-full"
								/>
							</div>
						</div>

						{/* Cart */}
						<div className="flex items-center space-x-6 px-2">
							<button className="relative ">
								<ShoppingCartIcon className="h-6 w-6 text-gray-700 " />
								<span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
									3
								</span>
							</button>
						</div>
					</div>
				</div>
			</nav>

			{/* overlay & sidebar menu */}
			{menuOpen && (
				<>
					{/* overlay */}
					<div
						className="fixed inset-0 bg-black/50 z-50"
						onClick={() => setMenuOpen(false)}
					></div>
					{/* sidebar */}
					<div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 p-6 flex flex-col">
						<button
							className="mb-6 text-gray-700 text-right"
							onClick={() => setMenuOpen(false)}
						>
							X
						</button>
						<nav className="flex flex-col gap-4">
							<Link to="#">Women</Link>
							<Link to="#">Men</Link>
							<Link to="#">Kids</Link>
							<Link to="#">New In</Link>
						</nav>
					</div>
				</>
			)}
		</>
	);
};

export default Navbar;
