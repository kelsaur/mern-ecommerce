import Joi from "joi";

export const addProductSchema = Joi.object({
	title: Joi.string().trim().min(1).max(100).required(),
	price: Joi.number().integer().min(0).max(100000).required(),
	description: Joi.string().allow("").max(5000),
	color: Joi.string().trim().min(1).max(50),
	audience: Joi.string()
		.trim()
		.valid("men", "women", "kids", "unisex")
		.required(),
	category: Joi.string()
		.trim()
		.valid(
			"shirts",
			"skirts",
			"dresses",
			"sweaters",
			"pants",
			"jackets",
			"other"
		)
		.required(),
	image: Joi.string().uri().required(),
});

export const updateProductSchema = Joi.object({
	title: Joi.string().trim().min(1).max(100),
	price: Joi.number().integer().min(0).max(100000),
	description: Joi.string().allow("").max(5000),
	color: Joi.string().trim().min(1).max(50),
	audience: Joi.string().trim().valid("men", "women", "kids", "unisex"),
	category: Joi.string()
		.trim()
		.valid(
			"shirts",
			"skirts",
			"dresses",
			"sweaters",
			"pants",
			"jackets",
			"other"
		),
	image: Joi.string().uri(),
}).min(1);
