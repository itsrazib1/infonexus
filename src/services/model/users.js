import mongoose from "mongoose";
const usersModel = new mongoose.Schema({
    name: String,
    age: Number,
    city: String,
    email: String,
});

export const users = mongoose.models.users || mongoose.model("users", usersModel)