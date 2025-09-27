import { useState } from "react";
import type { Product } from "../types/product";

type SizeSelectorProps = {
	audience: Product["audience"];
};

const kidsSizes = [92, 98, 104, 110, 116, 122, 128];
const adultSizes = ["XS", "S", "M", "L", "XL"];

const SizeSelector = ({ audience }: SizeSelectorProps) => {
	const [selectedSize, setSelectedSize] = useState<string | number | null>(
		null
	);

	const sizes =
		audience == "women" || audience == "men" ? adultSizes : kidsSizes;

	return (
		<div className="mt-6">
			<div className="flex items-center justify-between mb-2">
				<p className="font-medium">Select size:</p>
			</div>

			<div className="flex flex-col gap-5">
				<div className="flex flex-wrap gap-4">
					{sizes.map((size) => (
						<button
							key={size}
							onClick={() => setSelectedSize(size)}
							className={`w-[60px] px-4 py-2 border border-[#a5a5a5] rounded-xs text-sm ${
								selectedSize === size
									? "bg-[#bcb9b4]"
									: "bg-[#f3f4f6] hover:bg-[#bcb9b4]"
							}`}
						>
							{size}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default SizeSelector;
