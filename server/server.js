// server.js
import dotenv from "dotenv"
import cors from 'cors'
import express from "express";
import connectDB from "./config/db.connection.js";
import webtoon from "./routes/webtoonRoutes.js";
import cloudinary from "cloudinary";
import path from "path"

const app = express();
const _dirname = path.resolve();

dotenv.config()

connectDB();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true
  })
);

// Middleware to parse JSON requests
app.use(express.json());

app.use('/api/v1/webtoon',webtoon)

app.use(express.static(path.join(_dirname,"/client/build")))

app.get('*',(req,res)=>{
  res.sendFile(path.resolve(_dirname,"client","build","index.html"))
})
// Test Route
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

const PORT = process.env.PORT;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
