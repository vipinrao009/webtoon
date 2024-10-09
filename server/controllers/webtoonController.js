import WebToon from "../models/webtoonSchema.js";
import cloudinary from 'cloudinary';
import fs from 'fs/promises';

const postWebtoon = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    // Create webtoon with a placeholder image URL
    const newWebtoon = await WebToon.create({
      title,
      description,
      image: {
        public_id: title,
        secure_url: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
      },
    });

    // Check if file exists
    if (req.file) {
      try {
        const result = await cloudinary.v2.uploader.upload(req.file.path, {
          folder: "webtoon", 
          resource_type: "auto",
        });

        if (result) {
          // Set the public_id and secure_url in DB
          newWebtoon.image.public_id = result.public_id;
          newWebtoon.image.secure_url = result.secure_url;

          // Remove the file from local storage after successful upload
          await fs.rm(`uploads/${req.file.filename}`);
        }
      } catch (error) {
        return next(new AppError(error || "File not uploaded, please try again", 400));
      }
    }

    await newWebtoon.save();
    res.status(201).json(newWebtoon);
  } catch (error) {
    res.status(500).json({ message: "Failed to add webtoon" });
  }
};

const fetchWebtoon = async (req,res)=>{
    try {
        const webtoons = await WebToon.find();
        res.status(200).json({
            message:"Webtoon fetched successfully",
            success:true,
            webtoons
        })
    } catch (error) {
        res.status(400).json({
            message:"Failed to load webtoon",
            success:false
        })
    }
}

export { postWebtoon, fetchWebtoon };
