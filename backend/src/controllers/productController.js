import mongoose from "mongoose";
import { AppError } from "../utils/AppError.js";
import {
	addProductSchema,
	updateProductSchema,
} from "../validation/productSchemas.js";
import Product from "../models/Product.js";

export const getProducts = async (req, res, next) => {
	const { audience, category } = req.query;

	const filter = {};

	if (audience) filter.audience = audience;
	if (category) filter.category = category;

	try {
		const products = await Product.find(filter);
		return res.status(200).json({ success: true, products });
	} catch (error) {
		return next(error);
	}
};

export const getProductById = async (req, res, next) => {
	const { id } = req.params;

	try {
		if (!mongoose.Types.ObjectId.isValid(id)) {
			return next(new AppError("Invalid product id format.", 400));
		}

		const product = await Product.findById(id);

		if (!product) {
			return next(new AppError("Product not found.", 404));
		}

		return res.status(200).json({ success: true, product });
	} catch (error) {
		return next(error);
	}
};

export const addProduct = async (req, res, next) => {
	try {
		const { error, value } = addProductSchema.validate(req.body, {
			abortEarly: false,
			stripUnknown: true,
		});
		if (error) return next(error);

		const product = await Product.create(value);

		return res.status(201).json({ success: true, product });
	} catch (error) {
		return next(error);
	}
};

export const updateProduct = async (req, res, next) => {
	const { id } = req.params;

	try {
		if (!mongoose.Types.ObjectId.isValid(id)) {
			return next(new AppError("Invalid product id format.", 400));
		}

		const { error, value } = updateProductSchema.validate(req.body, {
			abortEarly: false,
			stripUnknown: true,
		});
		if (error) return next(error);

		const updatedProduct = await Product.findByIdAndUpdate(id, value, {
			new: true,
			runValidators: true,
		});

		if (!updatedProduct) {
			return next(new AppError("Product not found.", 404));
		}

		return res.status(200).json({
			success: true,
			message: "Product updated.",
			product: updatedProduct,
		});
	} catch (error) {
		return next(error);
	}
};

export const deleteProduct = async (req, res, next) => {
	const { id } = req.params;

	try {
		if (!mongoose.Types.ObjectId.isValid(id)) {
			return next(new AppError("Invalid product id format.", 400));
		}

		const deletedProduct = await Product.findByIdAndDelete(id);

		if (!deletedProduct) {
			return next(new AppError("Product not found.", 404));
		}

		return res.status(200).json({
			success: true,
			message: "Product deleted.",
			product: deletedProduct,
		});
	} catch (error) {
		return next(error);
	}
};

export const deleteAllProducts = async (req, res, next) => {
	try {
		await Product.deleteMany({});
		res.json({ message: "All products deleted." });
	} catch (error) {
		return next(error);
	}
};
