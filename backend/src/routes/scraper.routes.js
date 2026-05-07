import express from "express";
import { scrapeNews } from "../controller/scraper.controller.js";

const router = express.Router();

router.post("/", scrapeNews);

export default router;