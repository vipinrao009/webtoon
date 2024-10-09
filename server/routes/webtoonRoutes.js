import express from "express";
import { fetchWebtoon, postWebtoon } from "../controllers/webtoonController.js";
import upload from "../middleware/multer.js";

const router = express.Router();

router.post('/post-webtoon',upload.single('image'),postWebtoon)
router.get('/fetch-webtoon',fetchWebtoon)

export default router