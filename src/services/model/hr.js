import mongoose from 'mongoose';

const hrSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId, // You can use ObjectId for _id field
  image: String,
  name: String,
  description: String,
  services: String,
  btnRoute: String,
  btn: String,
});

export const hr = mongoose.models.hr || mongoose.model('hr', hrSchema);
