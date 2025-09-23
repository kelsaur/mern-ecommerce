import { useState } from "react";

export const Filter = () => {
	const [price, setPrice] = useState<number>(50);

	const handleFilter = () => {
		console.log("Filtering products up to price: ", price);
	};

	return (
		<aside className="flex flex-col flex-none self-start border-gray-200 bg-white p-4 shadow-sm  ">
			<h3 className="text-lg font-semibold mb-3">Price Range</h3>
			<input
				type="range"
				min="0"
				max="500"
				value={price}
				onChange={(e) => setPrice(Number(e.target.value))}
				className="w-full accent-blue-600"
			/>
			<p className="text-sm text-[#535351] mb-6">Up to €{price}</p>

			<button
				onClick={handleFilter}
				className="mx-auto block w-16 rounded-sm bg-[#4694ec] px-2 py-1 text-white font-medium hover:bg-blue-600"
			>
				Filter
			</button>
		</aside>
	);
};
