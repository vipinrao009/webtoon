import express from "express";
import { postWebtoon } from "../controllers/webtoonController.js";
import upload from "../middleware/multer.js";

const router = express.Router();

router.post('/post-webtoon',upload.single('image'),postWebtoon)

export default router