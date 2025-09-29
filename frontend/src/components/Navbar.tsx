import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import type { CartItem } from "../types/cart";

type InfoItems = string[];

type NavbarProps = {
	cart: CartItem[];
};

const Navbar = ({ cart }: NavbarProps) => {
	const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

	const infoItems: InfoItems = [
		"Find your store",
		"30 day return policy",
		"Sweden/SEK",
	];

	const [menuOpen, setMenuOpen] = useState(false);
	const location = useLocation();

	//route changes -> menu closes
	useEffect(() => {
		setMenuOpen(false);
	}, [location]);

	return (
		<>
			<nav className="bg-white sticky top-0 z-50">
				<div className="w-full ">
					{/* top nav with text */}
					<div className="bg-[#eeede9] flex justify-between items-center h-12 px-3">
						{infoItems.map((item) => (
							<p key={item} className="text-xs md: text-md">
								{item}
							</p>
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
									className="text-sm input-1 w-full pl-3 pr-12 py-2 border rounded-full"
								/>
							</div>
						</div>

						{/* Cart */}
						<div className="flex items-center space-x-6 px-2">
							<Link to="/cart" className="relative ">
								<ShoppingCartIcon className="h-6 w-6 text-gray-700 " />
								{cartCount > 0 && (
									<span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
										{cartCount}
									</span>
								)}
							</Link>
						</div>
					</div>
				</div>
			</nav>

			{/* overlay & sidebar menu */}

			<>
				{/* overlay */}
				<div
					className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
						menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
					}`}
					onClick={() => setMenuOpen(false)}
				></div>
				{/* sidebar */}
				<div
					className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 p-6 flex flex-col transform transition-transform duration-300 ${
						menuOpen ? "translate-x-0" : "-translate-x-full"
					}`}
				>
					<button
						className="mb-6 text-gray-700 text-right"
						onClick={() => setMenuOpen(false)}
					>
						X
					</button>
					<nav className="flex flex-col gap-4">
						<Link to="/products?audience=women">Women</Link>
						<Link to="/products?audience=men">Men</Link>
						<Link to="/products?audience=kids">Kids</Link>
						<Link to="/products?category=sweaters">New In</Link>
					</nav>
				</div>
			</>
		</>
	);
};

export default Navbar;
