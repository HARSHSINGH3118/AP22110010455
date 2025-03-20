// config/index.js
require("dotenv").config(); // Loads .env file into process.env

module.exports = {
  PORT: process.env.PORT || 3000,
  BASE_URL: process.env.BASE_URL || "http://20.244.56.144/test",
};
