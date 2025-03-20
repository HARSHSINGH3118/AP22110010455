import express from "express";
import { getTopOrLatestPosts } from "../controllers/postController.js";

const router = express.Router();

router.get("/", getTopOrLatestPosts);

export default router;
