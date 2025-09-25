import express from "express";
import {
	getProducts,
	getProductById,
	addProduct,
	updateProduct,
	deleteProduct,
	deleteAllProducts,
} from "../controllers/productController.js";

const router = express.Router();

router.route("/").get(getProducts).post(addProduct).delete(deleteAllProducts);
router
	.route("/:id")
	.get(getProductById)
	.patch(updateProduct)
	.delete(deleteProduct);

export default router;
