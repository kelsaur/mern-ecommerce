import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

//as const for union type - literal types not just string
const CATEGORIES = [
	"shirts",
	"skirts",
	"dresses",
	"sweaters",
	"pants",
	"jackets",
	"other",
] as const;

type Category = (typeof CATEGORIES)[number];

const Filter = () => {
	const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
	const navigate = useNavigate();
	const location = useLocation();

	const toggle = (cat: Category) =>
		//updates state of selected categories, prev is the old selectedCategories before the update
		setSelectedCategories((prev) =>
			//is the clicked category alrdy in the array? if yes, remove it; if no, check it
			prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
		);

	//keep URL in sync with selected categories
	useEffect(() => {
		//current params
		const queryParams = new URLSearchParams(location.search);

		//delete old category filters
		queryParams.delete("category");

		//add all new selected categories
		selectedCategories.forEach((cat) => {
			queryParams.append("category", cat);
		});

		//push new URL
		navigate(`?${queryParams.toString()}`, { replace: true });
	}, [selectedCategories, location.search, navigate]);

	//sync checkboxes with the URl
	useEffect(() => {
		const params = new URLSearchParams(location.search);
		const urlCategories = params.getAll("category") as Category[];
		setSelectedCategories(urlCategories);
	}, [location.search]);

	return (
		<aside className="w-64 p-4 border-r">
			<h3 className="font-semibold mb-3">Categories</h3>
			<ul className="flex flex-col gap-2">
				{CATEGORIES.map((cat) => (
					<li key={cat} className="flex items-center gap-2">
						<input
							id={`cat-${cat}`}
							type="checkbox"
							//controlled input, the box is ticked if the state array "selectedCategories" contains the category
							checked={selectedCategories.includes(cat)}
							//when user clicks, call "toggle" func to update the state
							onChange={() => toggle(cat)}
						/>
						{/*label - link the label to checkbow for accessibility and bigger click area*/}
						<label htmlFor={`cat-${cat}`} className="capitalize cursor-pointer">
							{cat}
						</label>
					</li>
				))}
			</ul>
		</aside>
	);
};

export default Filter;

{
	/* 
		const handleFilter = () => {
		console.log("Filtering products up to price: ", price);
	};
	
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
			</aside>*/
}
