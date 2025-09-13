import express from "express";
import mongoose from "mongoose";
import Product from "../models/Product.js";

const router = express.Router();

//Get all products
router.get("/", async (req, res) => {
	try {
		const products = await Product.find();
		res.status(200).json({ success: true, products });
	} catch (error) {
		console.error("GET /api/products error: ", error.message);
		res.status(500).json({ success: false, message: "Server error." });
	}
});

//Get a single product by id
router.get("/:id", async (req, res) => {
	const { id } = req.params;

	try {
		//Validate if id has the correct MongoDB ObjectID format
		if (!mongoose.Types.ObjectId.isValid(id)) {
			return res
				.status(400)
				.json({ success: false, message: "Invalid product id format." });
		}

		//Query
		const product = await Product.findById(id);

		if (!product) {
			return res
				.status(404)
				.json({ success: false, message: "Product not found." });
		}

		res.status(200).json({ success: true, product });
	} catch (error) {
		//Unexpected errors. eg DB connection issue, server error
		console.error(`GET /api/products/${id} error: `, error.message);
		res.status(500).json({ success: false, message: "Server error." });
	}
});

//Add a product
router.post("/", async (req, res) => {
	const { title, price, description, category, image } = req.body;

	try {
		if (!title || price === null || !category || !image) {
			return res.status(400).json({
				success: false,
				message: "title, price, category and image are required",
			});
		}

		const product = await Product.create({
			title,
			price,
			description,
			category,
			image,
		});

		res.status(201).json({ success: true, product });
	} catch (error) {
		console.error("POST /api/products error: ", error.message);
		res.status(500).json({
			success: false,
			message: "Server error while adding new product.",
		});
	}
});

//Update a product
router.patch("/:id", async (req, res) => {
	const { id } = req.params;
	const { title, price, description, category, image } = req.body;

	try {
		if (!mongoose.Types.ObjectId.isValid(id)) {
			return res
				.status(400)
				.json({ success: false, message: "Invalid product id format." });
		}

		/*product.set({
			...(req.body.title && { title: req.body.title }),
			...(req.body.price && { title: req.body.price }),
			...(req.body.description && { title: req.body.description }),
			...(req.body.category && { title: req.body.category }),
			...(req.body.image && { title: req.body.image }),
		});*/

		const updates = {};
		if (title != undefined) updates.title = title;
		if (price != undefined) updates.price = price;
		if (description != undefined) updates.description = description;
		if (category !== undefined) updates.category = category;
		if (image !== undefined) updates.image = image;

		const updatedProduct = await Product.findByIdAndUpdate(id, updates, {
			new: true,
			runValidators: true,
		});

		if (!updatedProduct) {
			return res
				.status(404)
				.json({ success: false, message: "Product not found." });
		}

		res.status(200).json({
			success: true,
			message: "Product updated.",
			product: updatedProduct,
		});
	} catch (error) {
		if (error.name === "ValidationError") {
			return res.status(400).json({ success: false, message: error.message });
		}
		console.error(`PATCH /api/products/${id} error: `, error.message);
		res.status(500).json({
			success: false,
			message: "Server error while updating product.",
		});
	}
});

//Delete a product
router.delete("/:id", async (req, res) => {
	const { id } = req.params;

	try {
		if (!mongoose.Types.ObjectId.isValid(id)) {
			return res
				.status(400)
				.json({ success: false, message: "Invalid product id format." });
		}

		const deletedProduct = await Product.findByIdAndDelete(id);

		if (!deletedProduct) {
			return res
				.status(404)
				.json({ success: false, message: "Product not found." });
		}

		res.status(200).json({
			success: true,
			message: "Product deleted.",
			product: deletedProduct,
		});
	} catch (error) {
		console.error(`DELETE /api/products/${id} error: `, error.message);
		res.status(500).json({
			success: false,
			message: "Server error while deleting product.",
		});
	}
});

export default router;
