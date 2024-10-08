// server.js
import dotenv from "dotenv"
import express from "express";
import connectDB from "./config/db.connection.js";
const app = express();
dotenv.config()

const PORT = process.env.PORT;

connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
