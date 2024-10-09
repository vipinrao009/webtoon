import { Schema,model } from "mongoose";

const webtoonSchema =new Schema({
    title: String,
    image: {
        public_id: {
          type: String,
        },
        secure_url: {
          type: String,
        },
      },
    description: String,
},{timestamps:true})

const WebToon = model('Webtoon',webtoonSchema)

export default WebToon