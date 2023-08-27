import mongoose from "mongoose";

const marketingModel = new mongoose.Schema();
export const marketing = mongoose.models.marketings || mongoose.model("marketings", marketingModel)