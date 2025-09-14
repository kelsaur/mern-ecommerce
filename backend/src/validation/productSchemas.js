import Joi from "joi";

export const addProductSchema = Joi.object({
	title: Joi.string().trim().min(1).max(100).required(),
	price: Joi.number().min(0).max(100000).precision(2).required(),
	description: Joi.string().allow("").max(5000),
	category: Joi.string().trim().min(1).max(100).required(),
	image: Joi.string().uri().required(),
});

export const updateProductSchema = Joi.object({
	title: Joi.string().trim().min(1).max(100),
	price: Joi.number().min(0).max(100000).precision(2),
	description: Joi.string().allow("").max(5000),
	category: Joi.string().trim().min(1).max(100),
	image: Joi.string().uri(),
}).min(1);
