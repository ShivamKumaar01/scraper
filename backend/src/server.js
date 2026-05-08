import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { scrapeStories } from "./services/scraper.service.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB();

scrapeStories().catch((error) => {
  console.error("Story scraping failed:", error.message || error);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});