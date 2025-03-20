import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./src/routes/userRoutes.js";
import postRoutes from "./src/routes/postRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Define API routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Social Media Analytics API is running...");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
