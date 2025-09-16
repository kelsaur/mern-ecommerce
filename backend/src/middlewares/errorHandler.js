import { AppError } from "../utils/AppError.js";

export const errorHandler = (err, req, res, next) => {
	//joi
	if (err.isJoi) {
		return res.status(400).json({
			success: false,
			message: "Validation error",
			details: err.details.map((d) => ({ message: d.message, path: d.path })),
		});
	}

	//mongoose
	if (err.name === "ValidationError") {
		return res.status(400).json({
			success: false,
			message: err.message,
		});
	}

	// custom
	if (err instanceof AppError) {
		return res.status(err.statusCode).json({
			success: false,
			message: err.message,
		});
	}

	//unexpected
	return res.status(500).json({
		success: false,
		message: "Server error.",
	});
};
