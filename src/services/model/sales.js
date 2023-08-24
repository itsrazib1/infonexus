import mongoose from "mongoose";
const salesModel = new mongoose.Schema({
  image: String,
  name: String,
  discription: String,
  btn: String,
});

export const Sales = mongoose.models.sales || mongoose.model("sales", salesModel)


// import mongoose from "mongoose";
// const userModel = new mongoose.Schema({
//   name: String,
//   age: Number,
//   city: String,
//   email: String,
// });

// export const User = mongoose.models.user || mongoose.model("user", userModel)