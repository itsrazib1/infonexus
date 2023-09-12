import mongoose from "mongoose";
const tryNowModel = new mongoose.Schema(
    {
        name: String,
        email: String,
        image: String,
        description: String,
        services: String,



    }
);
export const tryNow = mongoose.models.trynows || mongoose.model("trynows", tryNowModel)