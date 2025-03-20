// routes/index.js
const express = require("express");
const router = express.Router();

// Import sub-routers
const analyticsRoutes = require("./analyticsRoutes");

// Example: you could have userRoutes, postRoutes, etc. For now, let's keep it simple.

// Use analytics routes under /analytics
router.use("/analytics", analyticsRoutes);

module.exports = router;
