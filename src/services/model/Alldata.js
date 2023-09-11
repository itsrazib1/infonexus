import mongoose from "mongoose";
const alldataModel = new mongoose.Schema({
  image: String,
  name: String,
  discription: String,
  btn: String,
});

export const alldata = mongoose.models.alldata || mongoose.model("alldata", alldataModel)