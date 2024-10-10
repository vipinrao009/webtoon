import dotenv from "dotenv";
import cors from 'cors';
import express from "express";
import connectDB from "./config/db.connection.js";
import webtoon from "./routes/webtoonRoutes.js";
import cloudinary from "cloudinary";
import path from "path";

const app = express();
const __dirname = path.resolve();

dotenv.config();

// Connect to the database
connectDB();

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// CORS Middleware
app.use(cors({
  origin: [process.env.FRONTEND_URL],
  credentials: true
}));

// Middleware to parse JSON requests
app.use(express.json());

// Define API routes
app.use('/api/v1/webtoon', webtoon);

// Serve static files from the React frontend
app.use(express.static(path.join(__dirname, "/client/build")));

// Serve frontend on unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
