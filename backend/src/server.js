import "dotenv/config";
import mongoose from "mongoose";
import app from "./app.js";

const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI;
//console.log("Mongo URI: ", process.env.MONGODB_URI);

/*mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => {
		console.log("Connected to MongoDB!");
		app.listen(PORT, () => console.log(`Server is listerning to ${PORT} `));
	})
	.catch((err) => console.error("MongoDB connection error! ", err.message));
*/

export const startServer = async () => {
	try {
		await mongoose.connect(MONGODB_URI);
		console.log("Connected to MongoDB!");
		//0.0.0.0 - for Docker container to connect to browser
		app.listen(PORT, "0.0.0.0", () => {
			console.log(`Server is listening on port ${PORT}`);
		});
	} catch (err) {
		console.error("MongoDB connection error! ", err.message);
		process.exit(1);
	}
};
startServer();
