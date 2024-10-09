// server.js
import dotenv from "dotenv"
import cors from 'cors'
import express from "express";
import connectDB from "./config/db.connection.js";
import webtoon from "./routes/webtoonRoutes.js";
import cloudinary from "cloudinary";


const app = express();
dotenv.config()

const PORT = process.env.PORT;

connectDB();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Middleware to parse JSON requests
app.use(express.json());
app.use('/api/v1/webtoon',webtoon)
app.use(
  cors({
    origin: [process.env.FRONTEND_URL,"http://localhost:3000"],
    credentials: true
  })
);

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
