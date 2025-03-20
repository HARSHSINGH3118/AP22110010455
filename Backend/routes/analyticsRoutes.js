// routes/analyticsRoutes.js
const express = require("express");
const router = express.Router();

const {
  getTopUsersByCommentCount,
  getTopPostsByCommentCount,
  refreshData,
} = require("../controllers/analyticsController");

// GET /analytics/topUsers
router.get("/topUsers", getTopUsersByCommentCount);

// GET /analytics/topPosts
router.get("/topPosts", getTopPostsByCommentCount);

// GET /analytics/refresh
router.get("/refresh", refreshData);

module.exports = router;
