import mongoose from 'mongoose';

const developerplatformSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  image: String,
  name: String,
  description: String,
  services: String,
  btnRoute: String,
  btn: String,
});

export const developerplatform = mongoose.models.developerplatform || mongoose.model('developerplatform', developerplatformSchema);
