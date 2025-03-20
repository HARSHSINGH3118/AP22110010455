// middlewares/errorHandler.js

function errorHandler(err, req, res, next) {
  console.error("[ERROR]", err); // Or use a logger from utils/logger.js
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({ error: message });
}

module.exports = errorHandler;
