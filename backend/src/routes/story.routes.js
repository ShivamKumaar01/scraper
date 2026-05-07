import express from "express";

import { getStories } from "../controller/story.controller.js";

const router = express.Router();

router.get("/", getStories);

export default router;