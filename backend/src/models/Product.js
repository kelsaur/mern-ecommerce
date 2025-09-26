import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
		},
		price: {
			type: Number,
			required: true,
			min: [0, "Price must be at least 0"],
		},
		description: {
			type: String,
		},
		color: {
			type: String,
			trim: true,
		},
		audience: {
			type: String,
			required: true,
			enum: ["men", "women", "kids", "unisex"],
			trim: true,
		},
		category: {
			type: String,
			required: true,
			enum: [
				"shirts",
				"skirts",
				"dresses",
				"sweaters",
				"pants",
				"jackets",
				"other",
			],
			trim: true,
		},
		image: {
			type: String,
			required: true,
			trim: true,
		},
	},
	{ timestamps: true }
);

export default mongoose.model("Product", productSchema);
