import { AppError } from "../utils/AppError";

export const validateSchema = (schema) => async (req, res, next) => {
	try {
		const { error, value } = addProductSchema.validate(req.body, {
			abortEarly: false,
			stripUnknown: true,
		});
		if (error) return next(error);
	} catch (error) {}
};
