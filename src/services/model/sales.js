import mongoose from "mongoose";
const salesModel = new mongoose.Schema({
  image: String,
  name: String,
  description: String,
  services: String,
  btn: String,
});

export const Sales = mongoose.models.sales || mongoose.model("sales", salesModel)