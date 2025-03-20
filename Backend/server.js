// server.js
const express = require("express");
const { PORT } = require("./config");
const routes = require("./routes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Mount our routes
app.use("/", routes);

// Error handling middleware (should be last)
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Analytics service running on http://localhost:${PORT}`);
});
