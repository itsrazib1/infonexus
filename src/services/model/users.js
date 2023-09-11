import mongoose from "mongoose";
const usersModel = new mongoose.Schema(
    {
        name: String,
        email: String,
        description: String,
        services: String,
        photo: String,
    }
);
export const users = mongoose.models.users || mongoose.model("users", usersModel)