import "dotenv/config";
import mongoose from "mongoose";
import Product from "../models/Product.js";

const MONGODB_URI = process.env.MONGODB_URI;

export const seedOnce = async () => {
	try {
		await mongoose.connect(MONGODB_URI);
		console.log("Connected to MongoDB");

		//Check if products already exist in the collection
		const seedExists = await Product.countDocuments();
		if (seedExists > 0) {
			console.log("Products already exist! Skipping seeding.");
			await mongoose.disconnect(); //Close connection to db.
			return;
		}

		//Fetch products from the API to the MongoDB collection
		console.log("Fetching products from FakeStoreAPI.");
		const res = await fetch("https://fakestoreapi.com/products");
		if (!res.ok) {
			throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
		}
		const data = await res.json();

		//Map fetched products to Product schema
		const docs = data.map((p) => ({
			title: p.title,
			price: p.price,
			description: p.description,
			category: p.category,
			image: p.image,
		}));

		//Insert all products at once. (new Product() + save())
		await Product.insertMany(docs);
		console.log(`Inserted ${docs.length} products. Done!`);
	} catch (error) {
		console.error("Seeding failed: ", error.message);
	} finally {
		await mongoose.disconnect();
		console.log("Disconnected from MongoDB!");
	}
};

seedOnce();
