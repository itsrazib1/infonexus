import mongoose from "mongoose";


const serviceMode = new mongoose.Schema(
    {
        name: String,
        email: String,
        description: String,
        services: String,
        image: String,

    }
);
export const services = mongoose.models.services || mongoose.model("services", serviceMode)