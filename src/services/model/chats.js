import mongoose from "mongoose";
const salesModel = new mongoose.Schema({
    message: String,
    email: String,
    name: String,
    photo: String
});

export const chats = mongoose.models.chats || mongoose.model("chats", salesModel)



const serviceMode = new mongoose.Schema(
    {
        name: String,
        email: String,
        image: String,

    }
);
export const services = mongoose.models.services || mongoose.model("services", serviceMode)