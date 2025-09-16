import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);

app.use(errorHandler);

export default app;
