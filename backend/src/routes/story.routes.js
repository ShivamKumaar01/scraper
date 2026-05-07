import express from "express";

import { getStories, toggleBookmark} from "../controller/story.controller.js";
import isAuthenticated from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getStories);
router.post("/:id/bookmark", isAuthenticated, toggleBookmark);

export default router;