import { Schema,model } from "mongoose";

const webtoonSchema =new Schema({
    title: String,
    image: String,
    description: String,
},{timestamps})

const WebToon = model('Webtoon',webtoonSchema)

export default WebToon