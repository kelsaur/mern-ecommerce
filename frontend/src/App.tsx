import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import type { CartItem } from "./types/cart";
import ProductDetail from "./pages/ProductDetail";
import ScrollToTop from "./utilities/ScrollToTop";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
	const [cart, setCart] = useState<CartItem[]>([]);

	const addToCart = (item: CartItem) => {
		setCart((prev) => {
			const existing = prev.find(
				(i) => i._id === item._id && i.size === item.size
			);
			if (existing) {
				return prev.map((i) =>
					i._id === item._id && i.size === item.size
						? { ...i, quantity: i.quantity + item.quantity }
						: i
				);
			}
			return [...prev, item];
		});
	};

	const decrementFromCart = (id: string, size: string | number) => {
		setCart((prev) =>
			prev
				.map((i) =>
					i._id === id && i.size === size
						? { ...i, quantity: i.quantity - 1 }
						: i
				)
				.filter((i) => i.quantity > 0)
		);
	};

	const deleteFromCart = (id: string, size: string | number) => {
		setCart((prev) => prev.filter((i) => !(i._id === id && i.size === size)));
	};

	return (
		<Router>
			<ScrollToTop />
			<Navbar cart={cart} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route
					path="/products/:id"
					element={<ProductDetail addToCart={addToCart} />}
				/>
				<Route
					path="/cart"
					element={
						<Cart
							cart={cart}
							addToCart={addToCart}
							decrementFromCart={decrementFromCart}
							deleteFromCart={deleteFromCart}
						/>
					}
				/>
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
